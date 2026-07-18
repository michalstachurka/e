import { ConfiguratorApi } from "./core/configurator-api.js";
import { hydrateProfileAssets, resolveProfileDefinitions } from "./core/profile-definitions.js";
import { buildTenantUrl, resolveTenantContext } from "./core/tenant-context.js";
import { createPergolaCanvas } from "./pergola-canvas.js";
import { createReferenceSceneEditor } from "./reference-scene-editor.js";

const config = window.__VISNEX_CONFIG__ || {};
const provisionalTenantContext = resolveTenantContext({ runtimeConfig: config, locationLike: window.location });
const bootstrapApi = new ConfiguratorApi({ baseUrl: config.apiBaseUrl, tenantSlug: provisionalTenantContext.tenantSlug });
let serverTenantContext = null;
if (bootstrapApi.available) {
  try {
    serverTenantContext = await bootstrapApi.getRuntimeContext();
  } catch (error) {
    console.warn("Runtime tenant context unavailable; using the local resolver.", error);
  }
}
const tenantContext = resolveTenantContext({ runtimeConfig: config, serverContext: serverTenantContext, locationLike: window.location });
const tenantSlug = tenantContext.tenantSlug;
window.__VISNEX_TENANT_CONTEXT__ = tenantContext;
document.documentElement.dataset.tenantSlug = tenantSlug;
const api = new ConfiguratorApi({ baseUrl: config.apiBaseUrl, tenantSlug });
const login = document.getElementById("adminLogin");
const workspace = document.getElementById("adminWorkspace");
const loginForm = document.getElementById("adminLoginForm");
const loginStatus = document.getElementById("adminLoginStatus");
const productsHost = document.getElementById("adminProducts");
const profileStudioHost = document.getElementById("adminProfileStudio");
const referenceSceneHost = document.getElementById("adminReferenceScene");
const brandingForm = document.getElementById("brandingForm");
const featureAvailabilityForm = document.getElementById("featureAvailabilityForm");
const featureAvailabilitySection = document.getElementById("featureAvailabilitySection");
const logoutButton = document.getElementById("adminLogout");
const toast = document.getElementById("adminToast");
document.getElementById("adminTenantLabel").textContent = `Tenant · ${tenantSlug}`;
{
  const advisorUrl = new URL(buildTenantUrl("./konfigurator.html", tenantSlug, window.location), window.location.href);
  advisorUrl.searchParams.set("mode", "advisor");
  document.getElementById("adminConfiguratorLink").href = advisorUrl.toString();
  document.getElementById("adminConfiguratorLink").textContent = "Tryb doradcy ↗";
}
let products = [];
let catalog = null;
let profilePreview = null;
let referenceSceneEditor = null;
let activeStudioProduct = 0;
let activeStudioProfile = 0;
let profileAssets = [];
let currentAdmin = null;
let featureSettings = null;

const can = (permission) => currentAdmin?.permissions?.includes(permission);

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
};

const showWorkspace = (visible) => {
  login.hidden = visible;
  workspace.hidden = !visible;
  logoutButton.hidden = !visible;
};

const brandingFields = [
  ["companyName", "Nazwa firmy", "text"], ["logoText", "Tekst logo", "text"], ["contactEmail", "E-mail kontaktowy", "email"],
  ["primaryColor", "Kolor główny", "color"], ["accentColor", "Akcent", "color"], ["backgroundColor", "Tło", "color"],
  ["fontHeading", "Font nagłówków", "text"], ["fontBody", "Font treści", "text"], ["pdfFooter", "Stopka PDF", "textarea"],
];

function renderBranding() {
  const branding = catalog.tenant.branding;
  brandingForm.innerHTML = brandingFields.map(([key, label, type]) => `<label class="admin-field ${key === "pdfFooter" ? "admin-field--wide" : ""}">${label}${type === "textarea" ? `<textarea name="${key}">${escapeHtml(branding[key])}</textarea>` : `<input type="${type}" name="${key}" value="${escapeHtml(branding[key])}" required />`}</label>`).join("") + `<button class="admin-action" type="submit">Zapisz branding</button>`;
}

const featureRows = [
  ["customerPhoto", "Zdjęcie klienta"],
  ["basicPhotoFit", "Podstawowe dopasowanie zdjęcia"],
  ["advancedCalibration", "Zaawansowana kalibracja"],
  ["obstacleMasking", "Maskowanie przeszkód"],
  ["publicPrice", "Widoczność ceny"],
  ["internalCalculation", "Kalkulacja wewnętrzna"],
  ["glbExport", "Eksport GLB"],
  ["jsonExport", "Eksport JSON"],
];

function renderFeatureSettings() {
  featureAvailabilitySection.hidden = !can("features:read");
  if (!featureSettings || !can("features:read")) return;
  featureAvailabilityForm.innerHTML = `<div class="admin-feature-policy">
    <div class="admin-feature-policy__head"><span>Funkcja</span><span>Tryb publiczny</span><span>Tryb doradcy</span></div>
    ${featureRows.map(([key, label]) => `<label class="admin-feature-policy__row"><strong>${label}</strong><input type="checkbox" name="public.${key}" ${featureSettings.public[key] ? "checked" : ""} /><input type="checkbox" name="advisor.${key}" ${featureSettings.advisor[key] ? "checked" : ""} /></label>`).join("")}
  </div>
  <div class="admin-grid admin-feature-limits">
    <label class="admin-field">Cena publiczna<select name="publicPriceVisibility"><option value="HIDDEN">Ukryta</option><option value="FROM">Orientacyjna „od”</option><option value="EXACT">Dokładna detaliczna</option></select></label>
    <label class="admin-field">Maks. rozmiar zdjęcia<input type="number" name="limits.maxPhotoBytes" min="100000" max="25000000" step="100000" value="${featureSettings.limits.maxPhotoBytes}" /></label>
    <label class="admin-field">Maks. wymiar obrazu<input type="number" name="limits.maxPhotoDimension" min="640" max="12000" step="1" value="${featureSettings.limits.maxPhotoDimension}" /></label>
    <label class="admin-field">Zasoby na projekt<input type="number" name="limits.maxPhotosPerProject" min="1" max="20" step="1" value="${featureSettings.limits.maxPhotosPerProject}" /></label>
    <label class="admin-field">Wersje projektu<input type="number" name="limits.maxProjectVersions" min="5" max="1000" step="1" value="${featureSettings.limits.maxProjectVersions}" /></label>
  </div>
  <p class="admin-feature-note">Rozstrzyganie: platforma → plan → organizacja → produkt → rola. Wyłączenie na wcześniejszym poziomie zawsze blokuje operację.</p>
  <button class="admin-action" type="submit" ${can("features:write") ? "" : "disabled"}>Zapisz dostępność</button>`;
  featureAvailabilityForm.elements.publicPriceVisibility.value = featureSettings.publicPriceVisibility;
  featureAvailabilityForm.querySelectorAll("input,select").forEach((control) => { control.disabled = !can("features:write"); });
}

