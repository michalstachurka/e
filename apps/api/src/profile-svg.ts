import { createHash } from "node:crypto";
import { DOMParser as XmlDomParser, XMLSerializer, type Element as XmlElement } from "@xmldom/xmldom";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

export const PROFILE_FORMAT_VERSION = "1.0" as const;
export const PROFILE_GEOMETRY_VERSION = "1.0" as const;

export interface ProfileAssetLimits {
  maxFileBytes: number;
  maxProfilesPerTenant: number;
  maxStorageBytesPerTenant: number;
  maxDimensionMm: number;
  maxExtrusionLengthMm: number;
}

export const defaultProfileAssetLimits: ProfileAssetLimits = {
  maxFileBytes: 1_048_576,
  maxProfilesPerTenant: 100,
  maxStorageBytesPerTenant: 50 * 1_048_576,
  maxDimensionMm: 10_000,
  maxExtrusionLengthMm: 20_000,
};

export interface ValidatedProfileSvg {
  sanitizedSvg: string;
  byteSize: number;
  contentHash: string;
  widthMm: number;
  heightMm: number;
  viewBox: { minX: number; minY: number; width: number; height: number };
  contourCount: number;
  shapeCount: number;
  holeCount: number;
  profileFormatVersion: typeof PROFILE_FORMAT_VERSION;
  geometryFormatVersion: typeof PROFILE_GEOMETRY_VERSION;
}

export class ProfileSvgError extends Error {
  constructor(public readonly code: string, message: string, public readonly statusCode = 422) {
    super(message);
  }
}

const allowedElements = new Set(["svg", "g", "path", "polygon", "rect", "circle", "ellipse", "title", "desc"]);
const removableElements = new Set(["metadata"]);
const commonAttributes = new Set(["id", "fill", "fill-rule", "fill-opacity", "opacity"]);
const attributesByElement: Record<string, Set<string>> = {
  svg: new Set(["xmlns", "width", "height", "viewBox", "fill", "fill-rule"]),
  g: commonAttributes,
  path: new Set([...commonAttributes, "d"]),
  polygon: new Set([...commonAttributes, "points"]),
  rect: new Set([...commonAttributes, "x", "y", "width", "height", "rx", "ry"]),
  circle: new Set([...commonAttributes, "cx", "cy", "r"]),
  ellipse: new Set([...commonAttributes, "cx", "cy", "rx", "ry"]),
  title: new Set(),
  desc: new Set(),
};

function parseFiniteNumbers(value: string, count: number, label: string) {
  const values = value.trim().split(/[\s,]+/).map(Number);
  if (values.length !== count || values.some((number) => !Number.isFinite(number))) {
    throw new ProfileSvgError("invalid_dimensions", `Nieprawidłowa wartość ${label} w pliku SVG.`);
  }
  return values;
}

function validatePhysicalDimension(value: string | null, label: string) {
  if (!value) return;
  const match = value.trim().match(/^([0-9]+(?:\.[0-9]+)?)mm$/i);
  if (!match || Number(match[1]) <= 0) {
    throw new ProfileSvgError("invalid_dimensions", `${label} musi być dodatnią wartością podaną w mm.`);
  }
}

function childElements(node: XmlElement) {
  const elements: XmlElement[] = [];
  for (let child = node.firstChild; child; child = child.nextSibling) {
    if (child.nodeType === 1) elements.push(child as XmlElement);
  }
  return elements;
}

