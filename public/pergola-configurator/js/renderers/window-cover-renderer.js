const COLOR_VALUES = {
  anthracite: "#2B2D2E",
  "warm-white": "#E8E6E0",
  black: "#0E0F10",
  bronze: "#4A3527",
  piaskowy: "#C9B79C",
  grafit: "#55534E",
  antracyt: "#33352F",
  ecru: "#DED7C7",
  sand: "#B79B75",
  stone: "#8A8276",
  burgundy: "#762B38",
};

const colorValue = (value, fallback) => COLOR_VALUES[value] || value || fallback;

export const MAX_WINDOW_COVER_UNITS = 8;

export function windowCoverLayout(width, requestedCount, apertureExtra = 0) {
  const unitCount = Math.max(1, Math.min(MAX_WINDOW_COVER_UNITS, Math.round(Number(requestedCount) || 1)));
  const apertureWidth = width + apertureExtra;
  const pierWidth = 0.24;
  const centers = Array.from({ length: unitCount }, (_, index) => (index - (unitCount - 1) / 2) * (apertureWidth + pierWidth));
  const openingsWidth = apertureWidth * unitCount + pierWidth * (unitCount - 1);
  return { unitCount, apertureWidth, pierWidth, centers, openingsWidth, facadeWidth: openingsWidth + 1 };
}

