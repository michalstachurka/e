import type { ProductDefinition } from "../../contracts/src/index.js";

export interface PricingRules {
  basePrice: number;
  pricePerSquareMeter: number;
  moduleSurcharge: number;
  optionSurcharge: number;
  minimumPrice: number;
  multiplier: number;
  vatRate: number;
  rounding: number;
  demoOnly: true;
}

export interface ProductSeed {
  definition: ProductDefinition;
  pricing: PricingRules;
  bom: { profileAllowance: number; demoOnly: true };
}

export const tenantSeed = {
  slug: "visnex",
  name: "visNEX",
  branding: {
    companyName: "visNEX",
    logoText: "visNEX",
    contactEmail: "kontakt@example.invalid",
    primaryColor: "#171411",
    accentColor: "#C36E3D",
    backgroundColor: "#F1EBE0",
    fontHeading: "Big Shoulders Display",
    fontBody: "Hanken Grotesk",
    pdfFooter: "Projekt koncepcyjny wymaga weryfikacji technicznej przed realizacją.",
  },
};

const colors = [
  { id: "anthracite", label: "Antracyt", value: "#2B2D2E", demoOnly: false },
  { id: "warm-white", label: "Ciepła biel", value: "#E8E6E0", demoOnly: true },
  { id: "black", label: "Czerń", value: "#0E0F10", demoOnly: true },
  { id: "bronze", label: "Brąz", value: "#4A3527", demoOnly: true },
];

