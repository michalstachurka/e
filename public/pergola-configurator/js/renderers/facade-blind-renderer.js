import { createProfileMesh } from "../core/svg-profile-geometry.js";
import { windowCoverLayout } from "./window-cover-renderer.js";

const COLOR_VALUES = {
  anthracite: "#2B2D2E",
  "warm-white": "#E8E6E0",
  black: "#0E0F10",
  bronze: "#4A3527",
};

const colorValue = (value, fallback) => COLOR_VALUES[value] || value || fallback;

function facadeSlatGeometry(THREE, width, profile, depth, thickness) {
  const shape = new THREE.Shape();
  if (profile === "c80") {
    shape.moveTo(-depth / 2, thickness * 0.3);
    shape.quadraticCurveTo(0, -depth * 0.105, depth / 2, thickness * 0.3);
    shape.lineTo(depth / 2, thickness * 1.3);
    shape.quadraticCurveTo(0, -depth * 0.105 + thickness, -depth / 2, thickness * 1.3);
  } else {
    shape.moveTo(-depth / 2, thickness * 1.8);
    shape.lineTo(-depth * 0.38, thickness * 0.35);
    shape.lineTo(depth * 0.36, -thickness * 0.1);
    shape.lineTo(depth / 2, -thickness * 1.45);
    shape.lineTo(depth / 2, -thickness * 0.25);
    shape.lineTo(depth * 0.4, thickness * 0.9);
    shape.lineTo(-depth * 0.34, thickness * 1.35);
    shape.lineTo(-depth / 2, thickness * 2.8);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: width, steps: 1, bevelEnabled: false, curveSegments: profile === "c80" ? 8 : 1 });
  geometry.rotateY(Math.PI / 2);
  geometry.translate(-width / 2, 0, 0);
  geometry.computeVertexNormals();
  return geometry;
}

