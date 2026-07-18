import type {
  AdminRole,
  ApplicationRole,
  ConfiguratorMode,
  FeatureAvailabilitySettings,
  FeatureKey,
  PriceVisibility,
} from "../../../packages/contracts/src/index.js";

const allEnabled = {
  customerPhoto: true,
  basicPhotoFit: true,
  advancedCalibration: true,
  obstacleMasking: true,
  publicPrice: true,
  internalCalculation: true,
  glbExport: true,
  jsonExport: true,
};

export const platformFeaturePolicy: FeatureAvailabilitySettings = {
  policyFormatVersion: "1.0",
  public: { ...allEnabled },
  advisor: { ...allEnabled },
  publicPriceVisibility: "EXACT",
  limits: { maxPhotoBytes: 8_000_000, maxPhotoDimension: 4_096, maxPhotosPerProject: 3, maxProjectVersions: 100 },
};

export const stageOnePlanFeaturePolicy: FeatureAvailabilitySettings = structuredClone(platformFeaturePolicy);

export const defaultOrganizationFeaturePolicy: FeatureAvailabilitySettings = {
  policyFormatVersion: "1.0",
  public: {
    customerPhoto: true,
    basicPhotoFit: true,
    advancedCalibration: false,
    obstacleMasking: false,
    publicPrice: true,
    internalCalculation: false,
    glbExport: false,
    jsonExport: false,
  },
  advisor: {
    customerPhoto: true,
    basicPhotoFit: true,
    advancedCalibration: true,
    obstacleMasking: true,
    publicPrice: true,
    internalCalculation: true,
    glbExport: true,
    jsonExport: true,
  },
  publicPriceVisibility: "EXACT",
  limits: { maxPhotoBytes: 8_000_000, maxPhotoDimension: 4_096, maxPhotosPerProject: 3, maxProjectVersions: 100 },
};

export interface FeaturePolicyBundle {
  platform: FeatureAvailabilitySettings;
  plan: FeatureAvailabilitySettings;
  organization: FeatureAvailabilitySettings;
  product: FeatureAvailabilitySettings | null;
}

const featureProperty: Record<FeatureKey, keyof FeatureAvailabilitySettings["public"]> = {
  CUSTOMER_PHOTO: "customerPhoto",
  BASIC_PHOTO_FIT: "basicPhotoFit",
  ADVANCED_CALIBRATION: "advancedCalibration",
  OBSTACLE_MASKING: "obstacleMasking",
  PUBLIC_PRICE: "publicPrice",
  INTERNAL_CALCULATION: "internalCalculation",
  GLB_EXPORT: "glbExport",
  JSON_EXPORT: "jsonExport",
};

export function applicationRoleForAdmin(role: AdminRole): ApplicationRole {
  if (role === "OWNER" || role === "ADMIN") return "organization_admin";
  return "advisor";
}

const roleAllows = (role: ApplicationRole, mode: ConfiguratorMode, feature: FeatureKey) => {
  if (mode === "PUBLIC") return role === "public_customer";
  if (role === "platform_admin" || role === "organization_admin") return true;
  if (role !== "advisor") return false;
  return feature !== "PUBLIC_PRICE";
};

export interface EffectiveCapabilities {
  mode: ConfiguratorMode;
  role: ApplicationRole;
  features: Record<FeatureKey, boolean>;
  publicPriceVisibility: PriceVisibility;
  limits: FeatureAvailabilitySettings["limits"];
  maxDiscountPercent: number;
}

export function resolveEffectiveCapabilities(bundle: FeaturePolicyBundle, mode: ConfiguratorMode, role: ApplicationRole): EffectiveCapabilities {
  const levelSettings = [bundle.platform, bundle.plan, bundle.organization, bundle.product].filter(Boolean) as FeatureAvailabilitySettings[];
  const modeKey = mode === "PUBLIC" ? "public" : "advisor";
  const features = Object.fromEntries(Object.entries(featureProperty).map(([feature, property]) => [
    feature,
    roleAllows(role, mode, feature as FeatureKey) && levelSettings.every((settings) => settings[modeKey][property]),
  ])) as Record<FeatureKey, boolean>;
  if (!features.CUSTOMER_PHOTO) {
    features.BASIC_PHOTO_FIT = false;
    features.ADVANCED_CALIBRATION = false;
    features.OBSTACLE_MASKING = false;
  }
  if (mode === "PUBLIC") features.INTERNAL_CALCULATION = false;
  const limits = levelSettings.reduce((effective, settings) => ({
    maxPhotoBytes: Math.min(effective.maxPhotoBytes, settings.limits.maxPhotoBytes),
    maxPhotoDimension: Math.min(effective.maxPhotoDimension, settings.limits.maxPhotoDimension),
    maxPhotosPerProject: Math.min(effective.maxPhotosPerProject, settings.limits.maxPhotosPerProject),
    maxProjectVersions: Math.min(effective.maxProjectVersions, settings.limits.maxProjectVersions),
  }), bundle.platform.limits);
  return {
    mode,
    role,
    features,
    publicPriceVisibility: features.PUBLIC_PRICE ? bundle.organization.publicPriceVisibility : "HIDDEN",
    limits,
    maxDiscountPercent: role === "platform_admin" || role === "organization_admin" ? 15 : role === "advisor" ? 5 : 0,
  };
}
