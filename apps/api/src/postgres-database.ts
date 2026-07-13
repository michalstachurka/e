import { Pool, type PoolClient, type PoolConfig, type QueryResultRow } from "pg";
import type { AdminProductUpdate, ProductDefinition, PublicConfiguration } from "../../../packages/contracts/src/index.js";
import { productSeeds, tenantSeed, type PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import { hashPassword, hashToken } from "./security.js";
import { normalizeHostname } from "./tenant-context.js";
import { isoDate, nextDraftVersionId, parseStoredJson, prepareTenantProvision, TenantProvisionError } from "./tenant-provisioning.js";
import { postgresMigrations } from "./postgres-schema.js";
import type { ConfiguratorStore, ProductRecord, TenantProvisionInput, TenantProvisionResult } from "./store.js";

type Queryable = Pool | PoolClient;
type PgRow = QueryResultRow;

function asString(value: unknown) {
  return typeof value === "string" ? value : String(value ?? "");
}

function productFromRow(row: PgRow): ProductRecord {
  const definition = structuredClone(parseStoredJson<ProductDefinition>(row.definition_json));
  definition.name = asString(row.name);
  definition.description = asString(row.description);
  definition.enabled = Boolean(row.enabled);
  definition.order = Number(row.sort_order);
  definition.version = {
    id: asString(row.version_id),
    number: Number(row.version_number),
    status: asString(row.status) as "published" | "draft" | "archived",
  };
  return {
    definition,
    pricing: parseStoredJson<PricingRules>(row.pricing_json),
    bom: parseStoredJson<unknown>(row.bom_json),
  };
}

export interface PostgresDatabaseOptions {
  connectionString?: string;
  pool?: Pool;
  ssl?: PoolConfig["ssl"];
  adminEmail: string;
  adminPassword: string;
}

export class PostgresConfiguratorDatabase implements ConfiguratorStore {
  private constructor(private readonly pool: Pool) {}

  static async create(options: PostgresDatabaseOptions) {
    if (!options.pool && !options.connectionString) throw new Error("DATABASE_URL is required for the PostgreSQL datastore");
    const pool = options.pool ?? new Pool({ connectionString: options.connectionString, ssl: options.ssl });
    const database = new PostgresConfiguratorDatabase(pool);
    try {
      await database.migrate();
      await database.seed(options.adminEmail, options.adminPassword);
      return database;
    } catch (error) {
      await pool.end();
      throw error;
    }
  }

  private async migrate() {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      await client.query("SELECT pg_advisory_xact_lock(864201135)");
      await client.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
        version INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        applied_at TIMESTAMPTZ NOT NULL
      )`);
      const applied = await client.query<{ version: number }>("SELECT version FROM schema_migrations");
      const appliedVersions = new Set(applied.rows.map((row) => Number(row.version)));
      for (const migration of postgresMigrations) {
        if (appliedVersions.has(migration.version)) continue;
        for (const statement of migration.statements) await client.query(statement);
        await client.query(
          "INSERT INTO schema_migrations (version,name,applied_at) VALUES ($1,$2,$3)",
          [migration.version, migration.name, new Date().toISOString()],
        );
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  private async seed(adminEmail: string, adminPassword: string) {
    const client = await this.pool.connect();
    const now = new Date().toISOString();
    const tenantId = `tenant-${tenantSeed.slug}`;
    try {
      await client.query("BEGIN");
      await client.query("INSERT INTO tenants (id,slug,name,created_at) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING", [tenantId, tenantSeed.slug, tenantSeed.name, now]);
      await client.query("INSERT INTO branding_settings (id,tenant_id,settings_json,updated_at) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING", [`branding-${tenantSeed.slug}`, tenantId, JSON.stringify(tenantSeed.branding), now]);
      await client.query("INSERT INTO product_categories (id,tenant_id,name,sort_order) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING", [`category-${tenantSeed.slug}-covers`, tenantId, "Zadaszenia", 10]);

      for (const seed of productSeeds) {
        const typeId = `type-${seed.definition.productType}`;
        await client.query("INSERT INTO product_types (id,code,name) VALUES ($1,$2,$3) ON CONFLICT (id) DO NOTHING", [typeId, seed.definition.productType, seed.definition.name]);
        await client.query(
          "INSERT INTO product_definitions (id,tenant_id,product_type_id,name,description,enabled,sort_order) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (id) DO NOTHING",
          [seed.definition.id, tenantId, typeId, seed.definition.name, seed.definition.description, seed.definition.enabled, seed.definition.order],
        );
        await client.query(
          "INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING",
          [seed.definition.version.id, seed.definition.id, 1, "published", JSON.stringify(seed.definition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), now, now],
        );
        const draftDefinition = { ...seed.definition, version: { id: `${seed.definition.productType}-draft-v2`, number: 2, status: "draft" as const } };
        await client.query(
          "INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING",
          [draftDefinition.version.id, seed.definition.id, 2, "draft", JSON.stringify(draftDefinition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), null, now],
        );
      }

      const existingAdmin = await client.query("SELECT 1 FROM admin_users WHERE tenant_id=$1 AND active=TRUE LIMIT 1", [tenantId]);
      if (!existingAdmin.rowCount) {
        const passwordHash = await hashPassword(adminPassword);
        await client.query(
          "INSERT INTO admin_users (id,tenant_id,email,password_hash,active,created_at) VALUES ($1,$2,$3,$4,TRUE,$5)",
          [`admin-${tenantSeed.slug}`, tenantId, adminEmail.toLowerCase(), passwordHash, now],
        );
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async provisionTenant(input: TenantProvisionInput): Promise<TenantProvisionResult> {
    const prepared = await prepareTenantProvision(input);
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      if ((await client.query("SELECT 1 FROM tenants WHERE slug=$1", [prepared.slug])).rowCount) {
        throw new TenantProvisionError("tenant_exists", `Tenant ${prepared.slug} already exists`);
      }
      for (const hostname of prepared.domains) {
        if ((await client.query("SELECT 1 FROM tenant_domains WHERE hostname=$1", [hostname])).rowCount) {
          throw new TenantProvisionError("domain_exists", `Domain ${hostname} is already assigned`);
        }
      }
      await client.query("INSERT INTO tenants (id,slug,name,created_at) VALUES ($1,$2,$3,$4)", [prepared.tenantId, prepared.slug, prepared.name, prepared.now]);
      await client.query("INSERT INTO branding_settings (id,tenant_id,settings_json,updated_at) VALUES ($1,$2,$3,$4)", [`branding-${prepared.slug}`, prepared.tenantId, JSON.stringify(prepared.branding), prepared.now]);
      await client.query("INSERT INTO product_categories (id,tenant_id,name,sort_order) VALUES ($1,$2,$3,$4)", [`category-${prepared.slug}-covers`, prepared.tenantId, "Zadaszenia", 10]);

      for (const seed of productSeeds) {
        const productType = seed.definition.productType;
        const typeId = `type-${productType}`;
        const definitionId = `product-${prepared.slug}-${productType}`;
        const publishedId = `${prepared.slug}-${productType}-v1`;
        const definition = structuredClone(seed.definition);
        definition.id = definitionId;
        definition.version = { id: publishedId, number: 1, status: "published" };
        await client.query("INSERT INTO product_types (id,code,name) VALUES ($1,$2,$3) ON CONFLICT (id) DO NOTHING", [typeId, productType, definition.name]);
        await client.query(
          "INSERT INTO product_definitions (id,tenant_id,product_type_id,name,description,enabled,sort_order) VALUES ($1,$2,$3,$4,$5,$6,$7)",
          [definitionId, prepared.tenantId, typeId, definition.name, definition.description, definition.enabled, definition.order],
        );
        await client.query(
          "INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES ($1,$2,1,'published',$3,$4,$5,$6,$6)",
          [publishedId, definitionId, JSON.stringify(definition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), prepared.now],
        );
        const draftDefinition = { ...definition, version: { id: nextDraftVersionId(prepared.slug, productType, 2), number: 2, status: "draft" as const } };
        await client.query(
          "INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES ($1,$2,2,'draft',$3,$4,$5,NULL,$6)",
          [draftDefinition.version.id, definitionId, JSON.stringify(draftDefinition), JSON.stringify(seed.pricing), JSON.stringify(seed.bom), prepared.now],
        );
      }

      await client.query(
        "INSERT INTO admin_users (id,tenant_id,email,password_hash,active,created_at) VALUES ($1,$2,$3,$4,TRUE,$5)",
        [`admin-${prepared.slug}`, prepared.tenantId, prepared.adminEmail, prepared.passwordHash, prepared.now],
      );
      for (const [index, hostname] of prepared.domains.entries()) {
        await client.query(
          "INSERT INTO tenant_domains (id,tenant_id,hostname,status,verified_at,created_at) VALUES ($1,$2,$3,'active',$4,$4)",
          [`domain-${prepared.slug}-${index + 1}`, prepared.tenantId, hostname, prepared.now],
        );
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      if (error instanceof TenantProvisionError) throw error;
      const databaseError = error as { code?: string; constraint?: string; message?: string };
      if (databaseError.code === "23505" && String(databaseError.constraint || databaseError.message).includes("tenant_domains")) {
        throw new TenantProvisionError("domain_exists", "Domain is already assigned");
      }
      if (databaseError.code === "23505" && String(databaseError.constraint || databaseError.message).includes("tenants")) {
        throw new TenantProvisionError("tenant_exists", `Tenant ${prepared.slug} already exists`);
      }
      throw error;
    } finally {
      client.release();
    }

    const tenant = await this.getTenant(prepared.slug);
    if (!tenant) throw new Error("Provisioned tenant could not be read back");
    return { tenant, domains: prepared.domains };
  }

  async close() {
    await this.pool.end();
  }

  async healthCheck() {
    const result = await this.pool.query<{ value: number }>("SELECT 1 value");
    return Number(result.rows[0]?.value) === 1;
  }

  async getTenant(slug: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT t.id,t.slug,t.name,bs.settings_json
      FROM tenants t
      JOIN branding_settings bs ON bs.tenant_id=t.id
      WHERE t.slug=$1
    `, [slug]);
    const row = result.rows[0];
    return row ? { id: asString(row.id), slug: asString(row.slug), name: asString(row.name), branding: parseStoredJson<unknown>(row.settings_json) } : null;
  }

  async getTenantByHostname(hostname: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT t.slug FROM tenant_domains td JOIN tenants t ON t.id=td.tenant_id
      WHERE td.hostname=$1 AND td.status='active'
    `, [normalizeHostname(hostname)]);
    return result.rows[0] ? this.getTenant(asString(result.rows[0].slug)) : null;
  }

  async getPrimaryHostname(tenantSlug: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT td.hostname FROM tenant_domains td JOIN tenants t ON t.id=td.tenant_id
      WHERE t.slug=$1 AND td.status='active' ORDER BY td.created_at,td.id LIMIT 1
    `, [tenantSlug]);
    return result.rows[0] ? asString(result.rows[0].hostname) : null;
  }

  private async getProductsWith(queryable: Queryable, tenantSlug: string, status: "published" | "draft" = "published") {
    const result = await queryable.query<PgRow>(`
      SELECT pd.id definition_id,pd.name,pd.description,pd.enabled,pd.sort_order,pt.code product_type,
             pv.id version_id,pv.version_number,pv.status,pv.definition_json,pv.pricing_json,pv.bom_json
      FROM product_definitions pd
      JOIN tenants t ON t.id=pd.tenant_id
      JOIN product_types pt ON pt.id=pd.product_type_id
      JOIN product_versions pv ON pv.product_definition_id=pd.id
      WHERE t.slug=$1 AND pv.status=$2
      ORDER BY pd.sort_order,pv.version_number DESC
    `, [tenantSlug, status]);
    const seen = new Set<string>();
    return result.rows.filter((row) => {
      const key = asString(row.product_type);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).map(productFromRow);
  }

  getProducts(tenantSlug: string, status: "published" | "draft" = "published") {
    return this.getProductsWith(this.pool, tenantSlug, status);
  }

  private async getProductWith(queryable: Queryable, tenantSlug: string, productType: string, status: "published" | "draft" = "published") {
    return (await this.getProductsWith(queryable, tenantSlug, status)).find((product) => product.definition.productType === productType) ?? null;
  }

  getProduct(tenantSlug: string, productType: string, status: "published" | "draft" = "published") {
    return this.getProductWith(this.pool, tenantSlug, productType, status);
  }

  async getProductVersion(tenantSlug: string, productType: string, versionId: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT pd.id definition_id,pd.name,pd.description,pd.enabled,pd.sort_order,pt.code product_type,
             pv.id version_id,pv.version_number,pv.status,pv.definition_json,pv.pricing_json,pv.bom_json
      FROM product_versions pv
      JOIN product_definitions pd ON pd.id=pv.product_definition_id
      JOIN product_types pt ON pt.id=pd.product_type_id
      JOIN tenants t ON t.id=pd.tenant_id
      WHERE t.slug=$1 AND pt.code=$2 AND pv.id=$3 AND pv.status IN ('published','archived')
    `, [tenantSlug, productType, versionId]);
    return result.rows[0] ? productFromRow(result.rows[0]) : null;
  }

  async updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const product = await this.getProductWith(client, tenantSlug, productType, "draft");
      if (!product) {
        await client.query("ROLLBACK");
        return null;
      }
      const definition = { ...product.definition, ...update, version: product.definition.version };
      await client.query("UPDATE product_definitions SET name=$1,description=$2,enabled=$3,sort_order=$4 WHERE id=$5", [update.name, update.description, update.enabled, update.order, definition.id]);
      await client.query("UPDATE product_versions SET definition_json=$1::jsonb,pricing_json=$2::jsonb WHERE id=$3", [JSON.stringify(definition), JSON.stringify(update.pricing), definition.version.id]);
      await client.query("COMMIT");
      return { definition, pricing: update.pricing, bom: product.bom };
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async publishProduct(tenantSlug: string, productType: string) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const locked = await client.query<PgRow>(`
        SELECT pd.id FROM product_definitions pd
        JOIN tenants t ON t.id=pd.tenant_id
        JOIN product_types pt ON pt.id=pd.product_type_id
        WHERE t.slug=$1 AND pt.code=$2 FOR UPDATE
      `, [tenantSlug, productType]);
      if (!locked.rows[0]) {
        await client.query("ROLLBACK");
        return null;
      }
      const draft = await this.getProductWith(client, tenantSlug, productType, "draft");
      if (!draft) {
        await client.query("ROLLBACK");
        return null;
      }
      const now = new Date().toISOString();
      await client.query("UPDATE product_versions SET status='archived' WHERE product_definition_id=$1 AND status='published'", [draft.definition.id]);
      await client.query("UPDATE product_versions SET status='published',published_at=$1 WHERE id=$2", [now, draft.definition.version.id]);
      const publishedDefinition = { ...draft.definition, version: { ...draft.definition.version, status: "published" as const } };
      await client.query("UPDATE product_versions SET definition_json=$1::jsonb WHERE id=$2", [JSON.stringify(publishedDefinition), draft.definition.version.id]);
      const nextNumber = draft.definition.version.number + 1;
      const nextDefinition = { ...publishedDefinition, version: { id: nextDraftVersionId(tenantSlug, productType, nextNumber), number: nextNumber, status: "draft" as const } };
      await client.query(
        "INSERT INTO product_versions (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at) VALUES ($1,$2,$3,'draft',$4,$5,$6,NULL,$7)",
        [nextDefinition.version.id, draft.definition.id, nextNumber, JSON.stringify(nextDefinition), JSON.stringify(draft.pricing), JSON.stringify(draft.bom), now],
      );
      await client.query("COMMIT");
      return publishedDefinition;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async updateBranding(tenantSlug: string, branding: unknown) {
    const result = await this.pool.query(`
      UPDATE branding_settings SET settings_json=$1::jsonb,updated_at=$2::timestamptz
      WHERE tenant_id=(SELECT id FROM tenants WHERE slug=$3)
    `, [JSON.stringify(branding), new Date().toISOString(), tenantSlug]);
    return Boolean(result.rowCount);
  }

  async saveConfiguration(tenantSlug: string, id: string, shareId: string, configuration: PublicConfiguration, expiresAt: string | null) {
    const result = await this.pool.query(`
      INSERT INTO saved_configurations (id,tenant_id,share_id,product_version_id,configuration_json,expires_at,created_at)
      SELECT $1,t.id,$2,$3,$4::jsonb,$5::timestamptz,$6::timestamptz FROM tenants t WHERE t.slug=$7
    `, [id, shareId, configuration.productVersionId, JSON.stringify(configuration), expiresAt, new Date().toISOString(), tenantSlug]);
    if (!result.rowCount) throw new Error("Tenant not found");
  }

  async getConfiguration(tenantSlug: string, shareId: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT sc.* FROM saved_configurations sc JOIN tenants t ON t.id=sc.tenant_id
      WHERE t.slug=$1 AND sc.share_id=$2 AND (sc.expires_at IS NULL OR sc.expires_at > NOW())
    `, [tenantSlug, shareId]);
    const row = result.rows[0];
    if (!row) return null;
    return {
      id: asString(row.id),
      shareId: asString(row.share_id),
      configuration: parseStoredJson<PublicConfiguration>(row.configuration_json),
      createdAt: isoDate(row.created_at),
      expiresAt: row.expires_at ? isoDate(row.expires_at) : null,
    };
  }

  async saveQuote(tenantSlug: string, id: string, quote: unknown, bom: unknown, savedConfigurationId: string | null) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const tenant = await client.query<PgRow>("SELECT id FROM tenants WHERE slug=$1", [tenantSlug]);
      if (!tenant.rows[0]) throw new Error("Tenant not found");
      const now = new Date().toISOString();
      await client.query("INSERT INTO quotes (id,tenant_id,saved_configuration_id,quote_json,created_at) VALUES ($1,$2,$3,$4,$5)", [id, tenant.rows[0].id, savedConfigurationId, JSON.stringify(quote), now]);
      await client.query("INSERT INTO bom_documents (id,quote_id,bom_json,created_at) VALUES ($1,$2,$3,$4)", [`bom-${id}`, id, JSON.stringify(bom), now]);
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async findAdmin(tenantSlug: string, email: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT au.id,au.email,au.password_hash FROM admin_users au JOIN tenants t ON t.id=au.tenant_id
      WHERE t.slug=$1 AND au.email=$2 AND au.active=TRUE
    `, [tenantSlug, email.toLowerCase()]);
    const row = result.rows[0];
    return row ? { id: asString(row.id), email: asString(row.email), passwordHash: asString(row.password_hash) } : null;
  }

  async createSession(id: string, adminUserId: string, token: string, expiresAt: string) {
    await this.pool.query("INSERT INTO sessions (id,admin_user_id,token_hash,expires_at,created_at) VALUES ($1,$2,$3,$4,$5)", [id, adminUserId, hashToken(token), expiresAt, new Date().toISOString()]);
  }

  async getSession(token: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT s.id,s.admin_user_id,s.expires_at,t.slug tenant_slug,au.email
      FROM sessions s JOIN admin_users au ON au.id=s.admin_user_id JOIN tenants t ON t.id=au.tenant_id
      WHERE s.token_hash=$1 AND s.expires_at>NOW()
    `, [hashToken(token)]);
    const row = result.rows[0];
    return row ? {
      id: asString(row.id),
      adminUserId: asString(row.admin_user_id),
      tenantSlug: asString(row.tenant_slug),
      email: asString(row.email),
      expiresAt: isoDate(row.expires_at),
    } : null;
  }

  async deleteSession(token: string) {
    await this.pool.query("DELETE FROM sessions WHERE token_hash=$1", [hashToken(token)]);
  }
}