function parameterRows(product) {
  return product.definition.parameters.map((parameter, index) => `<tr data-parameter="${index}"><td><input data-key="label" value="${escapeHtml(parameter.label)}" /></td><td>${escapeHtml(parameter.key)}</td><td><input data-key="min" type="number" step="any" value="${parameter.min ?? ""}" /></td><td><input data-key="max" type="number" step="any" value="${parameter.max ?? ""}" /></td><td><input data-key="step" type="number" step="any" value="${parameter.step ?? ""}" /></td><td><input data-key="defaultValue" value="${escapeHtml(Array.isArray(parameter.defaultValue) ? parameter.defaultValue.join(",") : parameter.defaultValue)}" /></td><td><input data-key="hidden" type="checkbox" ${parameter.hidden ? "checked" : ""} /></td></tr>`).join("");
}

const parameterDefault = (definition, key, fallback) => {
  const value = definition.parameters?.find((parameter) => parameter.key === key)?.defaultValue;
  return value === undefined ? fallback : structuredClone(value);
};

function buildProfilePreviewParams(definition) {
  const frameColor = definition.colors?.[0]?.value || "#2B2D2E";
  if (definition.productType === "veranda") {
    return {
      productType: "veranda",
      width: Number(parameterDefault(definition, "width", 4.5)),
      depth: Number(parameterDefault(definition, "depth", 3.2)),
      backHeight: Number(parameterDefault(definition, "backHeight", 2.95)),
      frontHeight: Number(parameterDefault(definition, "frontHeight", 2.56)),
      roofAngle: Number(parameterDefault(definition, "roofAngle", 7)),
      roofFields: Number(parameterDefault(definition, "roofFields", 4)),
      rafterCount: Number(parameterDefault(definition, "rafterCount", 5)),
      postCount: Number(parameterDefault(definition, "postCount", 3)),
      roofMaterial: "clear-glass",
      leftWall: "zip-screen",
      rightWall: "none",
      frontWall: "none",
      leftTriangle: "none",
      rightTriangle: "none",
      leftScreenSupport: true,
      rightScreenSupport: false,
      lighting: false,
      rafterLeds: [],
      extraLegs: [],
      frameColor,
      slatColor: frameColor,
      screenColor: "#C9B79C",
      screens: { front: false, back: false, left: false, right: false },
      glass: { front: false, back: false, left: false, right: false },
      spin: false,
      profiles: definition.profiles,
      visual: definition.visual,
    };
  }
  if (definition.productType === "window-screen") {
    return {
      productType: "window-screen", width: Number(parameterDefault(definition, "width", 2)), height: Number(parameterDefault(definition, "height", 2.2)),
      unitCount: Number(parameterDefault(definition, "unitCount", 1)), mounting: "reveal", guideType: "zip", fabric: "transparent", fabricColor: "#C9B79C", frameColor, slatColor: frameColor,
      drive: "radio", openingPercent: 80, windSensor: false, spin: false, profiles: definition.profiles, visual: definition.visual,
    };
  }
  if (definition.productType === "external-roller-shutter") {
    return {
      productType: "external-roller-shutter", width: Number(parameterDefault(definition, "width", 1.6)), height: Number(parameterDefault(definition, "height", 2.1)),
      unitCount: Number(parameterDefault(definition, "unitCount", 1)), mounting: "reveal", slatProfile: "aluminium-foam", armorColor: frameColor, boxColor: frameColor, guideColor: frameColor,
      frameColor, slatColor: frameColor, drive: "radio", integratedMosquitoNet: true, openingPercent: 65, spin: false,
      profiles: definition.profiles, visual: definition.visual,
    };
  }
  if (definition.productType === "awning") {
    return {
      productType: "awning", width: Number(parameterDefault(definition, "width", 4.5)), projection: Number(parameterDefault(definition, "projection", 3)),
      mounting: "wall", cassetteType: "full-cassette", pitch: Number(parameterDefault(definition, "pitch", 14)), fabricColor: "#C9B79C",
      frameColor, slatColor: frameColor, drive: "radio", led: true, windSensor: true, sunSensor: false, openingPercent: 85,
      spin: false, profiles: definition.profiles, visual: definition.visual,
    };
  }
  const widths = parameterDefault(definition, "moduleWidths", [4]);
  return {
    productType: definition.productType,
    construction: "freestanding",
    widths: Array.isArray(widths) ? widths.map(Number) : [Number(widths)],
    depth: Number(parameterDefault(definition, "depth", 3.2)),
    height: Number(parameterDefault(definition, "height", 2.6)),
    slatAngle: Number(parameterDefault(definition, "slatAngle", 35)),
    frameColor,
    slatColor: frameColor,
    roofColor: frameColor,
    antiCondensationLayer: true,
    ledLinear: false,
    ledSpots: false,
    screens: { front: false, back: false, left: false, right: false },
    screenColor: "#C9B79C",
    glass: { front: false, back: false, left: false, right: false },
    extraLegs: [],
    spin: false,
    profiles: definition.profiles,
    visual: definition.visual,
  };
}

