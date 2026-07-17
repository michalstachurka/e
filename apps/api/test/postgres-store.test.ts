import assert from "node:assert/strict";
import { test } from "node:test";
import type { Pool } from "pg";
import { DataType, newDb } from "pg-mem";
import { createApp } from "../src/app.js";
import { createConfiguredStore, normalizeDatastoreDriver } from "../src/create-store.js";
import { PostgresConfiguratorDatabase } from "../src/postgres-database.js";
import { TenantProvisionError } from "../src/tenant-provisioning.js";

const configuration = {
  schemaVersion: "2.0" as const,
  tenantSlug: "pilot-pg",
  productType: "bioclimatic-pergola" as const,
  productVersionId: "pilot-pg-bioclimatic-pergola-v1",
  values: {
    construction: "freestanding" as const,
    moduleWidths: [4], depth: 3.2, height: 2.6, slatAngle: 35,
    frameColor: "anthracite", slatColor: "anthracite", screenColor: "piaskowy",
    ledLinear: false, ledSpots: false,
    screens: { front: false, back: false, left: false, right: false },
    glass: { front: false, back: false, left: false, right: false },
    extraLegs: [],
  },
};

test("PostgreSQL adapter preserves tenant isolation and version ownership", async () => {
  assert.equal(normalizeDatastoreDriver(undefined), "sqlite");
  assert.equal(normalizeDatastoreDriver("POSTGRES"), "postgres");
  assert.throws(() => normalizeDatastoreDriver("automatic"), /Unsupported DATASTORE/);
  await assert.rejects(createConfiguredStore({
    driver: "postgres",
    databasePath: ":memory:",
    adminEmail: "admin@example.invalid",
    adminPassword: "postgres-test-password",
  }), /DATABASE_URL is required/);
  await assert.rejects(createConfiguredStore({
    driver: "postgres",
    databasePath: ":memory:",
    databaseUrl: "postgresql://unused.invalid/database",
    databaseSslMode: "automatic",
    adminEmail: "admin@example.invalid",
    adminPassword: "postgres-test-password",
  }), /Unsupported DATABASE_SSL_MODE/);

  const memory = newDb({ autoCreateForeignKeyIndices: true, noAstCoverageCheck: true });
  memory.public.registerFunction({ name: "pg_advisory_xact_lock", args: [DataType.integer], returns: DataType.integer, implementation: () => 1 });
  const adapter = memory.adapters.createPg();
  const pool = new adapter.Pool() as unknown as Pool;
  await PostgresConfiguratorDatabase.create({
    pool,
    adminEmail: "admin@example.invalid",
    adminPassword: "postgres-test-password",
  });
  const store = await PostgresConfiguratorDatabase.create({
    pool,
    adminEmail: "admin@example.invalid",
    adminPassword: "postgres-test-password",
  });

  await store.provisionTenant({
    slug: "pilot-pg",
    name: "Pilot PostgreSQL",
    adminEmail: "pilot-pg@example.invalid",
    adminPassword: "pilot-postgres-password",
    domains: ["pilot.pg.test"],
  });
  const app = await createApp({
    databasePath: ":memory:",
    adminEmail: "unused@example.invalid",
    adminPassword: "unused-test-password",
    publicAppUrl: "http://localhost:5173/konfigurator.html",
    corsOrigins: ["http://localhost:5173"],
    store,
  });

  try {
    const migrations = await pool.query("SELECT version,name FROM schema_migrations ORDER BY version");
    assert.deepEqual(migrations.rows, [
      { version: 1, name: "initial_configurator_schema" },
      { version: 2, name: "tenant_profile_svg_assets" },
      { version: 3, name: "advisor_projects_private_assets_and_capabilities" },
    ]);
    assert.equal((await app.inject({ method: "GET", url: "/health" })).statusCode, 200);

    const runtime = await app.inject({ method: "GET", url: "/api/runtime-context", headers: { host: "pilot.pg.test" } });
    assert.deepEqual(runtime.json(), { tenantSlug: "pilot-pg", source: "domain", hostLocked: true });

    const catalog = await app.inject({ method: "GET", url: "/api/public/pilot-pg/configurator" });
    assert.equal(catalog.statusCode, 200);
    assert.equal(catalog.json().tenant.branding.companyName, "Pilot PostgreSQL");
    assert.ok(catalog.json().products.every((product: { id: string; version: { id: string } }) => product.id.includes("pilot-pg") && product.version.id.startsWith("pilot-pg-")));

    const saved = await app.inject({ method: "POST", url: "/api/public/pilot-pg/configurations", payload: { configuration, expiresInDays: 30 } });
    assert.equal(saved.statusCode, 201, saved.body);
    assert.match(saved.json().shareUrl, /^https:\/\/pilot\.pg\.test\/konfigurator\.html\?tenant=pilot-pg&project=/);
    const shareId = saved.json().shareId;
    assert.equal((await app.inject({ method: "GET", url: `/api/public/pilot-pg/configurations/${shareId}` })).statusCode, 200);
    assert.equal((await app.inject({ method: "GET", url: `/api/public/visnex/configurations/${shareId}` })).statusCode, 404);

    const login = await app.inject({ method: "POST", url: "/api/admin/pilot-pg/login", payload: { email: "pilot-pg@example.invalid", password: "pilot-postgres-password" } });
    assert.equal(login.statusCode, 200);
    const cookie = login.headers["set-cookie"];
    assert.ok(cookie);
    assert.equal((await app.inject({ method: "GET", url: "/api/admin/visnex/products", headers: { cookie } })).statusCode, 403);
    const featurePolicy = await app.inject({ method: "GET", url: "/api/admin/pilot-pg/features", headers: { cookie } });
    assert.equal(featurePolicy.statusCode, 200);
    assert.equal(featurePolicy.json().settings.advisor.advancedCalibration, true);
    const projectDocument = saved.json().project;
    projectDocument.scene.photoTransform.offsetY = 0.12;
    const projectUpdate = await app.inject({ method: "PUT", url: `/api/advisor/pilot-pg/projects/${shareId}`, headers: { cookie }, payload: { project: projectDocument, expectedVersion: 1 } });
    assert.equal(projectUpdate.statusCode, 200, projectUpdate.body);
    assert.equal(projectUpdate.json().currentVersion, 2);
    assert.equal((await app.inject({ method: "GET", url: `/api/advisor/pilot-pg/projects/${shareId}/versions`, headers: { cookie } })).json().versions.length, 2);

    const uploadedProfile = await app.inject({
      method: "POST",
      url: "/api/admin/pilot-pg/profile-assets",
      headers: { cookie },
      payload: { fileName: "postgres-profile.svg", svg: `<svg viewBox="0 0 120 80"><rect width="120" height="80"/></svg>`, profileFormatVersion: "1.0" },
    });
    assert.equal(uploadedProfile.statusCode, 201, uploadedProfile.body);
    const profileAsset = uploadedProfile.json().asset;
    assert.equal(profileAsset.widthMm, 120);
    assert.equal((await app.inject({ method: "GET", url: `/api/admin/pilot-pg/profile-assets/${profileAsset.id}/content`, headers: { cookie } })).statusCode, 200);
    assert.equal((await app.inject({ method: "GET", url: `/api/public/pilot-pg/profile-assets/${profileAsset.id}` })).statusCode, 404);

    const drafts = await app.inject({ method: "GET", url: "/api/admin/pilot-pg/products", headers: { cookie } });
    const pergolaDraft = drafts.json().products.find((product: { definition: { productType: string } }) => product.definition.productType === "bioclimatic-pergola");
    const updatedDefinition = {
      ...pergolaDraft.definition,
      name: "Pergola Pilot PG",
      pricing: pergolaDraft.pricing,
    };
    updatedDefinition.profiles[0] = {
      ...updatedDefinition.profiles[0],
      geometryType: "SVG_PROFILE",
      svgProfile: {
        assetId: profileAsset.id,
        extrusionLengthMm: 1000,
        widthMm: profileAsset.widthMm,
        heightMm: profileAsset.heightMm,
        viewBox: profileAsset.viewBox,
        rotationDeg: 0,
        mirrorX: false,
        mirrorY: false,
        profileFormatVersion: profileAsset.profileFormatVersion,
        geometryFormatVersion: profileAsset.geometryFormatVersion,
        contentHash: profileAsset.contentHash,
      },
    };
    const updated = await app.inject({ method: "PUT", url: "/api/admin/pilot-pg/products/bioclimatic-pergola", headers: { cookie }, payload: updatedDefinition });
    assert.equal(updated.statusCode, 200, updated.body);

    const pilotTenant = await store.getTenant("pilot-pg");
    const branding = { ...(pilotTenant?.branding as Record<string, unknown>), accentColor: "#7A2533" };
    const branded = await app.inject({ method: "PUT", url: "/api/admin/pilot-pg/branding", headers: { cookie }, payload: branding });
    assert.equal(branded.statusCode, 200, branded.body);

    const quote = await app.inject({ method: "POST", url: "/api/public/pilot-pg/quotes", payload: { configuration } });
    assert.equal(quote.statusCode, 201, quote.body);

    await store.publishProduct("visnex", "bioclimatic-pergola");
    await store.publishProduct("pilot-pg", "bioclimatic-pergola");
    assert.equal((await app.inject({ method: "GET", url: `/api/public/pilot-pg/profile-assets/${profileAsset.id}` })).statusCode, 200);
    const visnexDraft = await store.getProduct("visnex", "bioclimatic-pergola", "draft");
    const pilotDraft = await store.getProduct("pilot-pg", "bioclimatic-pergola", "draft");
    assert.equal(visnexDraft?.definition.version.id, "visnex-bioclimatic-pergola-draft-v3");
    assert.equal(pilotDraft?.definition.version.id, "pilot-pg-bioclimatic-pergola-draft-v3");
    assert.notEqual(visnexDraft?.definition.version.id, pilotDraft?.definition.version.id);
    assert.equal((await store.getProduct("pilot-pg", "bioclimatic-pergola", "published"))?.definition.name, "Pergola Pilot PG");
    assert.equal((await store.getTenant("pilot-pg"))?.branding && ((await store.getTenant("pilot-pg"))?.branding as { accentColor: string }).accentColor, "#7A2533");
    assert.equal((await app.inject({ method: "POST", url: "/api/public/pilot-pg/validate", payload: { configuration } })).statusCode, 200);

    await assert.rejects(
      store.provisionTenant({
        slug: "pilot-pg-rollback",
        name: "Rollback",
        adminEmail: "rollback@example.invalid",
        adminPassword: "rollback-postgres-password",
        domains: ["pilot.pg.test"],
      }),
      (error: unknown) => error instanceof TenantProvisionError && error.code === "domain_exists",
    );
    assert.equal(await store.getTenant("pilot-pg-rollback"), null);

    const logout = await app.inject({ method: "POST", url: "/api/admin/logout", headers: { cookie } });
    assert.equal(logout.statusCode, 200);
    assert.equal((await app.inject({ method: "GET", url: "/api/admin/me", headers: { cookie } })).statusCode, 401);
  } finally {
    await app.close();
  }
});
