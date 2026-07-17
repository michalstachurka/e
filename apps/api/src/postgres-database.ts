import { Pool, type PoolClient, type PoolConfig, type QueryResultRow } from "pg";
import { randomUUID } from "node:crypto";
import { defaultProjectScene, type AdminProductUpdate, type AdminRole, type FeatureAvailabilitySettings, type ProductDefinition, type ProjectDocument, type PublicConfiguration } from "../../../packages/contracts/src/index.js";
import { productSeeds, tenantSeed, type PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import { hashPassword, hashToken } from "./security.js";
import { normalizeHostname } from "./tenant-context.js";
import { isoDate, nextDraftVersionId, parseStoredJson, prepareTenantProvision, TenantProvisionError } from "./tenant-provisioning.js";
import { postgresMigrations } from "./postgres-schema.js";
import { defaultOrganizationFeaturePolicy, platformFeaturePolicy, stageOnePlanFeaturePolicy } from "./capabilities.js";
import type { ConfiguratorStore, PrivateAssetRecord, ProductRecord, ProfileAssetAuditRecord, ProfileAssetRecord, ProjectAuthor, ProjectRecord, ProjectVersionRecord, TenantProvisionInput, TenantProvisionResult } from "./store.js";

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

function profileAssetFromRow(row: PgRow): ProfileAssetRecord {
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
    viewBox: parseStoredJson<ProfileAssetRecord["viewBox"]>(row.viewbox_json),
    profileFormatVersion: "1.0",
    geometryFormatVersion: "1.0",
    status: asString(row.status) as ProfileAssetRecord["status"],
    createdBy: asString(row.created_by),
    createdAt: isoDate(row.created_at),
    updatedAt: isoDate(row.updated_at),
  };
}