export function createWindowCoverRenderer(context, productType) {
  const { THREE, resetRoot, frameMaterial, glassMaterial, wallMaterial, glowMaterial, ground, shadow, frameScene, clearAnimationState } = context;
  const coverMaterial = frameMaterial.clone();
  const guideMaterial = frameMaterial.clone();
  const textileMaterial = new THREE.MeshStandardMaterial({ color: "#B79B75", roughness: 0.82, metalness: 0, transparent: true, opacity: 0.88, side: THREE.DoubleSide });
  const armorMaterial = frameMaterial.clone();
  const windowFrameMaterial = new THREE.MeshStandardMaterial({ color: "#f1f0eb", roughness: 0.42, metalness: 0.04 });
  const mosquitoMaterial = new THREE.MeshBasicMaterial({ color: "#555555", transparent: true, opacity: 0.3, side: THREE.DoubleSide, wireframe: true });
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
    group.add(mesh);
    return mesh;
  };

  const contextBox = (...args) => {
    const mesh = box(...args);
    mesh.userData.arExclude = true;
    return mesh;
  };

  const addTechnicalWall = (width, height) => {
    const wall = box(root, wallMaterial, width + 0.8, height + 0.8, 0.14, 0, (height + 0.8) / 2, -0.18, "TechnicalWall");
    wall.userData.arExclude = true;
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

  const addWindowFacade = (width, height, hardwareHeight, guideWidth, requestedCount) => {
    const layout = windowCoverLayout(width, requestedCount, guideWidth * 2 + 0.08);
    const sillHeight = 0.28;
    const topMargin = 0.5;
    const openingHeight = height + hardwareHeight + 0.07;
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
    for (const x of layout.centers) {
      contextBox(root, windowFrameMaterial, layout.apertureWidth + 0.08, 0.045, 0.3, x, sillHeight - 0.015, -0.08, "WindowSill");
    }
    return { ...layout, sillHeight, openingHeight, wallHeight };
  };

  const createScreen = (config) => {
    const { width, height } = config;
    coverMaterial.color.set(colorValue(config.frameColor, "#2B2D2E"));
    textileMaterial.color.set(colorValue(config.fabricColor, "#B79B75"));
    textileMaterial.opacity = config.fabric === "blackout" ? 0.98 : config.fabric === "privacy" ? 0.9 : 0.72;
    const cassette = Number(config.visual?.cassetteSize || 0.105);
    const guideWidth = Number(config.visual?.guideWidth || 0.025) * (config.guideType === "zip" ? 1.25 : 1);
    const depthOffset = config.mounting === "front" ? 0.07 : config.mounting === "reveal" ? -0.05 : config.mounting === "under-plaster" ? -0.065 : -0.08;
    const layout = addWindowFacade(width, height, cassette, guideWidth, config.unitCount);
    const lowered = Math.max(0.002, height * config.openingPercent / 100);
    for (const centerX of layout.centers) {
      const unit = new THREE.Group();
      unit.position.set(centerX, layout.sillHeight, 0);
      unit.name = "WindowScreenInReveal";
      root.add(unit);
      addWindow(unit, width, height);
      box(unit, coverMaterial, width + guideWidth * 2, cassette, cassette, 0, height + cassette / 2, depthOffset, "WindowScreenCassette", "screen-cassette", "x");
      for (const x of [-width / 2 - guideWidth / 2, width / 2 + guideWidth / 2]) {
        box(unit, coverMaterial, guideWidth, height, 0.055, x, height / 2, depthOffset, "WindowScreenGuide", "screen-guide", "y");
      }
      const fabric = new THREE.Mesh(new THREE.PlaneGeometry(Math.max(0.1, width - 0.02), lowered), textileMaterial);
      fabric.position.set(0, height - lowered / 2, depthOffset + 0.032);
      fabric.name = "WindowScreenFabric";
      unit.add(fabric);
      box(unit, coverMaterial, width, Number(config.visual?.bottomBarHeight || 0.03), 0.045, 0, height - lowered, depthOffset + 0.035, "WindowScreenBottomBar", "screen-bottom", "x");
    }
    ground.scale.setScalar(Math.max(layout.facadeWidth, layout.wallHeight) * 1.75);
    shadow.scale.set(layout.facadeWidth * 1.25, 1.2, 1);
    frameScene(layout.facadeWidth, 0.9, layout.wallHeight);
  };

  const createShutter = (config) => {
    const { width, height } = config;
    coverMaterial.color.set(colorValue(config.boxColor, "#2B2D2E"));
    armorMaterial.color.set(colorValue(config.armorColor, "#2B2D2E"));
    guideMaterial.color.set(colorValue(config.guideColor, "#2B2D2E"));
    const boxSize = Number(config.visual?.boxSize || 0.165);
    const guideWidth = Number(config.visual?.guideWidth || 0.053);
    const slatPitch = Number(config.visual?.slatPitch || 0.039);
    const depthOffset = config.mounting === "front" ? 0.08 : config.mounting === "reveal" ? -0.075 : config.mounting === "under-plaster" ? -0.09 : -0.105;
    const layout = addWindowFacade(width, height, boxSize, guideWidth, config.unitCount);
    const lowered = height * config.openingPercent / 100;
    const slatCount = Math.max(0, Math.ceil(lowered / slatPitch));
    for (const centerX of layout.centers) {
      const unit = new THREE.Group();
      unit.position.set(centerX, layout.sillHeight, 0);
      unit.name = "RollerShutterInReveal";
      root.add(unit);
      addWindow(unit, width, height);
      box(unit, coverMaterial, width + guideWidth * 2, boxSize, boxSize, 0, height + boxSize / 2, depthOffset, "RollerShutterBox", "shutter-box", "x");
      for (const x of [-width / 2 - guideWidth / 2, width / 2 + guideWidth / 2]) {
        box(unit, guideMaterial, guideWidth, height, 0.06, x, height / 2, depthOffset, "RollerShutterGuide", "shutter-guide", "y");
      }
      if (config.integratedMosquitoNet) {
        const net = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.03, height), mosquitoMaterial);
        net.position.set(0, height / 2, depthOffset + 0.015);
        net.name = "IntegratedMosquitoNet";
        unit.add(net);
      }
    }
    if (slatCount > 0) {
      const template = createProfileMesh(THREE, activeProfiles, "shutter-slat", armorMaterial, width, "x", 0.025, slatPitch * 0.9);
      const slats = new THREE.InstancedMesh(template.geometry, armorMaterial, slatCount * layout.unitCount);
      const matrix = new THREE.Matrix4();
      let instance = 0;
      for (const centerX of layout.centers) {
        for (let index = 0; index < slatCount; index += 1) {
          matrix.makeTranslation(centerX, layout.sillHeight + height - index * slatPitch - slatPitch * 0.45, depthOffset + 0.035);
          slats.setMatrixAt(instance, matrix);
          instance += 1;
        }
      }
      slats.name = "RollerShutterSlatsBatched";
      slats.castShadow = true;
      slats.receiveShadow = true;
      slats.instanceMatrix.needsUpdate = true;
      root.add(slats);
    }
    ground.scale.setScalar(Math.max(layout.facadeWidth, layout.wallHeight) * 1.75);
    shadow.scale.set(layout.facadeWidth * 1.25, 1.2, 1);
    frameScene(layout.facadeWidth, 0.9, layout.wallHeight);
  };

  const createAwning = (config) => {
    const wallHeight = 3.25;
    const mountHeight = 2.75;
    const actualProjection = config.projection * config.openingPercent / 100;
    const pitch = THREE.MathUtils.degToRad(config.pitch);
    coverMaterial.color.set(colorValue(config.frameColor, "#2B2D2E"));
    textileMaterial.color.set(colorValue(config.fabricColor, "#B79B75"));
    textileMaterial.opacity = 0.98;
    addTechnicalWall(config.width, wallHeight);
    const cassetteHeight = config.cassetteType === "full-cassette" ? 0.16 : config.cassetteType === "semi-cassette" ? 0.12 : 0.075;
    box(root, coverMaterial, config.width + 0.12, cassetteHeight, 0.22, 0, mountHeight, 0, "AwningCassette", "awning-cassette", "x");
    const moving = new THREE.Group();
    moving.position.set(0, mountHeight - cassetteHeight / 2, 0.08);
    moving.rotation.x = pitch;
    root.add(moving);
    const cloth = box(moving, textileMaterial, Math.max(0.2, config.width - 0.08), 0.018, Math.max(0.02, actualProjection), 0, 0, actualProjection / 2, "AwningFabric");
    cloth.position.y = -0.015;
    box(moving, coverMaterial, config.width, 0.08, 0.07, 0, -0.04, actualProjection, "AwningFrontBar", "awning-front", "x");
    const armXs = config.width > 5 ? [-config.width * 0.32, 0, config.width * 0.32] : [-config.width * 0.3, config.width * 0.3];
    for (const x of armXs) {
      box(moving, coverMaterial, 0.045, 0.035, Math.max(0.02, actualProjection), x, -0.075, actualProjection / 2, "AwningFoldingArm", "awning-arm", "z");
      if (actualProjection > 0.4) {
        const joint = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 8), coverMaterial);
        joint.position.set(x, -0.075, actualProjection / 2);
        moving.add(joint);
      }
    }
    if (config.led) box(moving, glowMaterial, config.width - 0.18, 0.012, 0.015, 0, -0.087, actualProjection - 0.035, "AwningLED");
    if (config.windSensor || config.sunSensor) box(root, coverMaterial, 0.11, 0.05, 0.055, config.width / 2 + 0.16, mountHeight + 0.08, 0.05, "AwningWeatherSensor");
    ground.scale.setScalar(Math.max(config.width, config.projection) * 1.8);
    shadow.scale.set(config.width * 1.45, Math.max(1, config.projection * 1.4), 1);
    frameScene(config.width, Math.max(1, config.projection), wallHeight);
  };

  const createScene = (config) => {
    root = resetRoot(`${productType}VisualRoot`);
    clearAnimationState();
    activeProfiles = config.profiles || [];
    if (productType === "window-screen") createScreen(config);
    else if (productType === "external-roller-shutter") createShutter(config);
    else createAwning(config);
    return root;
  };

  return {
    productType,
    createScene,
    updateScene: (_scene, config) => createScene(config),
    disposeScene: () => { root = null; },
    getBounds: () => root ? new THREE.Box3().setFromObject(root) : new THREE.Box3(),
  };
}
import { createProfileMesh } from "../core/svg-profile-geometry.js";
