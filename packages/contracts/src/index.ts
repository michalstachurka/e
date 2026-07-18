import { z } from "zod";

export const ProductTypeSchema = z.enum([
  "bioclimatic-pergola",
  "veranda",
  "carport",
  "window-screen",
  "external-roller-shutter",
  "facade-blind",
  "awning",
  "metal-garage",
]);
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

const EmptySideSelection = { front: false, back: false, left: false, right: false } as const;

export const StructureSideShuttersSchema = z.object({
  formatVersion: z.literal("1.0").default("1.0"),
  sides: SideSelectionSchema.default(EmptySideSelection),
  bladeOrientation: z.enum(["horizontal", "vertical"]).default("horizontal"),
  panelMotion: z.enum(["fixed", "sliding"]).default("fixed"),
  bladeMotion: z.enum(["fixed", "adjustable"]).default("adjustable"),
  bladeAngle: z.number().finite().min(0).max(90).default(35),
  openingPercent: z.number().int().min(0).max(100).default(0),
  color: z.string().min(1).max(40).default("anthracite"),
}).default({
  formatVersion: "1.0",
  sides: EmptySideSelection,
  bladeOrientation: "horizontal",
  panelMotion: "fixed",
  bladeMotion: "adjustable",
  bladeAngle: 35,
  openingPercent: 0,
  color: "anthracite",
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
  sideShutters: StructureSideShuttersSchema,
});

const VerandaSideWallSchema = z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid", "top-wedge"]);
const VerandaTriangleFillSchema = z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid"]);

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
  leftWall: VerandaSideWallSchema,
  rightWall: VerandaSideWallSchema,
  frontWall: z.enum(["none", "full-glass", "sliding-glass", "zip-screen", "solid"]),
  leftTriangle: VerandaTriangleFillSchema.default("none"),
  rightTriangle: VerandaTriangleFillSchema.default("none"),
  leftScreenSupport: z.boolean().default(false),
  rightScreenSupport: z.boolean().default(false),
  frameColor: z.string().min(1).max(40),
  lighting: z.boolean().default(false),
  rafterLeds: z.array(z.number().int().nonnegative()).max(20).default([]),
  extraLegs: z.array(ExtraLegSchema).max(12).default([]),
  sideShutters: StructureSideShuttersSchema,
});

export const CarportValuesSchema = z.object({
  construction: z.enum(["freestanding", "wall", "roof"]),
  moduleWidths: z.array(z.number().finite()).min(1).max(2),
  depth: z.number().finite(),
  height: z.number().finite(),
  frameColor: z.string().min(1).max(40),
  roofColor: z.string().min(1).max(40),
  screenColor: z.string().min(1).max(40),
  antiCondensationLayer: z.literal(true).default(true),
  ledLinear: z.boolean(),
  screens: SideSelectionSchema,
  glass: SideSelectionSchema,
  extraLegs: z.array(ExtraLegSchema).max(12),
  sideShutters: StructureSideShuttersSchema,
});

export const WindowScreenValuesSchema = z.object({
  width: z.number().finite(),
  height: z.number().finite(),
  unitCount: z.number().int().min(1).max(8).default(1),
  mounting: z.enum(["front", "reveal", "under-plaster", "top-mounted"]),
  guideType: z.enum(["zip", "classic"]),
  fabric: z.enum(["transparent", "privacy", "blackout"]),
  fabricColor: z.string().min(1).max(40),
  frameColor: z.string().min(1).max(40),
  drive: z.enum(["wired", "radio", "solar"]),
  openingPercent: z.number().int().min(0).max(100),
  windSensor: z.boolean(),
});

export const ExternalRollerShutterValuesSchema = z.object({
  width: z.number().finite(),
  height: z.number().finite(),
  unitCount: z.number().int().min(1).max(8).default(1),
  mounting: z.enum(["front", "reveal", "under-plaster", "top-mounted"]),
  slatProfile: z.enum(["aluminium-foam", "extruded", "pvc-demo"]),
  armorColor: z.string().min(1).max(40),
  boxColor: z.string().min(1).max(40),
  guideColor: z.string().min(1).max(40),
  drive: z.enum(["manual", "wired", "radio", "solar"]),
  integratedMosquitoNet: z.boolean(),
  openingPercent: z.number().int().min(0).max(100),
});

