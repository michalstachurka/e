import type { ProductDefinition, PublicConfiguration } from "../../contracts/src/index.js";
import { PublicConfigurationSchema } from "../../contracts/src/index.js";
import type { PricingRules } from "./catalog.js";

export interface ValidationIssue {
  path: string;
  message: string;
  code: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  derived: Record<string, number | number[]>;
  configuration?: PublicConfiguration;
}

const round = (value: number, precision = 3) => Number(value.toFixed(precision));

export function calculateLouvreCount(depth: number, pitch = 0.21, postSize = 0.14) {
  return Math.max(3, Math.round((depth - 2 * postSize) / pitch));
}

export function calculatePostPositions(width: number, count: number) {
  if (count <= 1) return [0];
  const inset = 0.065;
  const usable = Math.max(0, width - 2 * inset);
  return Array.from({ length: count }, (_, index) => round(-usable / 2 + (usable * index) / (count - 1)));
}

export function deriveVerandaSlope(depth: number, backHeight: number, roofAngle: number) {
  const frontHeight = backHeight - Math.tan((roofAngle * Math.PI) / 180) * depth;
  return { frontHeight: round(frontHeight), drop: round(backHeight - frontHeight) };
}

function parameterRange(definition: ProductDefinition, key: string) {
  return definition.parameters.find((parameter) => parameter.key === key);
}

function profileMetres(definition: ProductDefinition, id: string, axis: "a" | "b", fallback: number) {
  const profile = definition.profiles?.find((item) => item.id === id);
  const millimetres = axis === "a" ? profile?.aMm : profile?.bMm;
  return typeof millimetres === "number" ? millimetres / 1000 : fallback;
}

function checkRange(errors: ValidationIssue[], definition: ProductDefinition, key: string, value: number) {
  const parameter = parameterRange(definition, key);
  if (!parameter) return;
  if (parameter.min !== undefined && value < parameter.min) errors.push({ path: `values.${key}`, message: `${parameter.label}: minimum ${parameter.min}${parameter.unit || ""}.`, code: "too_small" });
  if (parameter.max !== undefined && value > parameter.max) errors.push({ path: `values.${key}`, message: `${parameter.label}: maksimum ${parameter.max}${parameter.unit || ""}.`, code: "too_big" });
}

