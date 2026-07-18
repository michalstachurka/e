import assert from "node:assert/strict";
import test from "node:test";
import { MAX_SIDE_SHUTTER_PANELS, sideShutterLayout } from "../../public/pergola-configurator/js/renderers/side-shutter-system.js";

test("keeps aluminium shutter panel layout centred and bounded", () => {
  const layout = sideShutterLayout(4.8, 1.2);
  assert.equal(layout.panelCount, 4);
  assert.equal(layout.closedCenters.length, 4);
  assert.ok(Math.abs(layout.closedCenters[0] + layout.closedCenters.at(-1)) < 1e-10);
  assert.ok(layout.panelWidth > 1.1);
});

test("caps shutter geometry independently from future SaaS plan limits", () => {
  const layout = sideShutterLayout(14, 0.6);
  assert.equal(MAX_SIDE_SHUTTER_PANELS, 4);
  assert.equal(layout.panelCount, MAX_SIDE_SHUTTER_PANELS);
  assert.equal(layout.stackedCenters.length, MAX_SIDE_SHUTTER_PANELS);
});

test("normalises invalid spans without creating zero-sized panels", () => {
  const layout = sideShutterLayout(Number.NaN, 0);
  assert.equal(layout.span, 0.5);
  assert.equal(layout.panelCount, 1);
  assert.ok(layout.panelWidth > 0);
});
