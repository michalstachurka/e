const clone = (value) => structuredClone(value);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const defaultScene = () => ({
  photoAssetId: null,
  photoTransform: { crop: { x: 0, y: 0, width: 1, height: 1 }, offsetX: 0, offsetY: 0, scale: 1, rotationDeg: 0, brightness: 1, contrast: 1 },
  modelTransform: { position: { x: 0, y: 0, z: 0 }, rotationDeg: { x: 0, y: 0, z: 0 }, scale: 1 },
  camera: { method: "MANUAL_ASSISTED", horizonY: 0.5, groundLine: null, referenceLine: null, referenceLengthMm: null, groundPlane: [], facadePlane: [], perspectiveLines: [], mountPoint: null, fovDeg: 38, helpersVisible: false },
  lighting: { azimuthDeg: 35, elevationDeg: 48, shadowSoftness: 0.65, shadowIntensity: 0.45, modelBrightness: 1, colorTemperatureK: 6500 },
  foregroundMaskAssetId: null,
});

const fileBase64 = async (file) => {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  return btoa(binary);
};

const range = (id, label, min, max, step, value, suffix = "") => `<label class="photo-tool__range"><span>${label}<output data-output-for="${id}">${value}${suffix}</output></span><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" /></label>`;

function drawPhoto(ctx, image, transform, width, height) {
  if (!image?.complete || !image.naturalWidth) return;
  const cover = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const scale = cover * transform.scale;
  const crop = transform.crop;
  ctx.save();
  ctx.beginPath();
  ctx.rect(crop.x * width, crop.y * height, crop.width * width, crop.height * height);
  ctx.clip();
  ctx.filter = `brightness(${transform.brightness}) contrast(${transform.contrast})`;
  ctx.translate(width * (0.5 + transform.offsetX), height * (0.5 + transform.offsetY));
  ctx.rotate((transform.rotationDeg * Math.PI) / 180);
  ctx.scale(scale, scale);
  ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
  ctx.restore();
}