export function validateConfiguration(input: unknown, definition: ProductDefinition): ValidationResult {
  const parsed = PublicConfigurationSchema.safeParse(input);
  if (!parsed.success) {
    return {
      valid: false,
      errors: parsed.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message, code: issue.code })),
      warnings: [],
      derived: {},
    };
  }
  const configuration = parsed.data;
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const derived: Record<string, number | number[]> = {};

  if (configuration.productVersionId !== definition.version.id) {
    errors.push({ path: "productVersionId", message: "Konfiguracja wskazuje inną wersję produktu.", code: "version_mismatch" });
  }

  if (configuration.productType === "bioclimatic-pergola") {
    const values = configuration.values;
    values.moduleWidths.forEach((width, index) => {
      const range = parameterRange(definition, "moduleWidths");
      if (range?.min !== undefined && width < range.min) errors.push({ path: `values.moduleWidths.${index}`, message: "Moduł jest zbyt wąski.", code: "too_small" });
      if (range?.max !== undefined && width > range.max) errors.push({ path: `values.moduleWidths.${index}`, message: "Moduł jest zbyt szeroki.", code: "too_big" });
    });
    checkRange(errors, definition, "depth", values.depth);
    checkRange(errors, definition, "height", values.height);
    checkRange(errors, definition, "slatAngle", values.slatAngle);
    const pitch = profileMetres(definition, "roof-louvre", "a", Number(definition.visual.louvrePitch || 0.21));
    const postSize = profileMetres(definition, "structural-post", "a", Number(definition.visual.postSize || 0.14));
    derived.louvresPerModule = calculateLouvreCount(values.depth, pitch, postSize);
    derived.totalLouvres = Number(derived.louvresPerModule) * values.moduleWidths.length;
    derived.totalWidth = round(values.moduleWidths.reduce((sum, width) => sum + width, 0));
    if (values.extraLegs.length > 8) warnings.push({ path: "values.extraLegs", message: "Duża liczba dodatkowych słupów wymaga oceny technicznej.", code: "technical_review" });
  } else if (configuration.productType === "veranda") {
    const values = configuration.values;
    ["width", "depth", "backHeight", "frontHeight", "roofAngle", "roofFields", "rafterCount", "postCount"].forEach((key) => checkRange(errors, definition, key, values[key as keyof typeof values] as number));
    const slope = deriveVerandaSlope(values.depth, values.backHeight, values.roofAngle);
    derived.expectedFrontHeight = slope.frontHeight;
    derived.roofDrop = slope.drop;
    derived.postPositions = calculatePostPositions(values.width, values.postCount);
    if (Math.abs(values.frontHeight - slope.frontHeight) > 0.035) {
      errors.push({ path: "values.frontHeight", message: "Wysokość przednia jest sprzeczna z głębokością, wysokością tylną i kątem dachu.", code: "slope_conflict" });
    }
    if (values.rafterCount < values.roofFields + 1) {
      errors.push({ path: "values.rafterCount", message: "Liczba krokwi musi być co najmniej o jeden większa od liczby pól dachowych.", code: "dependency" });
    }
    if (values.leftScreenSupport && values.leftWall !== "zip-screen") {
      errors.push({ path: "values.leftScreenSupport", message: "Lewy profil podpierający wymaga rolety ZIP.", code: "dependency" });
    }
    if (values.rightScreenSupport && values.rightWall !== "zip-screen") {
      errors.push({ path: "values.rightScreenSupport", message: "Prawy profil podpierający wymaga rolety ZIP.", code: "dependency" });
    }
    if (new Set(values.rafterLeds).size !== values.rafterLeds.length) {
      errors.push({ path: "values.rafterLeds", message: "Każda krokiew może być wybrana do LED tylko raz.", code: "duplicate" });
    }
    if (values.rafterLeds.some((index) => index >= values.rafterCount)) {
      errors.push({ path: "values.rafterLeds", message: "Wybrano LED dla krokwi, która nie istnieje.", code: "dependency" });
    }
    if (values.extraLegs.length > 8) warnings.push({ path: "values.extraLegs", message: "Duża liczba dodatkowych nóg wymaga oceny technicznej.", code: "technical_review" });
    warnings.push({ path: "values", message: "Parametry werandy i wypełnień są demonstracyjne i wymagają danych technicznych producenta.", code: "demo_only" });
  } else if (configuration.productType === "carport") {
    const values = configuration.values;
    values.moduleWidths.forEach((width, index) => {
      const range = parameterRange(definition, "moduleWidths");
      if (range?.min !== undefined && width < range.min) errors.push({ path: `values.moduleWidths.${index}`, message: "Moduł jest zbyt wąski.", code: "too_small" });
      if (range?.max !== undefined && width > range.max) errors.push({ path: `values.moduleWidths.${index}`, message: "Moduł jest zbyt szeroki.", code: "too_big" });
    });
    checkRange(errors, definition, "depth", values.depth);
    checkRange(errors, definition, "height", values.height);
    derived.totalWidth = round(values.moduleWidths.reduce((sum, width) => sum + width, 0));
    derived.roofArea = round(Number(derived.totalWidth) * values.depth, 2);
    if (values.extraLegs.length > 8) warnings.push({ path: "values.extraLegs", message: "Duża liczba dodatkowych słupów wymaga oceny technicznej.", code: "technical_review" });
    warnings.push({ path: "values", message: "Nośność, rozstaw podpór i parametry blachy są demonstracyjne i wymagają obliczeń producenta.", code: "demo_only" });
  } else if (configuration.productType === "window-screen") {
    const values = configuration.values;
    checkRange(errors, definition, "width", values.width);
    checkRange(errors, definition, "height", values.height);
    checkRange(errors, definition, "openingPercent", values.openingPercent);
    derived.coverArea = round(values.width * values.height, 2);
    warnings.push({ path: "values", message: "Dopuszczalne gabaryty, tkanina, prowadnice i napęd wymagają weryfikacji w konkretnym systemie screen ZIP.", code: "demo_only" });
  } else if (configuration.productType === "external-roller-shutter") {
    const values = configuration.values;
    checkRange(errors, definition, "width", values.width);
    checkRange(errors, definition, "height", values.height);
    checkRange(errors, definition, "openingPercent", values.openingPercent);
    derived.coverArea = round(values.width * values.height, 2);
    warnings.push({ path: "values", message: "Dobór skrzynki, pancerza, prowadnic i maksymalnych wymiarów wymaga tabel producenta.", code: "demo_only" });
  } else {
    const values = configuration.values;
    checkRange(errors, definition, "width", values.width);
    checkRange(errors, definition, "projection", values.projection);
    checkRange(errors, definition, "pitch", values.pitch);
    checkRange(errors, definition, "openingPercent", values.openingPercent);
    derived.coverArea = round(values.width * values.projection, 2);
    if (values.drive === "manual" && (values.windSensor || values.sunSensor)) {
      errors.push({ path: "values.drive", message: "Automatyka pogodowa wymaga napędu elektrycznego.", code: "dependency" });
    }
    warnings.push({ path: "values", message: "Wysięg, montaż, klasa wiatrowa i parametry ramion markizy wymagają weryfikacji producenta.", code: "demo_only" });
  }

  return { valid: errors.length === 0, errors, warnings, derived, configuration };
}

