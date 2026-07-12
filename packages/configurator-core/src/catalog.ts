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
      colors,
      visual: { postSize: 0.14, beamHeight: 0.18, louvrePitch: 0.21, demoOnly: true },
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
      ],
      colors,
      visual: { postSize: 0.13, beamHeight: 0.17, rafterWidth: 0.08, roofThickness: 0.018, demoOnly: true },
    },
    pricing: { basePrice: 6_400, pricePerSquareMeter: 510, moduleSurcharge: 0, optionSurcharge: 690, minimumPrice: 9_500, multiplier: 1, vatRate: 0.23, rounding: 10, demoOnly: true },
    bom: { profileAllowance: 1.08, demoOnly: true },
  },
];

export function getProductSeed(productType: string) {
  return productSeeds.find((seed) => seed.definition.productType === productType);
}
