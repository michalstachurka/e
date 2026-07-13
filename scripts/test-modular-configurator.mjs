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
  await page.waitForSelector("#pergolaMount canvas");
  await page.waitForFunction(() => document.querySelector("#pergolaMount")?.getAttribute("aria-busy") === "false");
  await page.waitForFunction(() => document.querySelector("#configuratorNotice")?.classList.contains("is-valid"));
  const pergolaProfileSizes = await page.locator("#pergolaProfileCards .profile-card__size").allTextContents();
  if (pergolaProfileSizes.length < 3 || pergolaProfileSizes.some((value) => !/^\d+ × \d+ mm$/.test(value.trim()))) throw new Error(`Invalid pergola profile dimensions: ${pergolaProfileSizes.join(", ")}`);
  if (await page.locator("#pergolaProfileCards .profile-card__drawing").count() !== pergolaProfileSizes.length) throw new Error("Every pergola profile must have a drawing");

  await page.locator('[data-modules="2"]').click();
  await page.locator('#pergolaScreens [data-side="front"]').click();
  await page.locator('#pergolaDepth').evaluate((input) => { input.value = "3.8"; input.dispatchEvent(new Event("input", { bubbles: true })); });
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().values.moduleWidths.length === 2);
  await page.waitForFunction(() => document.querySelector("#pergolaGuideDepth")?.textContent === "3.8 m");
  await page.locator('[data-view="front"]').click();

  await page.locator('[data-product="veranda"]').click();
  await page.waitForFunction(() => window.sunProtectionConfigurator.getConfiguration().productType === "veranda");
  await page.locator("#verandaAngle").evaluate((input) => { input.value = "9"; input.dispatchEvent(new Event("input", { bubbles: true })); });
  await page.locator("#verandaLeftWall").selectOption("zip-screen");
  await page.locator("#verandaLeftTriangle").selectOption("solid");
  await page.locator("#verandaLeftScreenSupport").click();
  await page.locator("#verandaRightWall").selectOption("sliding-glass");
  await page.waitForFunction(() => {
    const values = window.sunProtectionConfigurator.getConfiguration().values;
    return values.roofAngle === 9 && values.leftWall === "zip-screen" && values.leftTriangle === "solid" && values.leftScreenSupport === true;
  });
  const verandaProfileSizes = await page.locator("#verandaProfileCards .profile-card__size").allTextContents();
  if (verandaProfileSizes.length < 4 || verandaProfileSizes.some((value) => !/^\d+ × \d+ mm$/.test(value.trim()))) throw new Error(`Invalid veranda profile dimensions: ${verandaProfileSizes.join(", ")}`);
  if (await page.locator("#verandaProfileCards .profile-card__drawing").count() !== verandaProfileSizes.length) throw new Error("Every veranda profile must have a drawing");
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

  results.desktop = { shareUrl, consoleErrors, pageErrors, configuration: await page.evaluate(() => window.sunProtectionConfigurator.getConfiguration()) };
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
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${webPort}/e/admin.html`, { waitUntil: "domcontentloaded" });
  await page.locator('[name="email"]').fill("admin@example.invalid");
  await page.locator('[name="password"]').fill("local-e2e-password");
  await page.locator("#adminLoginForm button").click();
  await page.waitForSelector("#adminWorkspace:not([hidden])");
  await page.locator('[data-product-index="0"] [data-field="description"]').fill("Opis testowy wersji roboczej.");
  await page.locator('[data-product-index="0"] [data-action="save"]').click();
  await page.waitForFunction(() => document.querySelector("#adminToast")?.classList.contains("is-visible"));
  await page.screenshot({ path: path.join(resultsDir, "admin.png"), fullPage: false });
  results.admin = { pageErrors, products: await page.locator(".admin-product").count() };
  await context.close();
}

try {
  await runLanding();
  await runDesktop();
  await runMobile();
  await runAdmin();
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