export function createFacadeBlindRenderer(context) {
  const { THREE, resetRoot, frameMaterial, glassMaterial, wallMaterial, ground, shadow, frameScene, clearAnimationState } = context;
  const hardwareMaterial = frameMaterial.clone();
  const slatMaterial = frameMaterial.clone();
  const windowFrameMaterial = new THREE.MeshStandardMaterial({ color: "#f1f0eb", roughness: 0.42, metalness: 0.04 });
  const tapeMaterial = new THREE.MeshStandardMaterial({ color: "#252525", roughness: 0.95, metalness: 0 });
  let root = null;
  let activeProfiles = [];

  const box = (group, material, width, height, depth, x, y, z, name = "", profileId = "", axis = "z") => {
    const length = axis === "x" ? width : axis === "y" ? height : depth;
    const fallbackA = axis === "x" ? depth : width;
    const fallbackB = axis === "y" ? depth : height;
    const mesh = profileId
      ? createProfileMesh(THREE, activeProfiles, profileId, material, length, axis, fallbackA, fallbackB)
      : new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.name = name;
    mesh.castShadow = !name.startsWith("Facade") && !name.startsWith("Window");
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  const contextBox = (...args) => {
    const mesh = box(...args);
    mesh.userData.arExclude = true;
    return mesh;
  };

  const addWindow = (target, width, height) => {
    const frame = Math.max(0.045, Math.min(width, height) * 0.045);
    contextBox(target, windowFrameMaterial, width + frame * 2, frame, 0.085, 0, height + frame / 2, -0.105, "WindowFrameTop");
    contextBox(target, windowFrameMaterial, width + frame * 2, frame, 0.085, 0, frame / 2, -0.105, "WindowFrameBottom");
    contextBox(target, windowFrameMaterial, frame, height, 0.085, -width / 2 - frame / 2, height / 2, -0.105, "WindowFrameLeft");
    contextBox(target, windowFrameMaterial, frame, height, 0.085, width / 2 + frame / 2, height / 2, -0.105, "WindowFrameRight");
    if (width > 1.35) contextBox(target, windowFrameMaterial, frame * 0.72, height, 0.08, 0, height / 2, -0.104, "WindowFrameMullion");
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMaterial);
    pane.position.set(0, height / 2, -0.151);
    pane.name = "WindowGlass";
    pane.userData.arExclude = true;
    target.add(pane);
  };

  const addFacade = (config, headrailHeight, guideWidth) => {
    const layout = windowCoverLayout(config.width, config.unitCount, guideWidth * 2 + 0.08);
    const sillHeight = 0.28;
    const topMargin = 0.52;
    const openingHeight = config.height + headrailHeight + 0.08;
    const wallHeight = sillHeight + openingHeight + topMargin;
    const wallDepth = 0.24;
    const sideWidth = 0.5;
    const wallZ = -wallDepth / 2;
    contextBox(root, wallMaterial, layout.facadeWidth, sillHeight, wallDepth, 0, sillHeight / 2, wallZ, "FacadeBelowWindows");
    contextBox(root, wallMaterial, layout.facadeWidth, topMargin, wallDepth, 0, sillHeight + openingHeight + topMargin / 2, wallZ, "FacadeAboveWindows");
    contextBox(root, wallMaterial, sideWidth, openingHeight, wallDepth, -layout.openingsWidth / 2 - sideWidth / 2, sillHeight + openingHeight / 2, wallZ, "FacadeLeftEdge");
    contextBox(root, wallMaterial, sideWidth, openingHeight, wallDepth, layout.openingsWidth / 2 + sideWidth / 2, sillHeight + openingHeight / 2, wallZ, "FacadeRightEdge");
    for (let index = 0; index < layout.unitCount - 1; index += 1) {
      const x = (layout.centers[index] + layout.centers[index + 1]) / 2;
      contextBox(root, wallMaterial, layout.pierWidth, openingHeight, wallDepth, x, sillHeight + openingHeight / 2, wallZ, "FacadeWindowPier");
    }
    for (const x of layout.centers) contextBox(root, windowFrameMaterial, layout.apertureWidth + 0.08, 0.045, 0.3, x, sillHeight - 0.015, -0.08, "WindowSill");
    return { ...layout, sillHeight, openingHeight, wallHeight };
  };

  const createScene = (config) => {
    root = resetRoot("FacadeBlindVisualRoot");
    clearAnimationState();
    activeProfiles = config.profiles || [];
    hardwareMaterial.color.set(colorValue(config.hardwareColor, "#2B2D2E"));
    slatMaterial.color.set(colorValue(config.slatColor, "#2B2D2E"));
    hardwareMaterial.roughness = 0.4;
    hardwareMaterial.metalness = 0.62;
    slatMaterial.roughness = 0.38;
    slatMaterial.metalness = 0.68;

    const headrailHeight = Number(config.visual?.headrailHeight || 0.056);
    const headrailDepth = Number(config.visual?.headrailWidth || 0.058);
    const guideWidth = Number(config.visual?.guideWidth || 0.025);
    const slatDepth = Number(config.visual?.[config.slatProfile === "c80" ? "slatDepthC80" : "slatDepthZ90"] || (config.slatProfile === "c80" ? 0.08 : 0.09));
    const pitch = Number(config.visual?.[config.slatProfile === "c80" ? "slatPitchC80" : "slatPitchZ90"] || (config.slatProfile === "c80" ? 0.075 : 0.083));
    const slatThickness = Number(config.visual?.slatThickness || 0.004);
    const bottomRailHeight = Number(config.visual?.bottomRailHeight || 0.055);
    const depthOffset = config.mounting === "front" ? 0.085 : config.mounting === "reveal" ? -0.055 : -0.085;
    const layout = addFacade(config, headrailHeight, guideWidth);
    const lowered = config.height * config.openingPercent / 100;
    const slatCount = Math.max(0, Math.min(72, Math.ceil(lowered / pitch)));

    for (const centerX of layout.centers) {
      const unit = new THREE.Group();
      unit.position.set(centerX, layout.sillHeight, 0);
      unit.name = "FacadeBlindInReveal";
      root.add(unit);
      addWindow(unit, config.width, config.height);
      box(unit, hardwareMaterial, config.width + guideWidth * 2, headrailHeight, headrailDepth, 0, config.height + headrailHeight / 2, depthOffset, "FacadeBlindHeadrail", "facade-blind-headrail", "x");
      if (config.mounting !== "under-plaster") {
        box(unit, hardwareMaterial, config.width + guideWidth * 2 + 0.04, Math.max(0.12, headrailHeight * 2.8), headrailDepth + 0.035, 0, config.height + headrailHeight, depthOffset - 0.012, "FacadeBlindCoverPanel");
      }
      for (const x of [-config.width / 2 - guideWidth / 2, config.width / 2 + guideWidth / 2]) {
        if (config.guideType === "rails") {
          box(unit, hardwareMaterial, guideWidth, config.height, 0.045, x, config.height / 2, depthOffset, "FacadeBlindGuideRail", "facade-blind-guide", "y");
        } else {
          const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, config.height, 8), hardwareMaterial);
          cable.position.set(x, config.height / 2, depthOffset + 0.005);
          cable.name = "FacadeBlindGuideCable";
          unit.add(cable);
        }
      }
      if (lowered > 0.02) {
        const bottomY = config.height - lowered;
        box(unit, hardwareMaterial, config.width, bottomRailHeight, Math.max(0.035, slatDepth * 0.58), 0, bottomY + bottomRailHeight / 2, depthOffset + 0.012, "FacadeBlindBottomRail", "facade-blind-bottom", "x");
        for (const x of [-config.width * 0.28, 0, config.width * 0.28]) {
          box(unit, tapeMaterial, 0.012, lowered, 0.005, x, config.height - lowered / 2, depthOffset - 0.01, "FacadeBlindLadderTape");
        }
      }
    }

    if (slatCount > 0) {
      const geometry = facadeSlatGeometry(THREE, config.width, config.slatProfile, slatDepth, slatThickness);
      const slats = new THREE.InstancedMesh(geometry, slatMaterial, slatCount * layout.unitCount);
      const matrix = new THREE.Matrix4();
      const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(config.slatAngle), 0, 0));
      const scale = new THREE.Vector3(1, 1, 1);
      let instance = 0;
      for (const centerX of layout.centers) {
        for (let index = 0; index < slatCount; index += 1) {
          const y = layout.sillHeight + config.height - pitch * (index + 0.5);
          matrix.compose(new THREE.Vector3(centerX, y, depthOffset + 0.018), quaternion, scale);
          slats.setMatrixAt(instance, matrix);
          instance += 1;
        }
      }
      slats.instanceMatrix.needsUpdate = true;
      slats.name = `FacadeBlindSlats_${config.slatProfile.toUpperCase()}_Batched`;
      slats.userData.profileId = config.slatProfile === "c80" ? "facade-blind-c80" : "facade-blind-z90";
      slats.castShadow = true;
      slats.receiveShadow = true;
      root.add(slats);
    }

    if (config.weatherStation) box(root, hardwareMaterial, 0.13, 0.075, 0.06, layout.facadeWidth / 2 - 0.22, layout.wallHeight - 0.2, 0.035, "FacadeBlindWeatherStation");
    ground.scale.setScalar(Math.max(layout.facadeWidth, layout.wallHeight) * 1.75);
    shadow.scale.set(layout.facadeWidth * 1.25, 1.2, 1);
    frameScene(layout.facadeWidth, 0.9, layout.wallHeight);
    return root;
  };

  return {
    productType: "facade-blind",
    createScene,
    updateScene: (_scene, config) => createScene(config),
    disposeScene: () => { root = null; },
    getBounds: () => root ? new THREE.Box3().setFromObject(root) : new THREE.Box3(),
  };
}
