import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import * as THREE from "three";
import { validateAndSanitizeProfileSvg } from "../../../apps/api/src/profile-svg.js";
import { ProfileDefinitionSchema } from "../../contracts/src/index.js";
import {
  createCanonicalSvgProfileGeometry,
  createProfileGeometry,
  createProfileMesh,
} from "../../../public/pergola-configurator/js/core/svg-profile-geometry.js";

const approximately = (actual: number, expected: number, epsilon = 0.00001) => assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} ≉ ${expected}`);

function svgProfile(svg: string, overrides: Record<string, unknown> = {}) {
  const result = validateAndSanitizeProfileSvg(svg);
  return {
    id: "test-profile",
    label: "Profil testowy",
    usage: "Test",
    aMm: result.widthMm,
    bMm: result.heightMm,
    shape: "rectangular",
    geometryType: "SVG_PROFILE",
    demoOnly: true,
    svgContent: result.sanitizedSvg,
    svgProfile: {
      assetId: "00000000-0000-4000-8000-000000000001",
      extrusionLengthMm: 1000,
      widthMm: result.widthMm,
      heightMm: result.heightMm,
      viewBox: result.viewBox,
      rotationDeg: 0,
      mirrorX: false,
      mirrorY: false,
      profileFormatVersion: "1.0",
      geometryFormatVersion: "1.0",
      contentHash: result.contentHash,
      ...overrides,
    },
  };
}

function dimensions(geometry: THREE.BufferGeometry) {
  geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  geometry.boundingBox!.getSize(size);
  return size;
}

test("defaults legacy profiles to BOX and keeps geometry types mutually exclusive", () => {
  const legacy = ProfileDefinitionSchema.parse({
    id: "legacy-profile",
    label: "Profil historyczny",
    usage: "Test zgodności",
    aMm: 100,
    bMm: 50,
  });
  assert.equal(legacy.geometryType, "BOX");
  assert.equal(legacy.svgProfile, undefined);

  const withSvgReference = svgProfile(`<svg viewBox="0 0 100 50"><rect width="100" height="50"/></svg>`);
  assert.equal(ProfileDefinitionSchema.safeParse({ ...withSvgReference, geometryType: "BOX" }).success, false);
});

test("extrudes the sample gutter exactly 1000 mm along local +Z", async () => {
  const svg = await readFile(new URL("../../../public/examples/profil-rynny.svg", import.meta.url), "utf8");
  const geometry = createCanonicalSvgProfileGeometry(THREE, svgProfile(svg));
  const size = dimensions(geometry);
  approximately(size.z, 1);
  approximately(size.x, 0.142);
  approximately(size.y, 0.08466);
  assert.equal(geometry.userData.profileGeometryType, "SVG_PROFILE");
});

test("maps SVG X right, flips SVG Y down, and keeps the front cap at Z=0", () => {
  const profile = svgProfile(`<svg viewBox="0 0 100 100"><path d="M0 0H20L0 10Z"/></svg>`);
  const geometry = createCanonicalSvgProfileGeometry(THREE, profile, 0.25);
  const position = geometry.getAttribute("position");
  const points = Array.from({ length: position.count }, (_, index) => ({ x: position.getX(index), y: position.getY(index), z: position.getZ(index) }));
  assert.ok(points.some((point) => Math.abs(point.z) < 1e-8));
  assert.ok(points.some((point) => Math.abs(point.x - 0.02) < 1e-8 && Math.abs(point.y - 0.01) < 1e-8));
  assert.ok(points.some((point) => Math.abs(point.x) < 1e-8 && Math.abs(point.y) < 1e-8));
  approximately(dimensions(geometry).z, 0.25);
});

test("preserves evenodd holes in cap triangulation", () => {
  const profile = svgProfile(`<svg viewBox="0 0 100 100"><path fill-rule="evenodd" d="M0 0H100V100H0Z M25 25H75V75H25Z"/></svg>`);
  const sourceGeometry = createCanonicalSvgProfileGeometry(THREE, profile, 0.2);
  const geometry = sourceGeometry.index ? sourceGeometry.toNonIndexed() : sourceGeometry;
  const position = geometry.getAttribute("position");
  let frontArea = 0;
  for (let index = 0; index < position.count; index += 3) {
    const a = new THREE.Vector3().fromBufferAttribute(position, index);
    const b = new THREE.Vector3().fromBufferAttribute(position, index + 1);
    const c = new THREE.Vector3().fromBufferAttribute(position, index + 2);
    if ([a.z, b.z, c.z].every((z) => Math.abs(z) < 1e-8)) {
      frontArea += Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) / 2;
    }
  }
  approximately(frontArea, 0.0075, 0.000001);
});

test("rotates SVG cross-sections without scaling and leaves BOX geometry compatible", () => {
  const rotated = svgProfile(`<svg viewBox="0 0 100 50"><rect width="100" height="50"/></svg>`, { rotationDeg: 90 });
  const svgSize = dimensions(createCanonicalSvgProfileGeometry(THREE, rotated, 1));
  approximately(svgSize.x, 0.05);
  approximately(svgSize.y, 0.1);
  approximately(svgSize.z, 1);

  const boxProfile = { id: "box", aMm: 140, bMm: 180, geometryType: "BOX" };
  const boxGeometry = createProfileGeometry(THREE, [boxProfile], "box", 2, "z", 0.1, 0.1);
  const boxSize = dimensions(boxGeometry);
  approximately(boxSize.x, 0.14);
  approximately(boxSize.y, 0.18);
  approximately(boxSize.z, 2);
  const material = new THREE.MeshStandardMaterial({ color: "#2B2D2E" });
  const mesh = createProfileMesh(THREE, [boxProfile], "box", material, 2, "y", 0.1, 0.1);
  assert.equal(mesh.material, material);
  assert.equal(mesh.castShadow, true);
  assert.equal(mesh.receiveShadow, true);
  assert.equal(mesh.userData.profileId, "box");
});
