import { ConfiguratorApi } from "./core/configurator-api.js";
import { resolveProfileDefinitions } from "./core/profile-definitions.js";
import { buildTenantUrl, resolveTenantContext } from "./core/tenant-context.js";
import { createPergolaCanvas } from "./pergola-canvas.js";

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
const brandingForm = document.getElementById("brandingForm");
const logoutButton = document.getElementById("adminLogout");
const toast = document.getElementById("adminToast");
document.getElementById("adminTenantLabel").textContent = `Tenant · ${tenantSlug}`;
document.getElementById("adminConfiguratorLink").href = buildTenantUrl("./konfigurator.html", tenantSlug, window.location);
let products = [];
let catalog = null;
let profilePreview = null;
let activeStudioProduct = 0;
let activeStudioProfile = 0;

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
  const widths = parameterDefault(definition, "moduleWidths", [4]);
  return {
    productType: "bioclimatic-pergola",
    construction: "freestanding",
    widths: Array.isArray(widths) ? widths.map(Number) : [Number(widths)],
    depth: Number(parameterDefault(definition, "depth", 3.2)),
    height: Number(parameterDefault(definition, "height", 2.6)),
    slatAngle: Number(parameterDefault(definition, "slatAngle", 35)),
    frameColor,
    slatColor: frameColor,
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
  const width = params.widths.reduce((sum, value) => sum + value, 0);
  const beamHeight = (params.profiles.find((item) => item.id === "frame-beam")?.bMm || 180) / 1000;
  const points = {
    "structural-post": { target: [width / 2 - a / 2, params.height * 0.42, params.depth / 2 - b / 2], a: [[width / 2 - a, params.height * 0.42, params.depth / 2], [width / 2, params.height * 0.42, params.depth / 2]], b: [[width / 2, params.height * 0.42, params.depth / 2 - b], [width / 2, params.height * 0.42, params.depth / 2]] },
    "frame-beam": { target: [width * 0.27, params.height - b / 2, params.depth / 2 - a / 2], a: [[width * 0.27, params.height, params.depth / 2 - a], [width * 0.27, params.height, params.depth / 2]], b: [[width * 0.27, params.height - b, params.depth / 2], [width * 0.27, params.height, params.depth / 2]] },
    "roof-louvre": { target: [0, params.height - beamHeight / 2, 0], a: [[0, params.height - beamHeight / 2, -a / 2], [0, params.height - beamHeight / 2, a / 2]], b: [[0, params.height - beamHeight / 2 - b / 2, a / 2], [0, params.height - beamHeight / 2 + b / 2, a / 2]] },
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
  const modeLabel = definition.productType === "bioclimatic-pergola" ? "Wersja wolnostojąca" : "Wersja bazowa przyścienna";
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
      <p>Obracaj model. Pomarańczowe osie pokazują dokładnie, gdzie na wybranym profilu mierzone są <strong>a</strong> i <strong>b</strong>.</p>
    </section>
    <section class="admin-profile-editor">
      <div class="admin-profile-tabs" role="tablist">${products.map((product, index) => `<button type="button" role="tab" data-studio-product="${index}" aria-selected="${index === activeStudioProduct}">${escapeHtml(product.definition.name)}</button>`).join("")}</div>
      <div class="admin-profile-editor__intro"><span>Przekroje produktu</span><p>Wybierz profil, a model wskaże konkretny element. Wartości zapisujemy zawsze w formacie <strong>a × b mm</strong>.</p></div>
      <div class="admin-profile-cards">${definition.profiles.map((profile, index) => `<article class="admin-profile-card ${index === activeStudioProfile ? "is-active" : ""}" data-studio-profile="${index}">
        <button class="admin-profile-card__select" type="button" data-studio-select-profile="${index}" aria-pressed="${index === activeStudioProfile}">${profileDiagram(profile)}<span><strong>${escapeHtml(profile.label)}</strong><small>${escapeHtml(profile.usage)}</small></span></button>
        <div class="admin-profile-card__values"><output>${profile.aMm} × ${profile.bMm} mm</output><label>a · mm<input data-studio-profile-value="aMm" type="number" min="1" max="1000" step="1" value="${profile.aMm}" /></label><label>b · mm<input data-studio-profile-value="bMm" type="number" min="1" max="1000" step="1" value="${profile.bMm}" /></label></div>
      </article>`).join("")}</div>
      <button class="admin-action admin-profile-editor__save" type="button" data-studio-action="save">Zapisz profile w wersji roboczej</button>
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
      <div class="admin-actions"><button class="admin-action" data-action="save" type="button">Zapisz draft</button><button class="admin-action admin-action--publish" data-action="publish" type="button">Publikuj nową wersję</button></div>
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
  return { name: definition.name, description: definition.description, enabled: definition.enabled, order: definition.order, steps: definition.steps, parameters: definition.parameters, profiles: definition.profiles, colors: definition.colors, visual: definition.visual, pricing: { ...pricing, demoOnly: true } };
}

async function loadWorkspace() {
  [catalog, { products }] = await Promise.all([api.getCatalog(), api.request(`/api/admin/${tenantSlug}/products`)]);
  window.__adminProducts = products;
  renderBranding();
  renderProducts();
  showWorkspace(true);
  renderProfileStudio();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "Loguję…";
  try {
    const form = new FormData(loginForm);
    await api.request(`/api/admin/${tenantSlug}/login`, { method: "POST", body: { email: form.get("email"), password: form.get("password") } });
    loginStatus.textContent = "";
    await loadWorkspace();
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
  const saveButton = event.target.closest('[data-studio-action="save"]');
  if (!saveButton) return;
  const source = products[activeStudioProduct];
  const productCard = productsHost.querySelector(`[data-product-index="${activeStudioProduct}"]`);
  saveButton.disabled = true;
  try {
    const payload = readProductCard(productCard, source);
    const response = await api.request(`/api/admin/${tenantSlug}/products/${source.definition.productType}`, { method: "PUT", body: payload });
    products[activeStudioProduct] = response.product;
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

logoutButton.addEventListener("click", async () => {
  await api.request("/api/admin/logout", { method: "POST" }).catch(() => {});
  profilePreview?.destroy();
  profilePreview = null;
  showWorkspace(false);
});

if (!api.available) {
  loginStatus.textContent = "Ustaw VITE_API_BASE_URL i uruchom API, aby korzystać z panelu.";
} else {
  api.request("/api/admin/me").then(loadWorkspace).catch(() => showWorkspace(false));
}
