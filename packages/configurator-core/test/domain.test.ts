import assert from "node:assert/strict";
import test from "node:test";
import { PublicConfigurationSchema, type PublicConfiguration } from "../../contracts/src/index.js";
import { getProductSeed } from "../src/catalog.js";
import { calculateLouvreCount, calculatePostPositions, calculateQuote, deriveVerandaSlope, generateBom, serializeConfiguration, validateConfiguration } from "../src/domain.js";

const pergolaSeed = getProductSeed("bioclimatic-pergola")!;
const verandaSeed = getProductSeed("veranda")!;
const carportSeed = getProductSeed("carport")!;
const screenSeed = getProductSeed("window-screen")!;
const shutterSeed = getProductSeed("external-roller-shutter")!;
const awningSeed = getProductSeed("awning")!;

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
      rafterLeds: [],
      extraLegs: [],
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

test("assigns linear LED strips only to existing veranda rafters", () => {
  const configuration = veranda();
  configuration.values.rafterLeds = [0, 2, 4];
  configuration.values.extraLegs = [{ x: 0, z: 1.53, side: "front" }];
  const valid = validateConfiguration(configuration, verandaSeed.definition);
  assert.equal(valid.valid, true);
  assert.ok(generateBom(configuration, valid.derived).items.some((item) => item.label === "LED liniowy na krokwi" && item.quantity === 3));
  configuration.values.rafterLeds = [5];
  assert.ok(validateConfiguration(configuration, verandaSeed.definition).errors.some((issue) => issue.path === "values.rafterLeds"));
});

test("validates and prices all newly catalogued MVP products", () => {
  const sides = { front: false, back: false, left: false, right: false };
  const configurations: Array<[PublicConfiguration, typeof carportSeed]> = [
    [{
      schemaVersion: "2.0", tenantSlug: "visnex", productType: "carport", productVersionId: carportSeed.definition.version.id,
      values: { construction: "freestanding", moduleWidths: [4], depth: 5.5, height: 2.7, frameColor: "anthracite", roofColor: "anthracite", screenColor: "piaskowy", antiCondensationLayer: true, ledLinear: false, screens: sides, glass: sides, extraLegs: [] },
    }, carportSeed],
    [{
      schemaVersion: "2.0", tenantSlug: "visnex", productType: "window-screen", productVersionId: screenSeed.definition.version.id,
      values: { width: 2, height: 2.2, unitCount: 1, mounting: "reveal", guideType: "zip", fabric: "transparent", fabricColor: "piaskowy", frameColor: "anthracite", drive: "radio", openingPercent: 80, windSensor: true },
    }, screenSeed],
    [{
      schemaVersion: "2.0", tenantSlug: "visnex", productType: "external-roller-shutter", productVersionId: shutterSeed.definition.version.id,
      values: { width: 1.6, height: 2.1, unitCount: 1, mounting: "reveal", slatProfile: "aluminium-foam", armorColor: "anthracite", boxColor: "anthracite", guideColor: "anthracite", drive: "radio", integratedMosquitoNet: true, openingPercent: 65 },
    }, shutterSeed],
    [{
      schemaVersion: "2.0", tenantSlug: "visnex", productType: "awning", productVersionId: awningSeed.definition.version.id,
      values: { width: 4.5, projection: 3, mounting: "wall", cassetteType: "full-cassette", pitch: 14, fabricColor: "piaskowy", frameColor: "anthracite", drive: "radio", led: true, windSensor: true, sunSensor: false, openingPercent: 85 },
    }, awningSeed],
  ];
  for (const [configuration, seed] of configurations) {
    const validation = validateConfiguration(configuration, seed.definition);
    assert.equal(validation.valid, true, configuration.productType);
    assert.ok(calculateQuote(configuration, seed.pricing).gross > 0);
    assert.ok(generateBom(configuration, validation.derived).items.length > 0);
  }
});

test("keeps legacy window covers compatible and caps adjacent units at eight", () => {
  const legacy = PublicConfigurationSchema.parse({
    schemaVersion: "2.0", tenantSlug: "visnex", productType: "window-screen", productVersionId: "legacy-screen-v1",
    values: { width: 1.5, height: 2, mounting: "front", guideType: "zip", fabric: "transparent", fabricColor: "piaskowy", frameColor: "anthracite", drive: "radio", openingPercent: 70, windSensor: false },
  });
  assert.equal(legacy.values.unitCount, 1);

  const multi = PublicConfigurationSchema.parse({
    ...legacy,
    productVersionId: screenSeed.definition.version.id,
    values: { ...legacy.values, mounting: "reveal", unitCount: 8 },
  });
  const validation = validateConfiguration(multi, screenSeed.definition);
  assert.equal(validation.valid, true);
  assert.equal(validation.derived.coverArea, 24);
  assert.ok(generateBom(multi, validation.derived).items.some((item) => item.label === "Kaseta screen" && item.quantity === 8));
  assert.throws(() => PublicConfigurationSchema.parse({ ...multi, values: { ...multi.values, unitCount: 9 } }));
});

test("requires an electric awning drive for weather automation", () => {
  const configuration: PublicConfiguration = {
    schemaVersion: "2.0", tenantSlug: "visnex", productType: "awning", productVersionId: awningSeed.definition.version.id,
    values: { width: 4.5, projection: 3, mounting: "wall", cassetteType: "full-cassette", pitch: 14, fabricColor: "piaskowy", frameColor: "anthracite", drive: "manual", led: false, windSensor: true, sunSensor: false, openingPercent: 85 },
  };
  assert.ok(validateConfiguration(configuration, awningSeed.definition).errors.some((issue) => issue.code === "dependency"));
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