export const FacadeBlindValuesSchema = z.object({
  width: z.number().finite(),
  height: z.number().finite(),
  unitCount: z.number().int().min(1).max(8).default(1),
  mounting: z.enum(["front", "reveal", "under-plaster"]),
  slatProfile: z.enum(["c80", "z90"]),
  guideType: z.enum(["rails", "cables"]),
  slatAngle: z.number().int().min(0).max(90),
  openingPercent: z.number().int().min(0).max(100),
  slatColor: z.string().min(1).max(40),
  hardwareColor: z.string().min(1).max(40),
  drive: z.enum(["manual", "wired", "radio", "solar"]),
  weatherStation: z.boolean(),
});

export const AwningValuesSchema = z.object({
  width: z.number().finite(),
  projection: z.number().finite(),
  mounting: z.enum(["wall", "ceiling", "roof"]),
  cassetteType: z.enum(["open", "semi-cassette", "full-cassette"]),
  pitch: z.number().finite(),
  fabricColor: z.string().min(1).max(40),
  frameColor: z.string().min(1).max(40),
  drive: z.enum(["manual", "wired", "radio"]),
  led: z.boolean(),
  windSensor: z.boolean(),
  sunSensor: z.boolean(),
  openingPercent: z.number().int().min(0).max(100),
});

