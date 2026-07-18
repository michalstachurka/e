import assert from "node:assert/strict";
import test from "node:test";
import { MAX_WINDOW_COVER_UNITS, windowCoverLayout } from "../../public/pergola-configurator/js/renderers/window-cover-renderer.js";

test("lays out adjacent window-cover recesses symmetrically", () => {
  const layout = windowCoverLayout(1.6, 4, 0.18);
  assert.equal(layout.unitCount, 4);
  assert.equal(layout.centers.length, 4);
  assert.equal(layout.centers[0], -layout.centers[3]);
  assert.equal(layout.centers[1], -layout.centers[2]);
  assert.ok(layout.facadeWidth > layout.openingsWidth);
});

test("caps the renderer-safe window-cover count at eight", () => {
  assert.equal(MAX_WINDOW_COVER_UNITS, 8);
  assert.equal(windowCoverLayout(4, 99).unitCount, 8);
  assert.equal(windowCoverLayout(4, 0).unitCount, 1);
});
