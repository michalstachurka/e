import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import type { FastifyInstance } from "fastify";
import { createApp } from "../src/app.js";
import { ConfiguratorDatabase, TenantProvisionError } from "../src/database.js";
import { parseTenantHostMap } from "../src/tenant-context.js";
import { deriveVerandaSlope } from "../../../packages/configurator-core/src/domain.js";

let app: FastifyInstance;
let database: ConfiguratorDatabase;

before(async () => {
  database = await ConfiguratorDatabase.create({
    path: ":memory:",
    adminEmail: "admin@example.invalid",
    adminPassword: "local-test-password",
  });
  await database.provisionTenant({
    slug: "pilot-a",
    name: "Pilot A",
    adminEmail: "pilot-admin@example.invalid",
    adminPassword: "pilot-local-password",
    domains: ["pilot.db.test"],
  });
  app = await createApp({
    databasePath: ":memory:",
    adminEmail: "admin@example.invalid",
    adminPassword: "local-test-password",
    publicAppUrl: "http://localhost:5173/konfigurator.html",
    corsOrigins: ["http://localhost:5173"],
    defaultTenantSlug: "visnex",
    tenantHostMap: { "pilot.example.test": "visnex", "pilot.db.test": "visnex", "missing.example.test": "missing-tenant" },
    store: database,
  });
});

after(async () => app.close());

const pergolaConfiguration = {
  schemaVersion: "2.0",
  tenantSlug: "visnex",
  productType: "bioclimatic-pergola",
  productVersionId: "visnex-bioclimatic-v1",
  values: {
    construction: "freestanding",
    moduleWidths: [4], depth: 3.2, height: 2.6, slatAngle: 35,
    frameColor: "anthracite", slatColor: "anthracite", screenColor: "piaskowy",
    ledLinear: false, ledSpots: false,
    screens: { front: false, back: false, left: false, right: false },
    glass: { front: false, back: false, left: false, right: false },
    extraLegs: [],
  },
};

test("resolves and locks tenant context for mapped custom domains", async () => {
  assert.deepEqual(parseTenantHostMap("Pilot.Example.Test.=visnex,invalid=/admin"), { "pilot.example.test": "visnex" });
  const shared = await app.inject({ method: "GET", url: "/api/runtime-context", headers: { host: "shared.example.test" } });
  assert.equal(shared.statusCode, 200);
  assert.deepEqual(shared.json(), { tenantSlug: "visnex", source: "default", hostLocked: false });
  assert.equal(shared.headers["cache-control"], "no-store");
  assert.equal(shared.headers.vary, "Host");

  const mapped = await app.inject({ method: "GET", url: "/api/runtime-context", headers: { host: "pilot.example.test" } });
  assert.equal(mapped.statusCode, 200);
  assert.deepEqual(mapped.json(), { tenantSlug: "visnex", source: "host", hostLocked: true });

  const provisionedDomain = await app.inject({ method: "GET", url: "/api/runtime-context", headers: { host: "pilot.db.test" } });
  assert.equal(provisionedDomain.statusCode, 200);
  assert.deepEqual(provisionedDomain.json(), { tenantSlug: "pilot-a", source: "domain", hostLocked: true });

  const unavailable = await app.inject({ method: "GET", url: "/api/runtime-context", headers: { host: "missing.example.test" } });
  assert.equal(unavailable.statusCode, 503);
  assert.equal(unavailable.json().error, "mapped_tenant_unavailable");
});

