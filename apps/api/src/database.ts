import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type { AdminProductUpdate, AdminRole, FeatureAvailabilitySettings, ProductDefinition, ProjectDocument, PublicConfiguration } from "../../../packages/contracts/src/index.js";
import { productSeeds, tenantSeed, type PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import { defaultProjectScene } from "../../../packages/contracts/src/index.js";
import { hashPassword, hashToken } from "./security.js";
import { normalizeHostname } from "./tenant-context.js";
import { nextDraftVersionId, prepareTenantProvision, TenantProvisionError } from "./tenant-provisioning.js";
import { defaultOrganizationFeaturePolicy, platformFeaturePolicy, stageOnePlanFeaturePolicy } from "./capabilities.js";
import type { ConfiguratorStore, PrivateAssetRecord, ProfileAssetAuditRecord, ProfileAssetRecord, ProjectAuthor, ProjectRecord, ProjectVersionRecord, TenantProvisionInput, TenantProvisionResult } from "./store.js";

export { TenantProvisionError } from "./tenant-provisioning.js";

type SqlValue = string | number | bigint | null | Uint8Array;
type Row = Record<string, SqlValue>;

const schema = `
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS tenants (id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS tenant_domains (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), hostname TEXT UNIQUE NOT NULL, status TEXT NOT NULL CHECK(status IN ('pending','active')), verified_at TEXT, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS admin_users (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), email TEXT NOT NULL, password_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'OWNER' CHECK(role IN ('OWNER','ADMIN','EDITOR','VIEWER')), active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL, UNIQUE(tenant_id,email));
CREATE TABLE IF NOT EXISTS branding_settings (id TEXT PRIMARY KEY, tenant_id TEXT UNIQUE NOT NULL REFERENCES tenants(id), settings_json TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS product_categories (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), name TEXT NOT NULL, sort_order INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS product_types (id TEXT PRIMARY KEY, code TEXT UNIQUE NOT NULL, name TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS product_definitions (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), product_type_id TEXT NOT NULL REFERENCES product_types(id), name TEXT NOT NULL, description TEXT NOT NULL, enabled INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0, UNIQUE(tenant_id,product_type_id));
CREATE TABLE IF NOT EXISTS product_versions (id TEXT PRIMARY KEY, product_definition_id TEXT NOT NULL REFERENCES product_definitions(id), version_number INTEGER NOT NULL, status TEXT NOT NULL CHECK(status IN ('draft','published','archived')), definition_json TEXT NOT NULL, pricing_json TEXT NOT NULL, bom_json TEXT NOT NULL, published_at TEXT, created_at TEXT NOT NULL, UNIQUE(product_definition_id,version_number));
CREATE TABLE IF NOT EXISTS parameter_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), key TEXT NOT NULL, definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS profile_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS material_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS color_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS option_groups (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS option_values (id TEXT PRIMARY KEY, option_group_id TEXT NOT NULL REFERENCES option_groups(id), definition_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS dependency_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS validation_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS pricing_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS bom_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS pdf_templates (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), template_json TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS saved_configurations (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), share_id TEXT UNIQUE NOT NULL, product_version_id TEXT NOT NULL REFERENCES product_versions(id), configuration_json TEXT NOT NULL, expires_at TEXT, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS quotes (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), saved_configuration_id TEXT REFERENCES saved_configurations(id), quote_json TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS bom_documents (id TEXT PRIMARY KEY, quote_id TEXT NOT NULL REFERENCES quotes(id), bom_json TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, admin_user_id TEXT NOT NULL REFERENCES admin_users(id), token_hash TEXT UNIQUE NOT NULL, expires_at TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS profile_assets (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  storage_key TEXT NOT NULL,
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL CHECK(mime_type='image/svg+xml'),
  byte_size INTEGER NOT NULL,
  content_hash TEXT NOT NULL,
  width_mm REAL NOT NULL,
  height_mm REAL NOT NULL,
  viewbox_json TEXT NOT NULL,
  profile_format_version TEXT NOT NULL,
  geometry_format_version TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('ACTIVE','RETIRED')),
  created_by TEXT NOT NULL REFERENCES admin_users(id),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(tenant_id,id),
  UNIQUE(tenant_id,storage_key)
);
CREATE TABLE IF NOT EXISTS profile_asset_objects (
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  storage_key TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(tenant_id,storage_key)
);
CREATE TABLE IF NOT EXISTS profile_asset_links (
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  asset_id TEXT NOT NULL,
  product_version_id TEXT NOT NULL REFERENCES product_versions(id),
  profile_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY(product_version_id,profile_id),
  FOREIGN KEY(tenant_id,asset_id) REFERENCES profile_assets(tenant_id,id)
);
CREATE TABLE IF NOT EXISTS profile_asset_audit (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  asset_id TEXT NOT NULL,
  actor_id TEXT NOT NULL REFERENCES admin_users(id),
  action TEXT NOT NULL CHECK(action IN ('CREATED','RETIRED','CONFIGURED')),
  details_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(tenant_id,asset_id) REFERENCES profile_assets(tenant_id,id)
);
CREATE TABLE IF NOT EXISTS feature_policy_sets (
  scope_type TEXT NOT NULL CHECK(scope_type IN ('PLATFORM','PLAN','ORGANIZATION','PRODUCT')),
  scope_key TEXT NOT NULL,
  settings_json TEXT NOT NULL,
  updated_by TEXT,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(scope_type,scope_key)
);
CREATE TABLE IF NOT EXISTS project_documents (
  project_id TEXT PRIMARY KEY REFERENCES saved_configurations(id) ON DELETE CASCADE,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  current_version INTEGER NOT NULL,
  project_json TEXT NOT NULL,
  created_by_kind TEXT NOT NULL CHECK(created_by_kind IN ('PUBLIC_CUSTOMER','ADVISOR')),
  created_by_id TEXT,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS project_versions (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES saved_configurations(id) ON DELETE CASCADE,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  version_number INTEGER NOT NULL,
  project_json TEXT NOT NULL,
  author_kind TEXT NOT NULL CHECK(author_kind IN ('PUBLIC_CUSTOMER','ADVISOR')),
  author_id TEXT,
  created_at TEXT NOT NULL,
  UNIQUE(project_id,version_number)
);
CREATE TABLE IF NOT EXISTS project_share_revocations (
  project_id TEXT PRIMARY KEY REFERENCES saved_configurations(id) ON DELETE CASCADE,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  revoked_by_kind TEXT NOT NULL CHECK(revoked_by_kind IN ('PUBLIC_CUSTOMER','ADVISOR')),
  revoked_by_id TEXT,
  revoked_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS private_assets (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  project_id TEXT NOT NULL REFERENCES saved_configurations(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK(kind IN ('CUSTOMER_PHOTO','FOREGROUND_MASK')),
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL CHECK(mime_type IN ('image/webp','image/png')),
  byte_size INTEGER NOT NULL,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  content_hash TEXT NOT NULL,
  storage_key TEXT NOT NULL,
  asset_format_version TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('ACTIVE','DELETED')),
  created_by_kind TEXT NOT NULL CHECK(created_by_kind IN ('PUBLIC_CUSTOMER','ADVISOR')),
  created_by_id TEXT,
  created_at TEXT NOT NULL,
  deleted_at TEXT,
  UNIQUE(tenant_id,storage_key)
);
CREATE TABLE IF NOT EXISTS private_asset_variants (
  asset_id TEXT NOT NULL REFERENCES private_assets(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  storage_key TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  byte_size INTEGER NOT NULL,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  PRIMARY KEY(asset_id,name)
);
CREATE TABLE IF NOT EXISTS private_asset_objects (
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  storage_key TEXT NOT NULL,
  content BLOB NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(tenant_id,storage_key)
);
CREATE TABLE IF NOT EXISTS project_audit_events (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  project_id TEXT,
  actor_kind TEXT NOT NULL CHECK(actor_kind IN ('PUBLIC_CUSTOMER','ADVISOR')),
  actor_id TEXT,
  action TEXT NOT NULL,
  details_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS advisor_calculations (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  project_id TEXT NOT NULL REFERENCES saved_configurations(id) ON DELETE CASCADE,
  project_version INTEGER NOT NULL,
  price_list_version_id TEXT NOT NULL,
  calculation_json TEXT NOT NULL,
  created_by TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS export_jobs (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL REFERENCES tenants(id),
  project_id TEXT NOT NULL REFERENCES saved_configurations(id) ON DELETE CASCADE,
  format TEXT NOT NULL CHECK(format IN ('GLB','JSON')),
  status TEXT NOT NULL CHECK(status IN ('READY','COMPLETED','FAILED')),
  requested_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  completed_at TEXT
);
CREATE INDEX IF NOT EXISTS profile_assets_tenant_status_idx ON profile_assets(tenant_id,status,created_at);
CREATE INDEX IF NOT EXISTS profile_asset_links_asset_idx ON profile_asset_links(tenant_id,asset_id);
CREATE INDEX IF NOT EXISTS profile_asset_audit_lookup_idx ON profile_asset_audit(tenant_id,asset_id,created_at);
CREATE INDEX IF NOT EXISTS project_versions_lookup_idx ON project_versions(tenant_id,project_id,version_number DESC);
CREATE INDEX IF NOT EXISTS private_assets_project_idx ON private_assets(tenant_id,project_id,status);
CREATE INDEX IF NOT EXISTS project_audit_lookup_idx ON project_audit_events(tenant_id,project_id,created_at DESC);
`;

function asString(value: SqlValue | undefined) {
  return typeof value === "string" ? value : String(value ?? "");
}

function profileAssetFromRow(row: Row): ProfileAssetRecord {
  return {
    id: asString(row.id),
    tenantId: asString(row.tenant_id),
    storageKey: asString(row.storage_key),
    fileName: asString(row.file_name),
    mimeType: "image/svg+xml",
    byteSize: Number(row.byte_size),
    contentHash: asString(row.content_hash),
    widthMm: Number(row.width_mm),
    heightMm: Number(row.height_mm),
    viewBox: JSON.parse(asString(row.viewbox_json)) as ProfileAssetRecord["viewBox"],
    profileFormatVersion: "1.0",
    geometryFormatVersion: "1.0",
    status: asString(row.status) as ProfileAssetRecord["status"],
    createdBy: asString(row.created_by),
    createdAt: asString(row.created_at),
    updatedAt: asString(row.updated_at),
  };
}

function privateAssetFromRow(row: Row): PrivateAssetRecord {
  return {
    id: asString(row.id),
    tenantId: asString(row.tenant_id),
    projectId: asString(row.project_id),
    kind: asString(row.kind) as PrivateAssetRecord["kind"],
    fileName: asString(row.file_name),
    mimeType: asString(row.mime_type) as PrivateAssetRecord["mimeType"],
    byteSize: Number(row.byte_size),
    width: Number(row.width),
    height: Number(row.height),
    contentHash: asString(row.content_hash),
    storageKey: asString(row.storage_key),
    assetFormatVersion: "1.0",
    status: asString(row.status) as PrivateAssetRecord["status"],
    createdByKind: asString(row.created_by_kind) as PrivateAssetRecord["createdByKind"],
    createdById: row.created_by_id ? asString(row.created_by_id) : null,
    createdAt: asString(row.created_at),
    deletedAt: row.deleted_at ? asString(row.deleted_at) : null,
  };
}

function legacyProject(configuration: PublicConfiguration): ProjectDocument {
  return { projectFormatVersion: "1.0", configuration, scene: structuredClone(defaultProjectScene) };
}

function svgAssetLinks(update: AdminProductUpdate) {
  return update.profiles.flatMap((profile) => profile.geometryType === "SVG_PROFILE" && profile.svgProfile
    ? [{ profileId: profile.id, assetId: profile.svgProfile.assetId, geometryType: profile.geometryType, extrusionLengthMm: profile.svgProfile.extrusionLengthMm, rotationDeg: profile.svgProfile.rotationDeg, mirrorX: profile.svgProfile.mirrorX, mirrorY: profile.svgProfile.mirrorY }]
    : []);
}

export interface DatabaseOptions {
  path: string;
  adminEmail: string;
  adminPassword: string;
}

export class ConfiguratorDatabase implements ConfiguratorStore {
  readonly connection: DatabaseSync;

  private constructor(connection: DatabaseSync) {
    this.connection = connection;
  }

  static async create(options: DatabaseOptions) {
    if (options.path !== ":memory:") {
      const absolute = resolve(options.path);
      mkdirSync(dirname(absolute), { recursive: true });
      options.path = absolute;
    }
    const connection = new DatabaseSync(options.path);
    connection.exec(schema);
    const adminColumns = connection.prepare("PRAGMA table_info(admin_users)").all() as Row[];
    if (!adminColumns.some((column) => asString(column.name) === "role")) {
      connection.exec("ALTER TABLE admin_users ADD COLUMN role TEXT NOT NULL DEFAULT 'OWNER'");
    }
    const database = new ConfiguratorDatabase(connection);
    await database.seed(options.adminEmail, options.adminPassword);
    return database;
  }

  private async seed(adminEmail: string, adminPassword: string) {
    const now = new Date().toISOString();
    const tenantId = `tenant-${tenantSeed.slug}`;
    this.connection.prepare("INSERT OR IGNORE INTO tenants (id,slug,name,created_at) VALUES (?,?,?,?)").run(tenantId, tenantSeed.slug, tenantSeed.name, now);
    this.connection.prepare("INSERT OR IGNORE INTO branding_settings (id,tenant_id,settings_json,updated_at) VALUES (?,?,?,?)").run(`branding-${tenantSeed.slug}`, tenantId, JSON.stringify(tenantSeed.branding), now);
    this.connection.prepare("INSERT OR IGNORE INTO product_categories (id,tenant_id,name,sort_order) VALUES (?,?,?,?)").run(`category-${tenantSeed.slug}-covers`, tenantId, "Zadaszenia", 10);
    this.seedFeaturePolicies(tenantId, now);

    for (const seed of productSeeds) {
      const typeId = `type-${seed.definition.productType}`;
      this.connection.prepare("INSERT OR IGNORE INTO product_types (id,code,name) VALUES (?,?,?)").run(typeId, seed.definition.productType, seed.definition.name);
      this.connection.prepare("INSERT OR IGNORE INTO product_definitions (id,tenant_id,product_type_id,name,description,enabled,sort_order) VALUES (?,?,?,?,?,?,?)")
        .run(seed.definition.id, tenantId, typeId, seed.definition.name, seed.definition.description, Number(seed.definition.enabled), seed.definition.order);
      const publishedId = seed.definition.version.id;
      this.connection.prepare("INSERT OR IGNORE INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
        .run(publishedId, seed.definition.id, 1, "published", JSON.stringify(seed.definition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), now, now);
      const draftDefinition = { ...seed.definition, version: { id: `${seed.definition.productType}-draft-v2`, number: 2, status: "draft" as const } };
      this.connection.prepare("INSERT OR IGNORE INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
        .run(draftDefinition.version.id, seed.definition.id, 2, "draft", JSON.stringify(draftDefinition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), null, now);
    }

    const existing = this.connection.prepare("SELECT id FROM admin_users WHERE tenant_id=? AND email=?").get(tenantId, adminEmail) as Row | undefined;
    if (!existing) {
      const passwordHash = await hashPassword(adminPassword);
      this.connection.prepare("INSERT INTO admin_users (id,tenant_id,email,password_hash,active,created_at) VALUES (?,?,?,?,1,?)")
        .run(`admin-${tenantSeed.slug}`, tenantId, adminEmail.toLowerCase(), passwordHash, now);
    }
  }

  private seedFeaturePolicies(tenantId: string, now: string) {
    const statement = this.connection.prepare("INSERT OR IGNORE INTO feature_policy_sets (scope_type,scope_key,settings_json,updated_by,updated_at) VALUES (?,?,?,?,?)");
    statement.run("PLATFORM", "global", JSON.stringify(platformFeaturePolicy), null, now);
    statement.run("PLAN", "stage1", JSON.stringify(stageOnePlanFeaturePolicy), null, now);
    statement.run("ORGANIZATION", tenantId, JSON.stringify(defaultOrganizationFeaturePolicy), null, now);
  }

  async provisionTenant(input: TenantProvisionInput): Promise<TenantProvisionResult> {
    const { slug, name, adminEmail, passwordHash, domains, branding, tenantId, now } = await prepareTenantProvision(input);
    if (this.connection.prepare("SELECT 1 FROM tenants WHERE slug=?").get(slug)) {
      throw new TenantProvisionError("tenant_exists", `Tenant ${slug} already exists`);
    }
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare("INSERT INTO tenants (id,slug,name,created_at) VALUES (?,?,?,?)").run(tenantId, slug, name, now);
      this.connection.prepare("INSERT INTO branding_settings (id,tenant_id,settings_json,updated_at) VALUES (?,?,?,?)")
        .run(`branding-${slug}`, tenantId, JSON.stringify(branding), now);
      this.connection.prepare("INSERT INTO product_categories (id,tenant_id,name,sort_order) VALUES (?,?,?,?)")
        .run(`category-${slug}-covers`, tenantId, "Zadaszenia", 10);
      this.seedFeaturePolicies(tenantId, now);

      for (const seed of productSeeds) {
        const productType = seed.definition.productType;
        const typeId = `type-${productType}`;
        const definitionId = `product-${slug}-${productType}`;
        const publishedId = `${slug}-${productType}-v1`;
        const definition = structuredClone(seed.definition);
        definition.id = definitionId;
        definition.version = { id: publishedId, number: 1, status: "published" };
        this.connection.prepare("INSERT OR IGNORE INTO product_types (id,code,name) VALUES (?,?,?)")
          .run(typeId, productType, definition.name);
        this.connection.prepare("INSERT INTO product_definitions (id,tenant_id,product_type_id,name,description,enabled,sort_order) VALUES (?,?,?,?,?,?,?)")
          .run(definitionId, tenantId, typeId, definition.name, definition.description, Number(definition.enabled), definition.order);
        this.connection.prepare("INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
          .run(publishedId, definitionId, 1, "published", JSON.stringify(definition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), now, now);
        const draftDefinition = { ...definition, version: { id: `${slug}-${productType}-draft-v2`, number: 2, status: "draft" as const } };
        this.connection.prepare("INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
          .run(draftDefinition.version.id, definitionId, 2, "draft", JSON.stringify(draftDefinition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), null, now);
      }

      this.connection.prepare("INSERT INTO admin_users (id,tenant_id,email,password_hash,active,created_at) VALUES (?,?,?,?,1,?)")
        .run(`admin-${slug}`, tenantId, adminEmail, passwordHash, now);
      domains.forEach((hostname, index) => {
        this.connection.prepare("INSERT INTO tenant_domains (id,tenant_id,hostname,status,verified_at,created_at) VALUES (?,?,?,'active',?,?)")
          .run(`domain-${slug}-${index + 1}`, tenantId, hostname, now, now);
      });
      this.connection.exec("COMMIT");
    } catch (error) {
      this.connection.exec("ROLLBACK");
      if (error instanceof TenantProvisionError) throw error;
      if (String(error).includes("tenant_domains.hostname")) {
        throw new TenantProvisionError("domain_exists", "Domain is already assigned");
      }
      throw error;
    }

    const tenant = this.getTenant(slug);
    if (!tenant) throw new Error("Provisioned tenant could not be read back");
    return { tenant, domains };
  }

  close() {
    this.connection.close();
  }

  healthCheck() {
    return Number((this.connection.prepare("SELECT 1 value").get() as Row).value) === 1;
  }

  getTenant(slug: string) {
    const row = this.connection.prepare("SELECT * FROM tenants WHERE slug=?").get(slug) as Row | undefined;
    if (!row) return null;
    const branding = this.connection.prepare("SELECT settings_json FROM branding_settings WHERE tenant_id=?").get(asString(row.id)) as Row;
    return { id: asString(row.id), slug: asString(row.slug), name: asString(row.name), branding: JSON.parse(asString(branding.settings_json)) as unknown };
  }

  getTenantByHostname(hostname: string) {
    const row = this.connection.prepare(`
      SELECT t.slug
      FROM tenant_domains td
      JOIN tenants t ON t.id=td.tenant_id
      WHERE td.hostname=? AND td.status='active'
    `).get(normalizeHostname(hostname)) as Row | undefined;
    return row ? this.getTenant(asString(row.slug)) : null;
  }

  getPrimaryHostname(tenantSlug: string) {
    const row = this.connection.prepare(`
      SELECT td.hostname
      FROM tenant_domains td
      JOIN tenants t ON t.id=td.tenant_id
      WHERE t.slug=? AND td.status='active'
      ORDER BY td.created_at,td.id
      LIMIT 1
    `).get(tenantSlug) as Row | undefined;
    return row ? asString(row.hostname) : null;
  }

  getProducts(tenantSlug: string, status: "published" | "draft" = "published") {
    const rows = this.connection.prepare(`
      SELECT pd.id definition_id,pd.name,pd.description,pd.enabled,pd.sort_order,pt.code product_type,
             pv.id version_id,pv.version_number,pv.status,pv.definition_json,pv.pricing_json,pv.bom_json
      FROM product_definitions pd
      JOIN tenants t ON t.id=pd.tenant_id
      JOIN product_types pt ON pt.id=pd.product_type_id
      JOIN product_versions pv ON pv.product_definition_id=pd.id
      WHERE t.slug=? AND pv.status=?
      ORDER BY pd.sort_order,pv.version_number DESC
    `).all(tenantSlug, status) as Row[];
    const seen = new Set<string>();
    return rows.filter((row) => {
      const key = asString(row.product_type);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).map((row) => {
      const definition = JSON.parse(asString(row.definition_json)) as ProductDefinition;
      definition.name = asString(row.name);
      definition.description = asString(row.description);
      definition.enabled = Boolean(row.enabled);
      definition.order = Number(row.sort_order);
      definition.version = { id: asString(row.version_id), number: Number(row.version_number), status: asString(row.status) as "published" | "draft" | "archived" };
      return { definition, pricing: JSON.parse(asString(row.pricing_json)) as PricingRules, bom: JSON.parse(asString(row.bom_json)) as unknown };
    });
  }

  getProduct(tenantSlug: string, productType: string, status: "published" | "draft" = "published") {
    return this.getProducts(tenantSlug, status).find((product) => product.definition.productType === productType) ?? null;
  }

  getProductVersion(tenantSlug: string, productType: string, versionId: string) {
    const row = this.connection.prepare(`
      SELECT pd.id definition_id,pd.name,pd.description,pd.enabled,pd.sort_order,pt.code product_type,
             pv.id version_id,pv.version_number,pv.status,pv.definition_json,pv.pricing_json,pv.bom_json
      FROM product_versions pv
      JOIN product_definitions pd ON pd.id=pv.product_definition_id
      JOIN product_types pt ON pt.id=pd.product_type_id
      JOIN tenants t ON t.id=pd.tenant_id
      WHERE t.slug=? AND pt.code=? AND pv.id=? AND pv.status IN ('published','archived')
    `).get(tenantSlug, productType, versionId) as Row | undefined;
    if (!row) return null;
    const definition = JSON.parse(asString(row.definition_json)) as ProductDefinition;
    definition.name = asString(row.name);
    definition.description = asString(row.description);
    definition.enabled = Boolean(row.enabled);
    definition.order = Number(row.sort_order);
    definition.version = { id: asString(row.version_id), number: Number(row.version_number), status: asString(row.status) as "published" | "archived" };
    return { definition, pricing: JSON.parse(asString(row.pricing_json)) as PricingRules, bom: JSON.parse(asString(row.bom_json)) as unknown };
  }

  updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate, actorId?: string) {
    const product = this.getProduct(tenantSlug, productType, "draft");
    if (!product) return null;
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return null;
    const definition = { ...product.definition, ...update, version: product.definition.version };
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare("UPDATE product_definitions SET name=?,description=?,enabled=?,sort_order=? WHERE id=?")
        .run(update.name, update.description, Number(update.enabled), update.order, definition.id);
      this.connection.prepare("UPDATE product_versions SET definition_json=?,pricing_json=? WHERE id=?")
        .run(JSON.stringify(definition), JSON.stringify(update.pricing), definition.version.id);
      this.connection.prepare("DELETE FROM profile_asset_links WHERE product_version_id=?").run(definition.version.id);
      for (const link of svgAssetLinks(update)) {
        const inserted = this.connection.prepare(`
          INSERT INTO profile_asset_links (tenant_id,asset_id,product_version_id,profile_id,created_at)
          SELECT t.id,pa.id,?,?,? FROM tenants t
          JOIN profile_assets pa ON pa.tenant_id=t.id AND pa.id=? AND pa.status='ACTIVE'
          WHERE t.slug=?
        `).run(definition.version.id, link.profileId, now, link.assetId, tenantSlug);
        if (!inserted.changes) throw new Error(`profile_asset_unavailable:${link.assetId}`);
        if (actorId) {
          this.connection.prepare("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?)")
            .run(randomUUID(), tenant.id, link.assetId, actorId, "CONFIGURED", JSON.stringify({ productVersionId: definition.version.id, ...link }), now);
        }
      }
      this.connection.exec("COMMIT");
      return { definition, pricing: update.pricing, bom: product.bom };
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  publishProduct(tenantSlug: string, productType: string) {
    const draft = this.getProduct(tenantSlug, productType, "draft");
    const published = this.getProduct(tenantSlug, productType, "published");
    if (!draft) return null;
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      if (published) this.connection.prepare("UPDATE product_versions SET status='archived' WHERE id=?").run(published.definition.version.id);
      this.connection.prepare("UPDATE product_versions SET status='published',published_at=? WHERE id=?").run(now, draft.definition.version.id);
      const publishedDefinition = { ...draft.definition, version: { ...draft.definition.version, status: "published" as const } };
      this.connection.prepare("UPDATE product_versions SET definition_json=? WHERE id=?").run(JSON.stringify(publishedDefinition), draft.definition.version.id);
      const nextNumber = draft.definition.version.number + 1;
      const nextId = nextDraftVersionId(tenantSlug, productType, nextNumber);
      const nextDefinition = { ...publishedDefinition, version: { id: nextId, number: nextNumber, status: "draft" as const } };
      this.connection.prepare("INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
        .run(nextId, draft.definition.id, nextNumber, "draft", JSON.stringify(nextDefinition), JSON.stringify(draft.pricing), JSON.stringify(draft.bom), null, now);
      this.connection.prepare(`
        INSERT INTO profile_asset_links (tenant_id,asset_id,product_version_id,profile_id,created_at)
        SELECT tenant_id,asset_id,?,profile_id,? FROM profile_asset_links WHERE product_version_id=?
      `).run(nextId, now, draft.definition.version.id);
      this.connection.exec("COMMIT");
      return publishedDefinition;
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  updateBranding(tenantSlug: string, branding: unknown) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return false;
    this.connection.prepare("UPDATE branding_settings SET settings_json=?,updated_at=? WHERE tenant_id=?")
      .run(JSON.stringify(branding), new Date().toISOString(), tenant.id);
    return true;
  }

  getFeaturePolicyBundle(tenantSlug: string, productType?: string) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return null;
    const read = (scopeType: string, scopeKey: string) => {
      const row = this.connection.prepare("SELECT settings_json FROM feature_policy_sets WHERE scope_type=? AND scope_key=?").get(scopeType, scopeKey) as Row | undefined;
      return row ? JSON.parse(asString(row.settings_json)) as FeatureAvailabilitySettings : null;
    };
    let product: FeatureAvailabilitySettings | null = null;
    if (productType) {
      const row = this.connection.prepare(`SELECT pd.id FROM product_definitions pd JOIN product_types pt ON pt.id=pd.product_type_id WHERE pd.tenant_id=? AND pt.code=?`).get(tenant.id, productType) as Row | undefined;
      if (row) product = read("PRODUCT", asString(row.id));
    }
    return {
      platform: read("PLATFORM", "global") || structuredClone(platformFeaturePolicy),
      plan: read("PLAN", "stage1") || structuredClone(stageOnePlanFeaturePolicy),
      organization: read("ORGANIZATION", tenant.id) || structuredClone(defaultOrganizationFeaturePolicy),
      product,
    };
  }

  updateOrganizationFeaturePolicy(tenantSlug: string, settings: FeatureAvailabilitySettings, actorId: string) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return false;
    this.connection.prepare(`
      INSERT INTO feature_policy_sets (scope_type,scope_key,settings_json,updated_by,updated_at)
      VALUES ('ORGANIZATION',?,?,?,?)
      ON CONFLICT(scope_type,scope_key) DO UPDATE SET settings_json=excluded.settings_json,updated_by=excluded.updated_by,updated_at=excluded.updated_at
    `).run(tenant.id, JSON.stringify(settings), actorId, new Date().toISOString());
    return true;
  }

  saveConfiguration(tenantSlug: string, id: string, shareId: string, configuration: PublicConfiguration, expiresAt: string | null) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    this.connection.prepare("INSERT INTO saved_configurations (id,tenant_id,share_id,product_version_id,configuration_json,expires_at,created_at) VALUES (?,?,?,?,?,?,?)")
      .run(id, tenant.id, shareId, configuration.productVersionId, JSON.stringify(configuration), expiresAt, new Date().toISOString());
  }

  getConfiguration(tenantSlug: string, shareId: string) {
    const row = this.connection.prepare(`SELECT sc.* FROM saved_configurations sc JOIN tenants t ON t.id=sc.tenant_id WHERE t.slug=? AND sc.share_id=?`).get(tenantSlug, shareId) as Row | undefined;
    if (!row) return null;
    const expiresAt = row.expires_at ? asString(row.expires_at) : null;
    if (expiresAt && Date.parse(expiresAt) <= Date.now()) return null;
    return { id: asString(row.id), shareId: asString(row.share_id), configuration: JSON.parse(asString(row.configuration_json)) as PublicConfiguration, createdAt: asString(row.created_at), expiresAt };
  }

  saveProject(tenantSlug: string, id: string, shareId: string, document: ProjectDocument, expiresAt: string | null, author: ProjectAuthor) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare("INSERT INTO saved_configurations (id,tenant_id,share_id,product_version_id,configuration_json,expires_at,created_at) VALUES (?,?,?,?,?,?,?)")
        .run(id, tenant.id, shareId, document.configuration.productVersionId, JSON.stringify(document.configuration), expiresAt, now);
      this.connection.prepare("INSERT INTO project_documents (project_id,tenant_id,current_version,project_json,created_by_kind,created_by_id,updated_at) VALUES (?,?,?,?,?,?,?)")
        .run(id, tenant.id, 1, JSON.stringify(document), author.kind, author.id, now);
      this.connection.prepare("INSERT INTO project_versions (id,project_id,tenant_id,version_number,project_json,author_kind,author_id,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), id, tenant.id, 1, JSON.stringify(document), author.kind, author.id, now);
      this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), tenant.id, id, author.kind, author.id, "PROJECT_CREATED", JSON.stringify({ version: 1 }), now);
      this.connection.exec("COMMIT");
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  getProject(tenantSlug: string, shareId: string): ProjectRecord | null {
    const row = this.connection.prepare(`
      SELECT sc.*,pd.current_version,pd.project_json,pd.updated_at
      FROM saved_configurations sc JOIN tenants t ON t.id=sc.tenant_id
      LEFT JOIN project_documents pd ON pd.project_id=sc.id AND pd.tenant_id=sc.tenant_id
      WHERE t.slug=? AND sc.share_id=?
    `).get(tenantSlug, shareId) as Row | undefined;
    if (!row) return null;
    const expiresAt = row.expires_at ? asString(row.expires_at) : null;
    if (expiresAt && Date.parse(expiresAt) <= Date.now()) return null;
    const configuration = JSON.parse(asString(row.configuration_json)) as PublicConfiguration;
    return {
      id: asString(row.id),
      shareId: asString(row.share_id),
      configuration,
      document: row.project_json ? JSON.parse(asString(row.project_json)) as ProjectDocument : legacyProject(configuration),
      currentVersion: Number(row.current_version || 1),
      createdAt: asString(row.created_at),
      updatedAt: row.updated_at ? asString(row.updated_at) : asString(row.created_at),
      expiresAt,
    };
  }

  isProjectShareTokenRevoked(tenantSlug: string, projectId: string) {
    return Boolean(this.connection.prepare(`
      SELECT 1 FROM project_share_revocations psr
      JOIN tenants t ON t.id=psr.tenant_id
      WHERE t.slug=? AND psr.project_id=?
    `).get(tenantSlug, projectId));
  }

  revokeProjectShareToken(tenantSlug: string, projectId: string, actor: ProjectAuthor) {
    const tenant = this.connection.prepare("SELECT id FROM tenants WHERE slug=?").get(tenantSlug) as Row | undefined;
    if (!tenant) return false;
    const owned = this.connection.prepare("SELECT 1 FROM saved_configurations WHERE id=? AND tenant_id=?").get(projectId, tenant.id);
    if (!owned) return false;
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare(`
        INSERT INTO project_share_revocations (project_id,tenant_id,revoked_by_kind,revoked_by_id,revoked_at)
        VALUES (?,?,?,?,?) ON CONFLICT(project_id) DO NOTHING
      `).run(projectId, tenant.id, actor.kind, actor.id, now);
      this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,'PUBLIC_SHARE_REVOKED',?,?)")
        .run(randomUUID(), tenant.id, projectId, actor.kind, actor.id, JSON.stringify({ revokedAt: now }), now);
      this.connection.exec("COMMIT");
      return true;
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  updateProject(tenantSlug: string, projectId: string, document: ProjectDocument, expectedVersion: number, author: ProjectAuthor, maxVersions: number) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return null;
    const row = this.connection.prepare(`SELECT sc.id,pd.current_version FROM saved_configurations sc LEFT JOIN project_documents pd ON pd.project_id=sc.id WHERE sc.id=? AND sc.tenant_id=?`).get(projectId, tenant.id) as Row | undefined;
    if (!row) return null;
    const currentVersion = Number(row.current_version || 1);
    if (currentVersion !== expectedVersion) return "version_conflict" as const;
    if (currentVersion >= maxVersions) return "version_limit" as const;
    const nextVersion = currentVersion + 1;
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare("UPDATE saved_configurations SET product_version_id=?,configuration_json=? WHERE id=? AND tenant_id=?")
        .run(document.configuration.productVersionId, JSON.stringify(document.configuration), projectId, tenant.id);
      this.connection.prepare(`
        INSERT INTO project_documents (project_id,tenant_id,current_version,project_json,created_by_kind,created_by_id,updated_at)
        VALUES (?,?,?,?,?,?,?)
        ON CONFLICT(project_id) DO UPDATE SET current_version=excluded.current_version,project_json=excluded.project_json,updated_at=excluded.updated_at
      `).run(projectId, tenant.id, nextVersion, JSON.stringify(document), author.kind, author.id, now);
      this.connection.prepare("INSERT INTO project_versions (id,project_id,tenant_id,version_number,project_json,author_kind,author_id,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), projectId, tenant.id, nextVersion, JSON.stringify(document), author.kind, author.id, now);
      this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), tenant.id, projectId, author.kind, author.id, "PROJECT_VERSION_CREATED", JSON.stringify({ version: nextVersion }), now);
      this.connection.exec("COMMIT");
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
    const shareRow = this.connection.prepare("SELECT share_id FROM saved_configurations WHERE id=?").get(projectId) as Row | undefined;
    return shareRow ? this.getProject(tenantSlug, asString(shareRow.share_id)) : null;
  }

  listProjectVersions(tenantSlug: string, projectId: string) {
    const rows = this.connection.prepare(`
      SELECT pv.* FROM project_versions pv JOIN tenants t ON t.id=pv.tenant_id
      WHERE t.slug=? AND pv.project_id=? ORDER BY pv.version_number DESC
    `).all(tenantSlug, projectId) as Row[];
    return rows.map((row): ProjectVersionRecord => ({
      id: asString(row.id), projectId: asString(row.project_id), version: Number(row.version_number),
      document: JSON.parse(asString(row.project_json)) as ProjectDocument,
      authorKind: asString(row.author_kind) as ProjectVersionRecord["authorKind"], authorId: row.author_id ? asString(row.author_id) : null,
      createdAt: asString(row.created_at),
    }));
  }

  createPrivateAsset(tenantSlug: string, asset: PrivateAssetRecord, variants: Array<{ storageKey: string; name: string; mimeType: string; byteSize: number; width: number; height: number }>) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant || tenant.id !== asset.tenantId) return false;
    const project = this.connection.prepare("SELECT 1 FROM saved_configurations WHERE id=? AND tenant_id=?").get(asset.projectId, tenant.id);
    if (!project) return false;
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare(`INSERT INTO private_assets (id,tenant_id,project_id,kind,file_name,mime_type,byte_size,width,height,content_hash,storage_key,asset_format_version,status,created_by_kind,created_by_id,created_at,deleted_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(asset.id, tenant.id, asset.projectId, asset.kind, asset.fileName, asset.mimeType, asset.byteSize, asset.width, asset.height, asset.contentHash, asset.storageKey, asset.assetFormatVersion, asset.status, asset.createdByKind, asset.createdById, asset.createdAt, null);
      for (const variant of variants) this.connection.prepare("INSERT INTO private_asset_variants (asset_id,name,storage_key,mime_type,byte_size,width,height) VALUES (?,?,?,?,?,?,?)")
        .run(asset.id, variant.name, variant.storageKey, variant.mimeType, variant.byteSize, variant.width, variant.height);
      this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), tenant.id, asset.projectId, asset.createdByKind, asset.createdById, "PRIVATE_ASSET_CREATED", JSON.stringify({ assetId: asset.id, kind: asset.kind, byteSize: asset.byteSize }), asset.createdAt);
      this.connection.exec("COMMIT");
      return true;
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  getPrivateAsset(tenantSlug: string, assetId: string) {
    const row = this.connection.prepare(`SELECT pa.* FROM private_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=? AND pa.id=?`).get(tenantSlug, assetId) as Row | undefined;
    return row ? privateAssetFromRow(row) : null;
  }

  listPrivateAssets(tenantSlug: string, projectId: string) {
    return (this.connection.prepare(`SELECT pa.* FROM private_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=? AND pa.project_id=? ORDER BY pa.created_at DESC`).all(tenantSlug, projectId) as Row[]).map(privateAssetFromRow);
  }

  putPrivateAssetObject(tenantSlug: string, storageKey: string, content: Uint8Array) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    this.connection.prepare(`INSERT INTO private_asset_objects (tenant_id,storage_key,content,updated_at) VALUES (?,?,?,?) ON CONFLICT(tenant_id,storage_key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at`)
      .run(tenant.id, storageKey, content, new Date().toISOString());
  }

  getPrivateAssetObject(tenantSlug: string, storageKey: string) {
    const row = this.connection.prepare(`SELECT pao.content FROM private_asset_objects pao JOIN tenants t ON t.id=pao.tenant_id WHERE t.slug=? AND pao.storage_key=?`).get(tenantSlug, storageKey) as Row | undefined;
    return row?.content instanceof Uint8Array ? row.content : null;
  }

  deletePrivateAsset(tenantSlug: string, projectId: string, assetId: string, actor: ProjectAuthor) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return false;
    const asset = this.getPrivateAsset(tenantSlug, assetId);
    if (!asset || asset.projectId !== projectId || asset.status !== "ACTIVE") return false;
    const dependentIds = asset.kind === "CUSTOMER_PHOTO"
      ? (this.connection.prepare("SELECT id FROM private_assets WHERE tenant_id=? AND project_id=? AND kind='FOREGROUND_MASK' AND status='ACTIVE'").all(tenant.id, projectId) as Row[]).map((row) => asString(row.id))
      : [];
    const assetIds = [assetId, ...dependentIds];
    const keys = assetIds.flatMap((id) => (this.connection.prepare("SELECT storage_key FROM private_asset_variants WHERE asset_id=?").all(id) as Row[]).map((row) => asString(row.storage_key)));
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      for (const id of assetIds) this.connection.prepare("UPDATE private_assets SET status='DELETED',deleted_at=? WHERE id=? AND tenant_id=? AND project_id=?").run(now, id, tenant.id, projectId);
      for (const key of keys) this.connection.prepare("DELETE FROM private_asset_objects WHERE tenant_id=? AND storage_key=?").run(tenant.id, key);
      this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?,?)")
        .run(randomUUID(), tenant.id, projectId, actor.kind, actor.id, "PRIVATE_ASSET_DELETED", JSON.stringify({ assetId, kind: asset.kind, dependentAssetIds: dependentIds }), now);
      this.connection.exec("COMMIT");
      return true;
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  createProjectAuditEvent(tenantSlug: string, projectId: string | null, actor: ProjectAuthor, action: string, details: unknown) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    this.connection.prepare("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?,?)")
      .run(randomUUID(), tenant.id, projectId, actor.kind, actor.id, action, JSON.stringify(details), new Date().toISOString());
  }

  createExportJob(tenantSlug: string, jobId: string, projectId: string, format: "GLB" | "JSON", requestedBy: string) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return false;
    const result = this.connection.prepare(`
      INSERT INTO export_jobs (id,tenant_id,project_id,format,status,requested_by,created_at,completed_at)
      SELECT ?,?,?,?,?,?,?,NULL FROM saved_configurations sc WHERE sc.id=? AND sc.tenant_id=?
    `).run(jobId, tenant.id, projectId, format, "READY", requestedBy, new Date().toISOString(), projectId, tenant.id);
    return result.changes > 0;
  }

  saveQuote(tenantSlug: string, id: string, quote: unknown, bom: unknown, savedConfigurationId: string | null) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    const now = new Date().toISOString();
    this.connection.prepare("INSERT INTO quotes (id,tenant_id,saved_configuration_id,quote_json,created_at) VALUES (?,?,?,?,?)").run(id, tenant.id, savedConfigurationId, JSON.stringify(quote), now);
    this.connection.prepare("INSERT INTO bom_documents (id,quote_id,bom_json,created_at) VALUES (?,?,?,?)").run(`bom-${id}`, id, JSON.stringify(bom), now);
  }

  findAdmin(tenantSlug: string, email: string) {
    const row = this.connection.prepare(`SELECT au.id,au.email,au.password_hash,au.role FROM admin_users au JOIN tenants t ON t.id=au.tenant_id WHERE t.slug=? AND au.email=? AND au.active=1`).get(tenantSlug, email.toLowerCase()) as Row | undefined;
    return row ? { id: asString(row.id), email: asString(row.email), passwordHash: asString(row.password_hash), role: asString(row.role) as AdminRole } : null;
  }

  createSession(id: string, adminUserId: string, token: string, expiresAt: string) {
    this.connection.prepare("INSERT INTO sessions (id,admin_user_id,token_hash,expires_at,created_at) VALUES (?,?,?,?,?)").run(id, adminUserId, hashToken(token), expiresAt, new Date().toISOString());
  }

  getSession(token: string) {
    const row = this.connection.prepare(`SELECT s.id,s.admin_user_id,s.expires_at,t.slug tenant_slug,au.email,au.role FROM sessions s JOIN admin_users au ON au.id=s.admin_user_id JOIN tenants t ON t.id=au.tenant_id WHERE s.token_hash=? AND s.expires_at>?`).get(hashToken(token), new Date().toISOString()) as Row | undefined;
    return row ? {
      id: asString(row.id),
      adminUserId: asString(row.admin_user_id),
      tenantSlug: asString(row.tenant_slug),
      email: asString(row.email),
      role: asString(row.role) as AdminRole,
      expiresAt: asString(row.expires_at),
    } : null;
  }

  deleteSession(token: string) {
    this.connection.prepare("DELETE FROM sessions WHERE token_hash=?").run(hashToken(token));
  }

  getProfileAssetStats(tenantSlug: string) {
    const row = this.connection.prepare(`
      SELECT COUNT(pa.id) active_count,COALESCE(SUM(pa.byte_size),0) active_bytes
      FROM tenants t LEFT JOIN profile_assets pa ON pa.tenant_id=t.id AND pa.status='ACTIVE'
      WHERE t.slug=?
    `).get(tenantSlug) as Row | undefined;
    return { activeCount: Number(row?.active_count || 0), activeBytes: Number(row?.active_bytes || 0) };
  }

  createProfileAsset(tenantSlug: string, asset: ProfileAssetRecord) {
    const inserted = this.connection.prepare(`
      INSERT INTO profile_assets (id,tenant_id,storage_key,file_name,mime_type,byte_size,content_hash,width_mm,height_mm,viewbox_json,profile_format_version,geometry_format_version,status,created_by,created_at,updated_at)
      SELECT ?,t.id,?,?,?,?,?,?,?,?,?,?,?,?,?,? FROM tenants t
      JOIN admin_users au ON au.tenant_id=t.id AND au.id=? AND au.active=1
      WHERE t.slug=? AND t.id=?
    `).run(
      asset.id,
      asset.storageKey,
      asset.fileName,
      asset.mimeType,
      asset.byteSize,
      asset.contentHash,
      asset.widthMm,
      asset.heightMm,
      JSON.stringify(asset.viewBox),
      asset.profileFormatVersion,
      asset.geometryFormatVersion,
      asset.status,
      asset.createdBy,
      asset.createdAt,
      asset.updatedAt,
      asset.createdBy,
      tenantSlug,
      asset.tenantId,
    );
    if (!inserted.changes) return false;
    this.connection.prepare("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?)")
      .run(randomUUID(), asset.tenantId, asset.id, asset.createdBy, "CREATED", JSON.stringify({ fileName: asset.fileName, byteSize: asset.byteSize, contentHash: asset.contentHash }), asset.createdAt);
    return true;
  }

  listProfileAssets(tenantSlug: string) {
    return (this.connection.prepare(`
      SELECT pa.* FROM profile_assets pa JOIN tenants t ON t.id=pa.tenant_id
      WHERE t.slug=? AND pa.status='ACTIVE' ORDER BY pa.created_at DESC,pa.id
    `).all(tenantSlug) as Row[]).map(profileAssetFromRow);
  }

  getProfileAsset(tenantSlug: string, assetId: string) {
    const row = this.connection.prepare(`
      SELECT pa.* FROM profile_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=? AND pa.id=?
    `).get(tenantSlug, assetId) as Row | undefined;
    return row ? profileAssetFromRow(row) : null;
  }

  putProfileAssetObject(tenantSlug: string, storageKey: string, content: string) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    const now = new Date().toISOString();
    this.connection.prepare(`
      INSERT INTO profile_asset_objects (tenant_id,storage_key,content,created_at,updated_at)
      VALUES (?,?,?,?,?)
      ON CONFLICT(tenant_id,storage_key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at
    `).run(tenant.id, storageKey, content, now, now);
  }

  getProfileAssetObject(tenantSlug: string, storageKey: string) {
    const row = this.connection.prepare(`
      SELECT pao.content FROM profile_asset_objects pao JOIN tenants t ON t.id=pao.tenant_id
      WHERE t.slug=? AND pao.storage_key=?
    `).get(tenantSlug, storageKey) as Row | undefined;
    return row ? asString(row.content) : null;
  }

  deleteProfileAssetObject(tenantSlug: string, storageKey: string) {
    this.connection.prepare(`
      DELETE FROM profile_asset_objects WHERE storage_key=? AND tenant_id=(SELECT id FROM tenants WHERE slug=?)
    `).run(storageKey, tenantSlug);
  }

  retireProfileAsset(tenantSlug: string, assetId: string, actorId: string) {
    const tenant = this.getTenant(tenantSlug);
    const asset = this.getProfileAsset(tenantSlug, assetId);
    if (!tenant || !asset || asset.status !== "ACTIVE") return "not_found" as const;
    const linked = this.connection.prepare("SELECT 1 FROM profile_asset_links WHERE tenant_id=? AND asset_id=? LIMIT 1").get(tenant.id, assetId);
    if (linked) return "referenced" as const;
    const now = new Date().toISOString();
    this.connection.exec("BEGIN IMMEDIATE");
    try {
      this.connection.prepare("UPDATE profile_assets SET status='RETIRED',updated_at=? WHERE tenant_id=? AND id=? AND status='ACTIVE'").run(now, tenant.id, assetId);
      this.connection.prepare("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES (?,?,?,?,?,?,?)")
        .run(randomUUID(), tenant.id, assetId, actorId, "RETIRED", "{}", now);
      this.connection.exec("COMMIT");
      return "retired" as const;
    } catch (error) {
      this.connection.exec("ROLLBACK");
      throw error;
    }
  }

  listProfileAssetAudit(tenantSlug: string, assetId?: string) {
    const rows = this.connection.prepare(`
      SELECT paa.*,au.email actor_email FROM profile_asset_audit paa
      JOIN tenants t ON t.id=paa.tenant_id JOIN admin_users au ON au.id=paa.actor_id
      WHERE t.slug=? AND (? IS NULL OR paa.asset_id=?) ORDER BY paa.created_at DESC,paa.id
    `).all(tenantSlug, assetId ?? null, assetId ?? null) as Row[];
    return rows.map((row): ProfileAssetAuditRecord => ({
      id: asString(row.id),
      assetId: asString(row.asset_id),
      action: asString(row.action) as ProfileAssetAuditRecord["action"],
      actorId: asString(row.actor_id),
      actorEmail: asString(row.actor_email),
      details: JSON.parse(asString(row.details_json)),
      createdAt: asString(row.created_at),
    }));
  }

  isProfileAssetPublic(tenantSlug: string, assetId: string) {
    return Boolean(this.connection.prepare(`
      SELECT 1 FROM profile_asset_links pal
      JOIN tenants t ON t.id=pal.tenant_id
      JOIN product_versions pv ON pv.id=pal.product_version_id
      WHERE t.slug=? AND pal.asset_id=? AND pv.status IN ('published','archived') LIMIT 1
    `).get(tenantSlug, assetId));
  }
}
