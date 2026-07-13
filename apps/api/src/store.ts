import type { AdminProductUpdate, ProductDefinition, PublicConfiguration } from "../../../packages/contracts/src/index.js";
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
}

export interface SessionRecord {
  id: string;
  adminUserId: string;
  tenantSlug: string;
  email: string;
  expiresAt: string;
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
  getTenant(slug: string): Awaitable<TenantRecord | null>;
  getTenantByHostname(hostname: string): Awaitable<TenantRecord | null>;
  getPrimaryHostname(tenantSlug: string): Awaitable<string | null>;
  getProducts(tenantSlug: string, status?: "published" | "draft"): Awaitable<ProductRecord[]>;
  getProduct(tenantSlug: string, productType: string, status?: "published" | "draft"): Awaitable<ProductRecord | null>;
  getProductVersion(tenantSlug: string, productType: string, versionId: string): Awaitable<ProductRecord | null>;
  updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate): Awaitable<ProductRecord | null>;
  publishProduct(tenantSlug: string, productType: string): Awaitable<ProductDefinition | null>;
  updateBranding(tenantSlug: string, branding: unknown): Awaitable<boolean>;
  saveConfiguration(tenantSlug: string, id: string, shareId: string, configuration: PublicConfiguration, expiresAt: string | null): Awaitable<void>;
  getConfiguration(tenantSlug: string, shareId: string): Awaitable<SavedConfigurationRecord | null>;
  saveQuote(tenantSlug: string, id: string, quote: unknown, bom: unknown, savedConfigurationId: string | null): Awaitable<void>;
  findAdmin(tenantSlug: string, email: string): Awaitable<AdminAccountRecord | null>;
  createSession(id: string, adminUserId: string, token: string, expiresAt: string): Awaitable<void>;
  getSession(token: string): Awaitable<SessionRecord | null>;
  deleteSession(token: string): Awaitable<void>;
  provisionTenant(input: TenantProvisionInput): Awaitable<TenantProvisionResult>;
}
