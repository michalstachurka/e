import type { PoolConfig } from "pg";
import { ConfiguratorDatabase } from "./database.js";
import { PostgresConfiguratorDatabase } from "./postgres-database.js";
import type { ConfiguratorStore } from "./store.js";

export type DatastoreDriver = "sqlite" | "postgres";
export type DatabaseSslMode = "disable" | "require" | "verify-full";

export interface ConfiguredStoreOptions {
  driver?: string;
  databasePath: string;
  databaseUrl?: string;
  databaseSslMode?: string;
  adminEmail: string;
  adminPassword: string;
}

export function normalizeDatastoreDriver(value: string | undefined): DatastoreDriver {
  const driver = (value || "sqlite").trim().toLowerCase();
  if (driver === "sqlite" || driver === "postgres") return driver;
  throw new Error(`Unsupported DATASTORE value: ${value}`);
}

function postgresSsl(modeValue: string | undefined): PoolConfig["ssl"] {
  const mode = (modeValue || "disable").trim().toLowerCase() as DatabaseSslMode;
  if (mode === "disable") return undefined;
  if (mode === "require") return { rejectUnauthorized: false };
  if (mode === "verify-full") return { rejectUnauthorized: true };
  throw new Error(`Unsupported DATABASE_SSL_MODE value: ${modeValue}`);
}

export async function createConfiguredStore(options: ConfiguredStoreOptions): Promise<ConfiguratorStore> {
  const driver = normalizeDatastoreDriver(options.driver);
  if (driver === "postgres") {
    return PostgresConfiguratorDatabase.create({
      connectionString: options.databaseUrl,
      ssl: postgresSsl(options.databaseSslMode),
      adminEmail: options.adminEmail,
      adminPassword: options.adminPassword,
    });
  }
  return ConfiguratorDatabase.create({ path: options.databasePath, adminEmail: options.adminEmail, adminPassword: options.adminPassword });
}