export const MetalGarageValuesSchema = z.object({
  width: z.number().finite(),
  depth: z.number().finite(),
  wallHeight: z.number().finite(),
  roofType: z.enum(["mono-rear", "gable"]),
  wallSheetOrientation: z.enum(["vertical", "horizontal"]),
  wallColor: z.string().min(1).max(40),
  roofColor: z.string().min(1).max(40),
  gateColor: z.string().min(1).max(40),
  gateType: z.enum(["up-and-over", "double-leaf", "sectional"]),
  gateCount: z.number().int().min(1).max(2),
  windowCount: z.number().int().min(0).max(4),
  personnelDoor: z.boolean(),
  sideCanopy: z.boolean(),
  sideCanopySide: z.enum(["left", "right"]),
  sideCanopyWidth: z.number().finite(),
  gateDrive: z.boolean(),
  gutters: z.boolean(),
  anchoring: z.boolean(),
  antiCondensationFelt: z.boolean(),
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
  ConfigurationBaseSchema.extend({
    productType: z.literal("carport"),
    values: CarportValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("window-screen"),
    values: WindowScreenValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("external-roller-shutter"),
    values: ExternalRollerShutterValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("facade-blind"),
    values: FacadeBlindValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("awning"),
    values: AwningValuesSchema,
  }),
  ConfigurationBaseSchema.extend({
    productType: z.literal("metal-garage"),
    values: MetalGarageValuesSchema,
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

export const AdminRoleSchema = z.enum(["OWNER", "ADMIN", "EDITOR", "VIEWER"]);
export type AdminRole = z.infer<typeof AdminRoleSchema>;

export const ApplicationRoleSchema = z.enum(["platform_admin", "organization_admin", "advisor", "public_customer"]);
export type ApplicationRole = z.infer<typeof ApplicationRoleSchema>;

export const ConfiguratorModeSchema = z.enum(["PUBLIC", "ADVISOR"]);
export type ConfiguratorMode = z.infer<typeof ConfiguratorModeSchema>;

export const FeatureKeySchema = z.enum([
  "CUSTOMER_PHOTO",
  "BASIC_PHOTO_FIT",
  "ADVANCED_CALIBRATION",
  "OBSTACLE_MASKING",
  "PUBLIC_PRICE",
  "INTERNAL_CALCULATION",
  "GLB_EXPORT",
  "JSON_EXPORT",
]);
export type FeatureKey = z.infer<typeof FeatureKeySchema>;

export const PriceVisibilitySchema = z.enum(["HIDDEN", "FROM", "EXACT"]);
export type PriceVisibility = z.infer<typeof PriceVisibilitySchema>;

const ModeFeatureSettingsSchema = z.object({
  customerPhoto: z.boolean(),
  basicPhotoFit: z.boolean(),
  advancedCalibration: z.boolean(),
  obstacleMasking: z.boolean(),
  publicPrice: z.boolean(),
  internalCalculation: z.boolean(),
  glbExport: z.boolean(),
  jsonExport: z.boolean(),
});

export const FeatureAvailabilitySettingsSchema = z.object({
  policyFormatVersion: z.literal("1.0"),
  public: ModeFeatureSettingsSchema,
  advisor: ModeFeatureSettingsSchema,
  publicPriceVisibility: PriceVisibilitySchema,
  limits: z.object({
    maxPhotoBytes: z.number().int().min(100_000).max(25_000_000),
    maxPhotoDimension: z.number().int().min(640).max(12_000),
    maxPhotosPerProject: z.number().int().min(1).max(20),
    maxProjectVersions: z.number().int().min(5).max(1_000),
  }),
});
export type FeatureAvailabilitySettings = z.infer<typeof FeatureAvailabilitySettingsSchema>;

const Point2DSchema = z.object({ x: z.number().finite(), y: z.number().finite() });
const Point3DSchema = z.object({ x: z.number().finite(), y: z.number().finite(), z: z.number().finite() });

export const PhotoTransformSchema = z.object({
  crop: z.object({ x: z.number().min(0).max(1), y: z.number().min(0).max(1), width: z.number().positive().max(1), height: z.number().positive().max(1) }),
  offsetX: z.number().min(-2).max(2),
  offsetY: z.number().min(-2).max(2),
  scale: z.number().min(0.1).max(10),
  rotationDeg: z.number().min(-180).max(180),
  brightness: z.number().min(0.25).max(2),
  contrast: z.number().min(0.25).max(2),
});

export const ModelTransformSchema = z.object({
  position: Point3DSchema,
  rotationDeg: Point3DSchema,
  scale: z.number().min(0.05).max(20),
});

export const CalibrationSchema = z.object({
  method: z.enum(["MANUAL_ASSISTED", "ADVISOR_PERSPECTIVE"]),
  horizonY: z.number().min(0).max(1),
  groundLine: z.tuple([Point2DSchema, Point2DSchema]).nullable(),
  referenceLine: z.tuple([Point2DSchema, Point2DSchema]).nullable(),
  referenceLengthMm: z.number().positive().max(1_000_000).nullable(),
  groundPlane: z.array(Point2DSchema).max(8),
  facadePlane: z.array(Point2DSchema).max(8),
  perspectiveLines: z.array(z.tuple([Point2DSchema, Point2DSchema])).max(12),
  mountPoint: Point2DSchema.nullable(),
  fovDeg: z.number().min(15).max(100),
  helpersVisible: z.boolean(),
});

export const LightingSettingsSchema = z.object({
  azimuthDeg: z.number().min(-180).max(180),
  elevationDeg: z.number().min(5).max(89),
  shadowSoftness: z.number().min(0).max(1),
  shadowIntensity: z.number().min(0).max(1),
  modelBrightness: z.number().min(0.25).max(2),
  colorTemperatureK: z.number().min(2_500).max(10_000),
});

export const ProjectDocumentSchema = z.object({
  projectFormatVersion: z.literal("1.0"),
  configuration: PublicConfigurationSchema,
  scene: z.object({
    photoAssetId: z.string().uuid().nullable(),
    photoTransform: PhotoTransformSchema,
    modelTransform: ModelTransformSchema,
    camera: CalibrationSchema,
    lighting: LightingSettingsSchema,
    foregroundMaskAssetId: z.string().uuid().nullable(),
  }),
});
export type ProjectDocument = z.infer<typeof ProjectDocumentSchema>;

export const defaultProjectScene: ProjectDocument["scene"] = {
  photoAssetId: null,
  photoTransform: { crop: { x: 0, y: 0, width: 1, height: 1 }, offsetX: 0, offsetY: 0, scale: 1, rotationDeg: 0, brightness: 1, contrast: 1 },
  modelTransform: { position: { x: 0, y: 0, z: 0 }, rotationDeg: { x: 0, y: 0, z: 0 }, scale: 1 },
  camera: { method: "MANUAL_ASSISTED", horizonY: 0.5, groundLine: null, referenceLine: null, referenceLengthMm: null, groundPlane: [], facadePlane: [], perspectiveLines: [], mountPoint: null, fovDeg: 38, helpersVisible: false },
  lighting: { azimuthDeg: 35, elevationDeg: 48, shadowSoftness: 0.65, shadowIntensity: 0.45, modelBrightness: 1, colorTemperatureK: 6_500 },
  foregroundMaskAssetId: null,
};

export const ProfileGeometryTypeSchema = z.enum(["BOX", "SVG_PROFILE"]);
export const ProfileRotationSchema = z.union([
  z.literal(0),
  z.literal(90),
  z.literal(180),
  z.literal(270),
]);

export const SvgProfileReferenceSchema = z.object({
  assetId: z.string().uuid(),
  extrusionLengthMm: z.number().finite().positive().max(100_000),
  widthMm: z.number().finite().positive().max(100_000),
  heightMm: z.number().finite().positive().max(100_000),
  viewBox: z.object({
    minX: z.number().finite(),
    minY: z.number().finite(),
    width: z.number().finite().positive().max(100_000),
    height: z.number().finite().positive().max(100_000),
  }),
  rotationDeg: ProfileRotationSchema.default(0),
  mirrorX: z.boolean().default(false),
  mirrorY: z.boolean().default(false),
  profileFormatVersion: z.literal("1.0"),
  geometryFormatVersion: z.literal("1.0"),
  contentHash: z.string().regex(/^[a-f0-9]{64}$/),
});
export type SvgProfileReference = z.infer<typeof SvgProfileReferenceSchema>;

export const ProfileDefinitionSchema = z.object({
  id: z.string().min(1).max(80),
  label: z.string().min(1).max(120),
  usage: z.string().min(1).max(180),
  aMm: z.number().finite().positive().max(100_000),
  bMm: z.number().finite().positive().max(100_000),
  shape: z.enum(["rectangular", "louvre"]).default("rectangular"),
  geometryType: ProfileGeometryTypeSchema.default("BOX"),
  svgProfile: SvgProfileReferenceSchema.optional(),
  demoOnly: z.boolean().default(false),
}).superRefine((profile, context) => {
  if (profile.geometryType === "SVG_PROFILE" && !profile.svgProfile) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["svgProfile"], message: "Profil SVG wymaga przesłanego i zweryfikowanego pliku." });
  }
  if (profile.geometryType === "BOX" && profile.svgProfile) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["svgProfile"], message: "Kształt uproszczony nie może jednocześnie wskazywać profilu SVG." });
  }
});
export type ProfileDefinition = z.infer<typeof ProfileDefinitionSchema>;

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
  profiles: z.array(ProfileDefinitionSchema).default([]),
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
  project: ProjectDocumentSchema.optional(),
  expiresInDays: z.number().int().min(1).max(365).optional(),
});

