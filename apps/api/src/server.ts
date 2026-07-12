import "dotenv/config";
import fastifyStatic from "@fastify/static";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { createApp } from "./app.js";

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

const app = await createApp({
  databasePath: process.env.DATABASE_PATH || (volumePath ? resolve(volumePath, "configurator.sqlite") : "./data/configurator.sqlite"),
  adminEmail: process.env.ADMIN_SEED_EMAIL || "admin@example.invalid",
  adminPassword,
  publicAppUrl,
  corsOrigins,
  sessionTtlHours: Number(process.env.SESSION_TTL_HOURS || 12),
  secureCookies: process.env.NODE_ENV === "production",
  logger: true,
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
