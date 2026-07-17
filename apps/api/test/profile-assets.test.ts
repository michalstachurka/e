import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { after, before, test } from "node:test";
import type { FastifyInstance } from "fastify";
import { createApp } from "../src/app.js";
import { ConfiguratorDatabase } from "../src/database.js";

let app: FastifyInstance;
let database: ConfiguratorDatabase;
let cookie = "";
let otherCookie = "";
let gutterSvg = "";

before(async () => {
  gutterSvg = await readFile(new URL("../../../public/examples/profil-rynny.svg", import.meta.url), "utf8");
  database = await ConfiguratorDatabase.create({ path: ":memory:", adminEmail: "owner@example.invalid", adminPassword: "profile-test-password" });
  await database.provisionTenant({
    slug: "other-org",
    name: "Other Org",
    adminEmail: "other@example.invalid",
    adminPassword: "other-profile-password",
  });
  await database.provisionTenant({
    slug: "viewer-org",
    name: "Viewer Org",
    adminEmail: "viewer@example.invalid",
    adminPassword: "viewer-profile-password",
  });
  database.connection.prepare("UPDATE admin_users SET role='VIEWER' WHERE email='viewer@example.invalid'").run();
  app = await createApp({
    databasePath: ":memory:",
    adminEmail: "unused@example.invalid",
    adminPassword: "unused-test-password",
    publicAppUrl: "http://localhost:5173/konfigurator.html",
    corsOrigins: ["http://localhost:5173"],
    store: database,
  });
  const login = await app.inject({ method: "POST", url: "/api/admin/visnex/login", payload: { email: "owner@example.invalid", password: "profile-test-password" } });
  assert.equal(login.statusCode, 200, login.body);
  cookie = String(login.headers["set-cookie"]).split(";")[0];
  const otherLogin = await app.inject({ method: "POST", url: "/api/admin/other-org/login", payload: { email: "other@example.invalid", password: "other-profile-password" } });
  assert.equal(otherLogin.statusCode, 200, otherLogin.body);
  otherCookie = String(otherLogin.headers["set-cookie"]).split(";")[0];
});

after(async () => app.close());

async function upload(svg: string, fileName = "profil.svg", tenantCookie = cookie, tenant = "visnex") {
  return app.inject({
    method: "POST",
    url: `/api/admin/${tenant}/profile-assets`,
    headers: { cookie: tenantCookie },
    payload: { fileName, svg, profileFormatVersion: "1.0" },
  });
}

test("accepts and sanitizes a millimetre SVG profile", async () => {
  const response = await upload(gutterSvg, "rynna.svg");
  assert.equal(response.statusCode, 201, response.body);
  const { asset, validation } = response.json();
  assert.equal(asset.widthMm, 152);
  assert.equal(asset.heightMm, 91.36);
  assert.equal(asset.profileFormatVersion, "1.0");
  assert.equal(asset.geometryFormatVersion, "1.0");
  assert.match(asset.contentHash, /^[a-f0-9]{64}$/);
  assert.equal("storageKey" in asset, false);
  assert.equal("tenantId" in asset, false);
  assert.equal(validation.contourCount, 3);

  const content = await app.inject({ method: "GET", url: `/api/admin/visnex/profile-assets/${asset.id}/content`, headers: { cookie } });
  assert.equal(content.statusCode, 200);
  assert.equal(content.headers["content-type"], "image/svg+xml; charset=utf-8");
  assert.doesNotMatch(content.body, /<metadata/i);
  assert.doesNotMatch(content.body, /data-origin/i);
  assert.match(content.headers["content-security-policy"] || "", /default-src 'none'/);
});

