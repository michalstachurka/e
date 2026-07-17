export interface PostgresMigration {
  version: number;
  name: string;
  statements: string[];
}

export const postgresMigrations: PostgresMigration[] = [
  {
    version: 1,
    name: "initial_configurator_schema",
    statements: [
      `CREATE TABLE IF NOT EXISTS tenants (
        id TEXT PRIMARY KEY,
        slug TEXT NOT NULL CONSTRAINT tenants_slug_unique UNIQUE,
        name TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS tenant_domains (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        hostname TEXT NOT NULL CONSTRAINT tenant_domains_hostname_unique UNIQUE,
        status TEXT NOT NULL CHECK(status IN ('pending','active')),
        verified_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS admin_users (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        email TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        active BOOLEAN NOT NULL DEFAULT TRUE,
        created_at TIMESTAMPTZ NOT NULL,
        UNIQUE(tenant_id,email)
      )`,
      `CREATE TABLE IF NOT EXISTS branding_settings (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL CONSTRAINT branding_settings_tenant_unique UNIQUE REFERENCES tenants(id),
        settings_json JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS product_categories (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        name TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0
      )`,
      `CREATE TABLE IF NOT EXISTS product_types (
        id TEXT PRIMARY KEY,
        code TEXT NOT NULL CONSTRAINT product_types_code_unique UNIQUE,
        name TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS product_definitions (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        product_type_id TEXT NOT NULL REFERENCES product_types(id),
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        enabled BOOLEAN NOT NULL DEFAULT TRUE,
        sort_order INTEGER NOT NULL DEFAULT 0,
        UNIQUE(tenant_id,product_type_id)
      )`,
      `CREATE TABLE IF NOT EXISTS product_versions (
        id TEXT PRIMARY KEY,
        product_definition_id TEXT NOT NULL REFERENCES product_definitions(id),
        version_number INTEGER NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('draft','published','archived')),
        definition_json JSONB NOT NULL,
        pricing_json JSONB NOT NULL,
        bom_json JSONB NOT NULL,
        published_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL,
        UNIQUE(product_definition_id,version_number)
      )`,
      `CREATE TABLE IF NOT EXISTS parameter_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), key TEXT NOT NULL, definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS profile_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS material_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS color_definitions (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS option_groups (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS option_values (id TEXT PRIMARY KEY, option_group_id TEXT NOT NULL REFERENCES option_groups(id), definition_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS dependency_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS validation_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS pricing_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS bom_rules (id TEXT PRIMARY KEY, product_version_id TEXT NOT NULL REFERENCES product_versions(id), rule_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS pdf_templates (id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL REFERENCES tenants(id), template_json JSONB NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS saved_configurations (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        share_id TEXT NOT NULL CONSTRAINT saved_configurations_share_id_unique UNIQUE,
        product_version_id TEXT NOT NULL REFERENCES product_versions(id),
        configuration_json JSONB NOT NULL,
        expires_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS quotes (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        saved_configuration_id TEXT REFERENCES saved_configurations(id),
        quote_json JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS bom_documents (id TEXT PRIMARY KEY, quote_id TEXT NOT NULL REFERENCES quotes(id), bom_json JSONB NOT NULL, created_at TIMESTAMPTZ NOT NULL)`,
      `CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        admin_user_id TEXT NOT NULL REFERENCES admin_users(id),
        token_hash TEXT NOT NULL CONSTRAINT sessions_token_hash_unique UNIQUE,
        expires_at TIMESTAMPTZ NOT NULL,
        created_at TIMESTAMPTZ NOT NULL
      )`,
      `CREATE INDEX IF NOT EXISTS product_versions_lookup_idx ON product_versions(product_definition_id,status,version_number DESC)`,
      `CREATE INDEX IF NOT EXISTS saved_configurations_tenant_share_idx ON saved_configurations(tenant_id,share_id)`,
      `CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions(token_hash,expires_at)`,
    ],
  },
  {
    version: 2,
    name: "tenant_profile_svg_assets",
    statements: [
      `ALTER TABLE admin_users ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'OWNER' CHECK(role IN ('OWNER','ADMIN','EDITOR','VIEWER'))`,
      `CREATE TABLE IF NOT EXISTS profile_assets (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        storage_key TEXT NOT NULL,
        file_name TEXT NOT NULL,
        mime_type TEXT NOT NULL CHECK(mime_type='image/svg+xml'),
        byte_size INTEGER NOT NULL,
        content_hash TEXT NOT NULL,
        width_mm DOUBLE PRECISION NOT NULL,
        height_mm DOUBLE PRECISION NOT NULL,
        viewbox_json JSONB NOT NULL,
        profile_format_version TEXT NOT NULL,
        geometry_format_version TEXT NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('ACTIVE','RETIRED')),
        created_by TEXT NOT NULL REFERENCES admin_users(id),
        created_at TIMESTAMPTZ NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL,
        UNIQUE(tenant_id,id),
        UNIQUE(tenant_id,storage_key)
      )`,
      `CREATE TABLE IF NOT EXISTS profile_asset_objects (
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        storage_key TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL,
        PRIMARY KEY(tenant_id,storage_key)
      )`,
      `CREATE TABLE IF NOT EXISTS profile_asset_links (
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        asset_id TEXT NOT NULL,
        product_version_id TEXT NOT NULL REFERENCES product_versions(id),
        profile_id TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL,
        PRIMARY KEY(product_version_id,profile_id),
        FOREIGN KEY(tenant_id,asset_id) REFERENCES profile_assets(tenant_id,id)
      )`,
      `CREATE TABLE IF NOT EXISTS profile_asset_audit (
        id TEXT PRIMARY KEY,
        tenant_id TEXT NOT NULL REFERENCES tenants(id),
        asset_id TEXT NOT NULL,
        actor_id TEXT NOT NULL REFERENCES admin_users(id),
        action TEXT NOT NULL CHECK(action IN ('CREATED','RETIRED','CONFIGURED')),
        details_json JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL,
        FOREIGN KEY(tenant_id,asset_id) REFERENCES profile_assets(tenant_id,id)
      )`,
      `CREATE INDEX IF NOT EXISTS profile_assets_tenant_status_idx ON profile_assets(tenant_id,status,created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS profile_asset_links_asset_idx ON profile_asset_links(tenant_id,asset_id)`,
      `CREATE INDEX IF NOT EXISTS profile_asset_audit_lookup_idx ON profile_asset_audit(tenant_id,asset_id,created_at DESC)`,
    ],
  },
];