function sanitizeElement(element: XmlElement, root: XmlElement) {
  const name = (element.localName || element.nodeName).toLowerCase();
  if (removableElements.has(name)) {
    element.parentNode?.removeChild(element);
    return;
  }
  if (!allowedElements.has(name)) {
    throw new ProfileSvgError("unsupported_element", `Element <${name}> nie jest dozwolony w profilu SVG.`);
  }
  if (name === "svg" && element !== root) {
    throw new ProfileSvgError("unsupported_element", "Zagnieżdżone elementy <svg> nie są dozwolone.");
  }

  const allowedAttributes = attributesByElement[name];
  for (let index = element.attributes.length - 1; index >= 0; index -= 1) {
    const attribute = element.attributes.item(index);
    if (!attribute) continue;
    const attributeName = attribute.name;
    const normalizedName = attributeName.toLowerCase();
    const value = attribute.value.trim();
    if (normalizedName.startsWith("on")) {
      throw new ProfileSvgError("unsafe_attribute", `Atrybut zdarzenia ${attributeName} nie jest dozwolony.`);
    }
    if (["href", "xlink:href", "src", "style", "transform", "filter", "mask", "clip-path"].includes(normalizedName)) {
      throw new ProfileSvgError("unsafe_attribute", `Atrybut ${attributeName} nie jest dozwolony w profilu SVG.`);
    }
    if (/url\s*\(|javascript\s*:/i.test(value)) {
      throw new ProfileSvgError("external_reference", "Plik SVG zawiera niedozwolone odwołanie zewnętrzne.");
    }
    if (!allowedAttributes.has(attributeName)) element.removeAttribute(attributeName);
  }

  const fill = element.getAttribute("fill");
  if (fill?.trim().toLowerCase() === "none") {
    throw new ProfileSvgError("stroke_only", "Kontury profilu muszą być wypełnione; fill=\"none\" nie tworzy bryły.");
  }
  for (const child of childElements(element)) sanitizeElement(child, root);
}

function installServerDomParser() {
  if (typeof globalThis.DOMParser === "undefined") {
    class ThreeServerDomParser {
      parseFromString(source: string, mimeType: string) {
        const document = new XmlDomParser().parseFromString(source, mimeType);
        Object.assign(document, { querySelectorAll: () => [] });
        return document as unknown as XMLDocument;
      }
    }
    Object.defineProperty(globalThis, "DOMParser", { value: ThreeServerDomParser, configurable: true });
  }
}

export function validateAndSanitizeProfileSvg(svg: string, limits: ProfileAssetLimits = defaultProfileAssetLimits): ValidatedProfileSvg {
  const rawByteSize = Buffer.byteLength(svg, "utf8");
  if (rawByteSize > limits.maxFileBytes) {
    throw new ProfileSvgError("file_too_large", `Plik SVG przekracza limit ${limits.maxFileBytes} bajtów.`, 413);
  }
  if (/<!DOCTYPE|<!ENTITY/i.test(svg)) {
    throw new ProfileSvgError("unsafe_xml", "Deklaracje DOCTYPE i ENTITY nie są dozwolone.");
  }

  const parserErrors: string[] = [];
  const document = new XmlDomParser({
    onError: (level, message) => {
      if (level !== "warning") parserErrors.push(String(message));
    },
  }).parseFromString(svg, "image/svg+xml");
  if (parserErrors.length || !document.documentElement) {
    throw new ProfileSvgError("invalid_xml", "Plik nie jest poprawnym dokumentem XML/SVG.");
  }
  const root = document.documentElement;
  if ((root.localName || root.nodeName).toLowerCase() !== "svg") {
    throw new ProfileSvgError("invalid_root", "Głównym elementem pliku musi być <svg>.");
  }

  const viewBoxValue = root.getAttribute("viewBox");
  if (!viewBoxValue) throw new ProfileSvgError("missing_viewbox", "Plik SVG musi zawierać atrybut viewBox.");
  const [minX, minY, width, height] = parseFiniteNumbers(viewBoxValue, 4, "viewBox");
  if (width <= 0 || height <= 0 || width > limits.maxDimensionMm || height > limits.maxDimensionMm) {
    throw new ProfileSvgError("invalid_dimensions", `Wymiary viewBox muszą być dodatnie i nie większe niż ${limits.maxDimensionMm} mm.`);
  }
  validatePhysicalDimension(root.getAttribute("width"), "width");
  validatePhysicalDimension(root.getAttribute("height"), "height");

  sanitizeElement(root, root);
  root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  root.setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
  root.setAttribute("width", `${width}mm`);
  root.setAttribute("height", `${height}mm`);
  const sanitizedSvg = new XMLSerializer().serializeToString(root);
  const sanitizedByteSize = Buffer.byteLength(sanitizedSvg, "utf8");
  if (sanitizedByteSize > limits.maxFileBytes) {
    throw new ProfileSvgError("file_too_large", `Sanityzowany plik SVG przekracza limit ${limits.maxFileBytes} bajtów.`, 413);
  }

  installServerDomParser();
  let parsed: ReturnType<SVGLoader["parse"]>;
  try {
    parsed = new SVGLoader().parse(sanitizedSvg);
  } catch {
    throw new ProfileSvgError("invalid_geometry", "Nie udało się odczytać geometrii profilu SVG.");
  }

  let contourCount = 0;
  let shapeCount = 0;
  let holeCount = 0;
  for (const path of parsed.paths) {
    const pathStyle = (path.userData as { style?: { fill?: string } }).style;
    const sourceElementName = String((path.userData as { node?: { nodeName?: string } }).node?.nodeName || "").toLowerCase();
    const inherentlyClosed = new Set(["rect", "circle", "ellipse", "polygon"]);
    if (pathStyle?.fill === "none") {
      throw new ProfileSvgError("stroke_only", "Otwarta linia lub sam stroke nie tworzy powierzchni ani bryły.");
    }
    for (const subPath of path.subPaths) {
      contourCount += 1;
      if (!subPath.autoClose && !inherentlyClosed.has(sourceElementName)) {
        throw new ProfileSvgError("open_contour", "Wykryto otwarty kontur. Każda powierzchnia musi być zamknięta poleceniem Z.");
      }
      const points = subPath.getPoints(24);
      if (points.length < 3) throw new ProfileSvgError("empty_contour", "Kontur SVG nie tworzy powierzchni.");
      let doubledArea = 0;
      for (let index = 0; index < points.length; index += 1) {
        const current = points[index];
        const next = points[(index + 1) % points.length];
        doubledArea += current.x * next.y - next.x * current.y;
      }
      if (Math.abs(doubledArea) < 0.000001) throw new ProfileSvgError("empty_contour", "Kontur SVG ma zerowe pole.");
    }
    const shapes = path.toShapes();
    shapeCount += shapes.length;
    holeCount += shapes.reduce((total, shape) => total + shape.holes.length, 0);
  }
  if (!contourCount || !shapeCount) {
    throw new ProfileSvgError("empty_svg", "Plik SVG nie zawiera zamkniętych, wypełnionych konturów.");
  }

  return {
    sanitizedSvg,
    byteSize: sanitizedByteSize,
    contentHash: createHash("sha256").update(sanitizedSvg).digest("hex"),
    widthMm: width,
    heightMm: height,
    viewBox: { minX, minY, width, height },
    contourCount,
    shapeCount,
    holeCount,
    profileFormatVersion: PROFILE_FORMAT_VERSION,
    geometryFormatVersion: PROFILE_GEOMETRY_VERSION,
  };
}
