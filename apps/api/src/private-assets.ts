import { createHash, randomUUID } from "node:crypto";
import sharp from "sharp";
import type { ConfiguratorStore, PrivateAssetRecord, ProjectAuthor, ProjectRecord } from "./store.js";

export class PrivateAssetError extends Error {
  constructor(public readonly code: string, message: string, public readonly statusCode = 400) {
    super(message);
  }
}

export interface PrivateAssetStorage {
  put(tenantSlug: string, storageKey: string, content: Uint8Array): Promise<void>;
  get(tenantSlug: string, storageKey: string): Promise<Uint8Array | null>;
}

export class StoreBackedPrivateAssetStorage implements PrivateAssetStorage {
  constructor(private readonly store: ConfiguratorStore) {}
  async put(tenantSlug: string, storageKey: string, content: Uint8Array) { await this.store.putPrivateAssetObject(tenantSlug, storageKey, content); }
  async get(tenantSlug: string, storageKey: string) { return this.store.getPrivateAssetObject(tenantSlug, storageKey); }
}

const actualImageType = (bytes: Uint8Array) => {
  if (bytes.length >= 12 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpeg";
  if (bytes.length >= 8 && Buffer.from(bytes.subarray(0, 8)).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "png";
  if (bytes.length >= 12 && Buffer.from(bytes.subarray(0, 4)).toString("ascii") === "RIFF" && Buffer.from(bytes.subarray(8, 12)).toString("ascii") === "WEBP") return "webp";
  return null;
};

const safeFileName = (value: string) => (value.normalize("NFKC").replace(/[\\/\0\r\n]/g, "-").replace(/\s+/g, " ").trim() || "zdjecie").slice(0, 255);

function decodeBase64(value: string) {
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value) || value.length % 4 !== 0) throw new PrivateAssetError("invalid_image_encoding", "Nieprawidłowy zapis pliku.");
  return Buffer.from(value, "base64");
}

export interface ImageLimits {
  maxPhotoBytes: number;
  maxPhotoDimension: number;
  maxPhotosPerProject: number;
}

export interface PrivateAssetProcessor {
  process(contentBase64: string, kind: PrivateAssetRecord["kind"], limits: ImageLimits): Promise<{
    detected: string;
    main: Uint8Array;
    preview: Uint8Array;
    mimeType: "image/webp" | "image/png";
    width: number;
    height: number;
  }>;
}

export class PrivateImageProcessor implements PrivateAssetProcessor {
  async process(contentBase64: string, kind: PrivateAssetRecord["kind"], limits: ImageLimits) {
    const source = decodeBase64(contentBase64);
    if (source.byteLength > limits.maxPhotoBytes) throw new PrivateAssetError("image_too_large", `Plik przekracza limit ${Math.round(limits.maxPhotoBytes / 1_000_000)} MB.`, 413);
    const detected = actualImageType(source);
    if (!detected) throw new PrivateAssetError("unsupported_image_type", "Dozwolone są rzeczywiste pliki JPG, PNG i WebP.", 415);
    if (kind === "FOREGROUND_MASK" && detected !== "png") throw new PrivateAssetError("invalid_mask_type", "Maska musi być zapisana jako PNG.", 415);

    let metadata;
    try {
      metadata = await sharp(source, { failOn: "error", limitInputPixels: limits.maxPhotoDimension * limits.maxPhotoDimension * 4 }).metadata();
    } catch {
      throw new PrivateAssetError("invalid_image", "Plik obrazu jest uszkodzony albo ma niebezpieczną strukturę.", 422);
    }
    if (!metadata.width || !metadata.height) throw new PrivateAssetError("invalid_image_dimensions", "Nie udało się odczytać wymiarów obrazu.", 422);
    if (metadata.width > limits.maxPhotoDimension * 4 || metadata.height > limits.maxPhotoDimension * 4) {
      throw new PrivateAssetError("image_dimensions_too_large", "Rozdzielczość źródła przekracza bezpieczny limit.", 413);
    }

    const oriented = sharp(source, { failOn: "error" }).rotate();
    if (kind === "FOREGROUND_MASK") {
      const main = await oriented.resize({ width: limits.maxPhotoDimension, height: limits.maxPhotoDimension, fit: "inside", withoutEnlargement: true }).png({ compressionLevel: 9 }).toBuffer({ resolveWithObject: true });
      return {
        detected,
        main: new Uint8Array(main.data),
        preview: new Uint8Array(main.data),
        mimeType: "image/png" as const,
        width: main.info.width,
        height: main.info.height,
      };
    }
    const main = await oriented.clone().resize({ width: Math.min(2_400, limits.maxPhotoDimension), height: Math.min(2_400, limits.maxPhotoDimension), fit: "inside", withoutEnlargement: true }).webp({ quality: 88, effort: 5 }).toBuffer({ resolveWithObject: true });
    const preview = await oriented.clone().resize({ width: 720, height: 720, fit: "inside", withoutEnlargement: true }).webp({ quality: 82, effort: 4 }).toBuffer();
    return {
      detected,
      main: new Uint8Array(main.data),
      preview: new Uint8Array(preview),
      mimeType: "image/webp" as const,
      width: main.info.width,
      height: main.info.height,
    };
  }
}