function profileDiagram(profile) {
  if (profile.geometryType === "SVG_PROFILE" && profile.svgContent) {
    return `<div class="admin-profile-card__drawing admin-profile-card__drawing--svg" role="img" aria-label="Przekrój SVG ${escapeHtml(profile.label)}">
      <div class="admin-profile-card__svg-source">${profile.svgContent}</div>
      <span class="admin-profile-axis admin-profile-axis--front">FRONT · Z = 0</span>
      <span class="admin-profile-axis admin-profile-axis--x">X →</span>
      <span class="admin-profile-axis admin-profile-axis--y">Y ↓</span>
      <span class="admin-profile-axis admin-profile-axis--z">+Z ↘</span>
    </div>`;
  }
  const maxWidth = 108;
  const maxHeight = 94;
  const scale = Math.min(maxWidth / profile.aMm, maxHeight / profile.bMm);
  const width = Math.max(28, profile.aMm * scale);
  const height = Math.max(14, profile.bMm * scale);
  const x = 25 + (maxWidth - width) / 2;
  const y = 13 + (maxHeight - height) / 2;
  const inset = Math.max(4, Math.min(9, Math.min(width, height) * 0.16));
  const radius = profile.shape === "louvre" ? Math.min(10, height / 2) : 2;
  const inner = width > 38 && height > 28
    ? `<rect class="admin-profile-drawing__inner" x="${x + inset}" y="${y + inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="${Math.max(1, radius / 2)}" />`
    : "";
  const dimensionY = 126;
  const dimensionX = x + width + 22;
  return `<svg class="admin-profile-card__drawing" viewBox="0 0 190 150" role="img" aria-label="Przekrój ${escapeHtml(profile.label)}: a ${profile.aMm} milimetrów, b ${profile.bMm} milimetrów">
    <rect class="admin-profile-drawing__section" x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" />${inner}
    <path class="admin-profile-drawing__extension" d="M ${x} ${y + height + 4} V ${dimensionY + 8} M ${x + width} ${y + height + 4} V ${dimensionY + 8}" />
    <path class="admin-profile-drawing__dimension" d="M ${x} ${dimensionY} H ${x + width} M ${x} ${dimensionY - 5} V ${dimensionY + 5} M ${x + width} ${dimensionY - 5} V ${dimensionY + 5}" />
    <text x="${x + width / 2}" y="145" text-anchor="middle">a</text>
    <path class="admin-profile-drawing__extension" d="M ${x + width + 4} ${y} H ${dimensionX + 9} M ${x + width + 4} ${y + height} H ${dimensionX + 9}" />
    <path class="admin-profile-drawing__dimension" d="M ${dimensionX} ${y} V ${y + height} M ${dimensionX - 5} ${y} H ${dimensionX + 5} M ${dimensionX - 5} ${y + height} H ${dimensionX + 5}" />
    <text x="${dimensionX + 15}" y="${y + height / 2}" dominant-baseline="middle">b</text>
  </svg>`;
}