function privateAssetFromRow(row: PgRow): PrivateAssetRecord {
  return {
    id: asString(row.id), tenantId: asString(row.tenant_id), projectId: asString(row.project_id),
    kind: asString(row.kind) as PrivateAssetRecord["kind"], fileName: asString(row.file_name), mimeType: asString(row.mime_type) as PrivateAssetRecord["mimeType"],
    byteSize: Number(row.byte_size), width: Number(row.width), height: Number(row.height), contentHash: asString(row.content_hash), storageKey: asString(row.storage_key),
    assetFormatVersion: "1.0", status: asString(row.status) as PrivateAssetRecord["status"], createdByKind: asString(row.created_by_kind) as PrivateAssetRecord["createdByKind"],
    createdById: row.created_by_id ? asString(row.created_by_id) : null, createdAt: isoDate(row.created_at), deletedAt: row.deleted_at ? isoDate(row.deleted_at) : null,
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
      await this.seedFeaturePolicies(client, tenantId, now);

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

  private async seedFeaturePolicies(queryable: Queryable, tenantId: string, now: string) {
    const insert = (scopeType: string, scopeKey: string, settings: FeatureAvailabilitySettings) => queryable.query(
      "INSERT INTO feature_policy_sets (scope_type,scope_key,settings_json,updated_by,updated_at) VALUES ($1,$2,$3::jsonb,NULL,$4) ON CONFLICT (scope_type,scope_key) DO NOTHING",
      [scopeType, scopeKey, JSON.stringify(settings), now],
    );
    await insert("PLATFORM", "global", platformFeaturePolicy);
    await insert("PLAN", "stage1", stageOnePlanFeaturePolicy);
    await insert("ORGANIZATION", tenantId, defaultOrganizationFeaturePolicy);
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
      await this.seedFeaturePolicies(client, prepared.tenantId, prepared.now);

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

  async updateDraftProduct(tenantSlug: string, productType: string, update: AdminProductUpdate, actorId?: string) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const product = await this.getProductWith(client, tenantSlug, productType, "draft");
      if (!product) {
        await client.query("ROLLBACK");
        return null;
      }
      const definition = { ...product.definition, ...update, version: product.definition.version };
      const tenantResult = await client.query<PgRow>("SELECT id FROM tenants WHERE slug=$1", [tenantSlug]);
      const tenantId = asString(tenantResult.rows[0]?.id);
      await client.query("UPDATE product_definitions SET name=$1,description=$2,enabled=$3,sort_order=$4 WHERE id=$5", [update.name, update.description, update.enabled, update.order, definition.id]);
      await client.query("UPDATE product_versions SET definition_json=$1::jsonb,pricing_json=$2::jsonb WHERE id=$3", [JSON.stringify(definition), JSON.stringify(update.pricing), definition.version.id]);
      await client.query("DELETE FROM profile_asset_links WHERE product_version_id=$1", [definition.version.id]);
      const now = new Date().toISOString();
      for (const link of svgAssetLinks(update)) {
        const availableAsset = await client.query(
          "SELECT id FROM profile_assets WHERE tenant_id=$1 AND id=$2 AND status='ACTIVE'",
          [tenantId, link.assetId],
        );
        if (!availableAsset.rowCount) throw new Error(`profile_asset_unavailable:${link.assetId}`);
        await client.query(`
          INSERT INTO profile_asset_links (tenant_id,asset_id,product_version_id,profile_id,created_at)
          VALUES ($1,$2,$3,$4,$5::timestamptz)
        `, [tenantId, link.assetId, definition.version.id, link.profileId, now]);
        if (actorId) {
          await client.query("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,'CONFIGURED',$5::jsonb,$6)", [
            randomUUID(), tenantId, link.assetId, actorId, JSON.stringify({ productVersionId: definition.version.id, ...link }), now,
          ]);
        }
      }
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
      const sourceAssetLinks = await client.query<PgRow>(
        "SELECT tenant_id,asset_id,profile_id FROM profile_asset_links WHERE product_version_id=$1",
        [draft.definition.version.id],
      );
      for (const link of sourceAssetLinks.rows) {
        await client.query(`
          INSERT INTO profile_asset_links (tenant_id,asset_id,product_version_id,profile_id,created_at)
          VALUES ($1,$2,$3,$4,$5::timestamptz)
        `, [link.tenant_id, link.asset_id, nextDefinition.version.id, link.profile_id, now]);
      }
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

  async getFeaturePolicyBundle(tenantSlug: string, productType?: string) {
    const tenant = await this.getTenant(tenantSlug);
    if (!tenant) return null;
    const read = async (scopeType: string, scopeKey: string) => {
      const result = await this.pool.query<PgRow>("SELECT settings_json FROM feature_policy_sets WHERE scope_type=$1 AND scope_key=$2", [scopeType, scopeKey]);
      return result.rows[0] ? parseStoredJson<FeatureAvailabilitySettings>(result.rows[0].settings_json) : null;
    };
    let product: FeatureAvailabilitySettings | null = null;
    if (productType) {
      const definition = await this.pool.query<PgRow>(`SELECT pd.id FROM product_definitions pd JOIN product_types pt ON pt.id=pd.product_type_id WHERE pd.tenant_id=$1 AND pt.code=$2`, [tenant.id, productType]);
      if (definition.rows[0]) product = await read("PRODUCT", asString(definition.rows[0].id));
    }
    return {
      platform: await read("PLATFORM", "global") || structuredClone(platformFeaturePolicy),
      plan: await read("PLAN", "stage1") || structuredClone(stageOnePlanFeaturePolicy),
      organization: await read("ORGANIZATION", tenant.id) || structuredClone(defaultOrganizationFeaturePolicy),
      product,
    };
  }

  async updateOrganizationFeaturePolicy(tenantSlug: string, settings: FeatureAvailabilitySettings, actorId: string) {
    const result = await this.pool.query(`
      INSERT INTO feature_policy_sets (scope_type,scope_key,settings_json,updated_by,updated_at)
      SELECT 'ORGANIZATION',t.id,$1::jsonb,$2,$3::timestamptz FROM tenants t WHERE t.slug=$4
      ON CONFLICT(scope_type,scope_key) DO UPDATE SET settings_json=EXCLUDED.settings_json,updated_by=EXCLUDED.updated_by,updated_at=EXCLUDED.updated_at
    `, [JSON.stringify(settings), actorId, new Date().toISOString(), tenantSlug]);
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

  async saveProject(tenantSlug: string, id: string, shareId: string, document: ProjectDocument, expiresAt: string | null, author: ProjectAuthor) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const tenant = await client.query<PgRow>("SELECT id FROM tenants WHERE slug=$1", [tenantSlug]);
      if (!tenant.rows[0]) throw new Error("Tenant not found");
      const tenantId = asString(tenant.rows[0].id);
      const now = new Date().toISOString();
      await client.query("INSERT INTO saved_configurations (id,tenant_id,share_id,product_version_id,configuration_json,expires_at,created_at) VALUES ($1,$2,$3,$4,$5::jsonb,$6::timestamptz,$7::timestamptz)", [id, tenantId, shareId, document.configuration.productVersionId, JSON.stringify(document.configuration), expiresAt, now]);
      await client.query("INSERT INTO project_documents (project_id,tenant_id,current_version,project_json,created_by_kind,created_by_id,updated_at) VALUES ($1,$2,1,$3::jsonb,$4,$5,$6)", [id, tenantId, JSON.stringify(document), author.kind, author.id, now]);
      await client.query("INSERT INTO project_versions (id,project_id,tenant_id,version_number,project_json,author_kind,author_id,created_at) VALUES ($1,$2,$3,1,$4::jsonb,$5,$6,$7)", [randomUUID(), id, tenantId, JSON.stringify(document), author.kind, author.id, now]);
      await client.query("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,$5,'PROJECT_CREATED',$6::jsonb,$7)", [randomUUID(), tenantId, id, author.kind, author.id, JSON.stringify({ version: 1 }), now]);
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally { client.release(); }
  }

  async getProject(tenantSlug: string, shareId: string): Promise<ProjectRecord | null> {
    const result = await this.pool.query<PgRow>(`
      SELECT sc.*,pd.current_version,pd.project_json,pd.updated_at FROM saved_configurations sc
      JOIN tenants t ON t.id=sc.tenant_id LEFT JOIN project_documents pd ON pd.project_id=sc.id AND pd.tenant_id=sc.tenant_id
      WHERE t.slug=$1 AND sc.share_id=$2 AND (sc.expires_at IS NULL OR sc.expires_at>NOW())
    `, [tenantSlug, shareId]);
    const row = result.rows[0];
    if (!row) return null;
    const configuration = parseStoredJson<PublicConfiguration>(row.configuration_json);
    return {
      id: asString(row.id), shareId: asString(row.share_id), configuration,
      document: row.project_json ? parseStoredJson<ProjectDocument>(row.project_json) : legacyProject(configuration),
      currentVersion: Number(row.current_version || 1), createdAt: isoDate(row.created_at), updatedAt: row.updated_at ? isoDate(row.updated_at) : isoDate(row.created_at),
      expiresAt: row.expires_at ? isoDate(row.expires_at) : null,
    };
  }

  async isProjectShareTokenRevoked(tenantSlug: string, projectId: string) {
    const result = await this.pool.query(`
      SELECT 1 FROM project_share_revocations psr
      JOIN tenants t ON t.id=psr.tenant_id
      WHERE t.slug=$1 AND psr.project_id=$2
    `, [tenantSlug, projectId]);
    return Boolean(result.rows[0]);
  }

  async revokeProjectShareToken(tenantSlug: string, projectId: string, actor: ProjectAuthor) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const project = await client.query<PgRow>(`
        SELECT t.id tenant_id FROM saved_configurations sc
        JOIN tenants t ON t.id=sc.tenant_id
        WHERE t.slug=$1 AND sc.id=$2 FOR UPDATE
      `, [tenantSlug, projectId]);
      if (!project.rows[0]) { await client.query("ROLLBACK"); return false; }
      const now = new Date().toISOString();
      await client.query(`
        INSERT INTO project_share_revocations (project_id,tenant_id,revoked_by_kind,revoked_by_id,revoked_at)
        VALUES ($1,$2,$3,$4,$5) ON CONFLICT(project_id) DO NOTHING
      `, [projectId, project.rows[0].tenant_id, actor.kind, actor.id, now]);
      await client.query("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,$5,'PUBLIC_SHARE_REVOKED',$6::jsonb,$7)", [randomUUID(), project.rows[0].tenant_id, projectId, actor.kind, actor.id, JSON.stringify({ revokedAt: now }), now]);
      await client.query("COMMIT");
      return true;
    } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
  }

  async updateProject(tenantSlug: string, projectId: string, document: ProjectDocument, expectedVersion: number, author: ProjectAuthor, maxVersions: number) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const current = await client.query<PgRow>(`
        SELECT sc.share_id,sc.created_at,sc.expires_at,t.id tenant_id
        FROM saved_configurations sc JOIN tenants t ON t.id=sc.tenant_id
        WHERE t.slug=$1 AND sc.id=$2 FOR UPDATE
      `, [tenantSlug, projectId]);
      const row = current.rows[0];
      if (!row) { await client.query("ROLLBACK"); return null; }
      const projectDocument = await client.query<PgRow>(
        "SELECT current_version FROM project_documents WHERE project_id=$1 AND tenant_id=$2",
        [projectId, row.tenant_id],
      );
      const currentVersion = Number(projectDocument.rows[0]?.current_version || 1);
      if (currentVersion !== expectedVersion) { await client.query("ROLLBACK"); return "version_conflict" as const; }
      if (currentVersion >= maxVersions) { await client.query("ROLLBACK"); return "version_limit" as const; }
      const nextVersion = currentVersion + 1;
      const now = new Date().toISOString();
      await client.query("UPDATE saved_configurations SET product_version_id=$1,configuration_json=$2::jsonb WHERE id=$3", [document.configuration.productVersionId, JSON.stringify(document.configuration), projectId]);
      await client.query(`INSERT INTO project_documents (project_id,tenant_id,current_version,project_json,created_by_kind,created_by_id,updated_at) VALUES ($1,$2,$3,$4::jsonb,$5,$6,$7) ON CONFLICT(project_id) DO UPDATE SET current_version=EXCLUDED.current_version,project_json=EXCLUDED.project_json,updated_at=EXCLUDED.updated_at`, [projectId, row.tenant_id, nextVersion, JSON.stringify(document), author.kind, author.id, now]);
      await client.query("INSERT INTO project_versions (id,project_id,tenant_id,version_number,project_json,author_kind,author_id,created_at) VALUES ($1,$2,$3,$4,$5::jsonb,$6,$7,$8)", [randomUUID(), projectId, row.tenant_id, nextVersion, JSON.stringify(document), author.kind, author.id, now]);
      await client.query("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,$5,'PROJECT_VERSION_CREATED',$6::jsonb,$7)", [randomUUID(), row.tenant_id, projectId, author.kind, author.id, JSON.stringify({ version: nextVersion }), now]);
      await client.query("COMMIT");
      return this.getProject(tenantSlug, asString(row.share_id));
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally { client.release(); }
  }

  async listProjectVersions(tenantSlug: string, projectId: string) {
    const result = await this.pool.query<PgRow>(`SELECT pv.* FROM project_versions pv JOIN tenants t ON t.id=pv.tenant_id WHERE t.slug=$1 AND pv.project_id=$2 ORDER BY pv.version_number DESC`, [tenantSlug, projectId]);
    return result.rows.map((row): ProjectVersionRecord => ({ id: asString(row.id), projectId: asString(row.project_id), version: Number(row.version_number), document: parseStoredJson<ProjectDocument>(row.project_json), authorKind: asString(row.author_kind) as ProjectVersionRecord["authorKind"], authorId: row.author_id ? asString(row.author_id) : null, createdAt: isoDate(row.created_at) }));
  }

  async createPrivateAsset(tenantSlug: string, asset: PrivateAssetRecord, variants: Array<{ storageKey: string; name: string; mimeType: string; byteSize: number; width: number; height: number }>) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const inserted = await client.query(`
        INSERT INTO private_assets (id,tenant_id,project_id,kind,file_name,mime_type,byte_size,width,height,content_hash,storage_key,asset_format_version,status,created_by_kind,created_by_id,created_at,deleted_at)
        SELECT $1,t.id,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NULL FROM tenants t JOIN saved_configurations sc ON sc.tenant_id=t.id AND sc.id=$2 WHERE t.slug=$16 AND t.id=$17
      `, [asset.id, asset.projectId, asset.kind, asset.fileName, asset.mimeType, asset.byteSize, asset.width, asset.height, asset.contentHash, asset.storageKey, asset.assetFormatVersion, asset.status, asset.createdByKind, asset.createdById, asset.createdAt, tenantSlug, asset.tenantId]);
      if (!inserted.rowCount) { await client.query("ROLLBACK"); return false; }
      for (const variant of variants) await client.query("INSERT INTO private_asset_variants (asset_id,name,storage_key,mime_type,byte_size,width,height) VALUES ($1,$2,$3,$4,$5,$6,$7)", [asset.id, variant.name, variant.storageKey, variant.mimeType, variant.byteSize, variant.width, variant.height]);
      await client.query("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,$5,'PRIVATE_ASSET_CREATED',$6::jsonb,$7)", [randomUUID(), asset.tenantId, asset.projectId, asset.createdByKind, asset.createdById, JSON.stringify({ assetId: asset.id, kind: asset.kind, byteSize: asset.byteSize }), asset.createdAt]);
      await client.query("COMMIT");
      return true;
    } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
  }

  async getPrivateAsset(tenantSlug: string, assetId: string) {
    const result = await this.pool.query<PgRow>("SELECT pa.* FROM private_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=$1 AND pa.id=$2", [tenantSlug, assetId]);
    return result.rows[0] ? privateAssetFromRow(result.rows[0]) : null;
  }

  async listPrivateAssets(tenantSlug: string, projectId: string) {
    const result = await this.pool.query<PgRow>("SELECT pa.* FROM private_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=$1 AND pa.project_id=$2 ORDER BY pa.created_at DESC", [tenantSlug, projectId]);
    return result.rows.map(privateAssetFromRow);
  }

  async putPrivateAssetObject(tenantSlug: string, storageKey: string, content: Uint8Array) {
    const result = await this.pool.query(`INSERT INTO private_asset_objects (tenant_id,storage_key,content,updated_at) SELECT t.id,$1,$2,$3 FROM tenants t WHERE t.slug=$4 ON CONFLICT(tenant_id,storage_key) DO UPDATE SET content=EXCLUDED.content,updated_at=EXCLUDED.updated_at`, [storageKey, Buffer.from(content), new Date().toISOString(), tenantSlug]);
    if (!result.rowCount) throw new Error("Tenant not found");
  }

  async getPrivateAssetObject(tenantSlug: string, storageKey: string) {
    const result = await this.pool.query<PgRow>("SELECT pao.content FROM private_asset_objects pao JOIN tenants t ON t.id=pao.tenant_id WHERE t.slug=$1 AND pao.storage_key=$2", [tenantSlug, storageKey]);
    const content = result.rows[0]?.content;
    return content ? new Uint8Array(content as Buffer) : null;
  }

  async deletePrivateAsset(tenantSlug: string, projectId: string, assetId: string, actor: ProjectAuthor) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const asset = await client.query<PgRow>(`SELECT pa.*,t.id tenant_id FROM private_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=$1 AND pa.project_id=$2 AND pa.id=$3 AND pa.status='ACTIVE' FOR UPDATE`, [tenantSlug, projectId, assetId]);
      if (!asset.rows[0]) { await client.query("ROLLBACK"); return false; }
      const dependents = asset.rows[0].kind === "CUSTOMER_PHOTO"
        ? await client.query<PgRow>("SELECT id FROM private_assets WHERE tenant_id=$1 AND project_id=$2 AND kind='FOREGROUND_MASK' AND status='ACTIVE'", [asset.rows[0].tenant_id, projectId])
        : { rows: [] as PgRow[] };
      const assetIds = [assetId, ...dependents.rows.map((row) => asString(row.id))];
      const keys: PgRow[] = [];
      for (const id of assetIds) keys.push(...(await client.query<PgRow>("SELECT storage_key FROM private_asset_variants WHERE asset_id=$1", [id])).rows);
      const now = new Date().toISOString();
      for (const id of assetIds) await client.query("UPDATE private_assets SET status='DELETED',deleted_at=$1 WHERE id=$2", [now, id]);
      for (const key of keys) await client.query("DELETE FROM private_asset_objects WHERE tenant_id=$1 AND storage_key=$2", [asset.rows[0].tenant_id, key.storage_key]);
      await client.query("INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,$5,'PRIVATE_ASSET_DELETED',$6::jsonb,$7)", [randomUUID(), asset.rows[0].tenant_id, projectId, actor.kind, actor.id, JSON.stringify({ assetId, kind: asset.rows[0].kind, dependentAssetIds: assetIds.slice(1) }), now]);
      await client.query("COMMIT");
      return true;
    } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
  }

  async createProjectAuditEvent(tenantSlug: string, projectId: string | null, actor: ProjectAuthor, action: string, details: unknown) {
    const result = await this.pool.query(`INSERT INTO project_audit_events (id,tenant_id,project_id,actor_kind,actor_id,action,details_json,created_at) SELECT $1,t.id,$2,$3,$4,$5,$6::jsonb,$7 FROM tenants t WHERE t.slug=$8`, [randomUUID(), projectId, actor.kind, actor.id, action, JSON.stringify(details), new Date().toISOString(), tenantSlug]);
    if (!result.rowCount) throw new Error("Tenant not found");
  }

  async createExportJob(tenantSlug: string, jobId: string, projectId: string, format: "GLB" | "JSON", requestedBy: string) {
    const result = await this.pool.query(`
      INSERT INTO export_jobs (id,tenant_id,project_id,format,status,requested_by,created_at,completed_at)
      SELECT $1,t.id,$2,$3,'READY',$4,$5,NULL FROM tenants t
      JOIN saved_configurations sc ON sc.tenant_id=t.id AND sc.id=$2
      WHERE t.slug=$6
    `, [jobId, projectId, format, requestedBy, new Date().toISOString(), tenantSlug]);
    return Boolean(result.rowCount);
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
      SELECT au.id,au.email,au.password_hash,au.role FROM admin_users au JOIN tenants t ON t.id=au.tenant_id
      WHERE t.slug=$1 AND au.email=$2 AND au.active=TRUE
    `, [tenantSlug, email.toLowerCase()]);
    const row = result.rows[0];
    return row ? { id: asString(row.id), email: asString(row.email), passwordHash: asString(row.password_hash), role: asString(row.role) as AdminRole } : null;
  }

  async createSession(id: string, adminUserId: string, token: string, expiresAt: string) {
    await this.pool.query("INSERT INTO sessions (id,admin_user_id,token_hash,expires_at,created_at) VALUES ($1,$2,$3,$4,$5)", [id, adminUserId, hashToken(token), expiresAt, new Date().toISOString()]);
  }

  async getSession(token: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT s.id,s.admin_user_id,s.expires_at,t.slug tenant_slug,au.email,au.role
      FROM sessions s JOIN admin_users au ON au.id=s.admin_user_id JOIN tenants t ON t.id=au.tenant_id
      WHERE s.token_hash=$1 AND s.expires_at>NOW()
    `, [hashToken(token)]);
    const row = result.rows[0];
    return row ? {
      id: asString(row.id),
      adminUserId: asString(row.admin_user_id),
      tenantSlug: asString(row.tenant_slug),
      email: asString(row.email),
      role: asString(row.role) as AdminRole,
      expiresAt: isoDate(row.expires_at),
    } : null;
  }

  async deleteSession(token: string) {
    await this.pool.query("DELETE FROM sessions WHERE token_hash=$1", [hashToken(token)]);
  }

  async getProfileAssetStats(tenantSlug: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT COUNT(pa.id) active_count,COALESCE(SUM(pa.byte_size),0) active_bytes
      FROM tenants t LEFT JOIN profile_assets pa ON pa.tenant_id=t.id AND pa.status='ACTIVE'
      WHERE t.slug=$1 GROUP BY t.id
    `, [tenantSlug]);
    return { activeCount: Number(result.rows[0]?.active_count || 0), activeBytes: Number(result.rows[0]?.active_bytes || 0) };
  }

  async createProfileAsset(tenantSlug: string, asset: ProfileAssetRecord) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const inserted = await client.query(`
        INSERT INTO profile_assets (id,tenant_id,storage_key,file_name,mime_type,byte_size,content_hash,width_mm,height_mm,viewbox_json,profile_format_version,geometry_format_version,status,created_by,created_at,updated_at)
        SELECT $1,t.id,$2,$3,$4,$5::integer,$6,$7::double precision,$8::double precision,$9::jsonb,$10,$11,$12,$13,$14::timestamptz,$15::timestamptz FROM tenants t
        JOIN admin_users au ON au.tenant_id=t.id AND au.id=$13 AND au.active=TRUE
        WHERE t.slug=$16 AND t.id=$17
      `, [
        asset.id, asset.storageKey, asset.fileName, asset.mimeType, asset.byteSize, asset.contentHash,
        asset.widthMm, asset.heightMm, JSON.stringify(asset.viewBox), asset.profileFormatVersion,
        asset.geometryFormatVersion, asset.status, asset.createdBy, asset.createdAt, asset.updatedAt,
        tenantSlug, asset.tenantId,
      ]);
      if (!inserted.rowCount) {
        await client.query("ROLLBACK");
        return false;
      }
      await client.query("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,'CREATED',$5::jsonb,$6)", [
        randomUUID(), asset.tenantId, asset.id, asset.createdBy,
        JSON.stringify({ fileName: asset.fileName, byteSize: asset.byteSize, contentHash: asset.contentHash }), asset.createdAt,
      ]);
      await client.query("COMMIT");
      return true;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async listProfileAssets(tenantSlug: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT pa.* FROM profile_assets pa JOIN tenants t ON t.id=pa.tenant_id
      WHERE t.slug=$1 AND pa.status='ACTIVE' ORDER BY pa.created_at DESC,pa.id
    `, [tenantSlug]);
    return result.rows.map(profileAssetFromRow);
  }

  async getProfileAsset(tenantSlug: string, assetId: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT pa.* FROM profile_assets pa JOIN tenants t ON t.id=pa.tenant_id WHERE t.slug=$1 AND pa.id=$2
    `, [tenantSlug, assetId]);
    return result.rows[0] ? profileAssetFromRow(result.rows[0]) : null;
  }

  async putProfileAssetObject(tenantSlug: string, storageKey: string, content: string) {
    const now = new Date().toISOString();
    const result = await this.pool.query(`
      INSERT INTO profile_asset_objects (tenant_id,storage_key,content,created_at,updated_at)
      SELECT t.id,$1,$2,$3::timestamptz,$3::timestamptz FROM tenants t WHERE t.slug=$4
      ON CONFLICT(tenant_id,storage_key) DO UPDATE SET content=EXCLUDED.content,updated_at=EXCLUDED.updated_at
    `, [storageKey, content, now, tenantSlug]);
    if (!result.rowCount) throw new Error("Tenant not found");
  }

  async getProfileAssetObject(tenantSlug: string, storageKey: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT pao.content FROM profile_asset_objects pao JOIN tenants t ON t.id=pao.tenant_id
      WHERE t.slug=$1 AND pao.storage_key=$2
    `, [tenantSlug, storageKey]);
    return result.rows[0] ? asString(result.rows[0].content) : null;
  }

  async deleteProfileAssetObject(tenantSlug: string, storageKey: string) {
    await this.pool.query(`
      DELETE FROM profile_asset_objects WHERE storage_key=$1 AND tenant_id=(SELECT id FROM tenants WHERE slug=$2)
    `, [storageKey, tenantSlug]);
  }

  async retireProfileAsset(tenantSlug: string, assetId: string, actorId: string) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      const asset = await client.query<PgRow>(`
        SELECT pa.tenant_id FROM profile_assets pa JOIN tenants t ON t.id=pa.tenant_id
        WHERE t.slug=$1 AND pa.id=$2 AND pa.status='ACTIVE' FOR UPDATE
      `, [tenantSlug, assetId]);
      if (!asset.rows[0]) {
        await client.query("ROLLBACK");
        return "not_found" as const;
      }
      const tenantId = asString(asset.rows[0].tenant_id);
      if ((await client.query("SELECT 1 FROM profile_asset_links WHERE tenant_id=$1 AND asset_id=$2 LIMIT 1", [tenantId, assetId])).rowCount) {
        await client.query("ROLLBACK");
        return "referenced" as const;
      }
      const now = new Date().toISOString();
      await client.query("UPDATE profile_assets SET status='RETIRED',updated_at=$1 WHERE tenant_id=$2 AND id=$3", [now, tenantId, assetId]);
      await client.query("INSERT INTO profile_asset_audit (id,tenant_id,asset_id,actor_id,action,details_json,created_at) VALUES ($1,$2,$3,$4,'RETIRED','{}'::jsonb,$5)", [randomUUID(), tenantId, assetId, actorId, now]);
      await client.query("COMMIT");
      return "retired" as const;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async listProfileAssetAudit(tenantSlug: string, assetId?: string) {
    const result = await this.pool.query<PgRow>(`
      SELECT paa.*,au.email actor_email FROM profile_asset_audit paa
      JOIN tenants t ON t.id=paa.tenant_id JOIN admin_users au ON au.id=paa.actor_id
      WHERE t.slug=$1 AND ($2::text IS NULL OR paa.asset_id=$2) ORDER BY paa.created_at DESC,paa.id
    `, [tenantSlug, assetId ?? null]);
    return result.rows.map((row): ProfileAssetAuditRecord => ({
      id: asString(row.id),
      assetId: asString(row.asset_id),
      action: asString(row.action) as ProfileAssetAuditRecord["action"],
      actorId: asString(row.actor_id),
      actorEmail: asString(row.actor_email),
      details: parseStoredJson<unknown>(row.details_json),
      createdAt: isoDate(row.created_at),
    }));
  }

  async isProfileAssetPublic(tenantSlug: string, assetId: string) {
    const result = await this.pool.query(`
      SELECT 1 FROM profile_asset_links pal JOIN tenants t ON t.id=pal.tenant_id
      JOIN product_versions pv ON pv.id=pal.product_version_id
      WHERE t.slug=$1 AND pal.asset_id=$2 AND pv.status IN ('published','archived') LIMIT 1
    `, [tenantSlug, assetId]);
    return Boolean(result.rowCount);
  }
}
