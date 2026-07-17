import type { AdminProductUpdate, AdminRole, ProductDefinition, PublicConfiguration } from "../../../packages/contracts/src/index.js";
import type { PricingRules } from "../../../packages/configurator-core/src/catalog.js";

export type Awaitable<T> = T | Promise<T>;

export interface TenantRecord {
  id: string;
  slug: string;
  name: string;
  branding: unknown;
}

export interface ProductRecord {
  definition: ProductDefinition;
  pricing: PricingRules;
  bom: unknown;
}

export interface AdminAccountRecord {
  id: string;
  email: string;
  passwordHash: string;
  role: AdminRole;
}

export interface SessionRecord {
  id: string;
  adminUserId: string;
  tenantSlug: string;
  email: string;
  role: AdminRole;
  expiresAt: string;
}

export interface ProfileAssetRecord {
  id: string;
  tenantId: string;
  storageKey: string;
  fileName: string;
  mimeType: "image/svg+xml";
  byteSize: number;
  contentHash: string;
  widthMm: number;
  heightMm: number;
  viewBox: { minX: number; minY: number; width: number; height: number };
  profileFormatVersion: "1.0";
  geometryFormatVersion: "1.0";
  status: "ACTIVE" | "RETIRED";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileAssetAuditRecord {
  id: string;
  assetId: string;
  action: "CREATED" | "RETIRED" | "CONFIGURED";
  actorId: string;
  actorEmail: string;
  details: unknown;
  createdAt: string;
}

export interface ProfileAssetStats {
  activeCount: number;
  activeBytes: number;
}

export interface SavedConfigurationRecord {
  id: string;
  shareId: string;
  configuration: PublicConfiguration;
  createdAt: string;
  expiresAt: string | null;
}

export interface TenantProvisionInput {
  slug: string;
  name: string;
  adminEmail: string;
  adminPassword: string;
  domains?: string[];
  branding?: Record<string, unknown>;
}

export interface TenantProvisionResult {
  tenant: TenantRecord;
  domains: string[];
}

/**
 * Granica trwałych danych API. Każda metoda może być synchroniczna albo
 * asynchroniczna, dzięki czemu obecny adapter SQLite nie narzuca modelu
 * wykonania przyszłemu adapterowi PostgreSQL/Prisma.
 */
export interface ConfiguratorStore {
  close(): Awaitable<void>;
  healthCheck(): Awaitable<boolean>;
  getTenant(slug: string): Awaitable<TenantRecord | null>;
  getTenantByHostname(hostname: string): Awaitable<TenantRecord | null>;
  getPrimaryHostname(tenantSlug: string): Awaitable<string | null>;
  getProducts(tenantSlug: string, status?: "published" | "draft"): Awaitable<ProductRecord[]>;
  getProduct(tenantSlug: string, productType: string, status?: "published" | "draft"): Awaitable<ProductRecord | null>;
  getProductVersion(tenantSlug: string, productType: string, versionId: string): Awaitable<ProductRecord | null>;
  updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate, actorId?: string): Awaitable<ProductRecord | null>;
  publishProduct(tenantSlug: string, productType: string): Awaitable<ProductDefinition | null>;
  updateBranding(tenantSlug: string, branding: unknown): Awaitable<boolean>;
  saveConfiguration(tenantSlug: string, id: string, shareId: string, configuration: PublicConfiguration, expiresAt: string | null): Awaitable<void>;
  getConfiguration(tenantSlug: string, shareId: string): Awaitable<SavedConfigurationRecord | null>;
  saveQuote(tenantSlug: string, id: string, quote: unknown, bom: unknown, savedConfigurationId: string | null): Awaitable<void>;
  findAdmin(tenantSlug: string, email: string): Awaitable<AdminAccountRecord | null>;
  createSession(id: string, adminUserId: string, token: string, expiresAt: string): Awaitable<void>;
  getSession(token: string): Awaitable<SessionRecord | null>;
  deleteSession(token: string): Awaitable<void>;
  getProfileAssetStats(tenantSlug: string): Awaitable<ProfileAssetStats>;
  createProfileAsset(tenantSlug: string, asset: ProfileAssetRecord): Awaitable<boolean>;
  listProfileAssets(tenantSlug: string): Awaitable<ProfileAssetRecord[]>;
  getProfileAsset(tenantSlug: string, assetId: string): Awaitable<ProfileAssetRecord | null>;
  putProfileAssetObject(tenantSlug: string, storageKey: string, content: string): Awaitable<void>;
  getProfileAssetObject(tenantSlug: string, storageKey: string): Awaitable<string | null>;
  deleteProfileAssetObject(tenantSlug: string, storageKey: string): Awaitable<void>;
  retireProfileAsset(tenantSlug: string, assetId: string, actorId: string): Awaitable<"retired" | "referenced" | "not_found">;
  listProfileAssetAudit(tenantSlug: string, assetId?: string): Awaitable<ProfileAssetAuditRecord[]>;
  isProfileAssetPublic(tenantSlug: string, assetId: string): Awaitable<boolean>;
  provisionTenant(input: TenantProvisionInput): Awaitable<TenantProvisionResult>;
}
