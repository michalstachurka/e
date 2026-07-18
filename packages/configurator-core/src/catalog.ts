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

const garageColors = colors.map((color) => ({ ...color, demoOnly: true as const }));

const sideShutterParameters = [
  { key: "sideShutters.bladeAngle", label: "Kąt lameli shuttersów", section: "side-shutters", type: "range" as const, unit: "°", min: 0, max: 90, step: 1, defaultValue: 35, hidden: false, demoOnly: true },
  { key: "sideShutters.openingPercent", label: "Przesunięcie paneli shuttersów", section: "side-shutters", type: "range" as const, unit: "%", min: 0, max: 100, step: 1, defaultValue: 0, hidden: false, demoOnly: true },
];

const sideShutterProfiles = [
  { id: "side-shutter-frame", label: "Rama shuttersa", usage: "Obwodowa rama panelu bocznego", aMm: 45, bMm: 38, shape: "rectangular" as const, geometryType: "BOX" as const, demoOnly: true },
  { id: "side-shutter-blade", label: "Lamela shuttersa", usage: "Pionowa lub pozioma lamela panelu", aMm: 90, bMm: 16, shape: "louvre" as const, geometryType: "BOX" as const, demoOnly: true },
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
        ...sideShutterParameters,
      ],
      profiles: [
        { id: "structural-post", label: "Słup konstrukcyjny", usage: "Podparcie pionowe konstrukcji", aMm: 140, bMm: 140, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka ramy", usage: "Obwodowa rama dachu", aMm: 140, bMm: 180, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-louvre", label: "Lamela dachowa", usage: "Ruchome wypełnienie dachu", aMm: 210, bMm: 15, shape: "louvre", geometryType: "BOX", demoOnly: true },
        ...sideShutterProfiles,
      ],
      colors,
      visual: { postSize: 0.14, beamHeight: 0.18, louvrePitch: 0.21, louvreThickness: 0.015, sideShutterPanelMaxWidth: 1.2, sideShutterFrameWidth: 0.045, sideShutterBladePitch: 0.12, demoOnly: true },
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
        ...sideShutterParameters,
      ],
      profiles: [
        { id: "structural-post", label: "Słup frontowy", usage: "Podparcie pionowe frontu", aMm: 130, bMm: 130, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka konstrukcyjna", usage: "Belka przyścienna i frontowa", aMm: 130, bMm: 170, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-rafter", label: "Krokiew dachowa", usage: "Podparcie pola dachowego", aMm: 80, bMm: 122, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "screen-support", label: "Profil pod kasetę ZIP", usage: "Opcjonalne podparcie kasety na boku", aMm: 50, bMm: 80, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        ...sideShutterProfiles,
      ],
      colors,
      visual: { postSize: 0.13, beamHeight: 0.17, rafterWidth: 0.08, rafterHeight: 0.122, roofThickness: 0.018, screenCassetteHeight: 0.105, screenCassetteDepth: 0.11, sideShutterPanelMaxWidth: 1.2, sideShutterFrameWidth: 0.045, sideShutterBladePitch: 0.12, demoOnly: true },
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
      version: { id: "visnex-carport-v3", number: 3, status: "published" },
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
        ...sideShutterParameters,
      ],
      profiles: [
        { id: "structural-post", label: "Słup konstrukcyjny", usage: "Podparcie pionowe konstrukcji", aMm: 140, bMm: 140, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "frame-beam", label: "Belka ramy", usage: "Obwodowa rama dachu", aMm: 140, bMm: 180, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "roof-sheet", label: "Blacha trapezowa", usage: "Nieruchome poszycie dachu", aMm: 200, bMm: 35, shape: "louvre", geometryType: "BOX", demoOnly: true },
        ...sideShutterProfiles,
      ],
      colors,
      visual: { postSize: 0.14, beamHeight: 0.18, sheetPitch: 0.2, sheetRibHeight: 0.035, sheetThickness: 0.012, antiCondensationThickness: 0.006, sideShutterPanelMaxWidth: 1.2, sideShutterFrameWidth: 0.045, sideShutterBladePitch: 0.12, demoOnly: true },
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
      version: { id: "visnex-window-screen-v3", number: 3, status: "published" },
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
        { key: "unitCount", label: "Liczba sąsiadujących rolet", section: "dimensions", type: "range", min: 1, max: 8, step: 1, defaultValue: 1, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień opuszczenia", section: "fabric", type: "range", unit: "%", min: 0, max: 100, step: 1, defaultValue: 80, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "mounting", type: "select", defaultValue: "reveal", hidden: false, demoOnly: true, options: [
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
      version: { id: "visnex-external-shutter-v3", number: 3, status: "published" },
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
        { key: "unitCount", label: "Liczba sąsiadujących rolet", section: "dimensions", type: "range", min: 1, max: 8, step: 1, defaultValue: 1, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień opuszczenia", section: "system", type: "range", unit: "%", min: 0, max: 100, step: 1, defaultValue: 65, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "system", type: "select", defaultValue: "reveal", hidden: false, demoOnly: true, options: [
          { id: "front", label: "Natynkowy", demoOnly: true }, { id: "reveal", label: "We wnęce", demoOnly: true }, { id: "under-plaster", label: "Podtynkowy", demoOnly: true }, { id: "top-mounted", label: "Nadstawny", demoOnly: true },
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
      id: "product-facade-blind",
      productType: "facade-blind",
      name: "Żaluzja fasadowa",
      description: "Zewnętrzna żaluzja aluminiowa z podnoszeniem pakietu i niezależną regulacją kąta lameli C/Z.",
      enabled: true,
      order: 55,
      version: { id: "visnex-facade-blind-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Wymiary", order: 10 },
        { id: "mounting", label: "Montaż", order: 20 },
        { id: "slats", label: "Lamele", order: 30 },
        { id: "drive", label: "Sterowanie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 0.6, max: 5, step: 0.05, defaultValue: 2, hidden: false, demoOnly: true },
        { key: "height", label: "Wysokość", section: "dimensions", type: "range", unit: "m", min: 0.8, max: 5, step: 0.05, defaultValue: 2.4, hidden: false, demoOnly: true },
        { key: "unitCount", label: "Liczba sąsiadujących żaluzji", section: "dimensions", type: "range", min: 1, max: 8, step: 1, defaultValue: 1, hidden: false, demoOnly: true },
        { key: "openingPercent", label: "Stopień opuszczenia pakietu", section: "slats", type: "range", unit: "%", min: 0, max: 100, step: 1, defaultValue: 85, hidden: false, demoOnly: true },
        { key: "slatAngle", label: "Kąt lameli", section: "slats", type: "range", unit: "°", min: 0, max: 90, step: 1, defaultValue: 45, hidden: false, demoOnly: true },
        { key: "mounting", label: "Sposób montażu", section: "mounting", type: "select", defaultValue: "reveal", hidden: false, demoOnly: true, options: [
          { id: "front", label: "Natynkowy", demoOnly: true }, { id: "reveal", label: "We wnęce", demoOnly: true }, { id: "under-plaster", label: "Podtynkowy", demoOnly: true },
        ] },
        { key: "slatProfile", label: "Geometria lameli", section: "slats", type: "select", defaultValue: "z90", hidden: false, demoOnly: true, options: [
          { id: "c80", label: "C80 · profil otwarty", demoOnly: true }, { id: "z90", label: "Z90 · profil domykający", demoOnly: true },
        ] },
        { key: "guideType", label: "Prowadzenie boczne", section: "mounting", type: "select", defaultValue: "rails", hidden: false, demoOnly: true, options: [
          { id: "rails", label: "Prowadnice szynowe", demoOnly: true }, { id: "cables", label: "Prowadzenie linkowe", demoOnly: true },
        ] },
        { key: "drive", label: "Napęd", section: "drive", type: "select", defaultValue: "radio", hidden: false, demoOnly: true, options: [
          { id: "manual", label: "Ręczny", demoOnly: true }, { id: "wired", label: "Przewodowy", demoOnly: true }, { id: "radio", label: "Radiowy", demoOnly: true }, { id: "solar", label: "Solarny", demoOnly: true },
        ] },
      ],
      profiles: [
        { id: "facade-blind-headrail", label: "Rynna górna", usage: "Mechanizm podnoszenia i obrotu", aMm: 58, bMm: 56, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "facade-blind-guide", label: "Prowadnica boczna", usage: "Szynowe prowadzenie pakietu", aMm: 25, bMm: 40, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "facade-blind-c80", label: "Lamela C80", usage: "Otwarta lamela fasadowa o przekroju C", aMm: 80, bMm: 8, shape: "louvre", geometryType: "BOX", demoOnly: true },
        { id: "facade-blind-z90", label: "Lamela Z90", usage: "Domykająca lamela fasadowa o przekroju Z", aMm: 90, bMm: 12, shape: "louvre", geometryType: "BOX", demoOnly: true },
        { id: "facade-blind-bottom", label: "Listwa dolna", usage: "Usztywnienie dolnej krawędzi pakietu", aMm: 80, bMm: 18, shape: "rectangular", geometryType: "BOX", demoOnly: true },
      ],
      colors: garageColors,
      visual: { headrailWidth: 0.058, headrailHeight: 0.056, guideWidth: 0.025, slatPitchC80: 0.075, slatPitchZ90: 0.083, slatDepthC80: 0.08, slatDepthZ90: 0.09, slatThickness: 0.004, bottomRailHeight: 0.055, demoOnly: true },
    },
    pricing: { basePrice: 1_900, pricePerSquareMeter: 390, moduleSurcharge: 140, optionSurcharge: 260, minimumPrice: 2_350, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.05, demoOnly: true },
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
  {
    definition: {
      id: "product-metal-garage",
      productType: "metal-garage",
      name: "Garaż blaszany",
      description: "Parametryczny garaż z blachy trapezowej, bramami, otworami, wiatą boczną i wyposażeniem demonstracyjnym.",
      enabled: true,
      order: 70,
      version: { id: "visnex-metal-garage-v1", number: 1, status: "published" },
      steps: [
        { id: "dimensions", label: "Bryła", order: 10 },
        { id: "roof", label: "Dach i blacha", order: 20 },
        { id: "openings", label: "Bramy i otwory", order: 30 },
        { id: "equipment", label: "Wyposażenie", order: 40 },
        { id: "summary", label: "Podsumowanie", order: 50 },
      ],
      parameters: [
        { key: "width", label: "Szerokość", section: "dimensions", type: "range", unit: "m", min: 3, max: 8.5, step: 0.25, defaultValue: 5.5, hidden: false, demoOnly: true },
        { key: "depth", label: "Głębokość", section: "dimensions", type: "range", unit: "m", min: 4, max: 8, step: 0.25, defaultValue: 6, hidden: false, demoOnly: true },
        { key: "wallHeight", label: "Wysokość ściany", section: "dimensions", type: "range", unit: "m", min: 2.1, max: 2.8, step: 0.05, defaultValue: 2.4, hidden: false, demoOnly: true },
        { key: "roofType", label: "Forma dachu", section: "roof", type: "select", defaultValue: "gable", hidden: false, demoOnly: true, options: [
          { id: "mono-rear", label: "Jednospadowy do tyłu", demoOnly: true }, { id: "gable", label: "Dwuspadowy", demoOnly: true },
        ] },
        { key: "wallSheetOrientation", label: "Układ przetłoczeń ścian", section: "roof", type: "select", defaultValue: "vertical", hidden: false, demoOnly: true, options: [
          { id: "vertical", label: "Pionowy", demoOnly: true }, { id: "horizontal", label: "Poziomy", demoOnly: true },
        ] },
        { key: "gateType", label: "Typ bramy", section: "openings", type: "select", defaultValue: "sectional", hidden: false, demoOnly: true, options: [
          { id: "up-and-over", label: "Uchylna", demoOnly: true }, { id: "double-leaf", label: "Dwuskrzydłowa", demoOnly: true }, { id: "sectional", label: "Segmentowa", demoOnly: true },
        ] },
        { key: "gateCount", label: "Liczba bram", section: "openings", type: "range", min: 1, max: 2, step: 1, defaultValue: 2, hidden: false, demoOnly: true },
        { key: "windowCount", label: "Liczba okien", section: "openings", type: "range", min: 0, max: 4, step: 1, defaultValue: 2, hidden: false, demoOnly: true },
        { key: "personnelDoor", label: "Drzwi wejściowe", section: "openings", type: "toggle", defaultValue: true, hidden: false, demoOnly: true },
        { key: "sideCanopy", label: "Wiata boczna", section: "equipment", type: "toggle", defaultValue: false, hidden: false, demoOnly: true },
        { key: "sideCanopySide", label: "Strona wiaty", section: "equipment", type: "select", defaultValue: "right", hidden: false, demoOnly: true, options: [
          { id: "left", label: "Lewa", demoOnly: true }, { id: "right", label: "Prawa", demoOnly: true },
        ] },
        { key: "sideCanopyWidth", label: "Szerokość wiaty", section: "equipment", type: "range", unit: "m", min: 1.2, max: 3, step: 0.1, defaultValue: 2.4, hidden: false, demoOnly: true },
        { key: "gateDrive", label: "Napęd bramy", section: "equipment", type: "toggle", defaultValue: true, hidden: false, demoOnly: true },
        { key: "gutters", label: "Orynnowanie", section: "equipment", type: "toggle", defaultValue: true, hidden: false, demoOnly: true },
        { key: "anchoring", label: "Kotwienie", section: "equipment", type: "toggle", defaultValue: true, hidden: false, demoOnly: true },
        { key: "antiCondensationFelt", label: "Filc antykondensacyjny", section: "equipment", type: "toggle", defaultValue: false, hidden: false, demoOnly: true },
      ],
      profiles: [
        { id: "garage-frame", label: "Rama konstrukcyjna", usage: "Szkielet ścian i narożników", aMm: 60, bMm: 40, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "garage-roof-purlin", label: "Płatew dachowa", usage: "Podparcie poszycia dachowego", aMm: 50, bMm: 30, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "garage-gate-frame", label: "Rama bramy", usage: "Obramowanie otworu bramowego", aMm: 50, bMm: 40, shape: "rectangular", geometryType: "BOX", demoOnly: true },
        { id: "garage-canopy-post", label: "Słup wiaty", usage: "Podparcie zewnętrznej krawędzi wiaty", aMm: 70, bMm: 70, shape: "rectangular", geometryType: "BOX", demoOnly: true },
      ],
      colors: garageColors,
      visual: { frameWidth: 0.06, wallSheetThickness: 0.018, wallRibPitch: 0.24, wallRibDepth: 0.026, roofRise: 0.5, monoRoofRise: 0.34, roofSheetThickness: 0.018, roofRibPitch: 0.24, roofRibDepth: 0.035, gateInset: 0.035, demoOnly: true },
    },
    pricing: { basePrice: 6_900, pricePerSquareMeter: 240, moduleSurcharge: 1_200, optionSurcharge: 320, minimumPrice: 8_500, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.08, demoOnly: true },
  },
];

export function getProductSeed(productType: string) {
  return productSeeds.find((seed) => seed.definition.productType === productType);
}