export class PrivateAssetService {
  constructor(
    private readonly store: ConfiguratorStore,
    private readonly storage: PrivateAssetStorage = new StoreBackedPrivateAssetStorage(store),
    private readonly processor: PrivateAssetProcessor = new PrivateImageProcessor(),
  ) {}

  async create(tenantSlug: string, project: ProjectRecord, input: { fileName: string; contentBase64: string; kind: PrivateAssetRecord["kind"] }, actor: ProjectAuthor, limits: ImageLimits) {
    const tenant = await this.store.getTenant(tenantSlug);
    if (!tenant) throw new PrivateAssetError("tenant_not_found", "Organizacja nie istnieje.", 404);
    const active = (await this.store.listPrivateAssets(tenantSlug, project.id)).filter((asset) => asset.status === "ACTIVE" && asset.kind === input.kind);
    if (active.length >= limits.maxPhotosPerProject) throw new PrivateAssetError("asset_limit_reached", "Projekt osiągnął limit prywatnych zasobów.", 409);
    const processed = await this.processor.process(input.contentBase64, input.kind, limits);
    const id = randomUUID();
    const extension = processed.mimeType === "image/png" ? "png" : "webp";
    const baseKey = `${tenant.id}/projects/${project.id}/assets/${id}`;
    const mainKey = `${baseKey}/main.${extension}`;
    const previewKey = `${baseKey}/preview.${extension}`;
    const now = new Date().toISOString();
    const asset: PrivateAssetRecord = {
      id,
      tenantId: tenant.id,
      projectId: project.id,
      kind: input.kind,
      fileName: safeFileName(input.fileName),
      mimeType: processed.mimeType,
      byteSize: processed.main.byteLength,
      width: processed.width,
      height: processed.height,
      contentHash: createHash("sha256").update(processed.main).digest("hex"),
      storageKey: mainKey,
      assetFormatVersion: "1.0",
      status: "ACTIVE",
      createdByKind: actor.kind,
      createdById: actor.id,
      createdAt: now,
      deletedAt: null,
    };
    await this.storage.put(tenantSlug, mainKey, processed.main);
    await this.storage.put(tenantSlug, previewKey, processed.preview);
    const created = await this.store.createPrivateAsset(tenantSlug, asset, [
      { storageKey: mainKey, name: "main", mimeType: processed.mimeType, byteSize: processed.main.byteLength, width: processed.width, height: processed.height },
      { storageKey: previewKey, name: "preview", mimeType: processed.mimeType, byteSize: processed.preview.byteLength, width: Math.min(processed.width, 720), height: Math.min(processed.height, 720) },
    ]);
    if (!created) throw new PrivateAssetError("asset_conflict", "Nie udało się przypisać zdjęcia do projektu.", 409);
    return asset;
  }

  async content(tenantSlug: string, projectId: string, assetId: string, variant: "main" | "preview") {
    const asset = await this.store.getPrivateAsset(tenantSlug, assetId);
    if (!asset || asset.projectId !== projectId || asset.status !== "ACTIVE") return null;
    const storageKey = variant === "main" ? asset.storageKey : asset.storageKey.replace(/\/main\.(webp|png)$/, "/preview.$1");
    const content = await this.storage.get(tenantSlug, storageKey);
    return content ? { asset, content } : null;
  }

  async delete(tenantSlug: string, projectId: string, assetId: string, actor: ProjectAuthor) {
    return this.store.deletePrivateAsset(tenantSlug, projectId, assetId, actor);
  }
}

export function publicPrivateAsset(asset: PrivateAssetRecord, contentUrl: string) {
  return { id: asset.id, kind: asset.kind, fileName: asset.fileName, mimeType: asset.mimeType, byteSize: asset.byteSize, width: asset.width, height: asset.height, contentHash: asset.contentHash, assetFormatVersion: asset.assetFormatVersion, createdAt: asset.createdAt, contentUrl };
}
