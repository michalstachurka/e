export const REFERENCE_SCENE_FORMAT_VERSION = "1.0";

const finite = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const vector = (value, fallback) => ({
  x: finite(value?.x, fallback.x),
  y: finite(value?.y, fallback.y),
  z: finite(value?.z, fallback.z),
});

export function normaliseReferenceAdjustment(value = {}) {
  return {
    positionM: vector(value.positionM, { x: 0, y: 0, z: 0 }),
    rotationDeg: vector(value.rotationDeg, { x: 0, y: 0, z: 0 }),
    scale: vector(value.scale, { x: 1, y: 1, z: 1 }),
  };
}

export function hasReferenceAdjustment(value = {}) {
  const adjustment = normaliseReferenceAdjustment(value);
  return Object.values(adjustment.positionM).some((item) => Math.abs(item) > 1e-9)
    || Object.values(adjustment.rotationDeg).some((item) => Math.abs(item) > 1e-9)
    || Object.values(adjustment.scale).some((item) => Math.abs(item - 1) > 1e-9);
}

export function createReferenceSceneDocument({ tenantSlug, product, admin, sceneState, createdAt = new Date().toISOString() }) {
  if (!tenantSlug || !product?.definition?.productType || !product.definition.version?.id) {
    throw new Error("reference_scene_context_missing");
  }
  const objects = (sceneState?.objects || []).map((object) => ({
    id: String(object.id),
    name: String(object.name),
    occurrence: finite(object.occurrence, 1),
    kind: String(object.kind || "OBJECT3D"),
    profileId: object.profileId || null,
    parentName: object.parentName || null,
    edited: hasReferenceAdjustment(object.adjustment),
    base: structuredClone(object.base),
    adjustment: normaliseReferenceAdjustment(object.adjustment),
    resolved: structuredClone(object.resolved),
  }));
  return {
    formatVersion: REFERENCE_SCENE_FORMAT_VERSION,
    tenantSlug,
    productType: product.definition.productType,
    productName: product.definition.name,
    productVersionId: product.definition.version.id,
    productVersionNumber: product.definition.version.number,
    createdAt,
    createdBy: admin?.email || null,
    purpose: "VISUAL_GEOMETRY_REFERENCE",
    coordinateSystem: structuredClone(sceneState.coordinateSystem),
    camera: structuredClone(sceneState.camera),
    selectedObjectId: sceneState.selectedObjectId || null,
    editedObjectCount: objects.filter((object) => object.edited).length,
    objects,
  };
}

export function referenceFileStem({ tenantSlug, productType, createdAt = new Date().toISOString() }) {
  const safe = (value) => String(value || "reference").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "") || "reference";
  const timestamp = String(createdAt).replace(/[:.]/g, "-");
  return `visNEX-geometry-${safe(tenantSlug)}-${safe(productType)}-${timestamp}`;
}

const loadImage = (source) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error("reference_screenshot_load_failed"));
  image.src = source;
});

const transformLine = (label, value, suffix = "") => `${label}: X ${finite(value?.x).toFixed(3)}${suffix} · Y ${finite(value?.y).toFixed(3)}${suffix} · Z ${finite(value?.z).toFixed(3)}${suffix}`;

export async function createAnnotatedReferenceScreenshot(sourceDataUrl, metadata) {
  const source = await loadImage(sourceDataUrl);
  const headerHeight = 92;
  const footerHeight = 164;
  const output = document.createElement("canvas");
  output.width = source.naturalWidth || source.width;
  output.height = (source.naturalHeight || source.height) + headerHeight + footerHeight;
  const ctx = output.getContext("2d");
  const width = output.width;
  ctx.fillStyle = "#171411";
  ctx.fillRect(0, 0, width, output.height);
  ctx.drawImage(source, 0, headerHeight);

  const padding = Math.max(24, Math.round(width * 0.035));
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#d59a63";
  ctx.font = `700 ${Math.max(18, Math.round(width * 0.018))}px sans-serif`;
  ctx.fillText("visNEX · REFERENCJA GEOMETRII 3D", padding, 34);
  ctx.fillStyle = "#f1ebe0";
  ctx.font = `500 ${Math.max(13, Math.round(width * 0.012))}px sans-serif`;
  ctx.fillText(`${metadata.productName} · ${metadata.productType} · v${metadata.productVersionNumber}`, padding, 66);
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(241,235,224,.62)";
  ctx.fillText(`Tenant: ${metadata.tenantSlug}`, width - padding, 34);
  ctx.fillText(metadata.createdAt, width - padding, 66);

  ctx.textAlign = "left";
  const footerY = headerHeight + (source.naturalHeight || source.height);
  ctx.fillStyle = "#211d19";
  ctx.fillRect(0, footerY, width, footerHeight);
  ctx.fillStyle = "#d59a63";
  ctx.font = `700 ${Math.max(14, Math.round(width * 0.013))}px sans-serif`;
  ctx.fillText(metadata.objectLabel || "Brak zaznaczonego elementu", padding, footerY + 30);
  ctx.fillStyle = "rgba(241,235,224,.82)";
  ctx.font = `500 ${Math.max(12, Math.round(width * 0.011))}px monospace`;
  const adjustment = normaliseReferenceAdjustment(metadata.adjustment);
  ctx.fillText(transformLine("Przesunięcie", adjustment.positionM, " m"), padding, footerY + 66);
  ctx.fillText(transformLine("Obrót", adjustment.rotationDeg, "°"), padding, footerY + 98);
  ctx.fillText(transformLine("Skala", adjustment.scale), padding, footerY + 130);
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(241,235,224,.5)";
  ctx.fillText("Dołącz odpowiadający plik JSON", width - padding, footerY + 130);
  return output.toDataURL("image/png");
}