const countSelected = (record: Record<string, boolean>) => Object.values(record).filter(Boolean).length;
const moneyRound = (value: number, step: number) => Math.round(value / step) * step;

export function calculateQuote(configuration: PublicConfiguration, rules: PricingRules) {
  let area = 0;
  let modules = 1;
  let options = 0;
  let colorSurcharge = 0;
  if (configuration.productType === "bioclimatic-pergola" || configuration.productType === "carport") {
    const values = configuration.values;
    area = values.moduleWidths.reduce((sum, width) => sum + width, 0) * values.depth;
    modules = values.moduleWidths.length;
    options = Number(values.ledLinear) + countSelected(values.screens) + countSelected(values.glass) + values.extraLegs.length;
    options += "ledSpots" in values ? Number(values.ledSpots) : 0;
    colorSurcharge = values.frameColor === "anthracite" ? 0 : rules.optionSurcharge * 0.5;
  } else if (configuration.productType === "veranda") {
    const values = configuration.values;
    area = values.width * values.depth;
    options = (values.rafterLeds?.length || Number(values.lighting)) + (values.extraLegs?.length || 0)
      + [values.leftWall, values.rightWall, values.frontWall, values.leftTriangle, values.rightTriangle].filter((value) => value !== "none").length
      + Number(values.leftScreenSupport) + Number(values.rightScreenSupport);
    colorSurcharge = values.frameColor === "anthracite" ? 0 : rules.optionSurcharge * 0.5;
  } else if (configuration.productType === "window-screen") {
    const values = configuration.values;
    area = values.width * values.height;
    options = Number(values.drive !== "wired") + Number(values.windSensor) + Number(values.mounting !== "front");
    colorSurcharge = values.frameColor === "anthracite" ? 0 : rules.optionSurcharge * 0.5;
  } else if (configuration.productType === "external-roller-shutter") {
    const values = configuration.values;
    area = values.width * values.height;
    options = Number(values.drive !== "manual") + Number(values.integratedMosquitoNet) + Number(values.mounting !== "front") + Number(values.slatProfile === "extruded");
    colorSurcharge = values.armorColor === "anthracite" ? 0 : rules.optionSurcharge * 0.5;
  } else {
    const values = configuration.values;
    area = values.width * values.projection;
    options = Number(values.drive !== "manual") + Number(values.led) + Number(values.windSensor) + Number(values.sunSensor) + Number(values.cassetteType === "full-cassette");
    colorSurcharge = values.frameColor === "anthracite" ? 0 : rules.optionSurcharge * 0.5;
  }
  const calculated = (rules.basePrice + area * rules.pricePerSquareMeter + Math.max(0, modules - 1) * rules.moduleSurcharge + options * rules.optionSurcharge + colorSurcharge) * rules.multiplier;
  const net = moneyRound(Math.max(rules.minimumPrice, calculated), rules.rounding);
  const vat = moneyRound(net * rules.vatRate, rules.rounding);
  return { currency: "PLN", net, vat, gross: net + vat, vatRate: rules.vatRate, demoOnly: true as const };
}

