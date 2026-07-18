import { createPergolaCanvas } from "./pergola-canvas.js";
import {
  createAnnotatedReferenceScreenshot,
  createReferenceSceneDocument,
  normaliseReferenceAdjustment,
  referenceFileStem,
} from "./core/reference-scene-document.js";

const OBJECT_LABELS = {
  CarportTrapezoidalSheet: "Blacha trapezowa",
  CarportAntiCondensationLayer: "Warstwa antykondensacyjna",
  WindowScreenInReveal: "Komplet screenu we wnęce",
  WindowScreenCassette: "Kaseta screenu",
  WindowScreenGuide: "Prowadnica screenu",
  WindowScreenFabric: "Tkanina screenu",
  WindowScreenBottomBar: "Belka dolna screenu",
  RollerShutterInReveal: "Komplet rolety we wnęce",
  RollerShutterBox: "Skrzynka rolety",
  RollerShutterGuide: "Prowadnica rolety",
  RollerShutterSlatsBatched: "Pancerz rolety",
  IntegratedMosquitoNet: "Moskitiera zintegrowana",
  WindowFrameTop: "Rama okna · góra",
  WindowFrameBottom: "Rama okna · dół",
  WindowFrameLeft: "Rama okna · lewa",
  WindowFrameRight: "Rama okna · prawa",
  WindowFrameMullion: "Słupek ramy okna",
  WindowGlass: "Szyba",
  WindowSill: "Parapet",
  FacadeBelowWindows: "Ściana pod oknem",
  FacadeAboveWindows: "Ściana nad oknem",
  FacadeLeftEdge: "Ściana · lewa krawędź",
  FacadeRightEdge: "Ściana · prawa krawędź",
  FacadeWindowPier: "Ściana między oknami",
  TechnicalWall: "Ściana techniczna",
  AwningCassette: "Kaseta markizy",
  AwningFabric: "Tkanina markizy",
  AwningFrontBar: "Belka frontowa markizy",
  AwningFoldingArm: "Ramię markizy",
  AwningLED: "LED markizy",
  AwningWeatherSensor: "Czujnik pogodowy",
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" })[character]);

const humanise = (name) => OBJECT_LABELS[name] || String(name)
  .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
  .replaceAll("_", " ");

const objectLabel = (object) => `${humanise(object.name)} · ${object.occurrence}${object.profileId ? ` · ${object.profileId}` : ""}`;

const axisControl = (group, axis, label, min, max, step, suffix, disabled) => `<label class="admin-reference-axis">
  <span>${label}</span>
  <input type="range" data-reference-transform="${group}.${axis}" min="${min}" max="${max}" step="${step}" aria-label="${label} · suwak ${suffix}" ${disabled ? "disabled" : ""} />
  <input type="number" data-reference-transform="${group}.${axis}" min="${min}" max="${max}" step="${step}" aria-label="${label} · wartość ${suffix}" ${disabled ? "disabled" : ""} />
  <small>${suffix}</small>
</label>`;

const downloadDataUrl = (dataUrl, fileName) => {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = fileName;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const downloadJson = (value, fileName) => {
  const url = URL.createObjectURL(new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export function createReferenceSceneEditor({ host, products, tenantSlug, admin, canEdit, buildPreviewParams, onMessage }) {
  let activeProductIndex = 0;
  let activeObjectId = null;
  let preview = null;
  let objects = [];
  let pointerStart = null;
  const productStates = new Map();
  const listeners = new AbortController();

  const product = () => products[activeProductIndex];
  const selectedObject = () => objects.find((object) => object.id === activeObjectId) || null;
  const storeActiveState = () => {
    if (preview && product()) productStates.set(product().definition.productType, preview.getReferenceSceneState());
  };

  const buildDocument = () => createReferenceSceneDocument({
    tenantSlug,
    product: product(),
    admin,
    sceneState: preview.getReferenceSceneState(),
  });

  const syncInspector = () => {
    if (!preview || !activeObjectId) return;
    const adjustment = normaliseReferenceAdjustment(preview.getReferenceObjectAdjustment(activeObjectId));
    for (const [group, values] of Object.entries(adjustment)) {
      for (const axis of ["x", "y", "z"]) {
        host.querySelectorAll(`[data-reference-transform="${group}.${axis}"]`).forEach((control) => { control.value = values[axis]; });
      }
    }
    const selected = selectedObject();
    const label = host.querySelector("[data-reference-selected-label]");
    if (label) label.textContent = selected ? objectLabel(selected) : "Wybierz element";
    const select = host.querySelector("[data-reference-object]");
    if (select) select.value = activeObjectId;
  };

  const selectObject = (id) => {
    if (!objects.some((object) => object.id === id)) return;
    activeObjectId = id;
    preview.selectReferenceObject(id);
    syncInspector();
  };

  const render = () => {
    preview?.destroy();
    preview = null;
    const activeProduct = product();
    if (!activeProduct) {
      host.innerHTML = "<p>Brak produktów do edycji.</p>";
      return;
    }
    const disabled = !canEdit;
    host.innerHTML = `<div class="admin-reference-editor">
      <nav class="admin-reference-tabs" aria-label="Produkt referencyjny">${products.map((item, index) => `<button type="button" data-reference-product="${index}" aria-pressed="${index === activeProductIndex}">${escapeHtml(item.definition.name)}</button>`).join("")}</nav>
      <div class="admin-reference-workspace">
        <section class="admin-reference-stage-panel">
          <header><div><span>Scena robocza</span><strong>${escapeHtml(activeProduct.definition.name)}</strong></div><b>Kliknij element lub wybierz go z listy</b></header>
          <div class="admin-reference-stage" id="adminReferenceCanvas"></div>
          <div class="admin-reference-axis-legend"><span class="is-x">X</span><span class="is-y">Y</span><span class="is-z">Z</span><small>Jednostka przesunięcia: metr</small></div>
          <nav class="admin-reference-views" aria-label="Widoki kamery">
            <button type="button" data-reference-view="front">Przód</button><button type="button" data-reference-view="back">Tył</button><button type="button" data-reference-view="left">Lewo</button><button type="button" data-reference-view="right">Prawo</button><button type="button" data-reference-view="top">Góra</button><button type="button" data-reference-view="reset">Perspektywa</button>
          </nav>
        </section>
        <section class="admin-reference-inspector">
          <div class="admin-reference-inspector__intro"><span>Element sceny</span><strong data-reference-selected-label>Wybierz element</strong><p>Pomarańczowa ramka i osie trafiają do zrzutu, dlatego dokładnie wskazują, którego elementu dotyczy korekta.</p></div>
          <label class="admin-reference-object-select">Lista elementów<select data-reference-object size="10"></select></label>
          <fieldset ${disabled ? "disabled" : ""}><legend>Przesunięcie względem pozycji bazowej</legend>
            ${axisControl("positionM", "x", "X", -2.5, 2.5, 0.01, "m", disabled)}${axisControl("positionM", "y", "Y", -2.5, 2.5, 0.01, "m", disabled)}${axisControl("positionM", "z", "Z", -2.5, 2.5, 0.01, "m", disabled)}
          </fieldset>
          <fieldset ${disabled ? "disabled" : ""}><legend>Obrót względem geometrii bazowej</legend>
            ${axisControl("rotationDeg", "x", "X", -180, 180, 1, "°", disabled)}${axisControl("rotationDeg", "y", "Y", -180, 180, 1, "°", disabled)}${axisControl("rotationDeg", "z", "Z", -180, 180, 1, "°", disabled)}
          </fieldset>
          <fieldset ${disabled ? "disabled" : ""}><legend>Skala elementu</legend>
            ${axisControl("scale", "x", "X", 0.1, 3, 0.01, "×", disabled)}${axisControl("scale", "y", "Y", 0.1, 3, 0.01, "×", disabled)}${axisControl("scale", "z", "Z", 0.1, 3, 0.01, "×", disabled)}
          </fieldset>
          <label class="admin-reference-guides"><input type="checkbox" data-reference-guides checked /> Pokaż zaznaczenie i osie w PNG</label>
          <div class="admin-reference-reset"><button type="button" data-reference-reset="object" ${disabled ? "disabled" : ""}>Resetuj element</button><button type="button" data-reference-reset="scene" ${disabled ? "disabled" : ""}>Resetuj całą scenę</button></div>
          <div class="admin-reference-export"><button class="admin-action" type="button" data-reference-export="png">Pobierz oznaczony PNG</button><button class="admin-action admin-action--secondary" type="button" data-reference-export="json">Pobierz dane JSON</button></div>
          <p class="admin-reference-note">Pliki powstają lokalnie w przeglądarce. Panel nie zapisuje ich na serwerze ani w systemie plików instancji. Do zgłoszenia dołącz oba pliki.</p>
        </section>
      </div>
    </div>`;

    preview = createPergolaCanvas(host.querySelector("#adminReferenceCanvas"), buildPreviewParams(activeProduct.definition));
    preview.setSpinPaused(true);
    preview.setView("reset");
    objects = preview.listReferenceObjects();
    const previousState = productStates.get(activeProduct.definition.productType);
    if (previousState) preview.applyReferenceSceneState(previousState.objects);
    const options = objects.map((object) => `<option value="${object.id}">${escapeHtml(objectLabel(object))}</option>`).join("");
    host.querySelector("[data-reference-object]").innerHTML = options;
    const priority = ["WindowScreenCassette", "RollerShutterBox", "CarportTrapezoidalSheet", "AwningCassette", "FrameBeam", "StructuralPost"];
    activeObjectId = previousState?.selectedObjectId && objects.some((object) => object.id === previousState.selectedObjectId)
      ? previousState.selectedObjectId
      : (objects.find((object) => priority.includes(object.name)) || objects[0])?.id || null;
    if (activeObjectId) selectObject(activeObjectId);
    const rendererCanvas = preview.rendererCanvas;
    rendererCanvas.addEventListener("pointerdown", (event) => { pointerStart = { x: event.clientX, y: event.clientY }; });
    rendererCanvas.addEventListener("pointerup", (event) => {
      const start = pointerStart;
      pointerStart = null;
      if (!start || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 6) return;
      const picked = preview.pickReferenceObject(event.clientX, event.clientY);
      if (picked) selectObject(picked.id);
    });
  };

  host.addEventListener("click", async (event) => {
    const productButton = event.target.closest("[data-reference-product]");
    if (productButton) {
      storeActiveState();
      activeProductIndex = Number(productButton.dataset.referenceProduct);
      activeObjectId = null;
      render();
      return;
    }
    const viewButton = event.target.closest("[data-reference-view]");
    if (viewButton) {
      preview?.setView(viewButton.dataset.referenceView);
      return;
    }
    const resetButton = event.target.closest("[data-reference-reset]");
    if (resetButton && canEdit) {
      if (resetButton.dataset.referenceReset === "scene") preview.resetReferenceScene();
      else if (activeObjectId) preview.resetReferenceObject(activeObjectId);
      syncInspector();
      onMessage?.(resetButton.dataset.referenceReset === "scene" ? "Scena referencyjna została wyzerowana." : "Element wrócił do pozycji bazowej.");
      return;
    }
    const exportButton = event.target.closest("[data-reference-export]");
    if (!exportButton || !preview) return;
    exportButton.disabled = true;
    try {
      const document = buildDocument();
      const stem = referenceFileStem(document);
      if (exportButton.dataset.referenceExport === "json") {
        downloadJson(document, `${stem}.json`);
      } else {
        const object = selectedObject();
        const png = await createAnnotatedReferenceScreenshot(preview.snapshot(), {
          tenantSlug: document.tenantSlug,
          productName: document.productName,
          productType: document.productType,
          productVersionNumber: document.productVersionNumber,
          createdAt: document.createdAt,
          objectLabel: object ? objectLabel(object) : null,
          adjustment: activeObjectId ? preview.getReferenceObjectAdjustment(activeObjectId) : null,
        });
        downloadDataUrl(png, `${stem}.png`);
      }
      onMessage?.("Plik referencyjny został przygotowany do pobrania.");
    } catch (error) {
      console.error(error);
      onMessage?.("Nie udało się przygotować pliku referencyjnego.");
    } finally {
      exportButton.disabled = false;
    }
  }, { signal: listeners.signal });

  host.addEventListener("change", (event) => {
    const objectSelect = event.target.closest("[data-reference-object]");
    if (objectSelect) {
      selectObject(objectSelect.value);
      return;
    }
    const guides = event.target.closest("[data-reference-guides]");
    if (guides) preview?.setReferenceGuidesVisible(guides.checked);
  }, { signal: listeners.signal });

  host.addEventListener("input", (event) => {
    const control = event.target.closest("[data-reference-transform]");
    if (!control || !activeObjectId || !canEdit) return;
    const value = Number(control.value);
    if (!Number.isFinite(value)) return;
    const [group, axis] = control.dataset.referenceTransform.split(".");
    const adjustment = normaliseReferenceAdjustment(preview.getReferenceObjectAdjustment(activeObjectId));
    adjustment[group][axis] = value;
    preview.setReferenceObjectAdjustment(activeObjectId, adjustment);
    host.querySelectorAll(`[data-reference-transform="${group}.${axis}"]`).forEach((item) => {
      if (item !== control) item.value = value;
    });
  }, { signal: listeners.signal });

  render();
  return {
    destroy() {
      storeActiveState();
      listeners.abort();
      preview?.destroy();
      preview = null;
      host.innerHTML = "";
    },
  };
}
