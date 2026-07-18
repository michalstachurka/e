import assert from "node:assert/strict";
import test from "node:test";
import {
  createReferenceSceneDocument,
  hasReferenceAdjustment,
  normaliseReferenceAdjustment,
  referenceFileStem,
} from "../../public/pergola-configurator/js/core/reference-scene-document.js";

const baseProduct = {
  definition: {
    productType: "screen-zip-window",
    name: "Screen ZIP do okna",
    version: { id: "version-screen-3", number: 3 },
  },
};

const baseSceneState = {
  selectedObjectId: "0.2",
  coordinateSystem: { unit: "metre", upAxis: "+Y", frontAxis: "+Z" },
  camera: { positionM: { x: 5, y: 3, z: 6 }, targetM: { x: 0, y: 1, z: 0 }, fovDeg: 36 },
  objects: [
    {
      id: "0.2",
      name: "WindowScreenCassette",
      occurrence: 1,
      kind: "MESH",
      profileId: null,
      parentName: "WindowScreenInReveal",
      base: {
        positionM: { x: 0, y: 2.1, z: 0 },
        rotationDeg: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
      adjustment: {
        positionM: { x: 0.18, y: 0, z: -0.04 },
        rotationDeg: { z: 2 },
      },
      resolved: {
        positionM: { x: 0.18, y: 2.1, z: -0.04 },
        rotationDeg: { x: 0, y: 0, z: 2 },
        scale: { x: 1, y: 1, z: 1 },
      },
    },
  ],
};

test("normalises missing reference transform components without sharing defaults", () => {
  const first = normaliseReferenceAdjustment({ positionM: { x: "0.25" }, scale: { y: 1.2 } });
  const second = normaliseReferenceAdjustment();

  assert.deepEqual(first, {
    positionM: { x: 0.25, y: 0, z: 0 },
    rotationDeg: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1.2, z: 1 },
  });
  first.positionM.x = 9;
  assert.equal(second.positionM.x, 0);
});

test("detects only effective reference adjustments", () => {
  assert.equal(hasReferenceAdjustment(), false);
  assert.equal(hasReferenceAdjustment({ positionM: { x: 0.001 } }), true);
  assert.equal(hasReferenceAdjustment({ rotationDeg: { y: -3 } }), true);
  assert.equal(hasReferenceAdjustment({ scale: { z: 0.99 } }), true);
});

test("creates a tenant and product-version scoped reference document", () => {
  const document = createReferenceSceneDocument({
    tenantSlug: "visnex",
    product: baseProduct,
    admin: { email: "operator@example.invalid" },
    sceneState: baseSceneState,
    createdAt: "2026-07-18T10:20:30.000Z",
  });

  assert.equal(document.formatVersion, "1.0");
  assert.equal(document.tenantSlug, "visnex");
  assert.equal(document.productVersionId, "version-screen-3");
  assert.equal(document.productVersionNumber, 3);
  assert.equal(document.createdBy, "operator@example.invalid");
  assert.equal(document.selectedObjectId, "0.2");
  assert.equal(document.editedObjectCount, 1);
  assert.deepEqual(document.objects[0].adjustment.rotationDeg, { x: 0, y: 0, z: 2 });
});

test("rejects unscoped documents and creates a filesystem-safe download name", () => {
  assert.throws(
    () => createReferenceSceneDocument({ tenantSlug: "", product: baseProduct, sceneState: baseSceneState }),
    /reference_scene_context_missing/,
  );
  assert.equal(
    referenceFileStem({ tenantSlug: "Klient Łódź", productType: "screen/zip", createdAt: "2026-07-18T10:20:30.000Z" }),
    "visNEX-geometry-klient-d-screen-zip-2026-07-18T10-20-30-000Z",
  );
});
