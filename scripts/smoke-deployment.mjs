import assert from "node:assert/strict";

const rawBaseUrl = process.argv[2] || process.env.DEPLOYMENT_URL;
if (!rawBaseUrl) {
  throw new Error("Podaj DEPLOYMENT_URL lub adres jako pierwszy argument, np. npm run test:deployment -- https://example.com");
}

const baseUrl = new URL(rawBaseUrl);
if (!new Set(["http:", "https:"]).has(baseUrl.protocol)) throw new Error("DEPLOYMENT_URL musi używać HTTP lub HTTPS.");
baseUrl.pathname = baseUrl.pathname.replace(/\/$/, "");
baseUrl.search = "";
baseUrl.hash = "";

const tenantSlug = process.env.TENANT_SLUG || "visnex";
const adminEmail = process.env.SMOKE_ADMIN_EMAIL;
const adminPassword = process.env.SMOKE_ADMIN_PASSWORD;
if (Boolean(adminEmail) !== Boolean(adminPassword)) {
  throw new Error("SMOKE_ADMIN_EMAIL i SMOKE_ADMIN_PASSWORD muszą być ustawione razem.");
}

const checks = [];
const endpoint = (path) => new URL(path.replace(/^\//, ""), `${baseUrl.toString().replace(/\/$/, "")}/`);

async function request(path, options = {}, expectedStatus = 200) {
  const method = options.method || "GET";
  const url = endpoint(path);
  const response = await fetch(url, {
    ...options,
    headers: options.body
      ? { "Content-Type": "application/json", ...options.headers }
      : options.headers,
    body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body,
    signal: AbortSignal.timeout(20_000),
  });
  const text = await response.text();
  assert.equal(response.status, expectedStatus, `${method} ${url} zwrócił ${response.status}: ${text.slice(0, 300)}`);
  checks.push(`${method} ${url.pathname} ${response.status}`);
  const contentType = response.headers.get("content-type") || "";
  return { response, text, data: contentType.includes("application/json") ? JSON.parse(text) : null };
}

const health = await request("/health");
assert.equal(health.data?.status, "ok");

const runtimeContext = await request("/api/runtime-context");
assert.equal(runtimeContext.data?.tenantSlug, tenantSlug, "Runtime przypisał wdrożenie do innego tenanta.");
assert.equal(typeof runtimeContext.data?.hostLocked, "boolean");

const landing = await request("/");
assert.ok(landing.text.includes("visNEX"), "Strona główna nie zawiera marki visNEX.");

const configurator = await request("/konfigurator.html");
assert.ok(configurator.text.includes("Konfigurator osłon 3D"), "Brak strony modułowego konfiguratora.");
assert.ok(/apiBaseUrl:\s*(?:existing\.apiBaseUrl\s*\?\?\s*)?["']same-origin["']/.test(configurator.text), "Konfigurator nie korzysta z API pod tą samą domeną.");

const admin = await request("/admin.html");
assert.ok(admin.text.includes("Panel konfiguratora"), "Brak strony panelu konfiguratora.");

await request("/pergola-configurator/js/pergola-configurator.js");
await request("/pergola-configurator/js/core/tenant-context.js");
await request("/pergola-configurator/css/style.css");
await request("/pergola-configurator/assets/vendor/three/three.module.js");

const catalog = await request(`/api/public/${encodeURIComponent(tenantSlug)}/configurator`);
assert.ok(Array.isArray(catalog.data?.products) && catalog.data.products.length > 0, "Publiczny katalog nie zawiera produktów.");
assert.ok(catalog.data.products.every((product) => product.version?.id), "Produkt bez wersji w publicznym katalogu.");

const tenantBoundary = await request(`/api/public/${encodeURIComponent(tenantSlug)}/validate`, {
  method: "POST",
  body: { configuration: { tenantSlug: "smoke-other-tenant" } },
}, 400);
assert.equal(tenantBoundary.data?.error, "tenant_mismatch");

if (adminEmail && adminPassword) {
  const login = await request(`/api/admin/${encodeURIComponent(tenantSlug)}/login`, {
    method: "POST",
    body: { email: adminEmail, password: adminPassword },
  });
  assert.equal(login.data?.authenticated, true);
  const cookie = login.response.headers.get("set-cookie")?.split(";", 1)[0];
  assert.ok(cookie, "Logowanie administratora nie zwróciło cookie sesji.");

  const me = await request("/api/admin/me", { headers: { Cookie: cookie } });
  assert.equal(me.data?.tenantSlug, tenantSlug);
  const products = await request(`/api/admin/${encodeURIComponent(tenantSlug)}/products`, { headers: { Cookie: cookie } });
  assert.ok(Array.isArray(products.data?.products) && products.data.products.length > 0, "Panel nie zwrócił produktów.");
}

console.log(JSON.stringify({
  target: baseUrl.origin,
  tenantSlug,
  adminCheck: Boolean(adminEmail),
  checks,
}, null, 2));
