/**
 * Converts source visuals (PNG) into optimized WebP assets for the site.
 *
 * Usage: SRC_DIR=/path/to/unzipped node scripts/prepare-images.mjs
 * Source files are the raw visNEX visualization PNGs (not committed to the repo).
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC = process.env.SRC_DIR;
const OUT = new URL("../public/images/", import.meta.url).pathname;

// slug -> [zip folder, filename, max long edge]
const MAP = {
  // Visual system (sticky cards, 4:5 crops)
  "system-kierunek": ["1dc9110c-images_3/images 3", "Kuchnia loftowa w graficie, dębie i cegle.png", 1200],
  "system-prompt": ["d80daf9c-images_2/images 2", "Sztukateria LED w dwukondygnacyjnym holu.png", 1200],
  "system-selekcja": ["e9d2774b-images/images", "Drzwi przesuwne w nowoczesnym domu.png", 1600],
  "system-korekty": ["d80daf9c-images_2/images 2", "podloga_jodelka.png", 1600],
  // Use cases
  "use-hero": ["e9d2774b-images/images", "boazeria_scienna.png", 1920],
  "use-kategorie": ["1dc9110c-images_3/images 3", "kitchen_offer.png", 1200],
  "use-social": ["417b52ad-images_4/images 4", "Gemini_Generated_Image_fgolncfgolncfgol.png", 1200],
  "use-oferty": ["d80daf9c-images_2/images 2", "mouldings_offer.png", 1200],
  // Case cards
  "case-drzwi": ["e9d2774b-images/images", "Drzwi dwuskrzydłowe w eleganckiej sali.png", 1200],
  "case-podlogi": ["417b52ad-images_4/images 4", "floor_offer.png", 1200],
  "case-social": ["1dc9110c-images_3/images 3", "Kamienna ściana w prywatnym pokoju odsłuchowym.png", 1200],
  "case-kuchnie": ["1dc9110c-images_3/images 3", "kuchnia_u1.png", 1600],
  "case-remonty": ["d80daf9c-images_2/images 2", "led_schodowe_przypodlogowe.png", 1600],
  // Extra material details
  "detail-led": ["d80daf9c-images_2/images 2", "sztukateria_LED2.png", 1600],
  "detail-spiek": ["d80daf9c-images_2/images 2", "Spiek kwarcowy w pracowni artystycznej.png", 1200],
  "detail-lamele": ["1dc9110c-images_3/images 3", "Lamele_panele.png", 1600],
  "detail-drzwi-szklane": ["e9d2774b-images/images", "drzwi_szklane.png", 1600],
};

await mkdir(OUT, { recursive: true });

if (SRC) {
  for (const [slug, [dir, file, edge]] of Object.entries(MAP)) {
    const src = path.join(SRC, dir, file);
    if (!existsSync(src)) {
      console.warn(`skip (missing): ${src}`);
      continue;
    }
    const out = path.join(OUT, `${slug}.webp`);
    await sharp(src)
      .resize(edge, edge, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    console.log(`ok: ${slug}.webp`);
  }
}

// Hero header placeholder: charcoal field with a deep burgundy glow.
// Replace public/images/hero-header.png with the real "header for claude.png"
// asset — the layout and overlays are built to accept it 1:1.
const heroPath = path.join(OUT, "hero-header.png");
if (!existsSync(heroPath)) {
  const svg = `<svg width="2000" height="1120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="63%" cy="42%" r="62%">
        <stop offset="0%" stop-color="#6E1F2E"/>
        <stop offset="34%" stop-color="#521622"/>
        <stop offset="62%" stop-color="#2A0D14"/>
        <stop offset="100%" stop-color="#0E0B0B"/>
      </radialGradient>
      <radialGradient id="rim" cx="66%" cy="55%" r="30%">
        <stop offset="0%" stop-color="#A64A5A" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="#A64A5A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="2000" height="1120" fill="#0E0B0B"/>
    <rect width="2000" height="1120" fill="url(#glow)"/>
    <rect width="2000" height="1120" fill="url(#rim)"/>
  </svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(heroPath);
  console.log("ok: hero-header.png (placeholder)");
}