test("preserves holes and rejects open or unsafe contours", async () => {
  const donut = `<svg viewBox="0 0 100 100"><path fill-rule="evenodd" d="M0 0H100V100H0Z M25 25H75V75H25Z"/></svg>`;
  const valid = await upload(donut, "otwor.svg");
  assert.equal(valid.statusCode, 201, valid.body);
  assert.equal(valid.json().validation.holeCount, 1);
  const supportedShapes = await upload(`<svg viewBox="0 0 100 100"><polygon points="0,0 20,0 10,20"/><rect x="25" width="20" height="20"/><circle cx="60" cy="10" r="10"/><ellipse cx="85" cy="10" rx="12" ry="8"/></svg>`, "ksztalty.svg");
  assert.equal(supportedShapes.statusCode, 201, supportedShapes.body);
  assert.equal(supportedShapes.json().validation.contourCount, 4);

  const cases = [
    { svg: `<svg viewBox="0 0 10 10"><path d="M0 0H10V10"/></svg>`, code: "open_contour" },
    { svg: `<svg viewBox="0 0 10 10"><script>alert(1)</script><rect width="10" height="10"/></svg>`, code: "unsupported_element" },
    { svg: `<svg viewBox="0 0 10 10"><rect onload="alert(1)" width="10" height="10"/></svg>`, code: "unsafe_attribute" },
    { svg: `<svg viewBox="0 0 10 10"><image href="https://example.invalid/x.png"/></svg>`, code: "unsupported_element" },
    { svg: `<svg viewBox="0 0 10 10"><path fill="none" stroke="black" d="M0 0H10V10H0Z"/></svg>`, code: "stroke_only" },
    { svg: `<svg><rect width="10" height="10"/></svg>`, code: "missing_viewbox" },
  ];
  for (const item of cases) {
    const rejected = await upload(item.svg);
    assert.equal(rejected.statusCode, 422, rejected.body);
    assert.equal(rejected.json().error, item.code);
  }
  const tooLarge = await upload(`<svg viewBox="0 0 10 10"><desc>${"x".repeat(1_049_000)}</desc><rect width="10" height="10"/></svg>`);
  assert.equal(tooLarge.statusCode, 413);
  assert.equal(tooLarge.json().error, "file_too_large");
});

