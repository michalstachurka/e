import assert from "node:assert/strict";
import test from "node:test";
import { buildTenantUrl, normalizeTenantSlug, resolveTenantContext } from "../../public/pergola-configurator/js/core/tenant-context.js";

const locationLike = (href) => {
  const url = new URL(href);
  return { href: url.href, hostname: url.hostname, search: url.search };
};

test("locks a mapped white-label host to its tenant", () => {
  const context = resolveTenantContext({
    runtimeConfig: { tenantSlug: "visnex", tenantHostMap: "Klient.Example.=klient-a" },
    locationLike: locationLike("https://klient.example/konfigurator.html?tenant=other-company"),
  });
  assert.deepEqual(context, { tenantSlug: "klient-a", source: "host", hostLocked: true });
});

test("lets a shared host select a tenant through a validated query", () => {
  const context = resolveTenantContext({
    runtimeConfig: { tenantSlug: "visnex" },
    serverContext: { tenantSlug: "visnex", hostLocked: false },
    locationLike: locationLike("https://app.example/konfigurator.html?tenant=klient-b"),
  });
  assert.deepEqual(context, { tenantSlug: "klient-b", source: "query", hostLocked: false });
});

test("rejects malformed tenant values and keeps the safe default", () => {
  const context = resolveTenantContext({
    runtimeConfig: { tenantSlug: "visnex" },
    locationLike: locationLike("https://app.example/konfigurator.html?tenant=../admin"),
  });
  assert.deepEqual(context, { tenantSlug: "visnex", source: "runtime-default", hostLocked: false });
  assert.equal(normalizeTenantSlug("A"), null);
});

test("server host mapping has priority over a query tenant", () => {
  const context = resolveTenantContext({
    runtimeConfig: { tenantSlug: "visnex" },
    serverContext: { tenantSlug: "white-label", hostLocked: true },
    locationLike: locationLike("https://brand.example/admin.html?tenant=visnex"),
  });
  assert.deepEqual(context, { tenantSlug: "white-label", source: "host", hostLocked: true });
});

test("builds tenant-aware same-origin links without losing the Vite base", () => {
  const result = buildTenantUrl("./konfigurator.html", "klient-a", locationLike("https://app.example/e/admin.html"));
  assert.equal(result, "/e/konfigurator.html?tenant=klient-a");
});