test("provisions a fully isolated pilot tenant transactionally", async () => {
  const catalog = await app.inject({ method: "GET", url: "/api/public/pilot-a/configurator" });
  assert.equal(catalog.statusCode, 200);
  assert.equal(catalog.json().tenant.name, "Pilot A");
  assert.equal(catalog.json().tenant.branding.companyName, "Pilot A");
  assert.equal(catalog.json().products.length, 2);
  assert.ok(catalog.json().products.every((product: { id: string; version: { id: string } }) => product.id.includes("pilot-a") && product.version.id.startsWith("pilot-a-")));

  const configuration = structuredClone(pergolaConfiguration);
  configuration.tenantSlug = "pilot-a";
  configuration.productVersionId = "pilot-a-bioclimatic-pergola-v1";
  const saved = await app.inject({ method: "POST", url: "/api/public/pilot-a/configurations", payload: { configuration, expiresInDays: 30 } });
  assert.equal(saved.statusCode, 201);
  assert.match(saved.json().shareUrl, /^https:\/\/pilot\.db\.test\/konfigurator\.html\?tenant=pilot-a&project=/);
  const shareId = saved.json().shareId;
  assert.equal((await app.inject({ method: "GET", url: `/api/public/pilot-a/configurations/${shareId}` })).statusCode, 200);
  assert.equal((await app.inject({ method: "GET", url: `/api/public/visnex/configurations/${shareId}` })).statusCode, 404);

  const login = await app.inject({ method: "POST", url: "/api/admin/pilot-a/login", payload: { email: "pilot-admin@example.invalid", password: "pilot-local-password" } });
  assert.equal(login.statusCode, 200);
  const cookie = login.headers["set-cookie"];
  assert.ok(cookie);
  assert.equal((await app.inject({ method: "GET", url: "/api/admin/pilot-a/products", headers: { cookie } })).statusCode, 200);
  assert.equal((await app.inject({ method: "GET", url: "/api/admin/visnex/products", headers: { cookie } })).statusCode, 403);

  await assert.rejects(
    database.provisionTenant({
      slug: "pilot-rollback",
      name: "Pilot Rollback",
      adminEmail: "rollback@example.invalid",
      adminPassword: "rollback-password",
      domains: ["pilot.db.test"],
    }),
    (error: unknown) => error instanceof TenantProvisionError && error.code === "domain_exists",
  );
  assert.equal(database.getTenant("pilot-rollback"), null);
});

test("returns tenant catalog and product definition", async () => {
  const catalog = await app.inject({ method: "GET", url: "/api/public/visnex/configurator" });
  assert.equal(catalog.statusCode, 200);
  assert.equal(catalog.json().products.length, 2);
  const product = await app.inject({ method: "GET", url: "/api/public/visnex/products/veranda" });
  assert.equal(product.statusCode, 200);
  assert.equal(product.json().product.productType, "veranda");
});

test("allows authenticated admin updates through CORS", async () => {
  const response = await app.inject({
    method: "OPTIONS",
    url: "/api/admin/visnex/products/bioclimatic-pergola",
    headers: {
      origin: "http://localhost:5173",
      "access-control-request-method": "PUT",
      "access-control-request-headers": "content-type",
    },
  });
  assert.equal(response.statusCode, 204);
  assert.match(String(response.headers["access-control-allow-methods"]), /PUT/);
  assert.equal(response.headers["access-control-allow-credentials"], "true");
});

test("validates valid and invalid configurations", async () => {
  const valid = await app.inject({ method: "POST", url: "/api/public/visnex/validate", payload: { configuration: pergolaConfiguration } });
  assert.equal(valid.statusCode, 200);
  const invalid = structuredClone(pergolaConfiguration);
  invalid.values.depth = 8;
  const rejected = await app.inject({ method: "POST", url: "/api/public/visnex/validate", payload: { configuration: invalid } });
  assert.equal(rejected.statusCode, 422);
});

test("saves and restores a project using an unpredictable share id", async () => {
  const saved = await app.inject({ method: "POST", url: "/api/public/visnex/configurations", payload: { configuration: pergolaConfiguration, expiresInDays: 30 } });
  assert.equal(saved.statusCode, 201);
  const body = saved.json();
  assert.match(body.shareId, /^[A-Za-z0-9_-]{20,40}$/);
  assert.ok(!body.shareUrl.includes("moduleWidths"));
  const restored = await app.inject({ method: "GET", url: `/api/public/visnex/configurations/${body.shareId}` });
  assert.equal(restored.statusCode, 200);
  assert.deepEqual(restored.json().configuration.values.moduleWidths, [4]);
  const crossTenantRestore = await app.inject({ method: "GET", url: `/api/public/other-company/configurations/${body.shareId}` });
  assert.equal(crossTenantRestore.statusCode, 404);
});

test("rejects a configuration whose tenant differs from the route", async () => {
  const mismatchedConfiguration = { ...pergolaConfiguration, tenantSlug: "other-company" };
  for (const endpoint of ["validate", "configurations", "quotes", "pdf"]) {
    const response = await app.inject({
      method: "POST",
      url: `/api/public/visnex/${endpoint}`,
      payload: endpoint === "configurations"
        ? { configuration: mismatchedConfiguration, expiresInDays: 30 }
        : { configuration: mismatchedConfiguration },
    });
    assert.equal(response.statusCode, 400, endpoint);
    assert.equal(response.json().error, "tenant_mismatch", endpoint);
  }
});

