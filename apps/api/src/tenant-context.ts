const tenantSlugPattern = /^[a-z0-9-]{2,50}$/;
const hostnamePattern = /^[a-z0-9.-]+$/;

const normalizeHostname = (value: string) => value.trim().toLowerCase().replace(/\.$/, "");

export function parseTenantHostMap(value: string | undefined) {
  const result: Record<string, string> = {};
  for (const entry of (value || "").split(",")) {
    const separator = entry.indexOf("=");
    if (separator < 1) continue;
    const hostname = normalizeHostname(entry.slice(0, separator));
    const tenantSlug = entry.slice(separator + 1).trim().toLowerCase();
    if (!hostnamePattern.test(hostname) || !tenantSlugPattern.test(tenantSlug)) continue;
    result[hostname] = tenantSlug;
  }
  return result;
}

export function tenantForHostname(hostname: string, hostMap: Record<string, string>) {
  return hostMap[normalizeHostname(hostname)] || null;
}