function profileAnnotationPoints(params, profile) {
  const a = profile.aMm / 1000;
  const b = profile.bMm / 1000;
  if (params.productType === "veranda") {
    const frontZ = params.depth / 2;
    const points = {
      "structural-post": { target: [params.width / 2 - a / 2, params.frontHeight * 0.44, frontZ - b / 2], a: [[params.width / 2 - a, params.frontHeight * 0.44, frontZ], [params.width / 2, params.frontHeight * 0.44, frontZ]], b: [[params.width / 2, params.frontHeight * 0.44, frontZ - b], [params.width / 2, params.frontHeight * 0.44, frontZ]] },
      "frame-beam": { target: [params.width * 0.27, params.frontHeight - b / 2, frontZ - a / 2], a: [[params.width * 0.27, params.frontHeight, frontZ - a], [params.width * 0.27, params.frontHeight, frontZ]], b: [[params.width * 0.27, params.frontHeight - b, frontZ], [params.width * 0.27, params.frontHeight, frontZ]] },
      "roof-rafter": { target: [0, (params.backHeight + params.frontHeight) / 2, 0], a: [[-a / 2, (params.backHeight + params.frontHeight) / 2, 0], [a / 2, (params.backHeight + params.frontHeight) / 2, 0]], b: [[a / 2, (params.backHeight + params.frontHeight) / 2 - b / 2, 0], [a / 2, (params.backHeight + params.frontHeight) / 2 + b / 2, 0]] },
      "screen-support": { target: [-params.width / 2, params.frontHeight - b / 2, 0], a: [[-params.width / 2 - a / 2, params.frontHeight - b, 0], [-params.width / 2 + a / 2, params.frontHeight - b, 0]], b: [[-params.width / 2, params.frontHeight - b, 0], [-params.width / 2, params.frontHeight, 0]] },
    };
    return points[profile.id] || points["frame-beam"];
  }
  if (params.productType === "window-screen") {
    const cassette = Number(params.visual?.cassetteSize || 0.105);
    const guide = Number(params.visual?.guideWidth || 0.025);
    const points = {
      "screen-cassette": { target: [0, params.height + cassette / 2, 0.1], a: [[-a / 2, params.height + cassette, 0.1], [a / 2, params.height + cassette, 0.1]], b: [[a / 2, params.height, 0.1], [a / 2, params.height + b, 0.1]] },
      "screen-guide": { target: [params.width / 2 + guide / 2, params.height * 0.5, 0.1], a: [[params.width / 2, params.height * 0.5, 0.1], [params.width / 2 + a, params.height * 0.5, 0.1]], b: [[params.width / 2 + a, params.height * 0.5 - b / 2, 0.1], [params.width / 2 + a, params.height * 0.5 + b / 2, 0.1]] },
      "screen-bottom": { target: [0, params.height * 0.2, 0.14], a: [[-a / 2, params.height * 0.2, 0.14], [a / 2, params.height * 0.2, 0.14]], b: [[a / 2, params.height * 0.2 - b / 2, 0.14], [a / 2, params.height * 0.2 + b / 2, 0.14]] },
    };
    return points[profile.id] || points["screen-cassette"];
  }
  if (params.productType === "external-roller-shutter") {
    const boxSize = Number(params.visual?.boxSize || 0.165);
    const points = {
      "shutter-box": { target: [0, params.height + boxSize / 2, 0.12], a: [[-a / 2, params.height + boxSize, 0.12], [a / 2, params.height + boxSize, 0.12]], b: [[a / 2, params.height, 0.12], [a / 2, params.height + b, 0.12]] },
      "shutter-guide": { target: [params.width / 2, params.height * 0.5, 0.12], a: [[params.width / 2, params.height * 0.5, 0.12], [params.width / 2 + a, params.height * 0.5, 0.12]], b: [[params.width / 2 + a, params.height * 0.5 - b / 2, 0.12], [params.width / 2 + a, params.height * 0.5 + b / 2, 0.12]] },
      "shutter-slat": { target: [0, params.height * 0.65, 0.15], a: [[-a / 2, params.height * 0.65, 0.15], [a / 2, params.height * 0.65, 0.15]], b: [[a / 2, params.height * 0.65 - b / 2, 0.15], [a / 2, params.height * 0.65 + b / 2, 0.15]] },
    };
    return points[profile.id] || points["shutter-box"];
  }
  if (params.productType === "awning") {
    const projected = params.projection * params.openingPercent / 100;
    const points = {
      "awning-cassette": { target: [0, 2.75, 0], a: [[-a / 2, 2.82, 0.12], [a / 2, 2.82, 0.12]], b: [[a / 2, 2.75 - b / 2, 0.12], [a / 2, 2.75 + b / 2, 0.12]] },
      "awning-front": { target: [0, 2.75 - Math.sin(params.pitch * Math.PI / 180) * projected, projected], a: [[-a / 2, 2.75, projected], [a / 2, 2.75, projected]], b: [[a / 2, 2.75 - b / 2, projected], [a / 2, 2.75 + b / 2, projected]] },
      "awning-arm": { target: [params.width * 0.3, 2.65, projected / 2], a: [[params.width * 0.3 - a / 2, 2.65, projected / 2], [params.width * 0.3 + a / 2, 2.65, projected / 2]], b: [[params.width * 0.3 + a / 2, 2.65 - b / 2, projected / 2], [params.width * 0.3 + a / 2, 2.65 + b / 2, projected / 2]] },
    };
    return points[profile.id] || points["awning-cassette"];
  }
  const width = params.widths.reduce((sum, value) => sum + value, 0);
  const beamHeight = (params.profiles.find((item) => item.id === "frame-beam")?.bMm || 180) / 1000;
  const points = {
    "structural-post": { target: [width / 2 - a / 2, params.height * 0.42, params.depth / 2 - b / 2], a: [[width / 2 - a, params.height * 0.42, params.depth / 2], [width / 2, params.height * 0.42, params.depth / 2]], b: [[width / 2, params.height * 0.42, params.depth / 2 - b], [width / 2, params.height * 0.42, params.depth / 2]] },
    "frame-beam": { target: [width * 0.27, params.height - b / 2, params.depth / 2 - a / 2], a: [[width * 0.27, params.height, params.depth / 2 - a], [width * 0.27, params.height, params.depth / 2]], b: [[width * 0.27, params.height - b, params.depth / 2], [width * 0.27, params.height, params.depth / 2]] },
    "roof-louvre": { target: [0, params.height - beamHeight / 2, 0], a: [[0, params.height - beamHeight / 2, -a / 2], [0, params.height - beamHeight / 2, a / 2]], b: [[0, params.height - beamHeight / 2 - b / 2, a / 2], [0, params.height - beamHeight / 2 + b / 2, a / 2]] },
    "roof-sheet": { target: [0, params.height - beamHeight / 2, 0], a: [[-a / 2, params.height - beamHeight / 2, 0], [a / 2, params.height - beamHeight / 2, 0]], b: [[a / 2, params.height - beamHeight / 2 - b / 2, 0], [a / 2, params.height - beamHeight / 2 + b / 2, 0]] },
  };
  return points[profile.id] || points["frame-beam"];
}

function updateProfileAnnotation() {
  if (!profilePreview || !products[activeStudioProduct]) return;
  const definition = products[activeStudioProduct].definition;
  const profile = definition.profiles[activeStudioProfile];
  if (!profile) return;
  const params = buildProfilePreviewParams(definition);
  const points = profileAnnotationPoints(params, profile);
  const drawAxis = (axis, endpoints) => {
    const [projectedStart, projectedEnd] = endpoints.map((point) => profilePreview.project(...point));
    const group = profileStudioHost.querySelector(`[data-preview-axis="${axis}"]`);
    if (!group || projectedStart.behind || projectedEnd.behind) return;
    const line = group.querySelector("line");
    const text = group.querySelector("text");
    const dx = projectedEnd.x - projectedStart.x;
    const dy = projectedEnd.y - projectedStart.y;
    const length = Math.max(1, Math.hypot(dx, dy));
    const centreX = (projectedStart.x + projectedEnd.x) / 2;
    const centreY = (projectedStart.y + projectedEnd.y) / 2;
    const displayLength = Math.max(length, 74);
    const unitX = dx / length;
    const unitY = dy / length;
    const start = { x: centreX - unitX * displayLength / 2, y: centreY - unitY * displayLength / 2 };
    const end = { x: centreX + unitX * displayLength / 2, y: centreY + unitY * displayLength / 2 };
    line.setAttribute("x1", start.x); line.setAttribute("y1", start.y);
    line.setAttribute("x2", end.x); line.setAttribute("y2", end.y);
    text.setAttribute("x", centreX - 48);
    text.setAttribute("y", centreY + (axis === "a" ? 32 : -32));
    text.textContent = `${axis} · ${profile[axis === "a" ? "aMm" : "bMm"]} mm`;
    group.hidden = false;
  };
  drawAxis("a", points.a);
  drawAxis("b", points.b);
  const target = profilePreview.project(...points.target);
  const marker = profileStudioHost.querySelector(".admin-profile-preview__marker");
  if (marker && !target.behind) {
    marker.style.left = `${target.x}px`;
    marker.style.top = `${target.y}px`;
    marker.textContent = profile.label;
    marker.hidden = false;
  }
}

