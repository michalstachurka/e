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

export function createWindowCoverRenderer(context, productType) {
  const { THREE, resetRoot, frameMaterial, glassMaterial, wallMaterial, glowMaterial, ground, shadow, frameScene, clearAnimationState } = context;
  const coverMaterial = frameMaterial.clone();
  const guideMaterial = frameMaterial.clone();
  const textileMaterial = new THREE.MeshStandardMaterial({ color: "#B79B75", roughness: 0.82, metalness: 0, transparent: true, opacity: 0.88, side: THREE.DoubleSide });
  const armorMaterial = frameMaterial.clone();
  const mosquitoMaterial = new THREE.MeshBasicMaterial({ color: "#555555", transparent: true, opacity: 0.3, side: THREE.DoubleSide, wireframe: true });
  let root = null;

  const box = (group, material, width, height, depth, x, y, z, name = "") => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.name = name;
    group.add(mesh);
    return mesh;
  };

  const addTechnicalWall = (width, height) => {
    const wall = box(root, wallMaterial, width + 0.8, height + 0.8, 0.14, 0, (height + 0.8) / 2, -0.18, "TechnicalWall");
    wall.userData.arExclude = true;
  };

  const addWindow = (width, height) => {
    const frame = Math.max(0.045, Math.min(width, height) * 0.045);
    box(root, coverMaterial, width + frame * 2, frame, 0.075, 0, height + frame / 2, -0.015, "WindowFrameTop");
    box(root, coverMaterial, width + frame * 2, frame, 0.075, 0, frame / 2, -0.015, "WindowFrameBottom");
    box(root, coverMaterial, frame, height, 0.075, -width / 2 - frame / 2, height / 2, -0.015, "WindowFrameLeft");
    box(root, coverMaterial, frame, height, 0.075, width / 2 + frame / 2, height / 2, -0.015, "WindowFrameRight");
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMaterial);
    pane.position.set(0, height / 2, -0.045);
    pane.name = "WindowGlass";
    root.add(pane);
  };

  const createScreen = (config) => {
    const { width, height } = config;
    coverMaterial.color.set(colorValue(config.frameColor, "#2B2D2E"));
    textileMaterial.color.set(colorValue(config.fabricColor, "#B79B75"));
    textileMaterial.opacity = config.fabric === "blackout" ? 0.98 : config.fabric === "privacy" ? 0.9 : 0.72;
    const cassette = Number(config.visual?.cassetteSize || 0.105);
    const guideWidth = Number(config.visual?.guideWidth || 0.025) * (config.guideType === "zip" ? 1.25 : 1);
    const depthOffset = config.mounting === "front" ? 0.1 : config.mounting === "reveal" ? 0.045 : 0.015;
    addTechnicalWall(width, height + cassette);
    addWindow(width, height);
    const cassetteMesh = box(root, coverMaterial, width + guideWidth * 2, cassette, cassette, 0, height + cassette / 2, depthOffset, "WindowScreenCassette");
    cassetteMesh.userData.profileId = "screen-cassette";
    for (const x of [-width / 2 - guideWidth / 2, width / 2 + guideWidth / 2]) {
      const guide = box(root, coverMaterial, guideWidth, height, 0.055, x, height / 2, depthOffset, "WindowScreenGuide");
      guide.userData.profileId = "screen-guide";
    }
    const lowered = Math.max(0.002, height * config.openingPercent / 100);
    const fabric = new THREE.Mesh(new THREE.PlaneGeometry(Math.max(0.1, width - 0.02), lowered), textileMaterial);
    fabric.position.set(0, height - lowered / 2, depthOffset + 0.032);
    fabric.name = "WindowScreenFabric";
    root.add(fabric);
    const bottom = box(root, coverMaterial, width, Number(config.visual?.bottomBarHeight || 0.03), 0.045, 0, height - lowered, depthOffset + 0.035, "WindowScreenBottomBar");
    bottom.userData.profileId = "screen-bottom";
    ground.scale.setScalar(Math.max(width, height) * 2.3);
    shadow.scale.set(width * 1.7, 1.1, 1);
    frameScene(width, 0.7, height + cassette);
  };

  const createShutter = (config) => {
    const { width, height } = config;
    coverMaterial.color.set(colorValue(config.boxColor, "#2B2D2E"));
    armorMaterial.color.set(colorValue(config.armorColor, "#2B2D2E"));
    guideMaterial.color.set(colorValue(config.guideColor, "#2B2D2E"));
    const boxSize = Number(config.visual?.boxSize || 0.165);
    const guideWidth = Number(config.visual?.guideWidth || 0.053);
    const slatPitch = Number(config.visual?.slatPitch || 0.039);
    const depthOffset = config.mounting === "front" ? 0.11 : 0.035;
    addTechnicalWall(width, height + boxSize);
    addWindow(width, height);
    const shutterBox = box(root, coverMaterial, width + guideWidth * 2, boxSize, boxSize, 0, height + boxSize / 2, depthOffset, "RollerShutterBox");
    shutterBox.userData.profileId = "shutter-box";
    for (const x of [-width / 2 - guideWidth / 2, width / 2 + guideWidth / 2]) {
      const guide = box(root, guideMaterial, guideWidth, height, 0.06, x, height / 2, depthOffset, "RollerShutterGuide");
      guide.userData.profileId = "shutter-guide";
    }
    const lowered = height * config.openingPercent / 100;
    const slatCount = Math.max(0, Math.ceil(lowered / slatPitch));
    for (let index = 0; index < slatCount; index += 1) {
      const visibleHeight = Math.min(slatPitch * 0.9, lowered - index * slatPitch);
      if (visibleHeight <= 0) continue;
      const slat = box(root, armorMaterial, width, visibleHeight, 0.025, 0, height - index * slatPitch - visibleHeight / 2, depthOffset + 0.035, "RollerShutterSlat");
      slat.userData.profileId = "shutter-slat";
    }
    if (config.integratedMosquitoNet) {
      const net = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.03, height), mosquitoMaterial);
      net.position.set(0, height / 2, depthOffset + 0.015);
      net.name = "IntegratedMosquitoNet";
      root.add(net);
    }
    ground.scale.setScalar(Math.max(width, height) * 2.3);
    shadow.scale.set(width * 1.7, 1.1, 1);
    frameScene(width, 0.7, height + boxSize);
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
    const cassette = box(root, coverMaterial, config.width + 0.12, cassetteHeight, 0.22, 0, mountHeight, 0, "AwningCassette");
    cassette.userData.profileId = "awning-cassette";
    const moving = new THREE.Group();
    moving.position.set(0, mountHeight - cassetteHeight / 2, 0.08);
    moving.rotation.x = pitch;
    root.add(moving);
    const cloth = box(moving, textileMaterial, Math.max(0.2, config.width - 0.08), 0.018, Math.max(0.02, actualProjection), 0, 0, actualProjection / 2, "AwningFabric");
    cloth.position.y = -0.015;
    const front = box(moving, coverMaterial, config.width, 0.08, 0.07, 0, -0.04, actualProjection, "AwningFrontBar");
    front.userData.profileId = "awning-front";
    const armXs = config.width > 5 ? [-config.width * 0.32, 0, config.width * 0.32] : [-config.width * 0.3, config.width * 0.3];
    for (const x of armXs) {
      const arm = box(moving, coverMaterial, 0.045, 0.035, Math.max(0.02, actualProjection), x, -0.075, actualProjection / 2, "AwningFoldingArm");
      arm.userData.profileId = "awning-arm";
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
