import { ConfiguratorApi } from "./core/configurator-api.js";

const config = window.__VISNEX_CONFIG__ || {};
const tenantSlug = config.tenantSlug || "visnex";
const api = new ConfiguratorApi({ baseUrl: config.apiBaseUrl, tenantSlug });
const login = document.getElementById("adminLogin");
const workspace = document.getElementById("adminWorkspace");
const loginForm = document.getElementById("adminLoginForm");
const loginStatus = document.getElementById("adminLoginStatus");
const productsHost = document.getElementById("adminProducts");
const brandingForm = document.getElementById("brandingForm");
const logoutButton = document.getElementById("adminLogout");
const toast = document.getElementById("adminToast");
let products = [];
let catalog = null;

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

function renderProducts() {
  productsHost.innerHTML = products.map((product, productIndex) => {
    const definition = product.definition;
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
  return { name: definition.name, description: definition.description, enabled: definition.enabled, order: definition.order, steps: definition.steps, parameters: definition.parameters, colors: definition.colors, visual: definition.visual, pricing: { ...pricing, demoOnly: true } };
}

async function loadWorkspace() {
  [catalog, { products }] = await Promise.all([api.getCatalog(), api.request(`/api/admin/${tenantSlug}/products`)]);
  window.__adminProducts = products;
  renderBranding();
  renderProducts();
  showWorkspace(true);
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

logoutButton.addEventListener("click", async () => {
  await api.request("/api/admin/logout", { method: "POST" }).catch(() => {});
  showWorkspace(false);
});

if (!api.available) {
  loginStatus.textContent = "Ustaw VITE_API_BASE_URL i uruchom API, aby korzystać z panelu.";
} else {
  api.request("/api/admin/me").then(loadWorkspace).catch(() => showWorkspace(false));
}