export const UpdateProjectRequestSchema = z.object({
  project: ProjectDocumentSchema,
  expectedVersion: z.number().int().positive(),
});

export const PrivateImageUploadSchema = z.object({
  fileName: z.string().min(1).max(255),
  contentBase64: z.string().min(32).max(12_000_000),
  kind: z.enum(["CUSTOMER_PHOTO", "FOREGROUND_MASK"]),
});

export const AdvisorCalculationRequestSchema = z.object({
  project: ProjectDocumentSchema,
  discountPercent: z.number().min(0).max(100).default(0),
  transportNet: z.number().min(0).max(1_000_000).default(0),
  assemblyNet: z.number().min(0).max(1_000_000).default(0),
  additionalItems: z.array(z.object({ label: z.string().min(1).max(160), quantity: z.number().positive().max(10_000), unitNet: z.number().min(0).max(1_000_000) })).max(40).default([]),
  validUntil: z.string().datetime().optional(),
});

export const ProjectExportRequestSchema = z.object({
  format: z.enum(["GLB", "JSON"]),
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

export const AdminProfileAssetUploadSchema = z.object({
  fileName: z.string().min(1).max(255),
  svg: z.string().min(1).max(1_500_000),
  profileFormatVersion: z.literal("1.0").default("1.0"),
});
export type AdminProfileAssetUpload = z.infer<typeof AdminProfileAssetUploadSchema>;

export const AdminProductUpdateSchema = z.object({
  name: z.string().min(1).max(120),
  description: z.string().min(1).max(500),
  enabled: z.boolean(),
  order: z.number().int().min(0).max(100),
  steps: z.array(z.object({ id: z.string().min(1).max(80), label: z.string().min(1).max(120), order: z.number().int() })).max(20),
  parameters: z.array(ParameterDefinitionSchema).max(80),
  profiles: z.array(ProfileDefinitionSchema).max(30).default([]),
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