function profileGeometryControls(profile) {
  const reference = profile.svgProfile;
  const assetOptions = profileAssets.map((asset) => `<option value="${asset.id}" ${reference?.assetId === asset.id ? "selected" : ""}>${escapeHtml(asset.fileName)} · ${asset.widthMm} × ${asset.heightMm} mm</option>`).join("");
  return `<div class="admin-profile-card__geometry">
    <label>Typ geometrii<select data-studio-geometry-type>
      <option value="BOX" ${profile.geometryType !== "SVG_PROFILE" ? "selected" : ""}>Kształt uproszczony</option>
      <option value="SVG_PROFILE" ${profile.geometryType === "SVG_PROFILE" ? "selected" : ""}>Profil z pliku SVG</option>
    </select></label>
    <div class="admin-profile-card__box-fields" ${profile.geometryType === "SVG_PROFILE" ? "hidden" : ""}>
      <output>${profile.aMm} × ${profile.bMm} mm</output>
      <label>a · mm<input data-studio-profile-value="aMm" type="number" min="1" max="100000" step="0.01" value="${profile.aMm}" /></label>
      <label>b · mm<input data-studio-profile-value="bMm" type="number" min="1" max="100000" step="0.01" value="${profile.bMm}" /></label>
    </div>
    <div class="admin-profile-card__svg-fields" ${profile.geometryType !== "SVG_PROFILE" && !reference ? "hidden" : ""}>
      <div class="admin-profile-card__asset-row">
        <label>Biblioteka organizacji<select data-studio-existing-asset><option value="">Wybierz zapisany profil…</option>${assetOptions}</select></label>
        <label>Nowy plik SVG<input data-studio-svg-file type="file" accept=".svg,image/svg+xml" ${can("profiles:create") ? "" : "disabled"} /></label>
      </div>
      ${reference ? `<div class="admin-profile-card__svg-meta"><span>Przekrój źródłowy <strong>${reference.widthMm} × ${reference.heightMm} mm</strong></span><span>Po orientacji <strong>${profile.aMm} × ${profile.bMm} mm</strong></span><span>Długość gotowa <strong>${reference.extrusionLengthMm} mm</strong></span></div>` : `<p class="admin-profile-card__empty">Prześlij plik lub wybierz zweryfikowany profil z biblioteki tej organizacji.</p>`}
      <div class="admin-profile-card__orientation">
        <label>Długość wyciągnięcia · mm<input data-studio-svg-setting="extrusionLengthMm" type="number" min="1" max="20000" step="1" value="${reference?.extrusionLengthMm || 1000}" ${reference ? "" : "disabled"} /></label>
        <label>Obrót<select data-studio-svg-setting="rotationDeg" ${reference ? "" : "disabled"}><option value="0" ${reference?.rotationDeg === 0 ? "selected" : ""}>0°</option><option value="90" ${reference?.rotationDeg === 90 ? "selected" : ""}>90°</option><option value="180" ${reference?.rotationDeg === 180 ? "selected" : ""}>180°</option><option value="270" ${reference?.rotationDeg === 270 ? "selected" : ""}>270°</option></select></label>
        <label class="admin-profile-card__toggle"><input data-studio-svg-setting="mirrorX" type="checkbox" ${reference?.mirrorX ? "checked" : ""} ${reference ? "" : "disabled"} /> Odbicie poziome</label>
        <label class="admin-profile-card__toggle"><input data-studio-svg-setting="mirrorY" type="checkbox" ${reference?.mirrorY ? "checked" : ""} ${reference ? "" : "disabled"} /> Odbicie pionowe</label>
      </div>
      ${reference && can("profiles:delete") ? `<button type="button" class="admin-profile-card__delete" data-studio-delete-asset="${reference.assetId}">Usuń nieużywany plik</button>` : ""}
      <details class="admin-profile-card__help"><summary>Jak przygotować przekrój SVG</summary><p>Plik SVG przedstawia przekrój elementu widziany od przodu.</p><ul>
        <li>Oś X pliku SVG biegnie w prawo.</li><li>Oś Y pliku SVG biegnie w dół.</li><li>Jedna jednostka viewBox odpowiada 1 mm.</li><li>Przednia powierzchnia elementu znajduje się na lokalnej płaszczyźnie Z = 0.</li><li>Profil jest wyciągany od przodu w głąb, wzdłuż lokalnej osi +Z.</li><li>Długość wyciągnięcia podawana jest osobno w milimetrach.</li><li>Geometrię tworzą zamknięte, wypełnione kontury.</li><li>Otwarta linia lub sam stroke nie tworzy powierzchni ani bryły.</li><li>Otwory wewnętrzne należy zapisać jako zamknięte kontury, najlepiej z fill-rule=&quot;evenodd&quot;.</li><li>Plik nie powinien zawierać tekstu, obrazów rastrowych, skryptów ani odwołań do zewnętrznych zasobów.</li>
      </ul><pre>&lt;svg width=&quot;145.5mm&quot; height=&quot;85.36mm&quot; viewBox=&quot;0 0 145.5 85.36&quot;&gt;
  &lt;path fill-rule=&quot;evenodd&quot; d=&quot;M 0 0 H 145.5 V 85.36 H 0 Z&quot; /&gt;
&lt;/svg&gt;</pre></details>
    </div>
  </div>`;
}

function applyAssetToProfile(profile, asset, svgContent) {
  const previous = profile.svgProfile;
  const rotationDeg = previous?.rotationDeg || 0;
  profile.svgProfile = {
    assetId: asset.id,
    extrusionLengthMm: previous?.extrusionLengthMm || 1000,
    widthMm: asset.widthMm,
    heightMm: asset.heightMm,
    viewBox: asset.viewBox,
    rotationDeg,
    mirrorX: previous?.mirrorX || false,
    mirrorY: previous?.mirrorY || false,
    profileFormatVersion: asset.profileFormatVersion,
    geometryFormatVersion: asset.geometryFormatVersion,
    contentHash: asset.contentHash,
  };
  profile.geometryType = "SVG_PROFILE";
  profile.svgContent = svgContent;
  updateEffectiveProfileDimensions(profile);
}

function updateEffectiveProfileDimensions(profile) {
  const reference = profile.svgProfile;
  if (!reference) return;
  const rotated = reference.rotationDeg === 90 || reference.rotationDeg === 270;
  profile.aMm = rotated ? reference.heightMm : reference.widthMm;
  profile.bMm = rotated ? reference.widthMm : reference.heightMm;
}

