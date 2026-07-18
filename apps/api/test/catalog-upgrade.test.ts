import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { ConfiguratorDatabase } from "../src/database.js";

const ADMIN = { adminEmail: "upgrade@example.invalid", adminPassword: "catalog-upgrade-password" };

test("upgrades untouched seed versions without overwriting an administrator-owned version slot", async () => {
  const directory = await mkdtemp(join(tmpdir(), "visnex-catalog-upgrade-"));
  const databasePath = join(directory, "catalog.sqlite");
  let database: ConfiguratorDatabase | null = null;

  try {
    database = await ConfiguratorDatabase.create({ path: databasePath, ...ADMIN });
    const seedRow = database.connection.prepare(`
      SELECT definition_json,pricing_json,bom_json
      FROM product_versions
      WHERE id='visnex-window-screen-v3'
    `).get() as { definition_json: string; pricing_json: string; bom_json: string };
    const seedDefinition = JSON.parse(seedRow.definition_json);
    const now = new Date().toISOString();
    const insertSql = `
      INSERT INTO product_versions
        (id,product_definition_id,version_number,status,definition_json,pricing_json,bom_json,published_at,created_at)
      VALUES (?,?,?,?,?,?,?,?,?)
    `;
    let insertVersion = database.connection.prepare(insertSql);

    database.connection.prepare("DELETE FROM product_versions WHERE product_definition_id='product-window-screen'").run();
    const legacyPublished = {
      ...seedDefinition,
      version: { id: "legacy-window-screen-v1", number: 1, status: "published" },
      parameters: seedDefinition.parameters.filter((parameter: { key: string }) => parameter.key !== "unitCount"),
    };
    const legacyDraft = { ...legacyPublished, version: { id: "legacy-window-screen-draft-v2", number: 2, status: "draft" } };
    insertVersion.run(legacyPublished.version.id, "product-window-screen", 1, "published", JSON.stringify(legacyPublished), seedRow.pricing_json, seedRow.bom_json, now, now);
    insertVersion.run(legacyDraft.version.id, "product-window-screen", 2, "draft", JSON.stringify(legacyDraft), seedRow.pricing_json, seedRow.bom_json, null, now);
    database.connection.close();

    database = await ConfiguratorDatabase.create({ path: databasePath, ...ADMIN });
    assert.equal(database.getProduct("visnex", "window-screen", "published")?.definition.version.id, "visnex-window-screen-v3");
    assert.equal(database.getProduct("visnex", "window-screen", "draft")?.definition.version.number, 4);
    const upgradedRows = (database.connection.prepare("SELECT version_number,status FROM product_versions WHERE product_definition_id='product-window-screen' ORDER BY version_number").all() as Array<{ version_number: number; status: string }>).map((row) => ({ ...row }));
    assert.deepEqual(upgradedRows, [
      { version_number: 1, status: "archived" },
      { version_number: 2, status: "archived" },
      { version_number: 3, status: "published" },
      { version_number: 4, status: "draft" },
    ]);

    database.connection.prepare("DELETE FROM product_versions WHERE product_definition_id='product-window-screen'").run();
    insertVersion = database.connection.prepare(insertSql);
    const adminPublished = { ...seedDefinition, version: { id: "admin-window-screen-v2", number: 2, status: "published" } };
    const adminDraft = { ...seedDefinition, description: "Administrator-owned draft", version: { id: "admin-window-screen-v3", number: 3, status: "draft" } };
    insertVersion.run(adminPublished.version.id, "product-window-screen", 2, "published", JSON.stringify(adminPublished), seedRow.pricing_json, seedRow.bom_json, now, now);
    insertVersion.run(adminDraft.version.id, "product-window-screen", 3, "draft", JSON.stringify(adminDraft), seedRow.pricing_json, seedRow.bom_json, null, now);
    database.connection.close();

    database = await ConfiguratorDatabase.create({ path: databasePath, ...ADMIN });
    assert.equal(database.getProduct("visnex", "window-screen", "published")?.definition.version.id, "admin-window-screen-v2");
    assert.equal(database.getProduct("visnex", "window-screen", "draft")?.definition.version.id, "admin-window-screen-v3");
    const conflictingRows = (database.connection.prepare("SELECT version_number,status FROM product_versions WHERE product_definition_id='product-window-screen' ORDER BY version_number").all() as Array<{ version_number: number; status: string }>).map((row) => ({ ...row }));
    assert.deepEqual(conflictingRows, [
      { version_number: 2, status: "published" },
      { version_number: 3, status: "draft" },
    ]);
  } finally {
    try { database?.connection.close(); } catch { /* already closed during a failed reopen */ }
    await rm(directory, { recursive: true, force: true });
  }
});
