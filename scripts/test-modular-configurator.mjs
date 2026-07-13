import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFile, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { chromium } from "playwright-core";

const root = process.cwd();
const dist = path.join(root, "dist");
const apiPort = 8787;
const webPort = 49474;
const databasePath = path.join(tmpdir(), `visnex-e2e-${process.pid}.sqlite`);
const resultsDir = path.join(root, "test-results", "modular-configurator");
mkdirSync(resultsDir, { recursive: true });
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png" };

const server = createServer((request, response) => {
  let urlPath = decodeURIComponent(request.url.split("?")[0]);
  if (urlPath.startsWith("/e/")) urlPath = urlPath.slice(3);
  else if (urlPath === "/e") urlPath = "";
  let filePath = path.join(dist, urlPath || "index.html");
  if (!filePath.startsWith(dist)) {
    response.writeHead(403).end();
    return;
  }
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = path.join(filePath, "index.html");
  readFile(filePath, (error, data) => {
    if (error) response.writeHead(404).end("Not found");
    else {
      response.setHeader("Content-Type", mime[path.extname(filePath)] || "application/octet-stream");
      response.end(data);
    }
  });
});

await new Promise((resolve) => server.listen(webPort, "127.0.0.1", resolve));
const tsxCli = path.join(root, "node_modules", "tsx", "dist", "cli.mjs");
const api = spawn(process.execPath, [tsxCli, "apps/api/src/server.ts"], {
  cwd: root,
  windowsHide: true,
  stdio: ["ignore", "pipe", "pipe"],
  env: {
    ...process.env,
    API_HOST: "127.0.0.1",
    API_PORT: String(apiPort),
    DATABASE_PATH: databasePath,
    PUBLIC_APP_URL: `http://127.0.0.1:${webPort}/e/konfigurator.html`,
    CORS_ORIGINS: `http://127.0.0.1:${webPort}`,
    ADMIN_SEED_EMAIL: "admin@example.invalid",
    ADMIN_SEED_PASSWORD: "local-e2e-password",
  },
});
let apiLogs = "";
api.stdout.on("data", (chunk) => { apiLogs += chunk; });
api.stderr.on("data", (chunk) => { apiLogs += chunk; });

