import "dotenv/config";
import fastifyStatic from "@fastify/static";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { createApp } from "./app.js";
import { createConfiguredStore } from "./create-store.js";
import { parseTenantHostMap } from "./tenant-context.js";
import { StaticProfileAssetLimitProvider } from "./profile-assets.js";
import { defaultProfileAssetLimits } from "./profile-svg.js";

function positiveEnvNumber(name: string, fallback: number) {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${name} must be a positive number`);
  return value;
}

const adminPassword = process.env.ADMIN_SEED_PASSWORD;
if (!adminPassword || adminPassword.length < 12 || adminPassword.startsWith("replace-")) {
  throw new Error("Set ADMIN_SEED_PASSWORD to a local password with at least 12 characters.");
}

const railwayOrigin = process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : "";
const publicAppUrl = process.env.PUBLIC_APP_URL || (railwayOrigin ? `${railwayOrigin}/konfigurator.html` : "http://localhost:5173/konfigurator.html");
const corsOrigins = (process.env.CORS_ORIGINS || railwayOrigin || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const volumePath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
const databasePath = process.env.DATABASE_PATH || (volumePath ? resolve(volumePath, "configurator.sqlite") : "./data/configurator.sqlite");
const store = await createConfiguredStore({
  driver: process.env.DATASTORE,
  databasePath,
  databaseUrl: process.env.DATABASE_URL,
  databaseSslMode: process.env.DATABASE_SSL_MODE,
  adminEmail: process.env.ADMIN_SEED_EMAIL || "admin@example.invalid",
  adminPassword,
});

const app = await createApp({
  databasePath,
  adminEmail: process.env.ADMIN_SEED_EMAIL || "admin@example.invalid",
  adminPassword,
  publicAppUrl,
  corsOrigins,
  sessionTtlHours: Number(process.env.SESSION_TTL_HOURS || 12),
  secureCookies: process.env.NODE_ENV === "production",
  logger: true,
  defaultTenantSlug: process.env.DEFAULT_TENANT_SLUG || "visnex",
  tenantHostMap: parseTenantHostMap(process.env.TENANT_HOST_MAP),
  profileAssetLimitProvider: new StaticProfileAssetLimitProvider({
    maxFileBytes: positiveEnvNumber("PROFILE_ASSET_MAX_BYTES", defaultProfileAssetLimits.maxFileBytes),
    maxProfilesPerTenant: positiveEnvNumber("PROFILE_ASSET_MAX_COUNT", defaultProfileAssetLimits.maxProfilesPerTenant),
    maxStorageBytesPerTenant: positiveEnvNumber("PROFILE_ASSET_MAX_TOTAL_BYTES", defaultProfileAssetLimits.maxStorageBytesPerTenant),
    maxDimensionMm: positiveEnvNumber("PROFILE_MAX_DIMENSION_MM", defaultProfileAssetLimits.maxDimensionMm),
    maxExtrusionLengthMm: positiveEnvNumber("PROFILE_MAX_EXTRUSION_MM", defaultProfileAssetLimits.maxExtrusionLengthMm),
  }),
  store,
});

const staticRoot = resolve(process.cwd(), "dist");
if (existsSync(staticRoot)) {
  await app.register(fastifyStatic, {
    root: staticRoot,
    prefix: "/",
  });
}

const host = process.env.API_HOST || (process.env.RAILWAY_ENVIRONMENT ? "0.0.0.0" : "127.0.0.1");
const port = Number(process.env.PORT || process.env.API_PORT || 8787);
await app.listen({ host, port });

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, async () => {
    await app.close();
    process.exit(0);
  });
}
