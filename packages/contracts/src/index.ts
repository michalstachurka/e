import { z } from "zod";

export const ProductTypeSchema = z.enum(["bioclimatic-pergola", "veranda"]);
export type ProductType = z.infer<typeof ProductTypeSchema>;

export const ProductStatusSchema = z.enum(["draft", "published", "archived"]);

export const SideSelectionSchema = z.object({
  front: z.boolean(),
  back: z.boolean(),
  left: z.boolean(),
  right: z.boolean(),
});

export const ExtraLegSchema = z.object({
  x: z.number().finite(),
  z: z.number().finite(),
  side: z.enum(["front", "back", "left", "right"]),
});

export const PergolaValuesSchema = z.object({
  construction: z.enum(["freestanding", "wall", "roof"]),
  moduleWidths: z.array(z.number().finite()).min(1).max(2),
  depth: z.number().finite(),
  height: z.number().finite(),
  slatAngle: z.number().finite(),
  frameColor: z.string().min(1).max(40),
  slatColor: z.string().min(1).max(40),
  screenColor: z.string().min(1).max(40),
  ledLinear: z.boolean(),
  ledSpots: z.boolean(),
  screens: SideSelectionSchema,
  glass: SideSelectionSchema,
  extraLegs: z.array(ExtraLegSchema).max(12),
});

export const VerandaValuesSchema = z.object({
  width: z.number().finite(),
  depth: z.number().finite(),
  backHeight: z.number().finite(),
  frontHeight: z.number().finite(),
  roofAngle: z.number().finite(),
  roofFields: z.number().int(),
  rafterCount: z.number().int(),
  postCount: z.number().int(),
  roofMaterial: z.enum(["clear-glass", "smoked-glass", "clear-polycarbonate", "opal-polycarbonate"]),
  leftWall: z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid", "top-wedge"]),
  rightWall: z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid", "top-wedge"]),
  frontWall: z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid"]),
  frameColor: z.string().min(1).max(40),
  lighting: z.boolean(),
});

const ConfigurationBaseSchema = z.object({
  schemaVersion: z.literal("2.0"),
  tenantSlug: z.string().regex(/^[a-z0-9-]{2,50}$/),
  productVersionId: z.string().min(3).max(100),
});

export const PublicConfigurationSchema = z.discriminatedUnion("productType", [
  ConfigurationBaseSchema.extend({
    productType: z.literal("bioclimatic-pergola"),
    values: PergolaValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("veranda"),
    values: VerandaValuesSchema,
  }),
]);
export type PublicConfiguration = z.infer<typeof PublicConfigurationSchema>;

export const ParameterDefinitionSchema = z.object({
  key: z.string().min(1).max(80),
  label: z.string().min(1).max(120),
  section: z.string().min(1).max(80),
  type: z.enum(["range", "select", "toggle", "side-selection", "positions"]),
  unit: z.string().max(20).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().positive().optional(),
  defaultValue: z.unknown(),
  hidden: z.boolean().default(false),
  demoOnly: z.boolean().default(false),
  options: z.array(z.object({
    id: z.string().min(1).max(80),
    label: z.string().min(1).max(120),
    demoOnly: z.boolean().default(false),
  })).optional(),
});

export const ColorDefinitionSchema = z.object({
  id: z.string().min(1).max(40),
  label: z.string().min(1).max(80),
  value: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  demoOnly: z.boolean().default(false),
});

export const ProductDefinitionSchema = z.object({
  id: z.string().min(1).max(100),
  productType: ProductTypeSchema,
  name: z.string().min(1).max(120),
  description: z.string().min(1).max(500),
  enabled: z.boolean(),
  order: z.number().int().nonnegative(),
  version: z.object({
    id: z.string().min(1).max(100),
    number: z.number().int().positive(),
    status: ProductStatusSchema,
  }),
  steps: z.array(z.object({ id: z.string(), label: z.string(), order: z.number().int() })),
  parameters: z.array(ParameterDefinitionSchema),
  colors: z.array(ColorDefinitionSchema),
  visual: z.record(z.string(), z.unknown()),
});
export type ProductDefinition = z.infer<typeof ProductDefinitionSchema>;

export const BrandingSettingsSchema = z.object({
  companyName: z.string().min(1).max(120),
  logoText: z.string().min(1).max(40),
  contactEmail: z.string().email(),
  primaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  accentColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  backgroundColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  fontHeading: z.string().min(1).max(80),
  fontBody: z.string().min(1).max(80),
  pdfFooter: z.string().max(300),
});

export const SaveConfigurationRequestSchema = z.object({
  configuration: PublicConfigurationSchema,
  expiresInDays: z.number().int().min(1).max(365).optional(),
});

export const QuoteRequestSchema = z.object({
  configuration: PublicConfigurationSchema,
});

export const PdfRequestSchema = z.object({
  configuration: PublicConfigurationSchema,
  snapshotDataUrl: z.string().max(4_500_000).optional(),
});

export const AdminLoginSchema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(12).max(200),
});

export const AdminProductUpdateSchema = z.object({
  name: z.string().min(1).max(120),
  description: z.string().min(1).max(500),
  enabled: z.boolean(),
  order: z.number().int().min(0).max(100),
  steps: z.array(z.object({ id: z.string().min(1).max(80), label: z.string().min(1).max(120), order: z.number().int() })).max(20),
  parameters: z.array(ParameterDefinitionSchema).max(80),
  colors: z.array(ColorDefinitionSchema).max(40),
  visual: z.record(z.string(), z.unknown()),
  pricing: z.object({
    basePrice: z.number().min(0).max(1_000_000),
    pricePerSquareMeter: z.number().min(0).max(100_000),
    moduleSurcharge: z.number().min(0).max(100_000),
    optionSurcharge: z.number().min(0).max(100_000),
    minimumPrice: z.number().min(0).max(1_000_000),
    multiplier: z.number().min(0.1).max(10),
    vatRate: z.number().min(0).max(1),
    rounding: z.number().min(1).max(1000),
    demoOnly: z.literal(true),
  }),
});

export type AdminProductUpdate = z.infer<typeof AdminProductUpdateSchema>;
