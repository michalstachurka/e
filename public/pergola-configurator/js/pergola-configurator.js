// Konfigurator pergoli — warstwa UI (vanilla JS) spięta z silnikiem 3D
// z pergola-canvas.js. Kolejność kontrolek, kolejność kolorów i domyślne
// wartości zgodne z dostarczoną specyfikacją (PergolaConfigurator.tsx).
import { createPergolaCanvas } from "./pergola-canvas.js";
import { setupPergolaAR } from "./ar-controller.js";
import { ConfiguratorApi } from "./core/configurator-api.js";
import { fallbackCatalog } from "./core/fallback-catalog.js";

const mount = document.getElementById("pergolaMount");
if (mount) {
  void (async () => {
  const runtimeConfig = window.__VISNEX_CONFIG__ || {};
  const tenantSlug = runtimeConfig.tenantSlug || new URLSearchParams(window.location.search).get("tenant") || "visnex";
  const api = new ConfiguratorApi({ baseUrl: runtimeConfig.apiBaseUrl, tenantSlug });
  let catalog = fallbackCatalog;
  let catalogSource = "fallback";
  if (api.available) {
    try {
      catalog = await api.getCatalog();
      catalogSource = "api";
    } catch (error) {
      console.warn("Configurator API catalog unavailable; using public demo definition.", error);
    }
  }
  const products = [...catalog.products].filter((product) => product.enabled).sort((a, b) => a.order - b.order);
  const productDefinitions = new Map(products.map((product) => [product.productType, product]));
  const COLORS = (productDefinitions.get("bioclimatic-pergola")?.colors || fallbackCatalog.products[0].colors).map((color) => ({ ...color }));
  const colorAliases = { antracyt: "anthracite", bialy: "warm-white", czarny: "black", braz: "bronze" };

  // Kolory tkaniny screen (osobna paleta — barwy techniczne).
  const SCREEN_COLORS = [
    { id: "piaskowy", label: "Piaskowy", value: "#c9b79c" },
    { id: "grafit", label: "Grafit", value: "#55534e" },
    { id: "antracyt", label: "Antracyt", value: "#33352f" },
    { id: "ecru", label: "Ecru", value: "#ded7c7" },
  ];

  const SIDE_LABELS = { front: "Przód", back: "Tył", left: "Lewa", right: "Prawa" };
  const SIDES = ["front", "back", "left", "right"];
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const state = {
    productType: "bioclimatic-pergola",
    construction: "freestanding", // freestanding | wall | roof
    widths: [4],
    depth: 3.2,
    height: 2.6,
    angle: 35,
    frame: COLORS[0],
    slat: COLORS[0],
    ledLinear: false,
    ledSpots: false,
    screens: { front: false, back: false, left: false, right: false },
    screenFabric: SCREEN_COLORS[0],
    glass: { front: false, back: false, left: false, right: false },
    extraLegs: [], // dodatkowe nogi: [{x, z}] w metrach
    spin: true,
    veranda: {
      width: 4.5,
      depth: 3.2,
      backHeight: 2.95,
      frontHeight: 2.56,
      roofAngle: 7,
      roofFields: 4,
      rafterCount: 5,
      postCount: 3,
      roofMaterial: "clear-glass",
      leftWall: "none",
      rightWall: "none",
      frontWall: "none",
      frameColor: COLORS[0],
      lighting: false,
    },
  };
  let savedShareUrl = null;
  let savedShareId = null;

  const applyBranding = () => {
    const branding = catalog.tenant?.branding;
    if (!branding) return;
    document.documentElement.style.setProperty("--tenant-primary", branding.primaryColor);
    document.documentElement.style.setProperty("--tenant-accent", branding.accentColor);
    document.documentElement.style.setProperty("--tenant-background", branding.backgroundColor);
    document.querySelectorAll(".configurator-product__brand").forEach((node) => { node.textContent = branding.logoText; });
  };
  applyBranding();

  // Bok pergoli najbliższy danej pozycji (x,z) — do odtworzenia „side" nogi
  // ze starszych linków, które go nie zapisywały.
  const inferSide = (x, z) => {
    const halfW = state.widths.reduce((a, b) => a + b, 0) / 2;
    const halfD = state.depth / 2;
    const d = { front: Math.abs(z - halfD), back: Math.abs(z + halfD), left: Math.abs(x + halfW), right: Math.abs(x - halfW) };
    return Object.keys(d).reduce((a, b) => (d[b] < d[a] ? b : a));
  };

  // Wczytanie konfiguracji z linku (?w=4-4&d=3.2&...&scr=bl&sf=grafit&gl=f).
  const applyFromURL = () => {
    const q = new URLSearchParams(window.location.search);
    if (![...q.keys()].length || q.has("project")) return;
    const ct = { f: "freestanding", w: "wall", r: "roof" }[q.get("ct")];
    if (ct) state.construction = ct;
    const w = (q.get("w") || "").split("-").map(Number).filter((n) => n >= 2 && n <= 6).slice(0, 2);
    if (w.length) state.widths = w.map((n) => Math.round(n * 10) / 10);
    if (q.get("d")) state.depth = clamp(Number(q.get("d")), 2.5, 4.5);
    if (q.get("h")) state.height = clamp(Number(q.get("h")), 2.2, 3.2);
    if (q.get("a")) state.angle = clamp(Math.round(Number(q.get("a"))), 0, 120);
    const fc = COLORS.find((c) => c.id === (colorAliases[q.get("fc")] || q.get("fc"))); if (fc) state.frame = fc;
    const sc = COLORS.find((c) => c.id === (colorAliases[q.get("sc")] || q.get("sc"))); if (sc) state.slat = sc;
    const led = q.get("led") || "";
    state.ledLinear = led.includes("l"); state.ledSpots = led.includes("s");
    const scr = q.get("scr") || "";
    SIDES.forEach((s) => { state.screens[s] = scr.includes(s[0]); });
    const sf = SCREEN_COLORS.find((c) => c.id === q.get("sf")); if (sf) state.screenFabric = sf;
    const gl = q.get("gl") || "";
    SIDES.forEach((s) => { state.glass[s] = gl.includes(s[0]); });
    const lg = q.get("lg") || "";
    if (lg) {
      const SIDE_BY_CH = { f: "front", b: "back", l: "left", r: "right" };
      state.extraLegs = lg.split(";").map((pair) => {
        const parts = pair.split("_");
        const x = Number(parts[0]), z = Number(parts[1]);
        const side = SIDE_BY_CH[parts[2]] || inferSide(x, z);
        return { x, z, side };
      }).filter((l) => Number.isFinite(l.x) && Number.isFinite(l.z)).slice(0, 12);
    }
  };
  applyFromURL();

  const hydrateConfiguration = (configuration) => {
    if (!configuration || !productDefinitions.has(configuration.productType)) return false;
    state.productType = configuration.productType;
    if (configuration.productType === "bioclimatic-pergola") {
      const values = configuration.values;
      state.construction = values.construction;
      state.widths = [...values.moduleWidths];
      state.depth = values.depth;
      state.height = values.height;
      state.angle = values.slatAngle;
      state.frame = COLORS.find((color) => color.id === values.frameColor) || COLORS[0];
      state.slat = COLORS.find((color) => color.id === values.slatColor) || COLORS[0];
      state.screenFabric = SCREEN_COLORS.find((color) => color.id === values.screenColor) || SCREEN_COLORS[0];
      state.ledLinear = values.ledLinear;
      state.ledSpots = values.ledSpots;
      state.screens = { ...values.screens };
      state.glass = { ...values.glass };
      state.extraLegs = values.extraLegs.map((leg) => ({ ...leg }));
    } else {
      Object.assign(state.veranda, configuration.values);
      state.veranda.frameColor = COLORS.find((color) => color.id === configuration.values.frameColor) || COLORS[0];
    }
    return true;
  };

  const requestedProject = new URLSearchParams(window.location.search).get("project");
  if (requestedProject && api.available) {
    try {
      const saved = await api.load(requestedProject);
      if (hydrateConfiguration(saved.configuration)) {
        savedShareId = saved.shareId;
        savedShareUrl = window.location.href;
      }
    } catch (error) {
      console.error("Saved configuration could not be loaded.", error);
    }
  }

  const activeDefinition = () => productDefinitions.get(state.productType);
  const paramsBuilders = new Map();
  paramsBuilders.set("bioclimatic-pergola", () => ({
    productType: "bioclimatic-pergola",
    construction: state.construction,
    widths: state.widths,
    depth: state.depth,
    height: state.height,
    slatAngle: state.angle,
    frameColor: state.frame.value,
    slatColor: state.slat.value,
    ledLinear: state.ledLinear,
    ledSpots: state.ledSpots,
    screens: { ...state.screens },
    screenColor: state.screenFabric.value,
    glass: { ...state.glass },
    extraLegs: state.extraLegs.map((l) => ({ ...l })),
    spin: state.spin,
    visual: activeDefinition()?.visual,
  }));
  paramsBuilders.set("veranda", () => ({
    productType: "veranda",
    ...state.veranda,
    frameColor: state.veranda.frameColor.value,
    slatColor: state.veranda.frameColor.value,
    screenColor: "#C9B79C",
    screens: { front: false, back: false, left: false, right: false },
    glass: { front: false, back: false, left: false, right: false },
    spin: state.spin,
    visual: activeDefinition()?.visual,
  }));
  const params = () => paramsBuilders.get(state.productType)();

  // Stabilny kontrakt danych dla przyszłego panelu wycen i integracji CRM.
  // Warstwa administracyjna nie musi znać wewnętrznej struktury renderera 3D.
  const configurationBuilders = new Map();
  configurationBuilders.set("bioclimatic-pergola", () => ({
    construction: state.construction,
    moduleWidths: [...state.widths],
    depth: state.depth,
    height: state.height,
    slatAngle: state.angle,
    frameColor: state.frame.id,
    slatColor: state.slat.id,
    screenColor: state.screenFabric.id,
      ledLinear: state.ledLinear,
      ledSpots: state.ledSpots,
      screens: { ...state.screens },
      glass: { ...state.glass },
      extraLegs: state.extraLegs.map((leg) => ({ ...leg })),
  }));
  configurationBuilders.set("veranda", () => ({
    width: state.veranda.width,
    depth: state.veranda.depth,
    backHeight: state.veranda.backHeight,
    frontHeight: state.veranda.frontHeight,
    roofAngle: state.veranda.roofAngle,
    roofFields: state.veranda.roofFields,
    rafterCount: state.veranda.rafterCount,
    postCount: state.veranda.postCount,
    roofMaterial: state.veranda.roofMaterial,
    leftWall: state.veranda.leftWall,
    rightWall: state.veranda.rightWall,
    frontWall: state.veranda.frontWall,
    frameColor: state.veranda.frameColor.id,
    lighting: state.veranda.lighting,
  }));
  const configurationPayload = () => ({
    schemaVersion: "2.0",
    tenantSlug,
    productType: state.productType,
    productVersionId: activeDefinition().version.id,
    values: configurationBuilders.get(state.productType)(),
  });

  const emitConfigurationChange = () => {
    const detail = configurationPayload();
    window.dispatchEvent(new CustomEvent("configurator:configuration-change", { detail }));
    if (state.productType === "bioclimatic-pergola") window.dispatchEvent(new CustomEvent("pergola:configuration-change", { detail }));
  };

  const publicApi = Object.freeze({
    version: "2.0.0",
    getConfiguration: configurationPayload,
    getShareUrl: () => savedShareUrl,
    save: () => saveProject(),
    getRegisteredProducts: () => canvas.registeredProducts,
  });
  const canvas = createPergolaCanvas(mount, params());
  window.sunProtectionConfigurator = publicApi;
  window.pergolaConfigurator = publicApi;
  mount.setAttribute("aria-busy", "false");

  const specEl = document.getElementById("pergolaSpec");
  const updateSpec = () => {
    specEl.textContent = state.productType === "bioclimatic-pergola"
      ? `${state.widths.map((w) => w.toFixed(1)).join(" + ")} × ${state.depth.toFixed(1)} × ${state.height.toFixed(1)} m · ${state.angle}°`
      : `${state.veranda.width.toFixed(1)} × ${state.veranda.depth.toFixed(1)} m · ${state.veranda.backHeight.toFixed(2)} → ${state.veranda.frontHeight.toFixed(2)} m · ${state.veranda.roofAngle.toFixed(1)}°`;
  };

  const push = () => {
    savedShareUrl = null;
    savedShareId = null;
    canvas.update(params());
    updateSpec();
    updateSummary();
    emitConfigurationChange();
    scheduleValidation();
  };

  const CONSTRUCTION_LABELS = {
    freestanding: "Wolnostojąca",
    wall: "Przyścienna (montaż do ściany)",
    roof: "Moduł dachowy (kołnierz betonowy)",
  };
  const PRODUCT_COPY = {
    "bioclimatic-pergola": {
      title: "Zaprojektuj<br><em>swoją pergolę.</em>",
      lead: "Ustaw moduły, wymiary, kolory i wyposażenie. Każda zmiana pozostaje pod kontrolą wspólnego rdzenia konfiguratora.",
      ar: "Twoja pergola<br><em>w prawdziwej skali.</em>",
    },
    veranda: {
      title: "Zaprojektuj<br><em>swoją werandę.</em>",
      lead: "Ustaw bryłę, spadek dachu i demonstracyjne wypełnienia. Ostateczne parametry wymagają zatwierdzenia technicznego.",
      ar: "Twoja weranda<br><em>w prawdziwej skali.</em>",
    },
  };

  const productSwitcher = document.querySelector("#productSwitcher .product-switcher__buttons");
  const stepsHost = document.getElementById("configuratorSteps");
  productSwitcher.innerHTML = products.map((product) => `<button type="button" data-product="${product.productType}" aria-pressed="${product.productType === state.productType}">${product.name}<small>${product.productType === "veranda" ? "definicja demo" : "wersja " + product.version.number}</small></button>`).join("");

  const syncProductUi = () => {
    const definition = activeDefinition();
    document.getElementById("pergolaControls").hidden = state.productType !== "bioclimatic-pergola";
    document.getElementById("verandaControls").hidden = state.productType !== "veranda";
    productSwitcher.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.product === state.productType)));
    const copy = PRODUCT_COPY[state.productType];
    document.getElementById("configuratorTitle").innerHTML = copy.title;
    document.getElementById("configuratorLead").textContent = copy.lead;
    document.getElementById("arTitle").innerHTML = copy.ar;
    stepsHost.innerHTML = [...definition.steps].sort((a, b) => a.order - b.order).map((step) => `<li>${step.label}</li>`).join("");
    document.title = `${definition.name} 3D — visNEX`;
    updateSpec();
    updateSummary();
  };

  productSwitcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.product === state.productType) return;
      state.productType = button.dataset.product;
      syncProductUi();
      push();
    });
  });

  document.querySelectorAll("#cameraViews [data-view]").forEach((button) => {
    button.addEventListener("click", () => canvas.setView(button.dataset.view));
  });

  const rangeControlIds = {
    depth: "pergolaDepth",
    height: "pergolaHeight",
    slatAngle: "pergolaAngle",
    width: "verandaWidth",
    backHeight: "verandaBackHeight",
    frontHeight: "verandaFrontHeight",
    roofAngle: "verandaAngle",
    roofFields: "verandaFields",
    rafterCount: "verandaRafters",
    postCount: "verandaPosts",
  };
  for (const definition of products) {
    for (const parameter of definition.parameters) {
      const input = document.getElementById(rangeControlIds[parameter.key]);
      if (!input) continue;
      if (parameter.min !== undefined) input.min = parameter.min;
      if (parameter.max !== undefined) input.max = parameter.max;
      if (parameter.step !== undefined) input.step = parameter.step;
    }
  }

  /* ---------- Rodzaj konstrukcji ---------- */
  const constructionGroup = document.getElementById("pergolaConstruction");
  constructionGroup.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.construction === state.construction));
    btn.addEventListener("click", () => {
      state.construction = btn.dataset.construction;
      constructionGroup.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      push();
    });
  });

  /* ---------- Moduły + suwaki szerokości ---------- */
  const modulesGroup = document.getElementById("pergolaModules");
  const widthsHost = document.getElementById("pergolaWidths");

  const renderWidths = () => {
    widthsHost.innerHTML = "";
    const widthDefinition = productDefinitions.get("bioclimatic-pergola")?.parameters.find((parameter) => parameter.key === "moduleWidths");
    state.widths.forEach((w, i) => {
      const label = document.createElement("label");
      label.className = "pergola3d__slider";
      const labelText = state.widths.length === 1 ? "Szerokość" : `Moduł ${i + 1} · szerokość`;
      label.innerHTML = `
        <span class="pergola3d__label">${labelText} · <b>${w.toFixed(1)}</b> m</span>
        <input type="range" data-module-width="${i}" min="${widthDefinition?.min ?? 2}" max="${widthDefinition?.max ?? 6}" step="${widthDefinition?.step ?? 0.1}" value="${w}">
      `;
      const input = label.querySelector("input");
      const b = label.querySelector("b");
      input.addEventListener("input", () => {
        state.widths[i] = Number(input.value);
        b.textContent = state.widths[i].toFixed(1);
        push();
      });
      widthsHost.appendChild(label);
    });
  };

  const syncModules = () => modulesGroup.querySelectorAll("button").forEach((b) =>
    b.setAttribute("aria-pressed", String(Number(b.dataset.modules) === state.widths.length)));
  modulesGroup.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const m = Number(btn.dataset.modules);
      if (m === state.widths.length) return;
      state.widths = m > state.widths.length ? [...state.widths, 4] : state.widths.slice(0, m);
      syncModules();
      renderWidths();
      push();
    });
  });
  renderWidths();
  syncModules();

  /* ---------- Wysięg / wysokość / kąt lameli ---------- */
  const bindSlider = (id, valId, key, decimals) => {
    const input = document.getElementById(id);
    const out = document.getElementById(valId);
    input.value = state[key];
    out.textContent = decimals > 0 ? state[key].toFixed(decimals) : String(state[key]);
    input.addEventListener("input", () => {
      state[key] = Number(input.value);
      out.textContent = decimals > 0 ? state[key].toFixed(decimals) : String(state[key]);
      push();
    });
  };
  bindSlider("pergolaDepth", "pergolaDepthVal", "depth", 1);
  bindSlider("pergolaHeight", "pergolaHeightVal", "height", 2);
  bindSlider("pergolaAngle", "pergolaAngleVal", "angle", 0);

  /* ---------- Kolory: konstrukcja + lamele ---------- */
  const renderSwatches = (hostId, key) => {
    const host = document.getElementById(hostId);
    host.innerHTML = COLORS.map((c) => `
      <button type="button" data-id="${c.id}" aria-pressed="${state[key].id === c.id}">
        <i style="--sw:${c.value}"></i><span>${c.label}</span>
      </button>
    `).join("");
    host.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const color = COLORS.find((c) => c.id === btn.dataset.id);
        state[key] = color;
        host.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        push();
      });
    });
  };
  renderSwatches("pergolaFrameColor", "frame");
  renderSwatches("pergolaSlatColor", "slat");

  /* ---------- LED (można łączyć) ---------- */
  const bindToggle = (id, key) => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => {
      state[key] = !state[key];
      btn.setAttribute("aria-pressed", String(state[key]));
      push();
    });
  };
  bindToggle("pergolaLedLinear", "ledLinear");
  bindToggle("pergolaLedSpots", "ledSpots");
  document.getElementById("pergolaLedLinear").setAttribute("aria-pressed", String(state.ledLinear));
  document.getElementById("pergolaLedSpots").setAttribute("aria-pressed", String(state.ledSpots));

  /* ---------- Rolety screen: boki + kolor tkaniny ---------- */
  const screensGroup = document.getElementById("pergolaScreens");
  screensGroup.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(state.screens[btn.dataset.side]));
    btn.addEventListener("click", () => {
      const side = btn.dataset.side;
      state.screens[side] = !state.screens[side];
      btn.setAttribute("aria-pressed", String(state.screens[side]));
      push();
    });
  });

  const screenColorHost = document.getElementById("pergolaScreenColor");
  screenColorHost.innerHTML = SCREEN_COLORS.map((c) => `
    <button type="button" data-id="${c.id}" aria-pressed="${state.screenFabric.id === c.id}">
      <i style="--sw:${c.value}"></i><span>${c.label}</span>
    </button>
  `).join("");
  screenColorHost.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.screenFabric = SCREEN_COLORS.find((c) => c.id === btn.dataset.id);
      screenColorHost.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      push();
    });
  });

  /* ---------- Przeszklenia: boki ---------- */
  const glassGroup = document.getElementById("pergolaGlass");
  glassGroup.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(state.glass[btn.dataset.side]));
    btn.addEventListener("click", () => {
      const side = btn.dataset.side;
      state.glass[side] = !state.glass[side];
      btn.setAttribute("aria-pressed", String(state.glass[side]));
      push();
    });
  });

  /* ---------- Animacja ruchu (domyślnie włączona) ---------- */
  const spinBtn = document.getElementById("pergolaSpin");
  spinBtn.addEventListener("click", () => {
    state.spin = !state.spin;
    spinBtn.setAttribute("aria-pressed", String(state.spin));
    push();
  });

  updateSpec();

  /* ---------- Weranda: działający moduł produktowy ---------- */
  const verandaRangeBindings = [
    ["verandaWidth", "verandaWidthVal", "width", 1],
    ["verandaDepth", "verandaDepthVal", "depth", 1],
    ["verandaBackHeight", "verandaBackHeightVal", "backHeight", 2],
    ["verandaFrontHeight", "verandaFrontHeightVal", "frontHeight", 2],
    ["verandaAngle", "verandaAngleVal", "roofAngle", 1],
    ["verandaFields", "verandaFieldsVal", "roofFields", 0],
    ["verandaRafters", "verandaRaftersVal", "rafterCount", 0],
    ["verandaPosts", "verandaPostsVal", "postCount", 0],
  ];
  const syncVerandaRanges = () => {
    verandaRangeBindings.forEach(([inputId, valueId, key, decimals]) => {
      const input = document.getElementById(inputId);
      const value = state.veranda[key];
      input.value = value;
      document.getElementById(valueId).textContent = decimals ? Number(value).toFixed(decimals) : String(Math.round(value));
    });
  };
  const deriveVerandaFrontHeight = () => {
    const front = state.veranda.backHeight - Math.tan(state.veranda.roofAngle * Math.PI / 180) * state.veranda.depth;
    const input = document.getElementById("verandaFrontHeight");
    state.veranda.frontHeight = clamp(front, Number(input.min), Number(input.max));
  };
  const deriveVerandaAngle = () => {
    const input = document.getElementById("verandaAngle");
    const raw = Math.atan((state.veranda.backHeight - state.veranda.frontHeight) / state.veranda.depth) * 180 / Math.PI;
    const step = Number(input.step) || 0.5;
    state.veranda.roofAngle = clamp(Math.round(raw / step) * step, Number(input.min), Number(input.max));
    deriveVerandaFrontHeight();
  };
  verandaRangeBindings.forEach(([inputId, _valueId, key]) => {
    const input = document.getElementById(inputId);
    input.addEventListener("input", () => {
      state.veranda[key] = ["roofFields", "rafterCount", "postCount"].includes(key) ? Math.round(Number(input.value)) : Number(input.value);
      if (["depth", "backHeight", "roofAngle"].includes(key)) deriveVerandaFrontHeight();
      if (key === "frontHeight") deriveVerandaAngle();
      if (key === "roofFields") state.veranda.rafterCount = Math.max(state.veranda.rafterCount, state.veranda.roofFields + 1);
      if (key === "rafterCount" && state.veranda.rafterCount < state.veranda.roofFields + 1) state.veranda.rafterCount = state.veranda.roofFields + 1;
      syncVerandaRanges();
      push();
    });
  });

  const WALL_OPTIONS = [
    ["none", "Brak"],
    ["full-glass", "Przeszklenie pełne · demo"],
    ["sliding-glass", "Przeszklenie przesuwne · demo"],
    ["zip-screen", "Roleta ZIP · demo"],
    ["solid", "Wypełnienie pełne · demo"],
    ["top-wedge", "Klin górny · demo"],
  ];
  const bindWallSelect = (id, key, allowWedge) => {
    const select = document.getElementById(id);
    select.innerHTML = WALL_OPTIONS.filter(([value]) => allowWedge || value !== "top-wedge").map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    select.value = state.veranda[key];
    select.addEventListener("change", () => { state.veranda[key] = select.value; push(); });
  };
  bindWallSelect("verandaLeftWall", "leftWall", true);
  bindWallSelect("verandaRightWall", "rightWall", true);
  bindWallSelect("verandaFrontWall", "frontWall", false);

  const verandaRoofMaterial = document.getElementById("verandaRoofMaterial");
  verandaRoofMaterial.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.value === state.veranda.roofMaterial));
    button.addEventListener("click", () => {
      state.veranda.roofMaterial = button.dataset.value;
      verandaRoofMaterial.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      push();
    });
  });

  const verandaColorHost = document.getElementById("verandaFrameColor");
  verandaColorHost.innerHTML = COLORS.map((color) => `<button type="button" data-id="${color.id}" aria-pressed="${state.veranda.frameColor.id === color.id}"><i style="--sw:${color.value}"></i><span>${color.label}</span></button>`).join("");
  verandaColorHost.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.veranda.frameColor = COLORS.find((color) => color.id === button.dataset.id) || COLORS[0];
      verandaColorHost.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      push();
    });
  });
  const verandaLighting = document.getElementById("verandaLighting");
  verandaLighting.setAttribute("aria-pressed", String(state.veranda.lighting));
  verandaLighting.addEventListener("click", () => {
    state.veranda.lighting = !state.veranda.lighting;
    verandaLighting.setAttribute("aria-pressed", String(state.veranda.lighting));
    push();
  });
  syncVerandaRanges();

  /* ---------- Mobile: panel opcji jako NIE-modalny bottom sheet ----------
     Bez scrima i bez blokady strony: gdy panel jest otwarty, model nad nim
     cały czas można obracać, przybliżać i oglądać. */
  const toggleBtn = document.getElementById("pergolaOptionsToggle");
  const panel = document.getElementById("pergolaPanel");
  const closeBtn = document.getElementById("pergolaPanelClose");
  const stage = document.querySelector(".pergola3d__stage");
  const arButton = document.getElementById("pergolaAR");
  let ignoreWindowScrollUntil = 0;

  // CTA AR należy do renderu, nie do przewijanej listy ustawień. Przenosimy
  // istniejący element, aby zachować jego obsługę i jeden stabilny identyfikator.
  if (arButton && arButton.parentElement !== stage) {
    arButton.querySelectorAll(".pergola3d__ar-desktop, .pergola3d__ar-mobile")
      .forEach((label) => { label.textContent = "ZOBACZ w AR"; });
    stage.insertBefore(arButton, toggleBtn);
  }

  const openPanel = () => {
    panel.classList.add("is-open");
    toggleBtn.setAttribute("aria-expanded", "true");
    ignoreWindowScrollUntil = performance.now() + 700;
    // Render musi zostać w całości widoczny nad panelem (max 42vh) —
    // dosuwamy stronę tak, by kadr 3D zmieścił się w wolnej przestrzeni.
    const sheetHeight = window.innerHeight * 0.42;
    const available = window.innerHeight - sheetHeight;
    const headerSafe = 84;
    const rect = stage.getBoundingClientRect();
    if (rect.bottom > available || rect.top < headerSafe) {
      const targetTop = Math.max(headerSafe, available - rect.height);
      window.scrollBy({ top: rect.top - targetTop, behavior: "smooth" });
    }
  };
  const closePanel = () => {
    panel.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  };
  toggleBtn.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);
  // Scroll wewnątrz panelu nie bąbelkuje do window. Gdy użytkownik przewija
  // całą stronę, zamykamy mobilny bottom sheet, żeby nie jechał za viewportem.
  window.addEventListener("scroll", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) return;
    if (!panel.classList.contains("is-open")) return;
    if (performance.now() < ignoreWindowScrollUntil) return;
    closePanel();
  }, { passive: true });
  setupPergolaAR({ canvas, closeOptionsPanel: closePanel });

  /* ---------- Dodatkowe nogi (wybór boku → strzałki do przesuwania) ---------- */
  const addLegBtn = document.getElementById("pergolaAddLeg");
  const clearLegsBtn = document.getElementById("pergolaClearLegs");
  const legCountEl = document.getElementById("pergolaLegCount");
  const legHint = document.getElementById("pergolaLegHint");
  const legAdjust = document.getElementById("legAdjust");
  const legLeftBtn = document.getElementById("legLeft");
  const legRightBtn = document.getElementById("legRight");
  const legDelBtn = document.getElementById("legDel");
  const legDoneBtn = document.getElementById("legDone");
  const sidePick = document.getElementById("sidePick");
  const sideChips = sidePick ? [...sidePick.querySelectorAll(".side-pick__chip")] : [];
  const POST = 0.14;
  const totalWidth = () => state.widths.reduce((a, b) => a + b, 0);
  const syncLegs = () => { legCountEl.textContent = String(state.extraLegs.length); };
  syncLegs();

  let activeLeg = -1;      // indeks regulowanej nogi
  let activeSide = "front";
  let picking = false;     // trwa wybór boku

  // Środek wskazanej ściany (start nogi) — na linii słupów.
  const sideCenter = (side) => {
    const halfW = totalWidth() / 2, halfD = state.depth / 2;
    if (side === "front") return { x: 0, z: halfD - POST / 2 };
    if (side === "back") return { x: 0, z: -halfD + POST / 2 };
    if (side === "left") return { x: -halfW + POST / 2, z: 0 };
    return { x: halfW - POST / 2, z: 0 };
  };

  // Środek zewnętrznego lica każdej ściany (do umieszczenia znacznika boku).
  const sideFaceCenter = (side) => {
    const halfW = totalWidth() / 2, halfD = state.depth / 2, y = state.height * 0.5;
    if (side === "front") return { x: 0, y, z: halfD };
    if (side === "back") return { x: 0, y, z: -halfD };
    if (side === "left") return { x: -halfW, y, z: 0 };
    return { x: halfW, y, z: 0 };
  };

  // Normalne (poziome) zewnętrznych lic ścian — do wygaszania boków
  // odwróconych od widza.
  const SIDE_NORMAL = { front: [0, 1], back: [0, -1], left: [-1, 0], right: [1, 0] };

  // Pozycjonowanie znaczników wyboru boku (co klatkę). Bok odwrócony od
  // kamery jest chowany, żeby nie dało się kliknąć „przez" model.
  const positionSidePick = () => {
    const cam = canvas.cameraDir ? canvas.cameraDir() : null;
    for (const chip of sideChips) {
      const c = sideFaceCenter(chip.dataset.side);
      const pr = canvas.project(c.x, c.y, c.z);
      let away = pr.behind;
      if (cam) {
        const nrm = SIDE_NORMAL[chip.dataset.side];
        // Iloczyn skalarny normalnej ściany z kierunkiem do kamery (w rzucie
        // poziomym): ≤0 => ściana zwrócona tyłem lub bokiem do widza.
        if (nrm[0] * cam.x + nrm[1] * cam.z < 0.03) away = true;
      }
      chip.style.left = `${pr.x}px`;
      chip.style.top = `${pr.y}px`;
      chip.style.opacity = away ? "0" : "1";
      chip.style.pointerEvents = away ? "none" : "auto";
    }
  };

  // Pozycjonowanie nakładki strzałek na rzucie nogi (co klatkę).
  const positionAdjust = () => {
    if (activeLeg < 0 || !state.extraLegs[activeLeg]) return;
    const leg = state.extraLegs[activeLeg];
    const p = canvas.project(leg.x, state.height * 0.5, leg.z);
    legAdjust.style.left = `${p.x}px`;
    legAdjust.style.top = `${p.y}px`;
    legAdjust.style.opacity = p.behind ? "0" : "1";
  };

  // Krok 1: wybór boku — podświetlone znaczniki na każdej ścianie pergoli.
  const startPick = () => {
    stopAdjust();
    picking = true;
    if (sidePick) { sidePick.hidden = false; sidePick.setAttribute("aria-hidden", "false"); }
    legHint.hidden = false;
    legHint.textContent = "Kliknij bok pergoli, na którym chcesz dodać nogę. Możesz obrócić model.";
    addLegBtn.setAttribute("aria-pressed", "true");
    canvas.setSpinPaused(true);
    canvas.setOnFrame(positionSidePick);
    positionSidePick();
  };
  const stopPick = () => {
    picking = false;
    if (sidePick) { sidePick.hidden = true; sidePick.setAttribute("aria-hidden", "true"); }
    addLegBtn.setAttribute("aria-pressed", "false");
    if (activeLeg < 0) { legHint.hidden = true; canvas.setSpinPaused(false); canvas.setOnFrame(null); }
  };

  // Krok 2: regulacja — strzałki przesuwają nogę po wybranej ścianie.
  const startAdjust = (idx, side) => {
    activeLeg = idx;
    activeSide = side;
    legAdjust.hidden = false;
    legAdjust.setAttribute("aria-hidden", "false");
    legHint.hidden = false;
    legHint.textContent = "Strzałkami przesuwasz nogę po tej ścianie. ✓ gdy gotowe, ✕ aby usunąć.";
    canvas.setSpinPaused(true);
    canvas.setOnFrame(positionAdjust);
    positionAdjust();
  };
  const stopAdjust = () => {
    activeLeg = -1;
    legAdjust.hidden = true;
    legAdjust.setAttribute("aria-hidden", "true");
    if (!picking) { legHint.hidden = true; canvas.setSpinPaused(false); canvas.setOnFrame(null); }
  };

  // „Dodaj nogę" uruchamia wybór boku (ponowny klik anuluje).
  addLegBtn.addEventListener("click", () => {
    if (picking) { stopPick(); return; }
    if (state.extraLegs.length >= 12) return;
    startPick();
    closePanel(); // na mobile odsłoń model
  });

  // Klik w bok → dodaj nogę na jego środku i przejdź do regulacji.
  for (const chip of sideChips) {
    chip.addEventListener("click", () => {
      if (state.extraLegs.length >= 12) { stopPick(); return; }
      const side = chip.dataset.side;
      state.extraLegs.push({ ...sideCenter(side), side });
      syncLegs();
      push();
      stopPick();
      startAdjust(state.extraLegs.length - 1, side);
    });
  }

  // Przesuwanie nogi wzdłuż ściany — kierunek zgodny z ekranem.
  const nudge = (screenDir) => {
    if (activeLeg < 0) return;
    const leg = state.extraLegs[activeLeg];
    const along = (activeSide === "front" || activeSide === "back") ? "x" : "z";
    const span = (along === "x" ? totalWidth() : state.depth) / 2 - POST;
    const p0 = canvas.project(leg.x, state.height * 0.5, leg.z);
    const probe = { x: leg.x, z: leg.z };
    probe[along] += 0.1;
    const p1 = canvas.project(probe.x, state.height * 0.5, probe.z);
    const plusIsRight = (p1.x - p0.x) >= 0;
    const dt = ((screenDir > 0) === plusIsRight ? 1 : -1) * 0.12;
    leg[along] = clamp(leg[along] + dt, -span, span);
    push();
  };

  // Klik = jeden krok; przytrzymanie = powtarzanie.
  const holdRepeat = (btn, dir) => {
    let timer = 0;
    const start = (e) => {
      e.preventDefault();
      nudge(dir);
      timer = setInterval(() => nudge(dir), 90);
    };
    const stop = () => { clearInterval(timer); timer = 0; };
    btn.addEventListener("pointerdown", start);
    btn.addEventListener("pointerup", stop);
    btn.addEventListener("pointerleave", stop);
    btn.addEventListener("pointercancel", stop);
  };
  holdRepeat(legLeftBtn, -1);
  holdRepeat(legRightBtn, 1);

  legDoneBtn.addEventListener("click", stopAdjust);
  legDelBtn.addEventListener("click", () => {
    if (activeLeg >= 0) state.extraLegs.splice(activeLeg, 1);
    syncLegs();
    push();
    stopAdjust();
  });
  clearLegsBtn.addEventListener("click", () => {
    state.extraLegs = [];
    syncLegs();
    push();
    stopPick();
    stopAdjust();
  });

  /* ---------- Wspólne podsumowanie, walidacja i zapis ---------- */
  const ROOF_LABELS = {
    "clear-glass": "Szkło przejrzyste · demo",
    "smoked-glass": "Szkło dymione · demo",
    "clear-polycarbonate": "Poliwęglan przejrzysty · demo",
    "opal-polycarbonate": "Poliwęglan mleczny · demo",
  };
  const WALL_LABELS = Object.fromEntries(WALL_OPTIONS);
  const summaryHost = document.getElementById("configurationSummaryList");
  const quotePreview = document.getElementById("quotePreview");
  const notice = document.getElementById("configuratorNotice");
  const noticeText = document.getElementById("configuratorNoticeText");
  const saveButton = document.getElementById("configuratorSave");
  const saveLabel = document.getElementById("configuratorSaveLabel");
  let validationTimer = 0;

  const summaryRows = () => state.productType === "bioclimatic-pergola" ? [
    ["Produkt", "Pergola bioklimatyczna"],
    ["Konstrukcja", CONSTRUCTION_LABELS[state.construction]],
    ["Wymiary", `${state.widths.map((width) => width.toFixed(1)).join(" + ")} × ${state.depth.toFixed(1)} × ${state.height.toFixed(2)} m`],
    ["Lamele", `${state.angle}°`],
    ["Wyposażenie", `${Number(state.ledLinear) + Number(state.ledSpots) + SIDES.filter((side) => state.screens[side] || state.glass[side]).length} wybrane`],
  ] : [
    ["Produkt", "Weranda · demo"],
    ["Wymiary", `${state.veranda.width.toFixed(1)} × ${state.veranda.depth.toFixed(1)} m`],
    ["Spadek", `${state.veranda.backHeight.toFixed(2)} → ${state.veranda.frontHeight.toFixed(2)} m · ${state.veranda.roofAngle.toFixed(1)}°`],
    ["Dach", `${ROOF_LABELS[state.veranda.roofMaterial]} · ${state.veranda.roofFields} pól`],
    ["Zabudowy", `L: ${WALL_LABELS[state.veranda.leftWall]}, P: ${WALL_LABELS[state.veranda.rightWall]}, F: ${WALL_LABELS[state.veranda.frontWall]}`],
  ];

  const updateSummary = () => {
    summaryHost.innerHTML = summaryRows().map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
    if (!savedShareUrl) saveLabel.textContent = "Zapisz projekt";
  };

  const setNotice = (message, tone = "neutral") => {
    noticeText.textContent = message;
    notice.classList.toggle("is-valid", tone === "valid");
    notice.classList.toggle("is-error", tone === "error");
  };

  async function validateCurrent() {
    if (!api.available) {
      setNotice("Tryb statyczny GitHub Pages · uruchom API, aby walidować, zapisywać i wyceniać.");
      return { valid: true, offline: true };
    }
    try {
      const result = await api.validate(configurationPayload());
      if (result.valid) {
        const warning = result.warnings?.[0]?.message;
        setNotice(warning || "Konfiguracja zweryfikowana przez API.", "valid");
      }
      return result;
    } catch (error) {
      const payload = error.payload;
      const message = payload?.errors?.[0]?.message || payload?.issues?.[0]?.message || "Konfiguracja wymaga korekty.";
      setNotice(message, "error");
      return payload || { valid: false };
    }
  }

  function scheduleValidation() {
    clearTimeout(validationTimer);
    validationTimer = setTimeout(validateCurrent, 480);
  }

  async function saveProject() {
    if (!api.available) {
      setNotice("Zapis wymaga działającego API skonfigurowanego przez VITE_API_BASE_URL.", "error");
      throw new Error("API_UNAVAILABLE");
    }
    saveButton.classList.add("is-busy");
    saveLabel.textContent = "Waliduję i zapisuję…";
    try {
      const validation = await validateCurrent();
      if (!validation.valid) throw new Error("CONFIGURATION_INVALID");
      const saved = await api.save(configurationPayload(), 30);
      savedShareId = saved.shareId;
      savedShareUrl = saved.shareUrl;
      saveLabel.textContent = "Projekt zapisany ✓";
      setNotice("Projekt zapisany pod nieprzewidywalnym identyfikatorem. Link wygasa po 30 dniach.", "valid");
      return saved;
    } finally {
      saveButton.classList.remove("is-busy");
    }
  }
  saveButton.addEventListener("click", () => { saveProject().catch(() => {}); });
  if (savedShareUrl) saveLabel.textContent = "Projekt odtworzony ✓";

  /* ---------- Eksport PDF projektu ---------- */
  const exportBtn = document.getElementById("pergolaExport");
  const doc = {
    date: document.getElementById("pergolaDocDate"),
    render: document.getElementById("pergolaDocRender"),
    title: document.getElementById("pergolaDocTitle"),
    spec: document.getElementById("pergolaDocSpec"),
    table: document.getElementById("pergolaDocTable"),
  };

  const ledLabel = () => {
    if (state.ledLinear && state.ledSpots) return "Liniowe (rynny) + punktowe (lamele)";
    if (state.ledLinear) return "Liniowe (rynny)";
    if (state.ledSpots) return "Punktowe (lamele)";
    return "Bez oświetlenia";
  };

  const screensLabel = () => {
    const on = SIDES.filter((s) => state.screens[s]);
    if (!on.length) return "Bez rolet";
    const sides = on.map((s) => SIDE_LABELS[s]).join(", ");
    return `${sides} · skrzynka 10,5 cm · tkanina ${state.screenFabric.label}`;
  };

  const glassLabel = () => {
    const on = SIDES.filter((s) => state.glass[s]);
    if (!on.length) return "Bez przeszkleń";
    return on.map((s) => SIDE_LABELS[s]).join(", ");
  };

  const specLine = () => specEl.textContent;

  const fillDoc = () => {
    doc.date.textContent = new Date().toLocaleDateString("pl-PL", {
      day: "numeric", month: "long", year: "numeric",
    });
    doc.title.textContent = activeDefinition().name;
    doc.spec.textContent = specLine();
    const rows = summaryRows();
    doc.table.innerHTML = rows
      .map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`)
      .join("");
  };

  if (exportBtn) {
    let printing = false;
    // „is-printing" na <body> włącza tryb karty projektu tylko w @media print,
    // więc na ekranie nic nie zmienia. Zdejmujemy je dopiero, gdy okno druku
    // faktycznie się zamknie — nie po sztywnym timerze, bo użytkownik może
    // trzymać otwarty podgląd wydruku dowolnie długo.
    const endPrint = () => document.body.classList.remove("is-printing");
    window.addEventListener("afterprint", endPrint);
    const mql = window.matchMedia && window.matchMedia("print");
    if (mql && mql.addEventListener) {
      mql.addEventListener("change", (e) => { if (!e.matches) endPrint(); });
    }

    exportBtn.addEventListener("click", async () => {
      if (printing) return;
      printing = true;
      exportBtn.classList.add("is-busy");
      try {
        fillDoc();
        const snapshot = canvas.snapshot();
        doc.render.src = snapshot;
        if (api.available) {
          try {
            const blob = await api.pdf(configurationPayload(), snapshot);
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = `visnex-${state.productType}-${new Date().toISOString().slice(0, 10)}.pdf`;
            anchor.click();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
            setNotice("PDF wygenerowany po ponownej walidacji konfiguracji na serwerze.", "valid");
            return;
          } catch (error) {
            console.error("Server PDF failed; opening local print fallback.", error);
            setNotice("Serwerowy PDF jest chwilowo niedostępny. Otwieram lokalną kartę wydruku.", "error");
          }
        }
        // Poczekaj, aż obraz się zdekoduje, żeby nie trafił pusty na wydruk.
        if (doc.render.decode) {
          try { await doc.render.decode(); } catch (_) { /* i tak drukujemy */ }
        }
        if (document.fonts && document.fonts.ready) {
          try { await document.fonts.ready; } catch (_) { /* ignore */ }
        }
        closePanel();
        document.body.classList.add("is-printing");
        window.print();
      } finally {
        exportBtn.classList.remove("is-busy");
        printing = false;
      }
    });
  }

  /* ---------- Wyślij zapytanie z tą konfiguracją ---------- */
  const inquiryBtn = document.getElementById("pergolaInquiry");
  if (inquiryBtn) {
    const inquiryLabel = document.getElementById("pergolaInquiryLabel");
    let inquiryResetTimer = 0;
    inquiryBtn.addEventListener("click", async () => {
      const defaultText = inquiryLabel.textContent;
      inquiryLabel.textContent = "Waliduję konfigurację…";
      try {
        if (!savedShareUrl) await saveProject();
        const configuration = configurationPayload();
        const result = await api.quote(configuration);
        const quoteDraft = { createdAt: new Date().toISOString(), configuration, shareUrl: savedShareUrl, ...result };
      try {
        localStorage.setItem("configurator:quote-draft", JSON.stringify(quoteDraft));
        localStorage.setItem("pergola:quote-draft", JSON.stringify(quoteDraft));
      } catch (_) { /* localStorage może być zablokowany przez ustawienia prywatności */ }
        window.dispatchEvent(new CustomEvent("configurator:quote-request", { detail: quoteDraft }));
        if (state.productType === "bioclimatic-pergola") window.dispatchEvent(new CustomEvent("pergola:quote-request", { detail: quoteDraft }));
        quotePreview.hidden = false;
        quotePreview.innerHTML = `<small>Wycena demonstracyjna · ${result.quoteId}</small><strong>${result.quote.gross.toLocaleString("pl-PL")} ${result.quote.currency}</strong><small>brutto · wymaga weryfikacji technicznej</small>`;
        inquiryLabel.textContent = "Konfiguracja gotowa do wyceny ✓";
        setNotice("Wycena i publiczny BOM zostały wygenerowane na backendzie.", "valid");
      } catch (error) {
        console.error("Quote request failed", error);
        inquiryLabel.textContent = "Nie udało się przygotować wyceny";
        setNotice("Wycena wymaga działającego API i poprawnej konfiguracji.", "error");
      }
      clearTimeout(inquiryResetTimer);
      inquiryResetTimer = setTimeout(() => { inquiryLabel.textContent = defaultText; }, 2600);
    });
  }

  /* ---------- Skopiuj link do projektu ---------- */
  const copyBtn = document.getElementById("pergolaCopyLink");
  const copyLabel = document.getElementById("pergolaCopyLinkLabel");
  if (copyBtn && copyLabel) {
    const defaultLabel = copyLabel.textContent;
    let resetTimer = 0;
    const flash = (text, ok) => {
      copyLabel.textContent = text;
      copyBtn.classList.toggle("is-copied", ok);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        copyLabel.textContent = defaultLabel;
        copyBtn.classList.remove("is-copied");
      }, 1800);
    };
    copyBtn.addEventListener("click", async () => {
      try {
        if (!savedShareUrl) await saveProject();
        const link = savedShareUrl;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(link);
        } else {
          const ta = document.createElement("textarea");
          ta.value = link;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        flash("Skopiowano link ✓", true);
      } catch (error) {
        console.error("Share link failed", error);
        flash("Zapis niedostępny", false);
      }
    });
  }

  syncProductUi();
  updateSummary();
  setNotice(catalogSource === "api" ? "Definicje produktów pobrane z API." : "Publiczna definicja demo · API nie jest skonfigurowane.", catalogSource === "api" ? "valid" : "neutral");
  scheduleValidation();
  queueMicrotask(emitConfigurationChange);
  })();
}
