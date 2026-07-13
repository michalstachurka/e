import "dotenv/config";
import { resolve } from "node:path";
import { createConfiguredStore, normalizeDatastoreDriver } from "./create-store.js";
import { TenantProvisionError } from "./tenant-provisioning.js";

function option(name: string) {
  const prefix = `--${name}=`;
  const index = process.argv.findIndex((value) => value === `--${name}` || value.startsWith(prefix));
  if (index < 0) return undefined;
  const first = process.argv[index] === `--${name}` ? process.argv[index + 1] || "" : process.argv[index].slice(prefix.length);
  const continuationStart = process.argv[index] === `--${name}` ? index + 2 : index + 1;
  const continuation: string[] = [];
  for (let cursor = continuationStart; cursor < process.argv.length && !process.argv[cursor].startsWith("--"); cursor += 1) {
    continuation.push(process.argv[cursor]);
  }
  return [first, ...continuation].join(" ").trim();
}

const slug = option("slug") || process.env.NEW_TENANT_SLUG || "";
const name = option("name") || process.env.NEW_TENANT_NAME || "";
const adminEmail = option("admin-email") || process.env.NEW_TENANT_ADMIN_EMAIL || "";
const adminPassword = process.env.NEW_TENANT_ADMIN_PASSWORD || "";
const domains = (option("domains") || process.env.NEW_TENANT_DOMAINS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

if (!slug || !name || !adminEmail || !adminPassword) {
  const missing = [!slug && "slug", !name && "name", !adminEmail && "admin-email", !adminPassword && "NEW_TENANT_ADMIN_PASSWORD"].filter(Boolean).join(", ");
  throw new Error(`Brak wymaganych danych: ${missing}. Użycie: NEW_TENANT_NAME=\"Klient A\" NEW_TENANT_ADMIN_PASSWORD=... npm run tenant:provision -- --slug=klient-a --admin-email=admin@example.com [--domains=konfigurator.example.com]`);
}

const seedPassword = process.env.ADMIN_SEED_PASSWORD;
if (!seedPassword || seedPassword.length < 12 || seedPassword.startsWith("replace-")) {
  throw new Error("ADMIN_SEED_PASSWORD musi być ustawione tak samo jak dla działającej usługi API.");
}

const volumePath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
const databasePath = process.env.DATABASE_PATH || (volumePath ? resolve(volumePath, "configurator.sqlite") : "./data/configurator.sqlite");
const driver = normalizeDatastoreDriver(process.env.DATASTORE);
const database = await createConfiguredStore({
  driver,
  databasePath,
  databaseUrl: process.env.DATABASE_URL,
  databaseSslMode: process.env.DATABASE_SSL_MODE,
  adminEmail: process.env.ADMIN_SEED_EMAIL || "admin@example.invalid",
  adminPassword: seedPassword,
});

try {
  const result = await database.provisionTenant({ slug, name, adminEmail, adminPassword, domains });
  console.log(JSON.stringify({
    tenantSlug: result.tenant.slug,
    tenantName: result.tenant.name,
    domains: result.domains,
    datastore: driver,
    ...(driver === "sqlite" ? { databasePath: databasePath === ":memory:" ? databasePath : resolve(databasePath) } : {}),
    nextStep: "Ustaw DNS domen. CORS_ORIGINS uzupełnij tylko wtedy, gdy frontend działa w osobnej usłudze.",
  }, null, 2));
} catch (error) {
  if (error instanceof TenantProvisionError) {
    throw new Error(`${error.code}: ${error.message}`);
  }
  throw error;
} finally {
  database.close();
}
