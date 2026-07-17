import { randomUUID } from "node:crypto";
import type { ConfiguratorStore, ProfileAssetRecord } from "./store.js";
import {
  defaultProfileAssetLimits,
  ProfileSvgError,
  type ProfileAssetLimits,
  type ValidatedProfileSvg,
  validateAndSanitizeProfileSvg,
} from "./profile-svg.js";

export interface ProfileAssetLimitProvider {
  getLimits(tenantSlug: string): Promise<ProfileAssetLimits> | ProfileAssetLimits;
}

export class StaticProfileAssetLimitProvider implements ProfileAssetLimitProvider {
  constructor(private readonly limits: ProfileAssetLimits = defaultProfileAssetLimits) {}
  getLimits(_tenantSlug: string) {
    return this.limits;
  }
}

export interface ProfileAssetProcessor {
  process(svg: string, limits: ProfileAssetLimits): Promise<ValidatedProfileSvg>;
}

export class SynchronousProfileAssetProcessor implements ProfileAssetProcessor {
  async process(svg: string, limits: ProfileAssetLimits) {
    return validateAndSanitizeProfileSvg(svg, limits);
  }
}

/**
 * Port przechowywania plików. Obecny adapter używa bazy danych, ale API
 * serwisu nie zależy od niej i może zostać podmienione na S3 bez zmiany
 * kontraktów HTTP ani definicji produktów.
 */
export interface ProfileAssetObjectStorage {
  put(tenantSlug: string, storageKey: string, content: string): Promise<void>;
  get(tenantSlug: string, storageKey: string): Promise<string | null>;
  delete(tenantSlug: string, storageKey: string): Promise<void>;
}

export class StoreBackedProfileAssetObjectStorage implements ProfileAssetObjectStorage {
  constructor(private readonly store: ConfiguratorStore) {}
  async put(tenantSlug: string, storageKey: string, content: string) {
    await this.store.putProfileAssetObject(tenantSlug, storageKey, content);
  }
  async get(tenantSlug: string, storageKey: string) {
    return this.store.getProfileAssetObject(tenantSlug, storageKey);
  }
  async delete(tenantSlug: string, storageKey: string) {
    await this.store.deleteProfileAssetObject(tenantSlug, storageKey);
  }
}

export interface CreateProfileAssetInput {
  fileName: string;
  svg: string;
  actorId: string;
}

function safeFileName(fileName: string) {
  const sanitized = fileName.normalize("NFKC").replace(/[\\/\0\r\n]/g, "-").replace(/\s+/g, " ").trim();
  return (sanitized || "profil.svg").slice(0, 255);
}

export class ProfileAssetService {
  constructor(
    private readonly store: ConfiguratorStore,
    private readonly storage: ProfileAssetObjectStorage,
    private readonly limits: ProfileAssetLimitProvider = new StaticProfileAssetLimitProvider(),
    private readonly processor: ProfileAssetProcessor = new SynchronousProfileAssetProcessor(),
  ) {}

  async create(tenantSlug: string, input: CreateProfileAssetInput) {
    const tenant = await this.store.getTenant(tenantSlug);
    if (!tenant) throw new ProfileSvgError("tenant_not_found", "Organizacja nie istnieje.", 404);
    const limits = await this.limits.getLimits(tenantSlug);
    const stats = await this.store.getProfileAssetStats(tenantSlug);
    if (stats.activeCount >= limits.maxProfilesPerTenant) {
      throw new ProfileSvgError("profile_limit_reached", "Osiągnięto limit liczby profili dla organizacji.", 409);
    }

    const result = await this.processor.process(input.svg, limits);
    if (stats.activeBytes + result.byteSize > limits.maxStorageBytesPerTenant) {
      throw new ProfileSvgError("storage_limit_reached", "Osiągnięto limit przestrzeni na profile dla organizacji.", 409);
    }

    const id = randomUUID();
    const now = new Date().toISOString();
    const storageKey = `${tenant.id}/profile-assets/${id}/source.svg`;
    const asset: ProfileAssetRecord = {
      id,
      tenantId: tenant.id,
      storageKey,
      fileName: safeFileName(input.fileName),
      mimeType: "image/svg+xml",
      byteSize: result.byteSize,
      contentHash: result.contentHash,
      widthMm: result.widthMm,
      heightMm: result.heightMm,
      viewBox: result.viewBox,
      profileFormatVersion: result.profileFormatVersion,
      geometryFormatVersion: result.geometryFormatVersion,
      status: "ACTIVE",
      createdBy: input.actorId,
      createdAt: now,
      updatedAt: now,
    };

    await this.storage.put(tenantSlug, storageKey, result.sanitizedSvg);
    try {
      if (!await this.store.createProfileAsset(tenantSlug, asset)) {
        throw new ProfileSvgError("asset_conflict", "Nie udało się utworzyć profilu SVG.", 409);
      }
    } catch (error) {
      await this.storage.delete(tenantSlug, storageKey);
      throw error;
    }
    return { asset, validation: { contourCount: result.contourCount, shapeCount: result.shapeCount, holeCount: result.holeCount } };
  }

  async getContent(tenantSlug: string, assetId: string, publicOnly = false) {
    const asset = await this.store.getProfileAsset(tenantSlug, assetId);
    if (!asset || asset.status !== "ACTIVE") return null;
    if (publicOnly && !await this.store.isProfileAssetPublic(tenantSlug, assetId)) return null;
    const content = await this.storage.get(tenantSlug, asset.storageKey);
    return content === null ? null : { asset, content };
  }

  async retire(tenantSlug: string, assetId: string, actorId: string) {
    const asset = await this.store.getProfileAsset(tenantSlug, assetId);
    if (!asset) return "not_found" as const;
    const result = await this.store.retireProfileAsset(tenantSlug, assetId, actorId);
    if (result === "retired") await this.storage.delete(tenantSlug, asset.storageKey);
    return result;
  }
}

export function publicProfileAsset(asset: ProfileAssetRecord) {
  return {
    id: asset.id,
    fileName: asset.fileName,
    mimeType: asset.mimeType,
    byteSize: asset.byteSize,
    contentHash: asset.contentHash,
    widthMm: asset.widthMm,
    heightMm: asset.heightMm,
    viewBox: asset.viewBox,
    profileFormatVersion: asset.profileFormatVersion,
    geometryFormatVersion: asset.geometryFormatVersion,
    status: asset.status,
    createdAt: asset.createdAt,
    updatedAt: asset.updatedAt,
  };
}