test("links an immutable asset to a version and keeps it across edits", async () => {
  const uploaded = await upload(gutterSvg, "wersjonowana-rynna.svg");
  assert.equal(uploaded.statusCode, 201, uploaded.body);
  const asset = uploaded.json().asset;
  assert.equal((await app.inject({ method: "GET", url: `/api/public/visnex/profile-assets/${asset.id}` })).statusCode, 404);

  const drafts = await app.inject({ method: "GET", url: "/api/admin/visnex/products", headers: { cookie } });
  const product = drafts.json().products.find((item: { definition: { productType: string } }) => item.definition.productType === "bioclimatic-pergola");
  const definition = product.definition;
  const profile = definition.profiles.find((item: { id: string }) => item.id === "frame-beam");
  Object.assign(profile, {
    geometryType: "SVG_PROFILE",
    aMm: 999,
    bMm: 999,
    svgProfile: {
      assetId: asset.id,
      extrusionLengthMm: 1000,
      widthMm: 999,
      heightMm: 999,
      viewBox: { minX: 0, minY: 0, width: 999, height: 999 },
      rotationDeg: 0,
      mirrorX: false,
      mirrorY: false,
      profileFormatVersion: "1.0",
      geometryFormatVersion: "1.0",
      contentHash: "0".repeat(64),
    },
  });
  const payload = { ...definition, profiles: definition.profiles, pricing: product.pricing };
  const saved = await app.inject({ method: "PUT", url: "/api/admin/visnex/products/bioclimatic-pergola", headers: { cookie }, payload });
  assert.equal(saved.statusCode, 200, saved.body);
  const savedProfile = saved.json().product.definition.profiles.find((item: { id: string }) => item.id === "frame-beam");
  assert.equal(savedProfile.aMm, 152);
  assert.equal(savedProfile.bMm, 91.36);
  assert.equal(savedProfile.svgProfile.contentHash, asset.contentHash);

  const editPayload = { ...saved.json().product.definition, name: "Pergola z profilem", pricing: product.pricing };
  const edited = await app.inject({ method: "PUT", url: "/api/admin/visnex/products/bioclimatic-pergola", headers: { cookie }, payload: editPayload });
  assert.equal(edited.statusCode, 200, edited.body);
  assert.equal(edited.json().product.definition.profiles.find((item: { id: string }) => item.id === "frame-beam").svgProfile.assetId, asset.id);

  assert.equal((await app.inject({ method: "GET", url: `/api/admin/other-org/profile-assets/${asset.id}/content`, headers: { cookie: otherCookie } })).statusCode, 404);
  const otherDrafts = await app.inject({ method: "GET", url: "/api/admin/other-org/products", headers: { cookie: otherCookie } });
  const otherProduct = otherDrafts.json().products.find((item: { definition: { productType: string } }) => item.definition.productType === "bioclimatic-pergola");
  otherProduct.definition.profiles[0].geometryType = "SVG_PROFILE";
  otherProduct.definition.profiles[0].svgProfile = savedProfile.svgProfile;
  const crossTenantLink = await app.inject({ method: "PUT", url: "/api/admin/other-org/products/bioclimatic-pergola", headers: { cookie: otherCookie }, payload: { ...otherProduct.definition, pricing: otherProduct.pricing } });
  assert.equal(crossTenantLink.statusCode, 422);
  assert.equal(crossTenantLink.json().error, "profile_asset_unavailable");

  const published = await app.inject({ method: "POST", url: "/api/admin/visnex/products/bioclimatic-pergola/publish", headers: { cookie } });
  assert.equal(published.statusCode, 200, published.body);
  const publicContent = await app.inject({ method: "GET", url: `/api/public/visnex/profile-assets/${asset.id}` });
  assert.equal(publicContent.statusCode, 200);
  assert.match(publicContent.headers["cache-control"] || "", /immutable/);

  const deletion = await app.inject({ method: "DELETE", url: `/api/admin/visnex/profile-assets/${asset.id}`, headers: { cookie } });
  assert.equal(deletion.statusCode, 409);
  assert.equal(deletion.json().error, "profile_asset_in_use");
  const audit = await app.inject({ method: "GET", url: `/api/admin/visnex/profile-assets/audit?assetId=${asset.id}`, headers: { cookie } });
  assert.equal(audit.statusCode, 200);
  assert.ok(audit.json().audit.some((entry: { action: string }) => entry.action === "CREATED"));
  assert.ok(audit.json().audit.some((entry: { action: string }) => entry.action === "CONFIGURED"));
});

test("enforces role permissions and retires an unreferenced asset", async () => {
  const viewerLogin = await app.inject({ method: "POST", url: "/api/admin/viewer-org/login", payload: { email: "viewer@example.invalid", password: "viewer-profile-password" } });
  const viewerCookie = String(viewerLogin.headers["set-cookie"]);
  assert.equal(viewerLogin.json().role, "VIEWER");
  assert.equal((await upload(gutterSvg, "forbidden.svg", viewerCookie, "viewer-org")).statusCode, 403);
  assert.equal((await app.inject({ method: "GET", url: "/api/admin/viewer-org/profile-assets", headers: { cookie: viewerCookie } })).statusCode, 200);

  const unused = await upload(gutterSvg, "nieuzywany.svg");
  assert.equal(unused.statusCode, 201, unused.body);
  const assetId = unused.json().asset.id;
  const removed = await app.inject({ method: "DELETE", url: `/api/admin/visnex/profile-assets/${assetId}`, headers: { cookie } });
  assert.equal(removed.statusCode, 204, removed.body);
  assert.equal((await app.inject({ method: "GET", url: `/api/admin/visnex/profile-assets/${assetId}/content`, headers: { cookie } })).statusCode, 404);
});