function renderProfileStudio() {
  profilePreview?.destroy();
  profilePreview = null;
  if (!products.length) {
    profileStudioHost.innerHTML = "<p>Brak produktów do edycji.</p>";
    return;
  }
  activeStudioProduct = Math.min(activeStudioProduct, products.length - 1);
  const definition = products[activeStudioProduct].definition;
  definition.profiles = resolveProfileDefinitions(definition);
  activeStudioProfile = Math.min(activeStudioProfile, definition.profiles.length - 1);
  const modeLabel = ["bioclimatic-pergola", "carport"].includes(definition.productType)
    ? "Wersja wolnostojąca"
    : definition.productType === "veranda"
      ? "Wersja bazowa przyścienna"
      : "Montaż poglądowy";
  profileStudioHost.innerHTML = `<div class="admin-profile-studio">
    <section class="admin-profile-preview">
      <header><div><span>Żywy model techniczny</span><strong>${escapeHtml(definition.name)}</strong></div><b>${modeLabel}</b></header>
      <div class="admin-profile-preview__stage">
        <div class="admin-profile-preview__canvas" id="adminProfileCanvas"></div>
        <svg class="admin-profile-preview__overlay" aria-label="Wymiary wybranego profilu na modelu 3D">
          <g data-preview-axis="a"><line/><text text-anchor="middle"></text></g>
          <g data-preview-axis="b"><line/><text text-anchor="middle"></text></g>
        </svg>
        <span class="admin-profile-preview__marker" hidden></span>
      </div>
      <nav class="admin-profile-preview__views" aria-label="Widok modelu"><button type="button" data-studio-view="front">Przód</button><button type="button" data-studio-view="left">Lewo</button><button type="button" data-studio-view="top">Góra</button><button type="button" data-studio-view="reset">Perspektywa</button></nav>
      <p>Obracaj model. Pomarańczowe osie pokazują dokładnie, gdzie na wybranym profilu mierzone są <strong>a</strong> i <strong>b</strong>. Dla SVG miniatura FRONT pokazuje źródłowe X/Y, a bryła biegnie od Z = 0 wzdłuż +Z.</p>
    </section>
    <section class="admin-profile-editor">
      <div class="admin-profile-tabs" role="tablist">${products.map((product, index) => `<button type="button" role="tab" data-studio-product="${index}" aria-selected="${index === activeStudioProduct}">${escapeHtml(product.definition.name)}</button>`).join("")}</div>
      <div class="admin-profile-editor__intro"><span>Przekroje produktu</span><p>Wybierz profil, a model wskaże konkretny element. Wartości zapisujemy zawsze w formacie <strong>a × b mm</strong>.</p></div>
      <div class="admin-profile-cards">${definition.profiles.map((profile, index) => `<article class="admin-profile-card ${index === activeStudioProfile ? "is-active" : ""}" data-studio-profile="${index}">
        <button class="admin-profile-card__select" type="button" data-studio-select-profile="${index}" aria-pressed="${index === activeStudioProfile}">${profileDiagram(profile)}<span><strong>${escapeHtml(profile.label)}</strong><small>${escapeHtml(profile.usage)}</small></span></button>
        ${profileGeometryControls(profile)}
      </article>`).join("")}</div>
      <button class="admin-action admin-profile-editor__save" type="button" data-studio-action="save" ${can("products:write") ? "" : "disabled"}>Zapisz profile w wersji roboczej</button>
    </section>
  </div>`;
  const mount = document.getElementById("adminProfileCanvas");
  profilePreview = createPergolaCanvas(mount, buildProfilePreviewParams(definition));
  profilePreview.setOnFrame(updateProfileAnnotation);
  profilePreview.setView("reset");
  updateProfileAnnotation();
}

function renderProducts() {
  productsHost.innerHTML = products.map((product, productIndex) => {
    const definition = product.definition;
    definition.profiles = resolveProfileDefinitions(definition);
    const visualEntries = Object.entries(definition.visual).filter(([, value]) => typeof value === "number");
    return `<article class="admin-product" data-product-index="${productIndex}"><header><div><span class="admin-version">${definition.productType} · draft v${definition.version.number}</span><h3>${escapeHtml(definition.name)}</h3></div><label class="admin-checkbox"><input data-field="enabled" type="checkbox" ${definition.enabled ? "checked" : ""} /> Produkt aktywny</label></header><div class="admin-product__body">
      <div class="admin-grid"><label class="admin-field">Nazwa<input data-field="name" value="${escapeHtml(definition.name)}" /></label><label class="admin-field">Kolejność<input data-field="order" type="number" min="0" value="${definition.order}" /></label><label class="admin-field admin-field--wide">Opis<textarea data-field="description">${escapeHtml(definition.description)}</textarea></label></div>
      <section><h4>Parametry</h4><table class="admin-table"><thead><tr><th>Etykieta</th><th>Klucz</th><th>Min</th><th>Max</th><th>Krok</th><th>Domyślna</th><th>Ukryj</th></tr></thead><tbody>${parameterRows(product)}</tbody></table></section>
      <section><h4>Wymiary wizualne · demo</h4><div class="admin-grid">${visualEntries.map(([key, value]) => `<label class="admin-field">${escapeHtml(key)}<input data-visual="${escapeHtml(key)}" type="number" step="0.001" value="${value}" /></label>`).join("")}</div></section>
      <section><h4>Podstawowe reguły ceny · demo</h4><div class="admin-grid">${Object.entries(product.pricing).filter(([, value]) => typeof value === "number").map(([key, value]) => `<label class="admin-field">${escapeHtml(key)}<input data-pricing="${escapeHtml(key)}" type="number" step="any" value="${value}" /></label>`).join("")}</div></section>
      <div class="admin-actions"><button class="admin-action" data-action="save" type="button" ${can("products:write") ? "" : "disabled"}>Zapisz draft</button><button class="admin-action admin-action--publish" data-action="publish" type="button" ${can("products:publish") ? "" : "disabled"}>Publikuj nową wersję</button></div>
    </div></article>`;
  }).join("");
}

