import { createProfileMesh } from "../core/svg-profile-geometry.js";

const COLOR_VALUES = {
  anthracite: "#2B2D2E",
  "warm-white": "#E8E6E0",
  black: "#0E0F10",
  bronze: "#4A3527",
};

const colorValue = (value, fallback) => COLOR_VALUES[value] || value || fallback;

export function createMetalGarageRenderer(context) {
  const {
    THREE,
    resetRoot,
    frameMaterial,
    glassMaterial,
    ground,
    shadow,
    frameScene,
    clearAnimationState,
    antiCondensationMaterial,
  } = context;
  const structuralMaterial = frameMaterial.clone();
  const wallSheetMaterial = frameMaterial.clone();
  const roofSheetMaterial = frameMaterial.clone();
  const gateMaterial = frameMaterial.clone();
  const trimMaterial = frameMaterial.clone();
  const darkRecessMaterial = new THREE.MeshStandardMaterial({ color: "#181918", roughness: 0.75, metalness: 0.08 });
  const windowFrameMaterial = new THREE.MeshStandardMaterial({ color: "#d8d7d1", roughness: 0.48, metalness: 0.12 });
  let root = null;
  let activeProfiles = [];

  const visualNumber = (config, key, fallback) => Number(config.visual?.[key] || fallback);

  const box = (group, material, width, height, depth, x, y, z, name = "") => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  const profile = (group, material, profileId, length, axis, a, b, x, y, z, name) => {
    const mesh = createProfileMesh(THREE, activeProfiles, profileId, material, length, axis, a, b);
    mesh.position.set(x, y, z);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  const addRibs = (group, orientation, width, height, depth, x, y, z, axis, config, name) => {
    const pitch = visualNumber(config, "wallRibPitch", 0.24);
    const ribDepth = visualNumber(config, "wallRibDepth", 0.026);
    const horizontalSpan = axis === "x" ? width : depth;
    const count = Math.max(1, Math.floor((orientation === "vertical" ? horizontalSpan : height) / pitch));
    const geometry = axis === "x"
      ? new THREE.BoxGeometry(orientation === "vertical" ? 0.025 : width, orientation === "vertical" ? height : 0.025, ribDepth)
      : new THREE.BoxGeometry(ribDepth, orientation === "vertical" ? height : 0.025, orientation === "vertical" ? 0.025 : depth);
    const ribs = new THREE.InstancedMesh(geometry, wallSheetMaterial, count);
    const matrix = new THREE.Matrix4();
    for (let index = 0; index < count; index += 1) {
      const offset = -((count - 1) * pitch) / 2 + index * pitch;
      matrix.makeTranslation(
        x + (axis === "x" && orientation === "vertical" ? offset : 0),
        y + (orientation === "horizontal" ? offset : 0),
        z + (axis === "z" && orientation === "vertical" ? offset : 0),
      );
      ribs.setMatrixAt(index, matrix);
    }
    ribs.instanceMatrix.needsUpdate = true;
    ribs.name = name;
    ribs.castShadow = true;
    ribs.receiveShadow = true;
    group.add(ribs);
  };

  const addWallPanel = (width, height, x, y, z, axis, config, name) => {
    if (width < 0.04 || height < 0.04) return;
    const thickness = visualNumber(config, "wallSheetThickness", 0.018);
    const panel = axis === "x"
      ? box(root, wallSheetMaterial, width, height, thickness, x, y, z, name)
      : box(root, wallSheetMaterial, thickness, height, width, x, y, z, name);
    panel.userData.profileId = "garage-wall-sheet";
    addRibs(root, config.wallSheetOrientation, axis === "x" ? width : thickness, height, axis === "z" ? width : thickness, x, y, z + (axis === "x" ? thickness : 0), axis, config, `${name}Ribs`);
  };

  const addRoofRibs = (roofGroup, span, depth, config, name) => {
    const pitch = visualNumber(config, "roofRibPitch", 0.24);
    const ribDepth = visualNumber(config, "roofRibDepth", 0.035);
    const count = Math.max(2, Math.floor(span / pitch));
    const ribs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.035, ribDepth, depth), roofSheetMaterial, count);
    const matrix = new THREE.Matrix4();
    for (let index = 0; index < count; index += 1) {
      const x = -span / 2 + ((index + 0.5) * span) / count;
      matrix.makeTranslation(x, ribDepth / 2, 0);
      ribs.setMatrixAt(index, matrix);
    }
    ribs.instanceMatrix.needsUpdate = true;
    ribs.name = name;
    ribs.castShadow = true;
    ribs.receiveShadow = true;
    roofGroup.add(ribs);
  };

  const addGableEnd = (config, z, rise, name) => {
    const thickness = visualNumber(config, "wallSheetThickness", 0.018);
    const shape = new THREE.Shape();
    shape.moveTo(-config.width / 2, 0);
    shape.lineTo(config.width / 2, 0);
    shape.lineTo(0, rise);
    shape.closePath();
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, steps: 1, bevelEnabled: false, curveSegments: 1 });
    geometry.translate(0, config.wallHeight, -thickness / 2);
    const mesh = new THREE.Mesh(geometry, wallSheetMaterial);
    mesh.position.z = z;
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
  };

  const addMonoRoofWedge = (config, x, rise, name) => {
    const thickness = visualNumber(config, "wallSheetThickness", 0.018);
    const shape = new THREE.Shape();
    shape.moveTo(-config.depth / 2, 0);
    shape.lineTo(config.depth / 2, 0);
    shape.lineTo(config.depth / 2, rise);
    shape.closePath();
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, steps: 1, bevelEnabled: false, curveSegments: 1 });
    geometry.translate(0, config.wallHeight, -thickness / 2);
    const mesh = new THREE.Mesh(geometry, wallSheetMaterial);
    mesh.position.x = x;
    mesh.rotation.y = -Math.PI / 2;
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
  };

  const addRoofSection = (config, { width, depth, x, y, z, rotationX = 0, rotationZ = 0, name }) => {
    const section = new THREE.Group();
    section.position.set(x, y, z);
    section.rotation.set(rotationX, 0, rotationZ);
    section.name = name;
    root.add(section);
    const thickness = visualNumber(config, "roofSheetThickness", 0.018);
    box(section, roofSheetMaterial, width, thickness, depth, 0, 0, 0, "GarageRoofSheet");
    addRoofRibs(section, width, depth, config, "GarageRoofRibs");
    if (config.antiCondensationFelt && antiCondensationMaterial) {
      const felt = box(section, antiCondensationMaterial, Math.max(0.1, width - 0.03), 0.007, Math.max(0.1, depth - 0.03), 0, -thickness / 2 - 0.004, 0, "GarageAntiCondensationLayer");
      felt.castShadow = false;
    }
    return section;
  };

  const addGate = (config, x, gateWidth, gateHeight, index) => {
    const inset = visualNumber(config, "gateInset", 0.035);
    const gate = new THREE.Group();
    gate.position.set(x, 0, config.depth / 2 + inset);
    gate.name = `GarageGate_${index + 1}`;
    root.add(gate);
    const frameA = 0.05;
    profile(gate, trimMaterial, "garage-gate-frame", gateHeight, "y", frameA, frameA, -gateWidth / 2, gateHeight / 2, 0, "GarageGateFrameLeft");
    profile(gate, trimMaterial, "garage-gate-frame", gateHeight, "y", frameA, frameA, gateWidth / 2, gateHeight / 2, 0, "GarageGateFrameRight");
    profile(gate, trimMaterial, "garage-gate-frame", gateWidth + frameA, "x", frameA, frameA, 0, gateHeight, 0, "GarageGateFrameTop");
    box(gate, gateMaterial, gateWidth - 0.035, gateHeight - 0.035, 0.035, 0, gateHeight / 2, 0.02, "GarageGateLeaf");
    if (config.gateType === "sectional") {
      for (let row = 1; row < 5; row += 1) box(gate, trimMaterial, gateWidth - 0.08, 0.018, 0.018, 0, (gateHeight * row) / 5, 0.043, "GarageGateSectionJoint");
    } else if (config.gateType === "double-leaf") {
      box(gate, trimMaterial, 0.025, gateHeight - 0.08, 0.025, 0, gateHeight / 2, 0.043, "GarageGateLeafJoint");
      for (const direction of [-1, 1]) {
        const braceLength = Math.hypot(gateWidth / 2 - 0.14, gateHeight - 0.18);
        const brace = box(gate, trimMaterial, 0.028, braceLength, 0.02, direction * gateWidth / 4, gateHeight / 2, 0.045, "GarageGateBrace");
        brace.rotation.z = direction * Math.atan2(gateWidth / 2 - 0.14, gateHeight - 0.18);
      }
    } else {
      for (const xOffset of [-gateWidth * 0.32, gateWidth * 0.32]) box(gate, trimMaterial, 0.02, gateHeight - 0.12, 0.02, xOffset, gateHeight / 2, 0.043, "GarageGateStiffener");
    }
    if (config.gateDrive) box(gate, structuralMaterial, 0.28, 0.12, 0.24, 0, gateHeight + 0.12, -0.18, "GarageGateDrive");
  };

  const addDoor = (config) => {
    if (!config.personnelDoor) return;
    const width = 0.9;
    const height = Math.min(2.05, config.wallHeight - 0.1);
    const door = new THREE.Group();
    door.position.set(-config.width / 2 - 0.025, 0, config.depth * 0.18);
    door.name = "GaragePersonnelDoor";
    root.add(door);
    box(door, darkRecessMaterial, 0.028, height + 0.08, width + 0.08, 0, height / 2, 0, "GarageDoorRecess");
    box(door, gateMaterial, 0.035, height, width, -0.02, height / 2, 0, "GarageDoorLeaf");
    box(door, trimMaterial, 0.028, 0.055, 0.16, -0.045, height * 0.52, -width * 0.3, "GarageDoorHandle");
  };

  const addWindows = (config) => {
    if (!config.windowCount) return;
    const available = config.depth * 0.72;
    const windowWidth = Math.min(0.95, Math.max(0.62, available / config.windowCount - 0.18));
    const height = 0.72;
    for (let index = 0; index < config.windowCount; index += 1) {
      const z = config.windowCount === 1 ? 0 : -available / 2 + (available * index) / (config.windowCount - 1);
      const windowGroup = new THREE.Group();
      windowGroup.position.set(config.width / 2 + 0.026, 1.45, z);
      windowGroup.rotation.y = Math.PI / 2;
      windowGroup.name = `GarageWindow_${index + 1}`;
      root.add(windowGroup);
      box(windowGroup, darkRecessMaterial, windowWidth + 0.1, height + 0.1, 0.03, 0, 0, 0, "GarageWindowRecess");
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(windowWidth, height), glassMaterial);
      pane.position.z = 0.022;
      pane.name = "GarageWindowGlass";
      windowGroup.add(pane);
      const frame = 0.045;
      box(windowGroup, windowFrameMaterial, windowWidth + frame * 2, frame, 0.025, 0, height / 2 + frame / 2, 0.035, "GarageWindowFrameTop");
      box(windowGroup, windowFrameMaterial, windowWidth + frame * 2, frame, 0.025, 0, -height / 2 - frame / 2, 0.035, "GarageWindowFrameBottom");
      box(windowGroup, windowFrameMaterial, frame, height, 0.025, -windowWidth / 2 - frame / 2, 0, 0.035, "GarageWindowFrameLeft");
      box(windowGroup, windowFrameMaterial, frame, height, 0.025, windowWidth / 2 + frame / 2, 0, 0.035, "GarageWindowFrameRight");
    }
  };

  const addCanopy = (config) => {
    if (!config.sideCanopy) return;
    const direction = config.sideCanopySide === "left" ? -1 : 1;
    const width = config.sideCanopyWidth;
    const drop = Math.min(0.28, width * 0.1);
    const slopeWidth = Math.hypot(width, drop);
    const angle = -direction * Math.atan2(drop, width);
    const canopyX = direction * (config.width / 2 + width / 2);
    addRoofSection(config, {
      width: slopeWidth,
      depth: config.depth + 0.18,
      x: canopyX,
      y: config.wallHeight - drop / 2,
      z: 0,
      rotationZ: angle,
      name: "GarageSideCanopyRoof",
    });
    const outerX = direction * (config.width / 2 + width - 0.05);
    const postHeight = config.wallHeight - drop;
    for (const z of [-config.depth / 2 + 0.08, config.depth / 2 - 0.08]) {
      profile(root, structuralMaterial, "garage-canopy-post", postHeight, "y", 0.07, 0.07, outerX, postHeight / 2, z, "GarageCanopyPost");
    }
  };

  const addGutters = (config) => {
    if (!config.gutters) return;
    const gutterMaterial = trimMaterial;
    if (config.roofType === "gable") {
      for (const direction of [-1, 1]) {
        const gutter = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, config.depth + 0.16, 12, 1, false, 0, Math.PI), gutterMaterial);
        gutter.rotation.x = Math.PI / 2;
        gutter.position.set(direction * (config.width / 2 + 0.055), config.wallHeight - 0.025, 0);
        gutter.name = "GarageGutter";
        root.add(gutter);
      }
    } else {
      const gutter = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, config.width + 0.16, 12, 1, false, 0, Math.PI), gutterMaterial);
      gutter.rotation.z = Math.PI / 2;
      gutter.position.set(0, config.wallHeight - 0.025, -config.depth / 2 - 0.055);
      gutter.name = "GarageGutter";
      root.add(gutter);
    }
    box(root, gutterMaterial, 0.065, config.wallHeight - 0.18, 0.065, config.width / 2 + 0.07, (config.wallHeight - 0.18) / 2, -config.depth / 2 + 0.06, "GarageDownpipe");
  };

  const createScene = (config) => {
    root = resetRoot("MetalGarageVisualRoot");
    clearAnimationState();
    activeProfiles = config.profiles || [];
    structuralMaterial.color.set("#343536");
    wallSheetMaterial.color.set(colorValue(config.wallColor, "#2B2D2E"));
    roofSheetMaterial.color.set(colorValue(config.roofColor, "#2B2D2E"));
    gateMaterial.color.set(colorValue(config.gateColor, "#2B2D2E"));
    trimMaterial.color.set(colorValue(config.gateColor, "#2B2D2E"));

    const width = config.width;
    const depth = config.depth;
    const height = config.wallHeight;
    const frameSize = visualNumber(config, "frameWidth", 0.06);
    for (const x of [-width / 2 + frameSize / 2, width / 2 - frameSize / 2]) {
      for (const z of [-depth / 2 + frameSize / 2, depth / 2 - frameSize / 2]) {
        profile(root, structuralMaterial, "garage-frame", height, "y", frameSize, frameSize, x, height / 2, z, "GarageCornerPost");
        if (config.anchoring) box(root, structuralMaterial, 0.16, 0.018, 0.16, x, 0.009, z, "GarageAnchorPlate");
      }
    }
    for (const z of [-depth / 2 + frameSize / 2, depth / 2 - frameSize / 2]) {
      profile(root, structuralMaterial, "garage-frame", width, "x", frameSize, frameSize, 0, height - frameSize / 2, z, "GarageWallTopBeam");
    }
    for (const x of [-width / 2 + frameSize / 2, width / 2 - frameSize / 2]) {
      profile(root, structuralMaterial, "garage-frame", depth, "z", frameSize, frameSize, x, height - frameSize / 2, 0, "GarageSideTopBeam");
    }

    const gateCount = Math.max(1, Math.min(2, Math.round(config.gateCount)));
    const gateGap = 0.16;
    const gateWidth = Math.min(gateCount === 2 ? 2.65 : 3.35, (width - 0.55 - gateGap * (gateCount - 1)) / gateCount);
    const gatesSpan = gateCount * gateWidth + (gateCount - 1) * gateGap;
    const gateHeight = Math.min(2.18, height - 0.12);
    const gateCenters = Array.from({ length: gateCount }, (_, index) => -gatesSpan / 2 + gateWidth / 2 + index * (gateWidth + gateGap));
    addWallPanel(width, height - gateHeight, 0, gateHeight + (height - gateHeight) / 2, depth / 2, "x", config, "GarageFrontWallTop");
    const leftEdgeWidth = Math.max(0, (width - gatesSpan) / 2);
    addWallPanel(leftEdgeWidth, gateHeight, -width / 2 + leftEdgeWidth / 2, gateHeight / 2, depth / 2, "x", config, "GarageFrontWallLeft");
    addWallPanel(leftEdgeWidth, gateHeight, width / 2 - leftEdgeWidth / 2, gateHeight / 2, depth / 2, "x", config, "GarageFrontWallRight");
    if (gateCount === 2) addWallPanel(gateGap, gateHeight, 0, gateHeight / 2, depth / 2, "x", config, "GarageFrontWallPier");
    gateCenters.forEach((x, index) => addGate(config, x, gateWidth, gateHeight, index));
    addWallPanel(width, height, 0, height / 2, -depth / 2, "x", config, "GarageRearWall");
    addWallPanel(depth, height, -width / 2, height / 2, 0, "z", config, "GarageLeftWall");
    addWallPanel(depth, height, width / 2, height / 2, 0, "z", config, "GarageRightWall");
    addDoor(config);
    addWindows(config);

    const overhangDepth = depth + 0.18;
    if (config.roofType === "gable") {
      const rise = visualNumber(config, "roofRise", 0.5);
      const half = width / 2 + 0.09;
      const slope = Math.hypot(half, rise);
      const angle = Math.atan2(rise, half);
      addRoofSection(config, { width: slope, depth: overhangDepth, x: -half / 2, y: height + rise / 2, z: 0, rotationZ: angle, name: "GarageRoofLeft" });
      addRoofSection(config, { width: slope, depth: overhangDepth, x: half / 2, y: height + rise / 2, z: 0, rotationZ: -angle, name: "GarageRoofRight" });
      profile(root, structuralMaterial, "garage-roof-purlin", depth, "z", 0.05, 0.03, 0, height + rise - 0.03, 0, "GarageRoofRidgePurlin");
      addGableEnd(config, depth / 2 + 0.002, rise, "GarageFrontGable");
      addGableEnd(config, -depth / 2 - 0.002, rise, "GarageRearGable");
    } else {
      const rise = visualNumber(config, "monoRoofRise", 0.34);
      const slope = Math.hypot(overhangDepth, rise);
      const angle = Math.atan2(rise, overhangDepth);
      addRoofSection(config, { width, depth: slope, x: 0, y: height + rise / 2, z: 0, rotationX: -angle, name: "GarageMonoRoof" });
      addMonoRoofWedge(config, -width / 2 - 0.002, rise, "GarageLeftRoofWedge");
      addMonoRoofWedge(config, width / 2 + 0.002, rise, "GarageRightRoofWedge");
    }
    addCanopy(config);
    addGutters(config);

    const totalWidth = width + (config.sideCanopy ? config.sideCanopyWidth : 0);
    ground.scale.setScalar(Math.max(totalWidth, depth) * 1.55);
    shadow.scale.set(totalWidth * 1.25, depth * 1.25, 1);
    frameScene(totalWidth, depth, height + visualNumber(config, config.roofType === "gable" ? "roofRise" : "monoRoofRise", 0.5));
    return root;
  };

  return {
    productType: "metal-garage",
    createScene,
    updateScene: (_scene, config) => createScene(config),
    disposeScene: () => { root = null; },
    getBounds: () => root ? new THREE.Box3().setFromObject(root) : new THREE.Box3(),
  };
}