export const productSeeds: ProductSeed[] = [
  {
    definition: {
      id: "product-bioclimatic-pergola",
      productType: "bioclimatic-pergola",
      name: "Pergola bioklimatyczna",
      description: "Parametryczna pergola z lamelami, wyposażeniem bocznym i eksportem AR.",
      enabled: true,
      order: 10,
      version: { id: "visnex-bioclimatic-v1", number: 1, status: "published" },
      steps: [
        { id: "structure", label: "Konstrukcja", order: 10 },
        { id: "dimensions", label: "Wymiary", order: 20 },
        { id: "finish", label: "Wykończenie", order: 30 },
        { id: "equipment", label: "Wyposażenie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "moduleWidths", label: "Szerokość modułu", section: "dimensions", type: "range", unit: "m", min: 2, max: 6, step: 0.1, defaultValue: [4], hidden: false, demoOnly: false },
        { key: "depth", label: "Wysięg", section: "dimensions", type: "range", unit: "m", min: 2.5, max: 4.5, step: 0.1, defaultValue: 3.2, hidden: false, demoOnly: false },
        { key: "height", label: "Wysokość", section: "dimensions", type: "range", unit: "m", min: 2.2, max: 3.2, step: 0.05, defaultValue: 2.6, hidden: false, demoOnly: false },
        { key: "slatAngle", label: "Otwarcie lameli", section: "structure", type: "range", unit: "°", min: 0, max: 120, step: 1, defaultValue: 35, hidden: false, demoOnly: false },
      ],
      profiles: [
        { id: "structural-post", label: "Słup konstrukcyjny", usage: "Podparcie pionowe konstrukcji", aMm: 140, bMm: 140, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka ramy", usage: "Obwodowa rama dachu", aMm: 140, bMm: 180, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-louvre", label: "Lamela dachowa", usage: "Ruchome wypełnienie dachu", aMm: 210, bMm: 15, shape: "louvre", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { postSize: 0.14, beamHeight: 0.18, louvrePitch: 0.21, louvreThickness: 0.015, demoOnly: true },
    },
    pricing: { basePrice: 8_900, pricePerSquareMeter: 620, moduleSurcharge: 1_450, optionSurcharge: 780, minimumPrice: 12_000, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.06, demoOnly: true },
  },
  {
    definition: {
      id: "product-veranda",
      productType: "veranda",
      name: "Weranda",
      description: "Lekkie zadaszenie przyścienne z parametrycznym spadkiem i demonstracyjnymi wypełnieniami.",
      enabled: true,
      order: 20,
      version: { id: "visnex-veranda-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Bryła", order: 10 },
        { id: "roof", label: "Dach", order: 20 },
        { id: "walls", label: "Zabudowy", order: 30 },
        { id: "finish", label: "Wykończenie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 2.5, max: 8, step: 0.1, defaultValue: 4.5, hidden: false, demoOnly: true },
        { key: "depth", label: "Głębokość", section: "dimensions", type: "range", unit: "m", min: 2, max: 5, step: 0.1, defaultValue: 3.2, hidden: false, demoOnly: true },
        { key: "backHeight", label: "Wysokość przy ścianie", section: "dimensions", type: "range", unit: "m", min: 2.4, max: 3.6, step: 0.05, defaultValue: 2.95, hidden: false, demoOnly: true },
        { key: "frontHeight", label: "Wysokość z przodu", section: "dimensions", type: "range", unit: "m", min: 2.1, max: 3.2, step: 0.05, defaultValue: 2.56, hidden: false, demoOnly: true },
        { key: "roofAngle", label: "Kąt nachylenia", section: "roof", type: "range", unit: "°", min: 3, max: 15, step: 0.5, defaultValue: 7, hidden: false, demoOnly: true },
        { key: "roofFields", label: "Liczba pól dachowych", section: "roof", type: "range", min: 2, max: 8, step: 1, defaultValue: 4, hidden: false, demoOnly: true },
        { key: "rafterCount", label: "Liczba krokwi", section: "roof", type: "range", min: 3, max: 9, step: 1, defaultValue: 5, hidden: false, demoOnly: true },
        { key: "postCount", label: "Liczba słupów", section: "structure", type: "range", min: 2, max: 6, step: 1, defaultValue: 3, hidden: false, demoOnly: true },
        { key: "rafterLeds", label: "LED liniowy na wybranych krokwiach", section: "finish", type: "positions", defaultValue: [], hidden: false, demoOnly: true },
        { key: "extraLegs", label: "Dodatkowe nogi", section: "structure", type: "positions", defaultValue: [], hidden: false, demoOnly: true },
      ],
      profiles: [
        { id: "structural-post", label: "Słup frontowy", usage: "Podparcie pionowe frontu", aMm: 130, bMm: 130, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka konstrukcyjna", usage: "Belka przyścienna i frontowa", aMm: 130, bMm: 170, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-rafter", label: "Krokiew dachowa", usage: "Podparcie pola dachowego", aMm: 80, bMm: 122, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "screen-support", label: "Profil pod kasetę ZIP", usage: "Opcjonalne podparcie kasety na boku", aMm: 50, bMm: 80, shape: "rectangular", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { postSize: 0.13, beamHeight: 0.17, rafterWidth: 0.08, rafterHeight: 0.122, roofThickness: 0.018, screenCassetteHeight: 0.105, screenCassetteDepth: 0.11, demoOnly: true },
    },
    pricing: { basePrice: 6_400, pricePerSquareMeter: 510, moduleSurcharge: 0, optionSurcharge: 690, minimumPrice: 9_500, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.08, demoOnly: true },
  },
  {
    definition: {
      id: "product-carport",
      productType: "carport",
      name: "Carport",
      description: "Modułowe zadaszenie samochodowe z nieruchomą blachą trapezową i warstwą antykondensacyjną.",
      enabled: true,
      order: 30,
      version: { id: "visnex-carport-v1", number: 1, status: "published" },
      steps: [
        { id: "structure", label: "Konstrukcja", order: 10 },
        { id: "dimensions", label: "Wymiary", order: 20 },
        { id: "roof", label: "Dach", order: 30 },
        { id: "equipment", label: "Wyposażenie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "moduleWidths", label: "Szerokość modułu", section: "dimensions", type: "range", unit: "m", min: 2.5, max: 6, step: 0.1, defaultValue: [4], hidden: false, demoOnly: true },
        { key: "depth", label: "Głębokość", section: "dimensions", type: "range", unit: "m", min: 3, max: 7, step: 0.1, defaultValue: 5.5, hidden: false, demoOnly: true },
        { key: "height", label: "Wysokość", section: "dimensions", type: "range", unit: "m", min: 2.2, max: 3.5, step: 0.05, defaultValue: 2.7, hidden: false, demoOnly: true },
        { key: "roofColor", label: "Kolor blachy od góry", section: "roof", type: "select", defaultValue: "anthracite", hidden: false, demoOnly: true, options: colors.map(({ id, label, demoOnly }) => ({ id, label, demoOnly })) },
        { key: "antiCondensationLayer", label: "Warstwa antykondensacyjna od dołu", section: "roof", type: "toggle", defaultValue: true, hidden: false, demoOnly: true },
        { key: "extraLegs", label: "Dodatkowe nogi", section: "structure", type: "positions", defaultValue: [], hidden: false, demoOnly: true },
      ],
      profiles: [
        { id: "structural-post", label: "Słup konstrukcyjny", usage: "Podparcie pionowe konstrukcji", aMm: 140, bMm: 140, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka ramy", usage: "Obwodowa rama dachu", aMm: 140, bMm: 180, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-sheet", label: "Blacha trapezowa", usage: "Nieruchome poszycie dachu", aMm: 200, bMm: 35, shape: "louvre", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { postSize: 0.14, beamHeight: 0.18, sheetPitch: 0.2, sheetThickness: 0.018, demoOnly: true },
    },
    pricing: { basePrice: 7_900, pricePerSquareMeter: 430, moduleSurcharge: 1_250, optionSurcharge: 690, minimumPrice: 11_000, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.07, demoOnly: true },
  },
  {
    definition: {
      id: "product-window-screen",
      productType: "window-screen",
      name: "Screen ZIP do okna",
      description: "Zewnętrzna osłona tekstylna z prowadzeniem ZIP, wariantami montażu, napędu i stopniem opuszczenia.",
      enabled: true,
      order: 40,
      version: { id: "visnex-window-screen-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Wymiary", order: 10 },
        { id: "mounting", label: "Montaż", order: 20 },
        { id: "fabric", label: "Tkanina", order: 30 },
        { id: "drive", label: "Sterowanie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 0.6, max: 5, step: 0.05, defaultValue: 2, hidden: false, demoOnly: true },
        { key: "height", label: "Wysokość", section: "dimensions", type: "range", unit: "m", min: 0.6, max: 5, step: 0.05, defaultValue: 2.2, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień opuszczenia", section: "fabric", type: "range", unit: "%", min: 0, max: 100, step: 1, defaultValue: 80, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "mounting", type: "select", defaultValue: "front", hidden: false, demoOnly: true, options: [
          { id: "front", label: "Natynkowy", demoOnly: true }, { id: "reveal", label: "We wnęce", demoOnly: true }, { id: "under-plaster", label: "Podtynkowy", demoOnly: true }, { id: "top-mounted", label: "Nadstawny", demoOnly: true },
        ] },
        { key: "drive", label: "Napęd", section: "drive", type: "select", defaultValue: "radio", hidden: false, demoOnly: true, options: [
          { id: "wired", label: "Przewodowy", demoOnly: true }, { id: "radio", label: "Radiowy", demoOnly: true }, { id: "solar", label: "Solarny", demoOnly: true },
        ] },
      ],
      profiles: [
        { id: "screen-cassette", label: "Kaseta screen", usage: "Osłona wału i tkaniny", aMm: 105, bMm: 105, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "screen-guide", label: "Prowadnica ZIP", usage: "Boczne prowadzenie tkaniny", aMm: 25, bMm: 45, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "screen-bottom", label: "Listwa dolna", usage: "Obciążenie dolnej krawędzi", aMm: 30, bMm: 20, shape: "rectangular", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { cassetteSize: 0.105, guideWidth: 0.025, bottomBarHeight: 0.03, demoOnly: true },
    },
    pricing: { basePrice: 1_650, pricePerSquareMeter: 420, moduleSurcharge: 0, optionSurcharge: 280, minimumPrice: 2_100, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.04, demoOnly: true },
  },
  {
    definition: {
      id: "product-external-roller-shutter",
      productType: "external-roller-shutter",
      name: "Roleta zewnętrzna",
      description: "Zewnętrzna roleta pancerzowa z wyborem montażu, profilu, napędu i zintegrowanej moskitiery.",
      enabled: true,
      order: 50,
      version: { id: "visnex-external-shutter-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Wymiary", order: 10 },
        { id: "system", label: "System", order: 20 },
        { id: "finish", label: "Pancerz", order: 30 },
        { id: "drive", label: "Sterowanie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 0.5, max: 4, step: 0.05, defaultValue: 1.6, hidden: false, demoOnly: true },
        { key: "height", label: "Wysokość", section: "dimensions", type: "range", unit: "m", min: 0.5, max: 3.5, step: 0.05, defaultValue: 2.1, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień opuszczenia", section: "system", type: "range", unit: "%", min: 0, max: 100, step: 1, defaultValue: 65, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "system", type: "select", defaultValue: "front", hidden: false, demoOnly: true, options: [
          { id: "front", label: "Natynkowy", demoOnly: true }, { id: "under-plaster", label: "Podtynkowy", demoOnly: true }, { id: "top-mounted", label: "Nadstawny", demoOnly: true },
        ] },
        { key: "drive", label: "Napęd", section: "drive", type: "select", defaultValue: "radio", hidden: false, demoOnly: true, options: [
          { id: "manual", label: "Ręczny", demoOnly: true }, { id: "wired", label: "Przewodowy", demoOnly: true }, { id: "radio", label: "Radiowy", demoOnly: true }, { id: "solar", label: "Solarny", demoOnly: true },
        ] },
      ],
      profiles: [
        { id: "shutter-box", label: "Skrzynka rolety", usage: "Osłona wału i zwiniętego pancerza", aMm: 165, bMm: 165, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "shutter-guide", label: "Prowadnica pancerza", usage: "Boczne prowadzenie rolety", aMm: 53, bMm: 22, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "shutter-slat", label: "Profil pancerza", usage: "Poziomy profil osłony", aMm: 39, bMm: 8, shape: "louvre", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { boxSize: 0.165, guideWidth: 0.053, slatPitch: 0.039, demoOnly: true },
    },
    pricing: { basePrice: 1_250, pricePerSquareMeter: 330, moduleSurcharge: 0, optionSurcharge: 240, minimumPrice: 1_650, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.04, demoOnly: true },
  },
  {
    definition: {
      id: "product-awning",
      productType: "awning",
      name: "Markiza tarasowa",
      description: "Markiza z wyborem kasety, wysięgu, kąta, tkaniny, napędu, LED i automatyki pogodowej.",
      enabled: true,
      order: 60,
      version: { id: "visnex-awning-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Wymiary", order: 10 },
        { id: "mounting", label: "Montaż", order: 20 },
        { id: "fabric", label: "Tkanina", order: 30 },
        { id: "equipment", label: "Wyposażenie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 2, max: 7, step: 0.1, defaultValue: 4.5, hidden: false, demoOnly: true },
        { key: "projection", label: "Wysięg", section: "dimensions", type: "range", unit: "m", min: 1.5, max: 4, step: 0.1, defaultValue: 3, hidden: false, demoOnly: true },
        { key: "pitch", label: "Kąt pochylenia", section: "mounting", type: "range", unit: "°", min: 5, max: 40, step: 1, defaultValue: 14, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień wysunięcia", section: "dimensions", type: "range", unit: "%", min: 10, max: 100, step: 1, defaultValue: 85, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "mounting", type: "select", defaultValue: "wall", hidden: false, demoOnly: true, options: [
          { id: "wall", label: "Do ściany", demoOnly: true }, { id: "ceiling", label: "Do sufitu", demoOnly: true }, { id: "roof", label: "Do krokwi", demoOnly: true },
        ] },
        { key: "cassetteType", label: "Typ kasety", section: "mounting", type: "select", defaultValue: "full-cassette", hidden: false, demoOnly: true, options: [
          { id: "open", label: "Otwarta", demoOnly: true }, { id: "semi-cassette", label: "Półkaseta", demoOnly: true }, { id: "full-cassette", label: "Pełna kaseta", demoOnly: true },
        ] },
      ],
      profiles: [
        { id: "awning-cassette", label: "Kaseta markizy", usage: "Osłona tkaniny i mechanizmu", aMm: 260, bMm: 140, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "awning-front", label: "Belka przednia", usage: "Zamknięcie przedniej krawędzi tkaniny", aMm: 80, bMm: 50, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "awning-arm", label: "Ramię składane", usage: "Podparcie wysuniętej markizy", aMm: 50, bMm: 30, shape: "rectangular", geometryType: "BOX", demoOnly: true },
      ],
      colors,
      visual: { cassetteWidth: 0.26, cassetteHeight: 0.14, frontBarHeight: 0.08, armWidth: 0.05, demoOnly: true },
    },
    pricing: { basePrice: 2_900, pricePerSquareMeter: 280, moduleSurcharge: 0, optionSurcharge: 360, minimumPrice: 3_800, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.05, demoOnly: true },
  },
];

export function getProductSeed(productType: string) {
  return productSeeds.find((seed) => seed.definition.productType === productType);
}
