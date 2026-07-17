import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { PublicConfiguration } from "../../../packages/contracts/src/index.js";

const fold = (value: string) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");

function configurationRows(configuration: PublicConfiguration) {
  if (configuration.productType === "bioclimatic-pergola") {
    const values = configuration.values;
    return [
      ["Konstrukcja", values.construction],
      ["Szerokosc", `${values.moduleWidths.join(" + ")} m`],
      ["Glebokosc", `${values.depth} m`],
      ["Wysokosc", `${values.height} m`],
      ["Kat lameli", `${values.slatAngle} deg`],
      ["Kolor", values.frameColor],
    ];
  }
  if (configuration.productType === "veranda") {
    const values = configuration.values;
    return [
      ["Szerokosc", `${values.width} m`], ["Glebokosc", `${values.depth} m`],
      ["Wysokosc tyl/przod", `${values.backHeight} / ${values.frontHeight} m`], ["Kat dachu", `${values.roofAngle} deg`],
      ["Pola / krokwie", `${values.roofFields} / ${values.rafterCount}`], ["Pokrycie", values.roofMaterial],
    ];
  }
  if (configuration.productType === "carport") {
    const values = configuration.values;
    return [
      ["Konstrukcja", values.construction], ["Szerokosc", `${values.moduleWidths.join(" + ")} m`],
      ["Glebokosc", `${values.depth} m`], ["Wysokosc", `${values.height} m`],
      ["Dach", `blacha trapezowa / ${values.roofColor}`], ["Spod", "warstwa antykondensacyjna"],
    ];
  }
  if (configuration.productType === "window-screen") {
    const values = configuration.values;
    return [
      ["Wymiar", `${values.width} x ${values.height} m`], ["Montaz", values.mounting], ["Prowadzenie", values.guideType],
      ["Tkanina", values.fabric], ["Naped", values.drive], ["Opuszczenie", `${values.openingPercent}%`],
    ];
  }
  if (configuration.productType === "external-roller-shutter") {
    const values = configuration.values;
    return [
      ["Wymiar", `${values.width} x ${values.height} m`], ["Montaz", values.mounting], ["Pancerz", values.slatProfile],
      ["Naped", values.drive], ["Opuszczenie", `${values.openingPercent}%`], ["Moskitiera", values.integratedMosquitoNet ? "tak" : "nie"],
    ];
  }
  const values = configuration.values;
  return [
    ["Wymiar", `${values.width} x ${values.projection} m`], ["Montaz", values.mounting], ["Kaseta", values.cassetteType],
    ["Kat", `${values.pitch} deg`], ["Naped", values.drive], ["Wysuniecie", `${values.openingPercent}%`],
  ];
}

export async function generateProjectPdf(options: {
  configuration: PublicConfiguration;
  productName: string;
  projectNumber: string;
  branding: { companyName: string; contactEmail: string; accentColor: string; pdfFooter: string };
  quote: { net: number; vat: number; gross: number; currency: string; demoOnly: true } | null;
  bom: { items: Array<{ label: string; quantity: number; unit: string }>; demoOnly: true };
  snapshotDataUrl?: string;
}) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const accent = /^#[0-9A-Fa-f]{6}$/.test(options.branding.accentColor) ? options.branding.accentColor : "#C36E3D";
  const color = rgb(parseInt(accent.slice(1, 3), 16) / 255, parseInt(accent.slice(3, 5), 16) / 255, parseInt(accent.slice(5, 7), 16) / 255);

  page.drawRectangle({ x: 0, y: 784, width: 595.28, height: 58, color: rgb(0.08, 0.07, 0.06) });
  page.drawText(fold(options.branding.companyName), { x: 42, y: 806, size: 20, font: bold, color });
  page.drawText("PROJEKT KONCEPCYJNY", { x: 382, y: 810, size: 8, font: regular, color: rgb(0.82, 0.8, 0.76) });
  page.drawText(fold(options.projectNumber), { x: 382, y: 796, size: 9, font: bold, color: rgb(1, 1, 1) });

  let cursor = 752;
  page.drawText(fold(options.productName), { x: 42, y: cursor, size: 26, font: bold, color: rgb(0.09, 0.08, 0.07) });
  cursor -= 22;
  page.drawText(new Date().toISOString().slice(0, 10), { x: 42, y: cursor, size: 9, font: regular, color: rgb(0.42, 0.4, 0.37) });

  if (options.snapshotDataUrl?.startsWith("data:image/")) {
    try {
      const [meta, encoded] = options.snapshotDataUrl.split(",", 2);
      const bytes = Buffer.from(encoded, "base64");
      const image = meta.includes("png") ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
      const scale = Math.min(500 / image.width, 250 / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      page.drawRectangle({ x: 42, y: cursor - height - 18, width: 511, height: height + 16, color: rgb(0.95, 0.93, 0.9) });
      page.drawImage(image, { x: 42 + (511 - width) / 2, y: cursor - height - 10, width, height });
      cursor -= height + 36;
    } catch {
      cursor -= 12;
    }
  } else {
    cursor -= 12;
  }

  page.drawText("KONFIGURACJA", { x: 42, y: cursor, size: 9, font: bold, color });
  cursor -= 20;
  for (const [label, value] of configurationRows(options.configuration)) {
    page.drawLine({ start: { x: 42, y: cursor - 5 }, end: { x: 553, y: cursor - 5 }, thickness: 0.5, color: rgb(0.82, 0.8, 0.76) });
    page.drawText(fold(label), { x: 42, y: cursor + 3, size: 9, font: regular, color: rgb(0.45, 0.43, 0.4) });
    page.drawText(fold(String(value)), { x: 250, y: cursor + 3, size: 10, font: bold, color: rgb(0.1, 0.09, 0.08) });
    cursor -= 24;
  }

  cursor -= 8;
  page.drawText(options.quote ? "WYCENA DEMONSTRACYJNA" : "WYCENA U DORADCY", { x: 42, y: cursor, size: 9, font: bold, color });
  page.drawText(options.quote ? `${options.quote.gross.toFixed(0)} ${options.quote.currency} brutto` : "Cena nie jest publikowana", { x: options.quote ? 360 : 350, y: cursor - 2, size: options.quote ? 16 : 11, font: bold, color: rgb(0.1, 0.09, 0.08) });
  cursor -= 26;
  page.drawText("BOM PUBLICZNY (BEZ KODOW PRODUKCYJNYCH)", { x: 42, y: cursor, size: 8, font: bold, color: rgb(0.45, 0.43, 0.4) });
  cursor -= 16;
  for (const item of options.bom.items.slice(0, 8)) {
    page.drawText(fold(`${item.label}: ${item.quantity} ${item.unit}`), { x: 52, y: cursor, size: 8.5, font: regular, color: rgb(0.22, 0.2, 0.18) });
    cursor -= 14;
  }

  page.drawLine({ start: { x: 42, y: 72 }, end: { x: 553, y: 72 }, thickness: 0.7, color });
  page.drawText(fold(options.branding.pdfFooter), { x: 42, y: 52, size: 8, font: regular, color: rgb(0.4, 0.38, 0.35), maxWidth: 370 });
  page.drawText(fold(options.branding.contactEmail), { x: 410, y: 52, size: 8, font: bold, color });
  return pdf.save();
}
