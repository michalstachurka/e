import "dotenv/config";
import { createApp } from "./app.js";

const adminPassword = process.env.ADMIN_SEED_PASSWORD;
if (!adminPassword || adminPassword.length < 12 || adminPassword.startsWith("replace-")) {
  throw new Error("Set ADMIN_SEED_PASSWORD to a local password with at least 12 characters.");
}

const app = await createApp({
  databasePath: process.env.DATABASE_PATH || "./data/configurator.sqlite",
  adminEmail: process.env.ADMIN_SEED_EMAIL || "admin@example.invalid",
  adminPassword,
  publicAppUrl: process.env.PUBLIC_APP_URL || "http://localhost:5173/konfigurator.html",
  corsOrigins: (process.env.CORS_ORIGINS || "http://localhost:5173").split(",").map((value) => value.trim()).filter(Boolean),
  sessionTtlHours: Number(process.env.SESSION_TTL_HOURS || 12),
  secureCookies: process.env.NODE_ENV === "production",
  logger: true,
});

const host = process.env.API_HOST || "127.0.0.1";
const port = Number(process.env.API_PORT || 8787);
await app.listen({ host, port });

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, async () => {
    await app.close();
    process.exit(0);
  });
}
