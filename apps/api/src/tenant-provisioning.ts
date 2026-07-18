import { AdminLoginSchema, BrandingSettingsSchema } from "../../../packages/contracts/src/index.js";
import { tenantSeed } from "../../../packages/configurator-core/src/catalog.js";
import { hashPassword } from "./security.js";
import { normalizeHostname } from "./tenant-context.js";
import type { TenantProvisionInput } from "./store.js";

const tenantSlugPattern = /^[a-z0-9-]{2,50}$/;
const hostnameLabelPattern = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

function validHostname(value: string) {
  return value.length <= 253 && value.includes(".") && value.split(".").every((label) => hostnameLabelPattern.test(label));
}

export class TenantProvisionError extends Error {
  constructor(public readonly code: "invalid_tenant" | "tenant_exists" | "domain_exists", message: string) {
    super(message);
    this.name = "TenantProvisionError";
  }
}

export async function prepareTenantProvision(input: TenantProvisionInput) {
  const slug = input.slug.trim().toLowerCase();
  const name = input.name.trim();
  const login = AdminLoginSchema.safeParse({ email: input.adminEmail.trim().toLowerCase(), password: input.adminPassword });
  const domains = [...new Set((input.domains || []).map(normalizeHostname).filter(Boolean))];
  const branding = BrandingSettingsSchema.safeParse({
    ...tenantSeed.branding,
    companyName: name,
    logoText: name.slice(0, 40),
    contactEmail: input.adminEmail.trim().toLowerCase(),
    ...input.branding,
  });

  if (!tenantSlugPattern.test(slug) || !name || name.length > 120 || !login.success || !branding.success || domains.some((hostname) => !validHostname(hostname))) {
    throw new TenantProvisionError("invalid_tenant", "Tenant provisioning data is invalid");
  }

  return {
    slug,
    name,
    adminEmail: login.data.email,
    passwordHash: await hashPassword(login.data.password),
    domains,
    branding: branding.data,
    tenantId: `tenant-${slug}`,
    now: new Date().toISOString(),
  };
}

export function nextDraftVersionId(tenantSlug: string, productType: string, versionNumber: number) {
  return `${tenantSlug}-${productType}-draft-v${versionNumber}`;
}

export function parseStoredJson<T>(value: unknown): T {
  return (typeof value === "string" ? JSON.parse(value) : value) as T;
}

export function isoDate(value: unknown) {
  if (value instanceof Date) return value.toISOString();
  return String(value ?? "");
}