function readProductCard(card, source) {
  const definition = structuredClone(source.definition);
  definition.name = card.querySelector('[data-field="name"]').value;
  definition.description = card.querySelector('[data-field="description"]').value;
  definition.enabled = card.querySelector('[data-field="enabled"]').checked;
  definition.order = Number(card.querySelector('[data-field="order"]').value);
  card.querySelectorAll("[data-parameter]").forEach((row) => {
    const parameter = definition.parameters[Number(row.dataset.parameter)];
    row.querySelectorAll("[data-key]").forEach((input) => {
      const key = input.dataset.key;
      if (key === "hidden") parameter[key] = input.checked;
      else if (["min", "max", "step"].includes(key)) parameter[key] = input.value === "" ? undefined : Number(input.value);
      else if (key === "defaultValue") parameter[key] = Array.isArray(parameter.defaultValue) ? input.value.split(",").map(Number) : typeof parameter.defaultValue === "number" ? Number(input.value) : input.value;
      else parameter[key] = input.value;
    });
  });
  card.querySelectorAll("[data-visual]").forEach((input) => { definition.visual[input.dataset.visual] = Number(input.value); });
  const pricing = structuredClone(source.pricing);
  card.querySelectorAll("[data-pricing]").forEach((input) => { pricing[input.dataset.pricing] = Number(input.value); });
  const profiles = definition.profiles.map(({ svgContent: _runtimeContent, ...profile }) => profile);
  return { name: definition.name, description: definition.description, enabled: definition.enabled, order: definition.order, steps: definition.steps, parameters: definition.parameters, profiles, colors: definition.colors, visual: definition.visual, pricing: { ...pricing, demoOnly: true } };
}

async function loadWorkspace(session) {
  currentAdmin = session?.authenticated ? session : await api.request("/api/admin/me");
  const [nextCatalog, productsResponse, assetsResponse, featuresResponse] = await Promise.all([
    api.getCatalog(),
    api.request(`/api/admin/${tenantSlug}/products`),
    can("profiles:read") ? api.request(`/api/admin/${tenantSlug}/profile-assets`) : Promise.resolve({ assets: [] }),
    can("features:read") ? api.request(`/api/admin/${tenantSlug}/features`) : Promise.resolve({ settings: null }),
  ]);
  catalog = nextCatalog;
  products = productsResponse.products;
  profileAssets = assetsResponse.assets;
  featureSettings = featuresResponse.settings;
  await Promise.all(products.map(async (product) => {
    product.definition.profiles = await hydrateProfileAssets(product.definition, api, { admin: true });
  }));
  window.__adminProducts = products;
  renderBranding();
  renderFeatureSettings();
  brandingForm.querySelectorAll("input,textarea,button").forEach((control) => { control.disabled = !can("branding:write"); });
  renderProducts();
  showWorkspace(true);
  renderProfileStudio();
  referenceSceneEditor?.destroy();
  referenceSceneEditor = createReferenceSceneEditor({
    host: referenceSceneHost,
    products,
    tenantSlug,
    admin: currentAdmin,
    canEdit: can("products:write"),
    buildPreviewParams: buildProfilePreviewParams,
    onMessage: showToast,
  });
}

featureAvailabilityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!featureSettings || !can("features:write")) return;
  const next = structuredClone(featureSettings);
  featureRows.forEach(([key]) => {
    next.public[key] = featureAvailabilityForm.elements[`public.${key}`].checked;
    next.advisor[key] = featureAvailabilityForm.elements[`advisor.${key}`].checked;
  });
  next.publicPriceVisibility = featureAvailabilityForm.elements.publicPriceVisibility.value;
  Object.keys(next.limits).forEach((key) => { next.limits[key] = Number(featureAvailabilityForm.elements[`limits.${key}`].value); });
  const response = await api.request(`/api/admin/${tenantSlug}/features`, { method: "PUT", body: next });
  featureSettings = response.settings;
  renderFeatureSettings();
  showToast("Dostępność funkcji została zapisana.");
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "Loguję…";
  try {
    const form = new FormData(loginForm);
    const session = await api.request(`/api/admin/${tenantSlug}/login`, { method: "POST", body: { email: form.get("email"), password: form.get("password") } });
    loginStatus.textContent = "";
    await loadWorkspace(session);
  } catch (error) {
    loginStatus.textContent = error.message === "API_UNAVAILABLE" ? "API nie jest skonfigurowane." : "Nieprawidłowe dane lub limit prób logowania.";
  }
});

brandingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(brandingForm));
  await api.request(`/api/admin/${tenantSlug}/branding`, { method: "PUT", body: data });
  catalog.tenant.branding = data;
  showToast("Branding zapisany.");
});

productsHost.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const card = button.closest("[data-product-index]");
  const index = Number(card.dataset.productIndex);
  const source = products[index];
  button.disabled = true;
  try {
    if (button.dataset.action === "save") {
      const payload = readProductCard(card, source);
      const response = await api.request(`/api/admin/${tenantSlug}/products/${source.definition.productType}`, { method: "PUT", body: payload });
      products[index] = response.product;
      products[index].definition.profiles = await hydrateProfileAssets(products[index].definition, api, { admin: true });
      showToast("Wersja robocza zapisana.");
    } else {
      await api.request(`/api/admin/${tenantSlug}/products/${source.definition.productType}/publish`, { method: "POST" });
      showToast("Nowa wersja opublikowana.");
      await loadWorkspace();
    }
  } catch (error) {
    console.error(error);
    showToast("Nie udało się zapisać zmian.");
  } finally {
    button.disabled = false;
  }
});

