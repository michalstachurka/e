const TENANT_SLUG_PATTERN = /^[a-z0-9-]{2,50}$/;

export function normalizeTenantSlug(value) {
  const slug = String(value || "").trim().toLowerCase();
  return TENANT_SLUG_PATTERN.test(slug) ? slug : null;
}

function normalizeHostname(value) {
  return String(value || "").trim().toLowerCase().replace(/\.$/, "");
}

function parseHostMap(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.fromEntries(Object.entries(value).map(([host, slug]) => [normalizeHostname(host), normalizeTenantSlug(slug)]).filter(([, slug]) => slug));
  }
  if (typeof value !== "string" || !value.trim() || value.startsWith("%VITE_")) return {};
  return Object.fromEntries(value.split(",").map((entry) => {
    const separator = entry.indexOf("=");
    if (separator < 1) return ["", null];
    return [normalizeHostname(entry.slice(0, separator)), normalizeTenantSlug(entry.slice(separator + 1))];
  }).filter(([host, slug]) => host && slug));
}

export function resolveTenantContext({ runtimeConfig = {}, serverContext = null, locationLike = globalThis.location } = {}) {
  const hostname = normalizeHostname(locationLike?.hostname);
  const localHostTenant = parseHostMap(runtimeConfig.tenantHostMap)[hostname];
  const serverTenant = normalizeTenantSlug(serverContext?.tenantSlug);

  if (serverContext?.hostLocked === true && serverTenant) {
    return Object.freeze({ tenantSlug: serverTenant, source: "host", hostLocked: true });
  }
  if (localHostTenant) {
    return Object.freeze({ tenantSlug: localHostTenant, source: "host", hostLocked: true });
  }

  let queryTenant = null;
  try {
    queryTenant = normalizeTenantSlug(new URLSearchParams(locationLike?.search || "").get("tenant"));
  } catch { /* malformed locations fall back to the configured tenant */ }
  if (queryTenant) return Object.freeze({ tenantSlug: queryTenant, source: "query", hostLocked: false });
  if (serverTenant) return Object.freeze({ tenantSlug: serverTenant, source: "server-default", hostLocked: false });

  const configuredTenant = normalizeTenantSlug(runtimeConfig.tenantSlug);
  return Object.freeze({ tenantSlug: configuredTenant || "visnex", source: configuredTenant ? "runtime-default" : "fallback", hostLocked: false });
}

export function buildTenantUrl(href, tenantSlug, locationLike = globalThis.location) {
  const safeTenant = normalizeTenantSlug(tenantSlug);
  if (!safeTenant) throw new TypeError("Invalid tenant slug");
  const baseHref = locationLike?.href || "http://localhost/";
  const base = new URL(baseHref);
  const target = new URL(href, base);
  target.searchParams.set("tenant", safeTenant);
  return target.origin === base.origin ? `${target.pathname}${target.search}${target.hash}` : target.toString();
}