export function createPhotoProjectTools(options) {
  const {
    mount, publicHost, advisorHost, canvas, api, advisor, capabilities,
    ensureProject, saveDocument, getProjectContext, setNotice, onCalculate, onExport,
  } = options;
  let scene = clone(options.initialScene || defaultScene());
  let assets = [...(options.initialAssets || [])];
  let productType = options.productType;
  let photoImage = null;
  let maskImage = null;
  let maskEditing = false;
  let brushMode = "add";
  let brushSize = 36;
  let drawing = false;
  let clickTool = null;
  let clickPoints = [];
  const undoStack = [];
  const redoStack = [];

  mount.style.position = "relative";
  const background = document.createElement("canvas");
  background.className = "photo-stage-layer photo-stage-layer--background";
  background.setAttribute("aria-hidden", "true");
  mount.insertBefore(background, mount.firstChild);
  const foreground = document.createElement("canvas");
  foreground.className = "photo-stage-layer photo-stage-layer--foreground";
  foreground.setAttribute("aria-label", "Maska pierwszego planu");
  mount.appendChild(foreground);
  const guides = document.createElement("canvas");
  guides.className = "photo-stage-layer photo-stage-layer--guides";
  guides.setAttribute("aria-hidden", "true");
  mount.appendChild(guides);
  const maskBitmap = document.createElement("canvas");

  const loadAssetImage = async (assetId) => {
    if (!assetId) return null;
    const asset = assets.find((item) => item.id === assetId);
    if (!asset) return null;
    const image = new Image();
    image.decoding = "async";
    image.src = asset.contentUrl.replace(/\/preview$/, "/main");
    await image.decode();
    return image;
  };

  const resizeLayers = () => {
    const rect = mount.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    [background, foreground, guides].forEach((layer) => {
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));
      if (layer.width !== width || layer.height !== height) { layer.width = width; layer.height = height; }
    });
    if (!maskBitmap.width || !maskBitmap.height) { maskBitmap.width = background.width; maskBitmap.height = background.height; }
    renderLayers();
  };

  const renderGuides = () => {
    const ctx = guides.getContext("2d");
    ctx.clearRect(0, 0, guides.width, guides.height);
    if (!scene.camera.helpersVisible && !clickTool) return;
    const line = (points, color = "#bd4a26") => {
      if (!points?.length) return;
      ctx.beginPath();
      points.forEach((point, index) => index ? ctx.lineTo(point.x * guides.width, point.y * guides.height) : ctx.moveTo(point.x * guides.width, point.y * guides.height));
      ctx.strokeStyle = color; ctx.lineWidth = 2 * (window.devicePixelRatio || 1); ctx.setLineDash([8, 6]); ctx.stroke();
    };
    line(scene.camera.groundLine, "#b74926");
    line(scene.camera.referenceLine, "#1a6b66");
    line([{ x: 0, y: scene.camera.horizonY }, { x: 1, y: scene.camera.horizonY }], "#806335");
    line(scene.camera.groundPlane.length ? [...scene.camera.groundPlane, scene.camera.groundPlane[0]] : null, "#b74926");
    line(scene.camera.facadePlane.length ? [...scene.camera.facadePlane, scene.camera.facadePlane[0]] : null, "#315d7d");
    scene.camera.perspectiveLines.forEach((item) => line(item, "#806335"));
    if (scene.camera.mountPoint) {
      ctx.beginPath(); ctx.arc(scene.camera.mountPoint.x * guides.width, scene.camera.mountPoint.y * guides.height, 7, 0, Math.PI * 2); ctx.fillStyle = "#b74926"; ctx.fill();
    }
    if (clickPoints.length) line(clickPoints, "#e9a05e");
  };

  const renderForeground = () => {
    const ctx = foreground.getContext("2d");
    ctx.clearRect(0, 0, foreground.width, foreground.height);
    if (!photoImage || (!maskImage && !maskBitmap.width)) return;
    const sourceMask = maskEditing || !maskImage ? maskBitmap : maskImage;
    ctx.save();
    drawPhoto(ctx, photoImage, scene.photoTransform, foreground.width, foreground.height);
    ctx.globalCompositeOperation = "destination-in";
    if (sourceMask instanceof HTMLCanvasElement) ctx.drawImage(sourceMask, 0, 0, foreground.width, foreground.height);
    else ctx.drawImage(sourceMask, 0, 0, foreground.width, foreground.height);
    ctx.restore();
    if (maskEditing) {
      ctx.save(); ctx.globalCompositeOperation = "source-atop"; ctx.fillStyle = "rgba(183,73,38,.38)"; ctx.fillRect(0, 0, foreground.width, foreground.height); ctx.restore();
    }
  };

  function renderLayers() {
    const ctx = background.getContext("2d");
    ctx.clearRect(0, 0, background.width, background.height);
    if (photoImage) drawPhoto(ctx, photoImage, scene.photoTransform, background.width, background.height);
    mount.classList.toggle("has-property-photo", Boolean(photoImage));
    renderForeground();
    renderGuides();
  }

  canvas.setCompositor?.({
    drawBackground(ctx, width, height) { if (photoImage) drawPhoto(ctx, photoImage, scene.photoTransform, width, height); },
    drawForeground(ctx, width, height) {
      if (!photoImage || (!maskImage && !maskBitmap.width)) return;
      const staging = document.createElement("canvas"); staging.width = width; staging.height = height;
      const stagingCtx = staging.getContext("2d"); drawPhoto(stagingCtx, photoImage, scene.photoTransform, width, height);
      stagingCtx.globalCompositeOperation = "destination-in";
      stagingCtx.drawImage(maskEditing || !maskImage ? maskBitmap : maskImage, 0, 0, width, height);
      ctx.drawImage(staging, 0, 0);
    },
  });

  const applyScene = () => {
    canvas.setProjectView?.(scene);
    renderLayers();
  };

  const commit = async (message = "Dopasowanie zapisane w projekcie.") => {
    try {
      await saveDocument(clone(scene));
      setNotice(message, "valid");
    } catch (error) {
      setNotice(error?.message === "version_conflict" ? "Projekt ma nowszą wersję. Odśwież widok przed zapisem." : "Nie udało się zapisać zmian projektu.", "error");
      throw error;
    }
  };

  const renderPublicTools = () => {
    const relevant = productType === "bioclimatic-pergola" || productType === "veranda";
    publicHost.hidden = !relevant || !capabilities.features.CUSTOMER_PHOTO;
    if (publicHost.hidden) return;
    publicHost.innerHTML = `<header class="photo-tool__head"><div><span>Zdjęcie nieruchomości</span><strong>Osadź konstrukcję w kadrze</strong></div><small>prywatny zasób · bez EXIF</small></header>
      <div class="photo-tool__upload"><label><input id="propertyPhotoInput" type="file" accept="image/jpeg,image/png,image/webp" /><span>${scene.photoAssetId ? "Zmień zdjęcie" : "Dodaj zdjęcie domu lub tarasu"}</span></label><progress id="propertyPhotoProgress" max="100" value="0" hidden></progress><button type="button" id="propertyPhotoDelete" ${scene.photoAssetId ? "" : "hidden"}>Usuń zdjęcie</button></div>
      <p class="photo-tool__privacy">Zdjęcie nie jest publicznym adresem. Dostęp wymaga tokenu projektu albo sesji doradcy.</p>
      <div class="photo-tool__controls" ${scene.photoAssetId && capabilities.features.BASIC_PHOTO_FIT ? "" : "hidden"}>
        <details open><summary>Kadr i ekspozycja</summary>
          ${range("photoScale", "Kadrowanie / zoom", .5, 3, .01, scene.photoTransform.scale)}
          ${range("photoOffsetX", "Przesunięcie poziome", -1, 1, .01, scene.photoTransform.offsetX)}
          ${range("photoOffsetY", "Przesunięcie pionowe", -1, 1, .01, scene.photoTransform.offsetY)}
          ${range("photoRotation", "Obrót zdjęcia", -30, 30, .1, scene.photoTransform.rotationDeg, "°")}
          ${range("photoBrightness", "Jasność", .5, 1.5, .01, scene.photoTransform.brightness)}
          ${range("photoContrast", "Kontrast", .5, 1.5, .01, scene.photoTransform.contrast)}
        </details>
        <details open><summary>Dopasowanie konstrukcji</summary>
          ${range("modelX", "Poziom", -10, 10, .01, scene.modelTransform.position.x)}
          ${range("modelY", "Wysokość", -5, 5, .01, scene.modelTransform.position.y)}
          ${range("modelZ", "Głębokość", -10, 10, .01, scene.modelTransform.position.z)}
          ${range("modelRotationY", "Obrót", -180, 180, .5, scene.modelTransform.rotationDeg.y, "°")}
          ${range("modelScale", "Skala ręczna", .1, 5, .01, scene.modelTransform.scale)}
          <div class="photo-tool__actions"><button type="button" data-click-tool="groundLine">Wskaż linię podłoża</button><button type="button" data-click-tool="referenceLine">Wskaż wymiar</button></div>
          <label class="photo-tool__number">Rzeczywista długość odcinka <input id="referenceLength" type="number" min="1" max="1000000" step="1" value="${scene.camera.referenceLengthMm || ""}" placeholder="mm" /></label>
          <p class="photo-tool__assist">To wspomagane ustawienie ręczne. Jedna linia i wymiar nie wyznaczają pełnej perspektywy — nadal możesz poprawić skalę, obrót i położenie.</p>
        </details>
        <button class="photo-tool__save" type="button" id="savePhotoFit">Zapisz dopasowanie</button>
      </div>`;
    bindPublicTools();
  };

  const renderAdvisorTools = () => {
    advisorHost.hidden = !advisor;
    if (!advisor) return;
    advisorHost.innerHTML = `<header class="photo-tool__head photo-tool__head--advisor"><div><span>Tryb doradcy</span><strong>Kalibracja i przygotowanie projektu</strong></div><button type="button" id="toggleWorkingView" aria-pressed="${scene.camera.helpersVisible}">${scene.camera.helpersVisible ? "Widok roboczy" : "Widok finalny"}</button></header>
      <div class="advisor-tool-grid">
        <details ${capabilities.features.ADVANCED_CALIBRATION ? "open" : "hidden"}><summary>Kalibracja kamery</summary>
          ${range("advisorHorizon", "Horyzont", 0, 1, .005, scene.camera.horizonY)}
          ${range("advisorFov", "Pole widzenia FOV", 15, 100, .1, scene.camera.fovDeg, "°")}
          <div class="photo-tool__actions"><button type="button" data-click-tool="groundPlane">Płaszczyzna podłoża</button><button type="button" data-click-tool="facadePlane">Płaszczyzna elewacji</button><button type="button" data-click-tool="perspectiveLine">Linia perspektywy</button><button type="button" data-click-tool="mountPoint">Punkt montażu</button></div>
          <button type="button" id="resetCalibration">Resetuj kalibrację</button>
        </details>
        <details ${capabilities.features.ADVANCED_CALIBRATION ? "open" : "hidden"}><summary>Światło i cień</summary>
          ${range("lightAzimuth", "Kierunek światła", -180, 180, 1, scene.lighting.azimuthDeg, "°")}
          ${range("lightElevation", "Wysokość światła", 5, 89, 1, scene.lighting.elevationDeg, "°")}
          ${range("shadowSoftness", "Miękkość cienia", 0, 1, .01, scene.lighting.shadowSoftness)}
          ${range("shadowIntensity", "Intensywność cienia", 0, 1, .01, scene.lighting.shadowIntensity)}
          ${range("modelBrightness", "Jasność modelu", .5, 1.5, .01, scene.lighting.modelBrightness)}
          ${range("colorTemperature", "Temperatura barwowa", 2500, 10000, 50, scene.lighting.colorTemperatureK, " K")}
        </details>
        <details ${capabilities.features.OBSTACLE_MASKING && scene.photoAssetId ? "" : "hidden"}><summary>Maska pierwszego planu</summary>
          <div class="photo-tool__actions"><button type="button" id="maskToggle">${maskEditing ? "Zakończ malowanie" : "Maluj maskę"}</button><button type="button" data-mask-mode="add" aria-pressed="${brushMode === "add"}">Dodaj</button><button type="button" data-mask-mode="erase" aria-pressed="${brushMode === "erase"}">Usuń</button></div>
          ${range("maskBrushSize", "Rozmiar pędzla", 4, 160, 1, brushSize, " px")}
          <div class="photo-tool__actions"><button type="button" id="maskUndo">Cofnij</button><button type="button" id="maskRedo">Ponów</button><button type="button" id="maskSave">Zapisz maskę</button></div>
        </details>
        <details ${capabilities.features.INTERNAL_CALCULATION ? "open" : "hidden"}><summary>Kalkulacja demo</summary>
          <div class="advisor-calculation-form"><label>Rabat %<input id="advisorDiscount" type="number" min="0" max="${capabilities.maxDiscountPercent}" step=".1" value="0" /></label><label>Transport netto<input id="advisorTransport" type="number" min="0" step="1" value="0" /></label><label>Montaż netto<input id="advisorAssembly" type="number" min="0" step="1" value="0" /></label></div>
          <button type="button" id="advisorCalculate">Przelicz na backendzie</button><div id="advisorCalculationResult" class="advisor-calculation-result" hidden></div>
        </details>
        <details><summary>Historia projektu</summary><p class="photo-tool__assist">Każdy zapis klienta lub doradcy tworzy kolejną, audytowalną wersję wspólnego projektu.</p><button type="button" id="refreshProjectHistory">Pokaż historię wersji</button><ol id="projectVersionHistory" class="project-version-history"></ol></details>
        <details open><summary>Eksport projektu</summary><div class="photo-tool__actions"><button type="button" id="exportProjectGlb" ${capabilities.features.GLB_EXPORT ? "" : "disabled"}>Pobierz GLB</button><button type="button" id="exportProjectJson" ${capabilities.features.JSON_EXPORT ? "" : "disabled"}>Pobierz project.json</button></div><p class="photo-tool__assist">GLB zawiera wyłącznie konstrukcję. Zdjęcie, maska i dane kalkulacji nie są osadzane.</p></details>
      </div>
      <button class="photo-tool__save" type="button" id="saveAdvisorProject">Zapisz nową wersję projektu</button>`;
    bindAdvisorTools();
  };

  const bindRange = (id, getter, setter, suffix = "") => {
    const input = document.getElementById(id); if (!input) return;
    input.addEventListener("input", () => {
      setter(Number(input.value));
      const output = document.querySelector(`[data-output-for="${id}"]`); if (output) output.textContent = `${getter()}${suffix}`;
      applyScene();
    });
  };

  const bindClickTools = (root) => root.querySelectorAll("[data-click-tool]").forEach((button) => button.addEventListener("click", () => {
    clickTool = button.dataset.clickTool; clickPoints = []; scene.camera.helpersVisible = true; guides.style.pointerEvents = "auto"; renderGuides();
    setNotice(clickTool === "mountPoint" ? "Wskaż punkt montażu w kadrze." : "Wskaż kolejne punkty na zdjęciu.");
  }));

  const bindPublicTools = () => {
    const input = document.getElementById("propertyPhotoInput");
    input?.addEventListener("change", async () => {
      const file = input.files?.[0]; if (!file) return;
      if (file.size > capabilities.limits.maxPhotoBytes) { setNotice("Plik przekracza limit organizacji.", "error"); return; }
      const progress = document.getElementById("propertyPhotoProgress"); progress.hidden = false; progress.value = 1;
      try {
        await ensureProject();
        const context = getProjectContext();
        const response = await api.uploadProjectAsset(context.shareId, { fileName: file.name, contentBase64: await fileBase64(file), kind: "CUSTOMER_PHOTO" }, advisor, (value) => { progress.value = value; });
        assets = assets.filter((asset) => asset.kind !== "CUSTOMER_PHOTO"); assets.push(response.asset);
        scene.photoAssetId = response.asset.id; photoImage = await loadAssetImage(scene.photoAssetId);
        await commit("Zdjęcie przetworzone, pozbawione metadanych i zapisane prywatnie.");
        renderAll();
      } catch (error) { setNotice(error.payload?.message || "Przesłanie zdjęcia nie powiodło się. Możesz spróbować ponownie.", "error"); }
      finally { progress.hidden = true; }
    });
    document.getElementById("propertyPhotoDelete")?.addEventListener("click", async () => {
      const context = getProjectContext();
      if (scene.photoAssetId && context.shareId) await api.deleteProjectAsset(context.shareId, scene.photoAssetId, advisor);
      assets = assets.filter((asset) => asset.id !== scene.photoAssetId); scene.photoAssetId = null; scene.foregroundMaskAssetId = null; photoImage = null; maskImage = null;
      await commit("Zdjęcie i zależne warstwy zostały usunięte."); renderAll();
    });
    bindRange("photoScale", () => scene.photoTransform.scale, (v) => { scene.photoTransform.scale = v; });
    bindRange("photoOffsetX", () => scene.photoTransform.offsetX, (v) => { scene.photoTransform.offsetX = v; });
    bindRange("photoOffsetY", () => scene.photoTransform.offsetY, (v) => { scene.photoTransform.offsetY = v; });
    bindRange("photoRotation", () => scene.photoTransform.rotationDeg, (v) => { scene.photoTransform.rotationDeg = v; }, "°");
    bindRange("photoBrightness", () => scene.photoTransform.brightness, (v) => { scene.photoTransform.brightness = v; });
    bindRange("photoContrast", () => scene.photoTransform.contrast, (v) => { scene.photoTransform.contrast = v; });
    bindRange("modelX", () => scene.modelTransform.position.x, (v) => { scene.modelTransform.position.x = v; });
    bindRange("modelY", () => scene.modelTransform.position.y, (v) => { scene.modelTransform.position.y = v; });
    bindRange("modelZ", () => scene.modelTransform.position.z, (v) => { scene.modelTransform.position.z = v; });
    bindRange("modelRotationY", () => scene.modelTransform.rotationDeg.y, (v) => { scene.modelTransform.rotationDeg.y = v; }, "°");
    bindRange("modelScale", () => scene.modelTransform.scale, (v) => { scene.modelTransform.scale = v; });
    document.getElementById("referenceLength")?.addEventListener("input", (event) => { scene.camera.referenceLengthMm = event.target.value ? Number(event.target.value) : null; });
    document.getElementById("savePhotoFit")?.addEventListener("click", () => commit());
    bindClickTools(publicHost);
  };

  const bindAdvisorTools = () => {
    document.getElementById("toggleWorkingView")?.addEventListener("click", () => { scene.camera.helpersVisible = !scene.camera.helpersVisible; renderAll(); });
    bindRange("advisorHorizon", () => scene.camera.horizonY, (v) => { scene.camera.horizonY = v; scene.camera.method = "ADVISOR_PERSPECTIVE"; });
    bindRange("advisorFov", () => scene.camera.fovDeg, (v) => { scene.camera.fovDeg = v; scene.camera.method = "ADVISOR_PERSPECTIVE"; }, "°");
    bindRange("lightAzimuth", () => scene.lighting.azimuthDeg, (v) => { scene.lighting.azimuthDeg = v; }, "°");
    bindRange("lightElevation", () => scene.lighting.elevationDeg, (v) => { scene.lighting.elevationDeg = v; }, "°");
    bindRange("shadowSoftness", () => scene.lighting.shadowSoftness, (v) => { scene.lighting.shadowSoftness = v; });
    bindRange("shadowIntensity", () => scene.lighting.shadowIntensity, (v) => { scene.lighting.shadowIntensity = v; });
    bindRange("modelBrightness", () => scene.lighting.modelBrightness, (v) => { scene.lighting.modelBrightness = v; });
    bindRange("colorTemperature", () => scene.lighting.colorTemperatureK, (v) => { scene.lighting.colorTemperatureK = v; }, " K");
    document.getElementById("resetCalibration")?.addEventListener("click", () => { const fresh = defaultScene(); scene.camera = fresh.camera; scene.modelTransform = fresh.modelTransform; scene.lighting = fresh.lighting; renderAll(); });
    document.getElementById("saveAdvisorProject")?.addEventListener("click", () => commit("Nowa wersja doradcy została zapisana."));
    bindClickTools(advisorHost);
    document.getElementById("maskToggle")?.addEventListener("click", () => { maskEditing = !maskEditing; foreground.style.pointerEvents = maskEditing ? "auto" : "none"; renderAll(); });
    advisorHost.querySelectorAll("[data-mask-mode]").forEach((button) => button.addEventListener("click", () => { brushMode = button.dataset.maskMode; renderAdvisorTools(); }));
    bindRange("maskBrushSize", () => brushSize, (v) => { brushSize = v; }, " px");
    document.getElementById("maskUndo")?.addEventListener("click", () => restoreMask(undoStack, redoStack));
    document.getElementById("maskRedo")?.addEventListener("click", () => restoreMask(redoStack, undoStack));
    document.getElementById("maskSave")?.addEventListener("click", saveMask);
    document.getElementById("advisorCalculate")?.addEventListener("click", async () => {
      const resultHost = document.getElementById("advisorCalculationResult");
      try {
        const result = await onCalculate({ discountPercent: Number(document.getElementById("advisorDiscount").value), transportNet: Number(document.getElementById("advisorTransport").value), assemblyNet: Number(document.getElementById("advisorAssembly").value), additionalItems: [] });
        const value = result.calculation; resultHost.hidden = false; resultHost.innerHTML = `<span>${result.calculationId} · demo</span><strong>${value.saleGross.toLocaleString("pl-PL")} ${value.currency}</strong><small>zakup ${value.purchaseNet.toLocaleString("pl-PL")} · marża ${value.marginPercent}% · rabat ${value.discountPercent}%</small>`;
      } catch (error) { setNotice(error.payload?.error === "discount_limit_exceeded" ? `Maksymalny rabat dla roli: ${error.payload.maxDiscountPercent}%.` : "Kalkulacja nie powiodła się.", "error"); }
    });
    document.getElementById("refreshProjectHistory")?.addEventListener("click", async () => {
      const history = document.getElementById("projectVersionHistory");
      const context = getProjectContext();
      if (!context.shareId) { history.innerHTML = "<li>Zapisz projekt, aby rozpocząć historię.</li>"; return; }
      try {
        const response = await api.projectVersions(context.shareId);
        history.innerHTML = response.versions.map((item) => `<li><strong>Wersja ${item.version}</strong><span>${item.authorKind === "ADVISOR" ? "doradca" : "klient"} · ${new Date(item.createdAt).toLocaleString("pl-PL")}</span></li>`).join("");
      } catch { history.innerHTML = "<li>Nie udało się pobrać historii.</li>"; }
    });
    document.getElementById("exportProjectGlb")?.addEventListener("click", () => onExport("GLB"));
    document.getElementById("exportProjectJson")?.addEventListener("click", () => onExport("JSON"));
  };

  const saveMask = async () => {
    if (!maskBitmap.width) return;
    try {
      await ensureProject(); const context = getProjectContext();
      const contentBase64 = maskBitmap.toDataURL("image/png").split(",")[1];
      const response = await api.uploadProjectAsset(context.shareId, { fileName: "maska-pierwszego-planu.png", contentBase64, kind: "FOREGROUND_MASK" }, true);
      assets = assets.filter((asset) => asset.kind !== "FOREGROUND_MASK"); assets.push(response.asset);
      scene.foregroundMaskAssetId = response.asset.id; maskImage = await loadAssetImage(scene.foregroundMaskAssetId); maskEditing = false; foreground.style.pointerEvents = "none";
      await commit("Maska pierwszego planu została zapisana jako prywatny zasób."); renderAll();
    } catch (error) { setNotice(error.payload?.message || "Nie udało się zapisać maski.", "error"); }
  };

  const pushMaskUndo = () => {
    undoStack.push(maskBitmap.getContext("2d").getImageData(0, 0, maskBitmap.width, maskBitmap.height));
    if (undoStack.length > 30) undoStack.shift(); redoStack.length = 0;
  };
  const restoreMask = (source, target) => {
    const imageData = source.pop(); if (!imageData) return;
    target.push(maskBitmap.getContext("2d").getImageData(0, 0, maskBitmap.width, maskBitmap.height));
    maskBitmap.getContext("2d").putImageData(imageData, 0, 0); renderForeground();
  };
  const drawMaskAt = (event) => {
    if (!maskEditing) return;
    const rect = foreground.getBoundingClientRect(); const x = ((event.clientX - rect.left) / rect.width) * maskBitmap.width; const y = ((event.clientY - rect.top) / rect.height) * maskBitmap.height;
    const ctx = maskBitmap.getContext("2d"); ctx.save(); ctx.globalCompositeOperation = brushMode === "erase" ? "destination-out" : "source-over"; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x, y, brushSize * (window.devicePixelRatio || 1), 0, Math.PI * 2); ctx.fill(); ctx.restore(); renderForeground();
  };
  foreground.addEventListener("pointerdown", (event) => { if (!maskEditing) return; pushMaskUndo(); drawing = true; foreground.setPointerCapture(event.pointerId); drawMaskAt(event); });
  foreground.addEventListener("pointermove", (event) => { if (drawing) drawMaskAt(event); });
  foreground.addEventListener("pointerup", () => { drawing = false; });

  guides.addEventListener("pointerdown", (event) => {
    if (!clickTool) return;
    const rect = guides.getBoundingClientRect(); const point = { x: clamp((event.clientX - rect.left) / rect.width, 0, 1), y: clamp((event.clientY - rect.top) / rect.height, 0, 1) };
    clickPoints.push(point);
    const required = clickTool === "mountPoint" ? 1 : ["groundPlane", "facadePlane"].includes(clickTool) ? 4 : 2;
    if (clickPoints.length >= required) {
      if (clickTool === "groundLine" || clickTool === "referenceLine") scene.camera[clickTool] = clone(clickPoints);
      else if (clickTool === "groundPlane" || clickTool === "facadePlane") { scene.camera[clickTool] = clone(clickPoints); scene.camera.method = "ADVISOR_PERSPECTIVE"; }
      else if (clickTool === "perspectiveLine") { scene.camera.perspectiveLines.push(clone(clickPoints)); scene.camera.method = "ADVISOR_PERSPECTIVE"; }
      else scene.camera.mountPoint = point;
      clickTool = null; clickPoints = []; guides.style.pointerEvents = "none";
    }
    applyScene();
  });

  const renderAll = () => { renderPublicTools(); renderAdvisorTools(); applyScene(); };
  const observer = new ResizeObserver(resizeLayers); observer.observe(mount);

  const hydrateImages = async () => {
    photoImage = await loadAssetImage(scene.photoAssetId).catch(() => null);
    maskImage = await loadAssetImage(scene.foregroundMaskAssetId).catch(() => null);
    if (maskImage) {
      resizeLayers(); const ctx = maskBitmap.getContext("2d"); ctx.clearRect(0, 0, maskBitmap.width, maskBitmap.height); ctx.drawImage(maskImage, 0, 0, maskBitmap.width, maskBitmap.height);
    }
    renderAll();
  };
  hydrateImages();

  return {
    getScene: () => clone(scene),
    setProductType(nextProductType) { productType = nextProductType; renderAll(); },
    async hydrate(nextScene, nextAssets = []) { scene = clone(nextScene || defaultScene()); assets = [...nextAssets]; await hydrateImages(); },
    destroy() { observer.disconnect(); background.remove(); foreground.remove(); guides.remove(); canvas.setCompositor?.(null); },
  };
}