profileStudioHost.addEventListener("click", async (event) => {
  const productTab = event.target.closest("[data-studio-product]");
  if (productTab) {
    activeStudioProduct = Number(productTab.dataset.studioProduct);
    activeStudioProfile = 0;
    renderProfileStudio();
    return;
  }
  const profileButton = event.target.closest("[data-studio-select-profile]");
  if (profileButton) {
    activeStudioProfile = Number(profileButton.dataset.studioSelectProfile);
    profileStudioHost.querySelectorAll("[data-studio-profile]").forEach((card, index) => card.classList.toggle("is-active", index === activeStudioProfile));
    profileStudioHost.querySelectorAll("[data-studio-select-profile]").forEach((button, index) => button.setAttribute("aria-pressed", String(index === activeStudioProfile)));
    updateProfileAnnotation();
    return;
  }
  const viewButton = event.target.closest("[data-studio-view]");
  if (viewButton) {
    profilePreview?.setView(viewButton.dataset.studioView);
    updateProfileAnnotation();
    return;
  }
  const deleteAssetButton = event.target.closest("[data-studio-delete-asset]");
  if (deleteAssetButton) {
    deleteAssetButton.disabled = true;
    try {
      await api.request(`/api/admin/${tenantSlug}/profile-assets/${encodeURIComponent(deleteAssetButton.dataset.studioDeleteAsset)}`, { method: "DELETE" });
      profileAssets = profileAssets.filter((asset) => asset.id !== deleteAssetButton.dataset.studioDeleteAsset);
      const profile = products[activeStudioProduct].definition.profiles[activeStudioProfile];
      if (profile.svgProfile?.assetId === deleteAssetButton.dataset.studioDeleteAsset) {
        delete profile.svgProfile;
        delete profile.svgContent;
        profile.geometryType = "BOX";
      }
      renderProfileStudio();
      showToast("Nieużywany plik profilu został usunięty.");
    } catch (error) {
      showToast(error.payload?.message || "Najpierw odłącz profil od wersji produktu i zapisz draft.");
    } finally {
      deleteAssetButton.disabled = false;
    }
    return;
  }
  const saveButton = event.target.closest('[data-studio-action="save"]');
  if (!saveButton) return;
  const source = products[activeStudioProduct];
  const productCard = productsHost.querySelector(`[data-product-index="${activeStudioProduct}"]`);
  saveButton.disabled = true;
  try {
    const payload = readProductCard(productCard, source);
    const response = await api.request(`/api/admin/${tenantSlug}/products/${source.definition.productType}`, { method: "PUT", body: payload });
    products[activeStudioProduct] = response.product;
    products[activeStudioProduct].definition.profiles = await hydrateProfileAssets(products[activeStudioProduct].definition, api, { admin: true });
    window.__adminProducts = products;
    renderProducts();
    renderProfileStudio();
    showToast("Profile zapisane w wersji roboczej.");
  } catch (error) {
    console.error(error);
    showToast("Nie udało się zapisać profili.");
  } finally {
    saveButton.disabled = false;
  }
});

profileStudioHost.addEventListener("input", (event) => {
  const input = event.target.closest("[data-studio-profile-value]");
  if (!input) return;
  const card = input.closest("[data-studio-profile]");
  const profileIndex = Number(card.dataset.studioProfile);
  const profile = products[activeStudioProduct].definition.profiles[profileIndex];
  const value = Number(input.value);
  if (!Number.isFinite(value) || value < 1) return;
  profile[input.dataset.studioProfileValue] = value;
  card.querySelector("output").textContent = `${profile.aMm} × ${profile.bMm} mm`;
  card.querySelector(".admin-profile-card__drawing").outerHTML = profileDiagram(profile);
  profilePreview?.update(buildProfilePreviewParams(products[activeStudioProduct].definition));
  updateProfileAnnotation();
});

profileStudioHost.addEventListener("change", async (event) => {
  const card = event.target.closest("[data-studio-profile]");
  if (!card) return;
  const profile = products[activeStudioProduct].definition.profiles[Number(card.dataset.studioProfile)];
  const geometryType = event.target.closest("[data-studio-geometry-type]");
  if (geometryType) {
    profile.geometryType = geometryType.value;
    if (profile.geometryType === "BOX") {
      delete profile.svgProfile;
      delete profile.svgContent;
    }
    renderProfileStudio();
    return;
  }
  const setting = event.target.closest("[data-studio-svg-setting]");
  if (setting && profile.svgProfile) {
    const key = setting.dataset.studioSvgSetting;
    profile.svgProfile[key] = setting.type === "checkbox" ? setting.checked : Number(setting.value);
    updateEffectiveProfileDimensions(profile);
    renderProfileStudio();
    return;
  }
  const library = event.target.closest("[data-studio-existing-asset]");
  if (library?.value) {
    const asset = profileAssets.find((item) => item.id === library.value);
    if (!asset) return;
    try {
      const svgContent = await api.adminProfileAssetContent(asset.id);
      applyAssetToProfile(profile, asset, svgContent);
      renderProfileStudio();
      showToast("Profil z biblioteki został przypisany.");
    } catch (error) {
      console.error(error);
      showToast("Nie udało się wczytać profilu z biblioteki.");
    }
    return;
  }
  const fileInput = event.target.closest("[data-studio-svg-file]");
  const file = fileInput?.files?.[0];
  if (!file) return;
  fileInput.disabled = true;
  try {
    const response = await api.request(`/api/admin/${tenantSlug}/profile-assets`, {
      method: "POST",
      body: { fileName: file.name, svg: await file.text(), profileFormatVersion: "1.0" },
      timeout: 30000,
    });
    const svgContent = await api.adminProfileAssetContent(response.asset.id);
    profileAssets.unshift(response.asset);
    applyAssetToProfile(profile, response.asset, svgContent);
    renderProfileStudio();
    showToast(`Profil sprawdzony: ${response.validation.contourCount} konturów.`);
  } catch (error) {
    console.error(error);
    showToast(error.payload?.message || "Plik SVG nie przeszedł walidacji.");
    fileInput.disabled = false;
  }
});

logoutButton.addEventListener("click", async () => {
  await api.request("/api/admin/logout", { method: "POST" }).catch(() => {});
  profilePreview?.destroy();
  profilePreview = null;
  referenceSceneEditor?.destroy();
  referenceSceneEditor = null;
  showWorkspace(false);
});

if (!api.available) {
  loginStatus.textContent = "Ustaw VITE_API_BASE_URL i uruchom API, aby korzystać z panelu.";
} else {
  api.request("/api/admin/me").then(loadWorkspace).catch(() => showWorkspace(false));
}