async function waitForApi() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${apiPort}/health`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`API did not start.\n${apiLogs}`);
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = chromeCandidates.find(existsSync);
if (!executablePath) throw new Error("Set CHROME_PATH to run browser tests.");

await waitForApi();
const browser = await chromium.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist", "--disable-gpu-sandbox"] });
const results = {};

async function configurePage(context) {
  await context.route("https://ajax.googleapis.com/ajax/libs/model-viewer/**", async (route) => {
    await route.fulfill({ contentType: "text/javascript", body: `customElements.define('model-viewer', class extends HTMLElement { set src(value) { this.setAttribute('src', value); setTimeout(() => this.dispatchEvent(new Event('load')), 20); } get src() { return this.getAttribute('src') || ''; } set iosSrc(value) { if (value) this.setAttribute('ios-src', value); } activateAR() { return Promise.resolve(); } });` });
  });
}

async function runDesktop() {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  await configurePage(context);
  await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin: `http://127.0.0.1:${webPort}` });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (message) => { if (message.type() === "error" && !message.text().includes("Multiple instances of Three.js")) consoleErrors.push(message.text()); });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${webPort}/e/konfigurator.html`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.sunProtectionConfigurator?.getConfiguration);
  const tenantContext = await page.evaluate(() => window.__VISNEX_TENANT_CONTEXT__);
  if (tenantContext?.tenantSlug !== "visnex" || tenantContext?.hostLocked !== false) throw new Error(`Unexpected tenant context: ${JSON.stringify(tenantContext)}`);
  await page.waitForSelector("#pergolaMount canvas");
  await page.waitForFunction(() => document.querySelector("#pergolaMount")?.getAttribute("aria-busy") === "false");
  await page.waitForFunction(() => document.querySelector("#configuratorNotice")?.classList.contains("is-valid"));
  if (await page.locator(".dimension-guide, .profile-specs, .profile-card").count()) throw new Error("Technical profile tooling leaked into the public configurator");

  await page.locator('[data-modules="2"]').click();
  await page.locator('#pergolaScreens [data-side="front"]').click();
  await page.locator('#pergolaDepth').evaluate((input) => { input.value = "3.8"; input.dispatchEvent(new Event("input", { bubbles: true })); });
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().values.moduleWidths.length === 2);
  await page.waitForFunction(() => document.querySelector("#pergolaDepthVal")?.textContent === "3.8");
  await page.locator('[data-view="front"]').click();

  await page.locator('[data-product="veranda"]').click();
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().productType === "veranda");
  await page.locator("#verandaAngle").evaluate((input) => { input.value = "9"; input.dispatchEvent(new Event("input", { bubbles: true })); });
  await page.locator("#verandaLeftWall").selectOption("zip-screen");
  await page.locator("#verandaLeftTriangle").selectOption("solid");
  await page.locator("#verandaLeftScreenSupport").click();
  await page.locator("#verandaRightWall").selectOption("sliding-glass");
  await page.locator('#verandaRafterLeds [data-rafter="0"]').click();
  await page.locator('#verandaRafterLeds [data-rafter="2"]').click();
  await page.locator("#verandaAddLeg").click();
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.roofAngle === 9 && values.leftWall === "zip-screen" && values.leftTriangle === "solid" && values.leftScreenSupport === true
      && values.rafterLeds.join(",") === "0,2" && values.extraLegs.length === 1;
  });
  await page.locator("#verandaControls").screenshot({ path: path.join(resultsDir, "desktop-veranda-controls.png") });
  await page.locator("#pergolaSpin").click();
  await page.locator('[data-view="left"]').click();
  await page.waitForTimeout(350);
  await page.locator(".pergola3d__stage").screenshot({ path: path.join(resultsDir, "desktop-veranda-zip.png") });

  await page.locator("#configuratorSave").click();
  await page.waitForFunction(() => Boolean(window.sunProtectionConfigurator.getShareUrl()));
  const shareUrl = await page.evaluate(() => window.sunProtectionConfigurator.getShareUrl());
  if (!shareUrl.includes("project=") || shareUrl.includes("roofAngle=")) throw new Error(`Unsafe share URL: ${shareUrl}`);
  await page.goto(shareUrl, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.sunProtectionConfigurator?.getConfiguration().productType === "veranda");
  await page.waitForFunction(() => window.__VISNEX_TENANT_CONTEXT__?.source === "query");
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.roofAngle === 9 && values.leftWall === "zip-screen" && values.leftTriangle === "solid" && values.leftScreenSupport === true;
  });

  await page.locator("#pergolaInquiry").click();
  await page.waitForFunction(() => Boolean(localStorage.getItem("configurator:quote-draft")));
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#pergolaExport").click();
  const download = await downloadPromise;
  if (!download.suggestedFilename().endsWith(".pdf")) throw new Error("PDF download was not created");

  await page.locator("#pergolaAR").click();
  await page.waitForFunction(() => document.querySelector("#arModal")?.hidden === false);
  await page.locator("#arModal .ar-modal__x").click();
  await page.waitForFunction(() => document.querySelector("#arModal")?.hidden === true);
  await page.screenshot({ path: path.join(resultsDir, "desktop-veranda.png"), fullPage: false });

  await page.locator('[data-product="carport"]').click();
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().productType === "carport");
  await page.locator('[data-catalog-toggle="ledLinear"]').click();
  await page.locator('[data-catalog-action="add-leg"]').click();
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.ledLinear === true && values.antiCondensationLayer === true && values.extraLegs.length === 1;
  });
  await page.locator('[data-product="window-screen"]').click();
  await page.locator('[data-catalog-select="drive"]').selectOption("solar");
  await page.locator('[data-catalog-range="openingPercent"]').evaluate((input) => { input.value = "45"; input.dispatchEvent(new Event("input", { bubbles: true })); });
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().values.openingPercent === 45);
  await page.locator('[data-product="external-roller-shutter"]').click();
  await page.locator('[data-catalog-toggle="integratedMosquitoNet"]').click();
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().values.integratedMosquitoNet === true);
  await page.locator('[data-product="awning"]').click();
  await page.locator('[data-catalog-toggle="led"]').click();
  await page.locator('[data-catalog-toggle="sunSensor"]').click();
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.led === true && values.sunSensor === true && values.drive === "radio";
  });
  await page.locator(".pergola3d__stage").screenshot({ path: path.join(resultsDir, "desktop-awning.png") });

  results.desktop = { shareUrl, consoleErrors, pageErrors, registeredProducts: await page.evaluate(() => window.sunProtectionConfigurator.getRegisteredProducts()), configuration: await page.evaluate(() => window.sunProtectionConfigurator.getConfiguration()) };
  await context.close();
}

