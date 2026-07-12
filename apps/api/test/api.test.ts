import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import type { FastifyInstance } from "fastify";
import { createApp } from "../src/app.js";
import { deriveVerandaSlope } from "../../../packages/configurator-core/src/domain.js";

let app: FastifyInstance;

before(async () => {
  app = await createApp({
    databasePath: ":memory:",
    adminEmail: "admin@example.invalid",
    adminPassword: "local-test-password",
    publicAppUrl: "http://localhost:5173/konfigurator.html",
    corsOrigins: ["http://localhost:5173"],
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

test("returns tenant catalog and product definition", async () => {
  const catalog = await app.inject({ method: "GET", url: "/api/public/visnex/configurator" });
  assert.equal(catalog.statusCode, 200);
  assert.equal(catalog.json().products.length, 2);
  const product = await app.inject({ method: "GET", url: "/api/public/visnex/products/veranda" });
  assert.equal(product.statusCode, 200);
  assert.equal(product.json().product.productType, "veranda");
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
    steps: definition.steps, parameters: definition.parameters, colors: definition.colors, visual: definition.visual, pricing: draft.pricing,
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
    values: { width: 4.5, depth: 3.2, backHeight: 2.95, frontHeight: slope.frontHeight, roofAngle: 7, roofFields: 4, rafterCount: 5, postCount: 3, roofMaterial: "clear-glass", leftWall: "none", rightWall: "none", frontWall: "none", frameColor: "anthracite", lighting: false },
  };
  const response = await app.inject({ method: "POST", url: "/api/public/visnex/validate", payload: { configuration } });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().derived.postPositions.length, 3);
});