test("generates a demo quote, public BOM and server PDF", async () => {
  const quote = await app.inject({ method: "POST", url: "/api/public/visnex/quotes", payload: { configuration: pergolaConfiguration } });
  assert.equal(quote.statusCode, 201);
  assert.equal(quote.json().quote.demoOnly, true);
  assert.equal(quote.json().bom.demoOnly, true);
  const pdf = await app.inject({ method: "POST", url: "/api/public/visnex/pdf", payload: { configuration: pergolaConfiguration } });
  assert.equal(pdf.statusCode, 200);
  assert.equal(pdf.headers["content-type"], "application/pdf");
  assert.equal(pdf.rawPayload.subarray(0, 4).toString(), "%PDF");
});

test("protects admin routes and allows an authenticated draft read", async () => {
  const protectedResponse = await app.inject({ method: "GET", url: "/api/admin/visnex/products" });
  assert.equal(protectedResponse.statusCode, 401);
  const login = await app.inject({ method: "POST", url: "/api/admin/visnex/login", payload: { email: "admin@example.invalid", password: "local-test-password" } });
  assert.equal(login.statusCode, 200);
  const cookie = login.headers["set-cookie"];
  assert.ok(cookie);
  const products = await app.inject({ method: "GET", url: "/api/admin/visnex/products", headers: { cookie } });
  assert.equal(products.statusCode, 200);
  assert.equal(products.json().products[0].definition.version.status, "draft");

  const crossTenantRequests = [
    { method: "GET" as const, url: "/api/admin/other-company/products" },
    { method: "PUT" as const, url: "/api/admin/other-company/branding", payload: {} },
    { method: "POST" as const, url: "/api/admin/other-company/products/bioclimatic-pergola/publish" },
  ];
  for (const crossTenantRequest of crossTenantRequests) {
    const response = await app.inject({ ...crossTenantRequest, headers: { cookie } });
    assert.equal(response.statusCode, 403, crossTenantRequest.url);
    assert.equal(response.json().error, "tenant_forbidden", crossTenantRequest.url);
  }
});

test("publishes a new version while archived configurations remain valid", async () => {
  const login = await app.inject({ method: "POST", url: "/api/admin/visnex/login", payload: { email: "admin@example.invalid", password: "local-test-password" } });
  const cookie = login.headers["set-cookie"];
  const draftResponse = await app.inject({ method: "GET", url: "/api/admin/visnex/products", headers: { cookie } });
  const draft = draftResponse.json().products.find((product: { definition: { productType: string } }) => product.definition.productType === "bioclimatic-pergola");
  const definition = draft.definition;
  const update = {
    name: `${definition.name} test`, description: definition.description, enabled: definition.enabled, order: definition.order,
    steps: definition.steps, parameters: definition.parameters, profiles: definition.profiles, colors: definition.colors, visual: definition.visual, pricing: draft.pricing,
  };
  const saved = await app.inject({ method: "PUT", url: "/api/admin/visnex/products/bioclimatic-pergola", headers: { cookie }, payload: update });
  assert.equal(saved.statusCode, 200);
  const published = await app.inject({ method: "POST", url: "/api/admin/visnex/products/bioclimatic-pergola/publish", headers: { cookie } });
  assert.equal(published.statusCode, 200);
  const catalog = await app.inject({ method: "GET", url: "/api/public/visnex/configurator" });
  const publicPergola = catalog.json().products.find((product: { productType: string }) => product.productType === "bioclimatic-pergola");
  assert.equal(publicPergola.version.number, 2);
  const archivedValidation = await app.inject({ method: "POST", url: "/api/public/visnex/validate", payload: { configuration: pergolaConfiguration } });
  assert.equal(archivedValidation.statusCode, 200);
});

test("validates the coupled veranda slope", async () => {
  const slope = deriveVerandaSlope(3.2, 2.95, 7);
  const configuration = {
    schemaVersion: "2.0", tenantSlug: "visnex", productType: "veranda", productVersionId: "visnex-veranda-v1",
    values: { width: 4.5, depth: 3.2, backHeight: 2.95, frontHeight: slope.frontHeight, roofAngle: 7, roofFields: 4, rafterCount: 5, postCount: 3, roofMaterial: "clear-glass", leftWall: "zip-screen", rightWall: "none", frontWall: "none", leftTriangle: "solid", rightTriangle: "none", leftScreenSupport: true, rightScreenSupport: false, frameColor: "anthracite", lighting: false },
  };
  const response = await app.inject({ method: "POST", url: "/api/public/visnex/validate", payload: { configuration } });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().derived.postPositions.length, 3);
  const quote = await app.inject({ method: "POST", url: "/api/public/visnex/quotes", payload: { configuration } });
  assert.equal(quote.statusCode, 201);
  assert.ok(quote.json().bom.items.some((item: { label: string }) => item.label === "Profil podpierający kasetę rolety"));
});