async function runLanding() {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${webPort}/e/`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#root");
  await page.waitForFunction(() => document.body.innerText.includes("visNEX"));
  results.landing = { pageErrors, root: await page.locator("#root").count() === 1 };
  await context.close();
}

async function runTenantBoundary() {
  const context = await browser.newContext({ viewport: { width: 1100, height: 760 } });
  await configurePage(context);
  const page = await context.newPage();
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${webPort}/e/konfigurator.html?tenant=other-company`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.body.dataset.tenantStatus === "unavailable");
  const tenantContext = await page.evaluate(() => window.__VISNEX_TENANT_CONTEXT__);
  if (tenantContext?.tenantSlug !== "other-company" || tenantContext?.source !== "query") throw new Error(`Unexpected shared-host tenant selection: ${JSON.stringify(tenantContext)}`);
  if (await page.locator("#pergolaMount canvas").count()) throw new Error("Fallback catalog leaked into an unavailable tenant");
  results.tenantBoundary = { pageErrors, tenantContext, failClosed: await page.locator(".configurator-tenant-error").count() === 1 };
  await context.close();
}

async function runMobile() {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await configurePage(context);
  const page = await context.newPage();
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${webPort}/e/konfigurator.html`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#pergolaMount canvas");
  await page.locator("#pergolaOptionsToggle").click();
  await page.waitForFunction(() => document.querySelector("#pergolaOptionsToggle")?.getAttribute("aria-expanded") === "true");
  await page.waitForTimeout(900);
  await page.locator("#pergolaPanel").evaluate((panel) => { panel.scrollTop = 0; });
  await page.locator("#pergolaPanelClose").click({ force: true });
  await page.waitForFunction(() => document.querySelector("#pergolaOptionsToggle")?.getAttribute("aria-expanded") === "false");
  await page.locator('[data-product="veranda"]').click();
  await page.waitForFunction(() => window.sunProtectionConfigurator?.getConfiguration().productType === "veranda");
  await page.locator("#pergolaOptionsToggle").click();
  await page.waitForFunction(() => document.querySelector("#pergolaOptionsToggle")?.getAttribute("aria-expanded") === "true");
  await page.locator("#verandaLeftWall").selectOption("zip-screen");
  await page.locator("#verandaLeftTriangle").selectOption("full-glass");
  await page.locator("#verandaLeftScreenSupport").click();
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.leftWall === "zip-screen" && values.leftTriangle === "full-glass" && values.leftScreenSupport === true;
  });
  await page.locator("#verandaLeftScreenSupportWrap").scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(resultsDir, "mobile-veranda-options.png"), fullPage: false });
  await page.locator("#pergolaPanelClose").click({ force: true });
  await page.waitForFunction(() => document.querySelector("#pergolaOptionsToggle")?.getAttribute("aria-expanded") === "false");
  await page.screenshot({ path: path.join(resultsDir, "mobile-veranda.png"), fullPage: false });
  results.mobile = { pageErrors, canvas: await page.locator("#pergolaMount canvas").count() === 1, configuration: await page.evaluate(() => window.sunProtectionConfigurator.getConfiguration()) };
  await context.close();
}

async function runAdmin() {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("status of 401 (Unauthorized)")) consoleErrors.push(message.text());
  });
  await page.goto(`http://127.0.0.1:${webPort}/e/admin.html`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.__VISNEX_TENANT_CONTEXT__?.tenantSlug === "visnex");
  if (await page.locator("#adminTenantLabel").textContent() !== "Tenant · visnex") throw new Error("Admin tenant label is not resolved dynamically");
  if (!(await page.locator("#adminConfiguratorLink").getAttribute("href"))?.includes("tenant=visnex")) throw new Error("Admin configurator link does not preserve tenant context");
  await page.locator('[name="email"]').fill("admin@example.invalid");
  await page.locator('[name="password"]').fill("local-e2e-password");
  await page.locator("#adminLoginForm button").click();
  await page.waitForSelector("#adminWorkspace:not([hidden])");
  await page.waitForSelector("#adminProfileCanvas canvas");
  const profileCards = page.locator("#adminProfileStudio .admin-profile-card");
  if (await profileCards.count() < 3) throw new Error("Admin profile studio does not show all pergola profiles");
  if (await page.locator("#adminProfileStudio .admin-profile-card__drawing").count() !== await profileCards.count()) throw new Error("Every admin profile requires an a/b cross-section drawing");
  await page.waitForFunction(() => {
    const labels = [...document.querySelectorAll(".admin-profile-preview__overlay text")].map((node) => node.textContent);
    return labels.some((value) => value.startsWith("a ·")) && labels.some((value) => value.startsWith("b ·"));
  });
  const firstProfileA = page.locator('[data-studio-profile="0"] [data-studio-profile-value="aMm"]');
  const originalA = Number(await firstProfileA.inputValue());
  await firstProfileA.fill(String(originalA + 5));
  await page.waitForFunction((expected) => document.querySelector('[data-studio-profile="0"] output')?.textContent.startsWith(`${expected} ×`), originalA + 5);
  await page.locator('[data-studio-action="save"]').click();
  await page.waitForFunction(() => document.querySelector("#adminToast")?.classList.contains("is-visible"));
  const profileSaveMessage = await page.locator("#adminToast").textContent();
  if (!profileSaveMessage.includes("Profile zapisane")) throw new Error(`Profile save failed: ${profileSaveMessage}; ${[...pageErrors, ...consoleErrors].join("; ")}`);
  await page.locator("#profileStudioSection").screenshot({ path: path.join(resultsDir, "admin-profile-studio.png") });
  await page.locator('[data-studio-product="1"]').click();
  await page.waitForFunction(() => document.querySelectorAll("#adminProfileStudio .admin-profile-card").length >= 4);
  await page.waitForFunction(() => document.querySelector(".admin-profile-preview__marker")?.textContent === "Słup frontowy");
  if (await page.locator("#adminProfileStudio canvas").count() !== 1) throw new Error("Admin studio must keep exactly one live 3D renderer while switching products");
  await page.locator("#profileStudioSection").screenshot({ path: path.join(resultsDir, "admin-profile-studio-veranda.png") });
  for (const index of [2, 3, 4, 5]) {
    await page.locator(`[data-studio-product="${index}"]`).click();
    await page.waitForFunction(() => document.querySelectorAll("#adminProfileStudio .admin-profile-card").length >= 3);
    await page.waitForFunction(() => Boolean(document.querySelector(".admin-profile-preview__marker")?.textContent));
    if (await page.locator("#adminProfileStudio canvas").count() !== 1) throw new Error(`Admin studio lost its single renderer for product ${index}`);
  }
  await page.locator('[data-product-index="0"] [data-field="description"]').fill("Opis testowy wersji roboczej.");
  await page.locator('[data-product-index="0"] [data-action="save"]').click();
  await page.waitForFunction(() => document.querySelector("#adminToast")?.classList.contains("is-visible"));
  await page.screenshot({ path: path.join(resultsDir, "admin.png"), fullPage: false });
  results.admin = { pageErrors, consoleErrors, products: await page.locator(".admin-product").count(), profileCards: await profileCards.count(), previewCanvases: await page.locator("#adminProfileStudio canvas").count() };
  await context.close();
}

try {
  if (process.env.E2E_ONLY_ADMIN === "1") await runAdmin();
  else {
    await runLanding();
    await runTenantBoundary();
    await runDesktop();
    await runMobile();
    await runAdmin();
  }
  const errors = Object.values(results).flatMap((result) => [...(result.pageErrors || []), ...(result.consoleErrors || [])]);
  console.log(JSON.stringify(results, null, 2));
  if (errors.length) throw new Error(`Browser errors:\n${errors.join("\n")}`);
} finally {
  await browser.close();
  if (api.exitCode === null) {
    const exited = new Promise((resolve) => api.once("exit", resolve));
    api.kill();
    await Promise.race([exited, new Promise((resolve) => setTimeout(resolve, 3000))]);
  }
  await new Promise((resolve) => server.close(resolve));
  for (const suffix of ["", "-shm", "-wal"]) rmSync(`${databasePath}${suffix}`, { force: true });
}
