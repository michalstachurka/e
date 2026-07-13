import assert from "node:assert/strict";
import test from "node:test";
import type { PublicConfiguration } from "../../contracts/src/index.js";
import { getProductSeed } from "../src/catalog.js";
import { calculateLouvreCount, calculatePostPositions, calculateQuote, deriveVerandaSlope, generateBom, serializeConfiguration, validateConfiguration } from "../src/domain.js";

const pergolaSeed = getProductSeed("bioclimatic-pergola")!;
const verandaSeed = getProductSeed("veranda")!;

const pergola = (): PublicConfiguration => ({
  schemaVersion: "2.0",
  tenantSlug: "visnex",
  productType: "bioclimatic-pergola",
  productVersionId: pergolaSeed.definition.version.id,
  values: {
    construction: "freestanding",
    moduleWidths: [4],
    depth: 3.2,
    height: 2.6,
    slatAngle: 35,
    frameColor: "anthracite",
    slatColor: "anthracite",
    screenColor: "piaskowy",
    ledLinear: false,
    ledSpots: false,
    screens: { front: false, back: false, left: false, right: false },
    glass: { front: false, back: false, left: false, right: false },
    extraLegs: [],
  },
});

const veranda = (): PublicConfiguration => {
  const slope = deriveVerandaSlope(3.2, 2.95, 7);
  return {
    schemaVersion: "2.0",
    tenantSlug: "visnex",
    productType: "veranda",
    productVersionId: verandaSeed.definition.version.id,
    values: {
      width: 4.5,
      depth: 3.2,
      backHeight: 2.95,
      frontHeight: slope.frontHeight,
      roofAngle: 7,
      roofFields: 4,
      rafterCount: 5,
      postCount: 3,
      roofMaterial: "clear-glass",
      leftWall: "none",
      rightWall: "full-glass",
      frontWall: "none",
      leftTriangle: "none",
      rightTriangle: "none",
      leftScreenSupport: false,
      rightScreenSupport: false,
      frameColor: "anthracite",
      lighting: false,
    },
  };
};

test("validates pergola dimensions from the published definition", () => {
  const valid = validateConfiguration(pergola(), pergolaSeed.definition);
  assert.equal(valid.valid, true);
  const invalid = pergola();
  invalid.values.depth = 9;
  const result = validateConfiguration(invalid, pergolaSeed.definition);
  assert.equal(result.valid, false);
  assert.equal(result.errors[0]?.path, "values.depth");
});

test("derives louvre count from available depth", () => {
  assert.ok(calculateLouvreCount(4.2) > calculateLouvreCount(2.8));
  assert.equal(calculateLouvreCount(3.2), 14);
});

test("places veranda posts evenly and symmetrically", () => {
  const positions = calculatePostPositions(6, 4);
  assert.equal(positions.length, 4);
  assert.equal(positions[0], -positions.at(-1)!);
  assert.equal(positions[1], -positions[2]);
});

test("rejects contradictory veranda slope and roof dependencies", () => {
  const configuration = veranda();
  configuration.values.frontHeight += 0.25;
  configuration.values.rafterCount = 3;
  const result = validateConfiguration(configuration, verandaSeed.definition);
  assert.equal(result.valid, false);
  assert.deepEqual(new Set(result.errors.map((issue) => issue.code)), new Set(["slope_conflict", "dependency"]));
});

test("validates the ZIP cassette support dependency and side triangle data", () => {
  const configuration = veranda();
  configuration.values.leftWall = "zip-screen";
  configuration.values.leftTriangle = "solid";
  configuration.values.leftScreenSupport = true;
  const valid = validateConfiguration(configuration, verandaSeed.definition);
  assert.equal(valid.valid, true);
  const bom = generateBom(configuration, valid.derived);
  assert.ok(bom.items.some((item) => item.label === "Wypełnienie trójkąta bocznego" && item.quantity === 1));
  assert.ok(bom.items.some((item) => item.label === "Profil podpierający kasetę rolety" && item.quantity === 1));

  configuration.values.leftWall = "full-glass";
  const invalid = validateConfiguration(configuration, verandaSeed.definition);
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.some((issue) => issue.path === "values.leftScreenSupport" && issue.code === "dependency"));
});

test("calculates demo quote and public BOM without production codes", () => {
  const configuration = pergola();
  configuration.values.moduleWidths = [4, 4];
  configuration.values.ledLinear = true;
  const validation = validateConfiguration(configuration, pergolaSeed.definition);
  const quote = calculateQuote(configuration, pergolaSeed.pricing);
  const bom = generateBom(configuration, validation.derived);
  assert.equal(quote.demoOnly, true);
  assert.ok(quote.gross > quote.net);
  assert.equal(bom.demoOnly, true);
  assert.ok(bom.items.some((item) => item.label === "Lamela dachowa"));
  assert.ok(bom.items.every((item) => !("code" in item)));
});

test("serializes configuration deterministically", () => {
  const first = serializeConfiguration(pergola());
  const second = serializeConfiguration(JSON.parse(JSON.stringify(pergola())) as PublicConfiguration);
  assert.equal(first, second);
});