export function generateBom(configuration: PublicConfiguration, derived: Record<string, number | number[]>) {
  if (configuration.productType === "bioclimatic-pergola") {
    const values = configuration.values;
    const modules = values.moduleWidths.length;
    const standardPosts = values.construction === "freestanding" ? (modules + 1) * 2 : values.construction === "wall" ? modules + 1 : 0;
    return {
      demoOnly: true as const,
      items: [
        { label: "Zestaw ramy modułu", quantity: modules, unit: "zest." },
        { label: "Słup konstrukcyjny", quantity: standardPosts + values.extraLegs.length, unit: "szt." },
        { label: "Lamela dachowa", quantity: Number(derived.totalLouvres || 0), unit: "szt." },
        { label: "Powierzchnia zadaszenia", quantity: round(values.moduleWidths.reduce((sum, width) => sum + width, 0) * values.depth, 2), unit: "m²" },
      ],
    };
  }
  if (configuration.productType === "carport") {
    const values = configuration.values;
    const modules = values.moduleWidths.length;
    const standardPosts = values.construction === "freestanding" ? (modules + 1) * 2 : values.construction === "wall" ? modules + 1 : 0;
    return {
      demoOnly: true as const,
      items: [
        { label: "Zestaw ramy modułu", quantity: modules, unit: "zest." },
        { label: "Słup konstrukcyjny", quantity: standardPosts + values.extraLegs.length, unit: "szt." },
        { label: "Blacha trapezowa z warstwą antykondensacyjną", quantity: round(values.moduleWidths.reduce((sum, width) => sum + width, 0) * values.depth, 2), unit: "m²" },
      ],
    };
  }
  if (configuration.productType === "veranda") {
    const values = configuration.values;
    const triangleCount = [values.leftTriangle, values.rightTriangle].filter((value) => value !== "none").length;
    const supportCount = Number(values.leftScreenSupport) + Number(values.rightScreenSupport);
    return {
      demoOnly: true as const,
      items: [
        { label: "Belka przyścienna", quantity: 1, unit: "szt." },
        { label: "Belka frontowa", quantity: 1, unit: "szt." },
        { label: "Słup frontowy", quantity: values.postCount + (values.extraLegs?.length || 0), unit: "szt." },
        { label: "Krokiew", quantity: values.rafterCount, unit: "szt." },
        { label: "Pole dachowe", quantity: values.roofFields, unit: "szt." },
        ...(values.rafterLeds?.length ? [{ label: "LED liniowy na krokwi", quantity: values.rafterLeds.length, unit: "szt." }] : []),
        ...(triangleCount ? [{ label: "Wypełnienie trójkąta bocznego", quantity: triangleCount, unit: "szt." }] : []),
        ...(supportCount ? [{ label: "Profil podpierający kasetę rolety", quantity: supportCount, unit: "szt." }] : []),
        { label: "Powierzchnia zadaszenia", quantity: round(values.width * values.depth, 2), unit: "m²" },
      ],
    };
  }
  if (configuration.productType === "window-screen") {
    const values = configuration.values;
    return {
      demoOnly: true as const,
      items: [
        { label: "Kaseta screen", quantity: 1, unit: "szt." },
        { label: "Prowadnica", quantity: 2, unit: "szt." },
        { label: "Tkanina screen", quantity: round(values.width * values.height, 2), unit: "m²" },
        { label: `Napęd ${values.drive}`, quantity: 1, unit: "szt." },
      ],
    };
  }
  if (configuration.productType === "external-roller-shutter") {
    const values = configuration.values;
    return {
      demoOnly: true as const,
      items: [
        { label: "Skrzynka rolety", quantity: 1, unit: "szt." },
        { label: "Prowadnica pancerza", quantity: 2, unit: "szt." },
        { label: "Pancerz rolety", quantity: round(values.width * values.height, 2), unit: "m²" },
        ...(values.integratedMosquitoNet ? [{ label: "Moskietiera zintegrowana", quantity: 1, unit: "szt." }] : []),
      ],
    };
  }
  const values = configuration.values;
  return {
    demoOnly: true as const,
    items: [
      { label: `Markiza ${values.cassetteType}`, quantity: 1, unit: "zest." },
      { label: "Tkanina markizowa", quantity: round(values.width * values.projection, 2), unit: "m²" },
      { label: "Ramię składane", quantity: values.width > 5 ? 3 : 2, unit: "szt." },
      ...(values.led ? [{ label: "Oświetlenie LED", quantity: 1, unit: "zest." }] : []),
    ],
  };
}

function sortValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, nested]) => [key, sortValue(nested)]));
  }
  return value;
}

export function serializeConfiguration(configuration: PublicConfiguration) {
  return JSON.stringify(sortValue(configuration));
}
