import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

const MM_TO_METRES = 0.001;

const profileById = (profiles, profileId) => profiles?.find((profile) => profile.id === profileId);

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i];
    const b = polygon[j];
    const intersects = ((a.y > point.y) !== (b.y > point.y))
      && point.x < ((b.x - a.x) * (point.y - a.y)) / ((b.y - a.y) || Number.EPSILON) + a.x;
    if (intersects) inside = !inside;
  }
  return inside;
}

function contourProbe(points) {
  const count = Math.max(1, points.length - (points[0]?.equals(points.at(-1)) ? 1 : 0));
  const centroid = points.slice(0, count).reduce((sum, point) => ({ x: sum.x + point.x, y: sum.y + point.y }), { x: 0, y: 0 });
  const centre = { x: centroid.x / count, y: centroid.y / count };
  return { x: points[0].x + (centre.x - points[0].x) * 0.000001, y: points[0].y + (centre.y - points[0].y) * 0.000001 };
}

function contoursForPath(path) {
  const fillRule = path.userData?.style?.fillRule;
  if (fillRule !== "evenodd") {
    return path.toShapes().map((shape) => ({ outer: shape.getPoints(32), holes: shape.holes.map((hole) => hole.getPoints(32)) }));
  }

  const contours = path.subPaths.map((subPath) => subPath.getPoints(32)).filter((points) => points.length >= 3);
  const entries = contours.map((points, index) => {
    const probe = contourProbe(points);
    const containers = contours
      .map((candidate, candidateIndex) => candidateIndex !== index && pointInPolygon(probe, candidate) ? candidateIndex : -1)
      .filter((candidateIndex) => candidateIndex >= 0);
    return { points, depth: containers.length };
  });
  return entries
    .filter((entry) => entry.depth % 2 === 0)
    .map((outer) => ({
      outer: outer.points,
      holes: entries.filter((entry) => entry.depth === outer.depth + 1 && pointInPolygon(contourProbe(entry.points), outer.points)).map((entry) => entry.points),
    }));
}

function transformedPoint(point, profile) {
  const reference = profile.svgProfile;
  const { minX, minY, width, height } = reference.viewBox;
  let x = point.x - minX - width / 2;
  let y = minY + height - point.y - height / 2;
  if (reference.mirrorX) x *= -1;
  if (reference.mirrorY) y *= -1;
  const angle = -reference.rotationDeg * Math.PI / 180;
  return {
    x: (x * Math.cos(angle) - y * Math.sin(angle)) * MM_TO_METRES,
    y: (x * Math.sin(angle) + y * Math.cos(angle)) * MM_TO_METRES,
  };
}

function pathFromPoints(THREE, points, profile, ShapeClass = THREE.Path) {
  const transformed = points.map((point) => transformedPoint(point, profile));
  const path = new ShapeClass();
  path.moveTo(transformed[0].x, transformed[0].y);
  for (let index = 1; index < transformed.length; index += 1) path.lineTo(transformed[index].x, transformed[index].y);
  path.closePath();
  return path;
}

export function createCanonicalSvgProfileGeometry(THREE, profile, lengthMetres) {
  if (profile?.geometryType !== "SVG_PROFILE" || !profile.svgProfile || !profile.svgContent) {
    throw new Error("svg_profile_content_missing");
  }
  if (profile.svgProfile.profileFormatVersion !== "1.0" || profile.svgProfile.geometryFormatVersion !== "1.0") {
    throw new Error("svg_profile_version_unsupported");
  }
  const parsed = new SVGLoader().parse(profile.svgContent);
  const shapes = [];
  for (const path of parsed.paths) {
    for (const contour of contoursForPath(path)) {
      const shape = pathFromPoints(THREE, contour.outer, profile, THREE.Shape);
      shape.holes = contour.holes.map((hole) => pathFromPoints(THREE, hole, profile, THREE.Path));
      shapes.push(shape);
    }
  }
  if (!shapes.length) throw new Error("svg_profile_geometry_empty");
  const depth = Number.isFinite(Number(lengthMetres))
    ? Number(lengthMetres)
    : Number(profile.svgProfile.extrusionLengthMm) * MM_TO_METRES;
  if (!(depth > 0)) throw new Error("svg_profile_length_invalid");
  const geometry = new THREE.ExtrudeGeometry(shapes, { depth, steps: 1, curveSegments: 32, bevelEnabled: false });
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox;
  geometry.translate(-bounds.min.x, -bounds.min.y, -bounds.min.z);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.userData = {
    profileGeometryType: "SVG_PROFILE",
    profileAssetId: profile.svgProfile.assetId,
    profileFormatVersion: profile.svgProfile.profileFormatVersion,
    geometryFormatVersion: profile.svgProfile.geometryFormatVersion,
  };
  return geometry;
}

export function createProfileGeometry(THREE, profiles, profileId, lengthMetres, axis, fallbackA, fallbackB) {
  const profile = profileById(profiles, profileId);
  const a = Number(profile?.aMm) > 0 ? Number(profile.aMm) * MM_TO_METRES : fallbackA;
  const b = Number(profile?.bMm) > 0 ? Number(profile.bMm) * MM_TO_METRES : fallbackB;
  let geometry;
  if (profile?.geometryType === "SVG_PROFILE" && profile.svgProfile && profile.svgContent) {
    geometry = createCanonicalSvgProfileGeometry(THREE, profile, lengthMetres);
  } else {
    geometry = new THREE.BoxGeometry(a, b, lengthMetres);
    geometry.userData = { profileGeometryType: "BOX" };
  }
  if (axis === "x") geometry.rotateY(Math.PI / 2);
  else if (axis === "y") geometry.rotateX(-Math.PI / 2);
  geometry.computeBoundingBox();
  const center = new THREE.Vector3();
  geometry.boundingBox.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.computeBoundingBox();
  return geometry;
}

export function createProfileMesh(THREE, profiles, profileId, material, lengthMetres, axis, fallbackA, fallbackB) {
  const mesh = new THREE.Mesh(createProfileGeometry(THREE, profiles, profileId, lengthMetres, axis, fallbackA, fallbackB), material);
  mesh.userData.profileId = profileId;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}
