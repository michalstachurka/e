/* Dev-only helper: full-page + section screenshots of the local dev server. */
import { chromium } from "playwright-core";

const OUT = process.env.SHOT_DIR ?? "shots";
const base = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const width = Number(process.env.W ?? 1440);
const height = Number(process.env.H ?? 900);
const tag = process.env.TAG ?? "desktop";

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width, height } });
await page.goto(base, { waitUntil: "networkidle" });
await page.waitForTimeout(1800);

// Scroll through so whileInView animations fire, then back to top.
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let y = 0; y < total; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1200);

await page.screenshot({ path: `${OUT}/${tag}-hero.png` });
await page.screenshot({ path: `${OUT}/${tag}-full.png`, fullPage: true });

const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
if (errors.length) console.log("console errors:", errors);
await browser.close();
console.log("done");
