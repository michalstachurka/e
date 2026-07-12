import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { AdminProductUpdate, ProductDefinition, PublicConfiguration } from "../../../packages/contracts/src/index.js";
import { productSeeds, tenantSeed, type PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import { hashPassword, hashToken } from "./security.js";

type SqlValue = string | number | bigint | null | Uint8Array;
type Row = Record<string, SqlValue>;

const schema = `
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS tenants (id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS admin_users (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), email TEXT NOT NULL, password_hash TEXT NOT NULL, active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL, UNIQUE(tenant_id,email));
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
`;

function asString(value: SqlValue | undefined) {
  return typeof value === "string" ? value : String(value ?? "");
}

export interface DatabaseOptions {
  path: string;
  adminEmail: string;
  adminPassword: string;
}

export class ConfiguratorDatabase {
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

  close() {
    this.connection.close();
  }

  getTenant(slug: string) {
    const row = this.connection.prepare("SELECT * FROM tenants WHERE slug=?").get(slug) as Row | undefined;
    if (!row) return null;
    const branding = this.connection.prepare("SELECT settings_json FROM branding_settings WHERE tenant_id=?").get(asString(row.id)) as Row;
    return { id: asString(row.id), slug: asString(row.slug), name: asString(row.name), branding: JSON.parse(asString(branding.settings_json)) as unknown };
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

  updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate) {
    const product = this.getProduct(tenantSlug, productType, "draft");
    if (!product) return null;
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) return null;
    const definition = { ...product.definition, ...update, version: product.definition.version };
    const transaction = this.connection.prepare("UPDATE product_definitions SET name=?,description=?,enabled=?,sort_order=? WHERE id=?");
    transaction.run(update.name, update.description, Number(update.enabled), update.order, definition.id);
    this.connection.prepare("UPDATE product_versions SET definition_json=?,pricing_json=? WHERE id=?")
      .run(JSON.stringify(definition), JSON.stringify(update.pricing), definition.version.id);
    return { definition, pricing: update.pricing, bom: product.bom };
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
      const nextId = `${productType}-draft-v${nextNumber}`;
      const nextDefinition = { ...publishedDefinition, version: { id: nextId, number: nextNumber, status: "draft" as const } };
      this.connection.prepare("INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES (?,?,?,?,?,?,?,?,?)")
        .run(nextId, draft.definition.id, nextNumber, "draft", JSON.stringify(nextDefinition), JSON.stringify(draft.pricing), JSON.stringify(draft.bom), null, now);
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

  saveQuote(tenantSlug: string, id: string, quote: unknown, bom: unknown, savedConfigurationId: string | null) {
    const tenant = this.getTenant(tenantSlug);
    if (!tenant) throw new Error("Tenant not found");
    const now = new Date().toISOString();
    this.connection.prepare("INSERT INTO quotes (id,tenant_id,saved_configuration_id,quote_json,created_at) VALUES (?,?,?,?,?)").run(id, tenant.id, savedConfigurationId, JSON.stringify(quote), now);
    this.connection.prepare("INSERT INTO bom_documents (id,quote_id,bom_json,created_at) VALUES (?,?,?,?)").run(`bom-${id}`, id, JSON.stringify(bom), now);
  }

  findAdmin(tenantSlug: string, email: string) {
    return this.connection.prepare(`SELECT au.* FROM admin_users au JOIN tenants t ON t.id=au.tenant_id WHERE t.slug=? AND au.email=? AND au.active=1`).get(tenantSlug, email.toLowerCase()) as Row | undefined;
  }

  createSession(id: string, adminUserId: string, token: string, expiresAt: string) {
    this.connection.prepare("INSERT INTO sessions (id,admin_user_id,token_hash,expires_at,created_at) VALUES (?,?,?,?,?)").run(id, adminUserId, hashToken(token), expiresAt, new Date().toISOString());
  }

  getSession(token: string) {
    return this.connection.prepare(`SELECT s.id,s.admin_user_id,s.expires_at,au.tenant_id,t.slug tenant_slug,au.email FROM sessions s JOIN admin_users au ON au.id=s.admin_user_id JOIN tenants t ON t.id=au.tenant_id WHERE s.token_hash=? AND s.expires_at>?`).get(hashToken(token), new Date().toISOString()) as Row | undefined;
  }

  deleteSession(token: string) {
    this.connection.prepare("DELETE FROM sessions WHERE token_hash=?").run(hashToken(token));
  }
}
