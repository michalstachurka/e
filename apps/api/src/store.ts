import type { AdminProductUpdate, AdminRole, FeatureAvailabilitySettings, ProductDefinition, ProjectDocument, PublicConfiguration } from "../../../packages/contracts/src/index.js";
import type { PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import type { FeaturePolicyBundle } from "./capabilities.js";

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

export interface ProjectRecord extends SavedConfigurationRecord {
  document: ProjectDocument;
  currentVersion: number;
  updatedAt: string;
}

export interface ProjectVersionRecord {
  id: string;
  projectId: string;
  version: number;
  document: ProjectDocument;
  authorKind: "PUBLIC_CUSTOMER" | "ADVISOR";
  authorId: string | null;
  createdAt: string;
}

export interface PrivateAssetRecord {
  id: string;
  tenantId: string;
  projectId: string;
  kind: "CUSTOMER_PHOTO" | "FOREGROUND_MASK";
  fileName: string;
  mimeType: "image/webp" | "image/png";
  byteSize: number;
  width: number;
  height: number;
  contentHash: string;
  storageKey: string;
  assetFormatVersion: "1.0";
  status: "ACTIVE" | "DELETED";
  createdByKind: "PUBLIC_CUSTOMER" | "ADVISOR";
  createdById: string | null;
  createdAt: string;
  deletedAt: string | null;
}

export interface ProjectAuthor {
  kind: "PUBLIC_CUSTOMER" | "ADVISOR";
  id: string | null;
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
  getFeaturePolicyBundle(tenantSlug: string, productType?: string): Awaitable<FeaturePolicyBundle | null>;
  updateOrganizationFeaturePolicy(tenantSlug: string, settings: FeatureAvailabilitySettings, actorId: string): Awaitable<boolean>;
  saveConfiguration(tenantSlug: string, id: string, shareId: string, configuration: PublicConfiguration, expiresAt: string | null): Awaitable<void>;
  getConfiguration(tenantSlug: string, shareId: string): Awaitable<SavedConfigurationRecord | null>;
  saveProject(tenantSlug: string, id: string, shareId: string, document: ProjectDocument, expiresAt: string | null, author: ProjectAuthor): Awaitable<void>;
  getProject(tenantSlug: string, shareId: string): Awaitable<ProjectRecord | null>;
  isProjectShareTokenRevoked(tenantSlug: string, projectId: string): Awaitable<boolean>;
  revokeProjectShareToken(tenantSlug: string, projectId: string, actor: ProjectAuthor): Awaitable<boolean>;
  updateProject(tenantSlug: string, projectId: string, document: ProjectDocument, expectedVersion: number, author: ProjectAuthor, maxVersions: number): Awaitable<ProjectRecord | "version_conflict" | "version_limit" | null>;
  listProjectVersions(tenantSlug: string, projectId: string): Awaitable<ProjectVersionRecord[]>;
  createPrivateAsset(tenantSlug: string, asset: PrivateAssetRecord, variants: Array<{ storageKey: string; name: string; mimeType: string; byteSize: number; width: number; height: number }>): Awaitable<boolean>;
  getPrivateAsset(tenantSlug: string, assetId: string): Awaitable<PrivateAssetRecord | null>;
  listPrivateAssets(tenantSlug: string, projectId: string): Awaitable<PrivateAssetRecord[]>;
  putPrivateAssetObject(tenantSlug: string, storageKey: string, content: Uint8Array): Awaitable<void>;
  getPrivateAssetObject(tenantSlug: string, storageKey: string): Awaitable<Uint8Array | null>;
  deletePrivateAsset(tenantSlug: string, projectId: string, assetId: string, actor: ProjectAuthor): Awaitable<boolean>;
  createProjectAuditEvent(tenantSlug: string, projectId: string | null, actor: ProjectAuthor, action: string, details: unknown): Awaitable<void>;
  createExportJob(tenantSlug: string, jobId: string, projectId: string, format: "GLB" | "JSON", requestedBy: string): Awaitable<boolean>;
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
