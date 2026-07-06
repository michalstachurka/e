/**
 * Generates configurator demo variants:
 * - hidden-door scene with the door leaf recolored (region modulate)
 * - LED hallway in three white-balance gradings
 *
 * Usage: SRC_DIR=/path/to/unzipped node scripts/prepare-konfigurator.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = process.env.SRC_DIR;
if (!SRC) throw new Error("SRC_DIR required");
const OUT = new URL("../public/images/konfigurator/", import.meta.url).pathname;
await mkdir(OUT, { recursive: true });

const DOOR_SRC = path.join(SRC, "417b52ad-images_4/images 4/drzwi_ukryte.png");
// Door leaf rectangle in the 1672x941 source
const DOOR = { left: 683, top: 86, width: 303, height: 753 };

const DOOR_VARIANTS = {
  oliwka: null, // original
  grafit: { saturation: 0.3, brightness: 0.52 },
  zielen: { hue: 40, saturation: 1.25, brightness: 0.72 },
  terakota: { hue: -30, saturation: 1.5, brightness: 0.9 },
  krem: { saturation: 0.38, brightness: 1.42 },
};

const base = sharp(DOOR_SRC);
const { data: full, info } = await base
  .clone()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (const [name, mod] of Object.entries(DOOR_VARIANTS)) {
  // sharp runs composite AFTER resize, so composite at full size first
  let buf;
  if (mod) {
    const region = await sharp(DOOR_SRC)
      .extract(DOOR)
      .modulate(mod)
      .png()
      .toBuffer();
    buf = await sharp(DOOR_SRC)
      .composite([{ input: region, left: DOOR.left, top: DOOR.top }])
      .png()
      .toBuffer();
  } else {
    buf = DOOR_SRC;
  }
  await sharp(buf)
    .resize(1400)
    .webp({ quality: 80 })
    .toFile(path.join(OUT, `door-${name}.webp`));
  console.log(`ok: door-${name}.webp`);
}

const LED_SRC = path.join(SRC, "d80daf9c-images_2/images 2/sztukateria_LED2.png");
// linear([slopes], [offsets]) per RGB channel — white-balance shifts
const LED_VARIANTS = {
  ciepla: null,
  neutralna: { slopes: [0.9, 0.97, 1.16], offsets: [0, 0, 4] },
  zimna: { slopes: [0.78, 0.95, 1.38], offsets: [0, 2, 10] },
};

for (const [name, wb] of Object.entries(LED_VARIANTS)) {
  let img = sharp(LED_SRC);
  if (wb) img = img.linear(wb.slopes, wb.offsets);
  await img
    .resize(1600)
    .webp({ quality: 80 })
    .toFile(path.join(OUT, `led-${name}.webp`));
  console.log(`ok: led-${name}.webp`);
}
console.log("done", info.width, info.height, full.length > 0 ? "" : "");
