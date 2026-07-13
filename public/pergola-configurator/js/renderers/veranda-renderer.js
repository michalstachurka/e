import { profileMetres } from "../core/profile-definitions.js";

export function createVerandaRenderer(context) {
  const {
    THREE,
    resetRoot,
    frameMaterial,
    roofMaterial,
    glassMaterial,
    screenMaterial,
    wallMaterial,
    glowMaterial,
    ground,
    shadow,
    frameScene,
    clearAnimationState,
  } = context;
  let root = null;

  const box = (group, material, width, height, depth, x, y, z, rotationX = 0) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.rotation.x = rotationX;
    group.add(mesh);
    return mesh;
  };

  const configureRoofMaterial = (kind) => {
    const variants = {
      "clear-glass": { color: "#DDE8EA", opacity: 0.3, roughness: 0.08 },
      "smoked-glass": { color: "#4C5558", opacity: 0.46, roughness: 0.12 },
      "clear-polycarbonate": { color: "#D8E5E2", opacity: 0.48, roughness: 0.28 },
      "opal-polycarbonate": { color: "#ECEDE6", opacity: 0.82, roughness: 0.6 },
    };
    const variant = variants[kind] || variants["clear-glass"];
    roofMaterial.color.set(variant.color);
    roofMaterial.opacity = variant.opacity;
    roofMaterial.roughness = variant.roughness;
    roofMaterial.needsUpdate = true;
  };

  const wallFillMaterial = (kind) => kind === "zip-screen" ? screenMaterial : kind === "solid" ? wallMaterial : glassMaterial;

  const sideRotation = (side) => side === "left" ? -Math.PI / 2 : Math.PI / 2;

  const addTriangleFill = (group, side, kind, config) => {
    if (!kind || kind === "none") return;
    const direction = side === "left" ? -1 : 1;
    const rise = config.backHeight - config.frontHeight;
    if (rise <= 0.02) return;
    const shape = new THREE.Shape();
    shape.moveTo(-config.depth / 2, 0);
    shape.lineTo(config.depth / 2, 0);
    shape.lineTo(-config.depth / 2, rise);
    shape.closePath();
    const wedge = new THREE.Mesh(new THREE.ShapeGeometry(shape), wallFillMaterial(kind));
    wedge.position.set(direction * (config.width / 2 - 0.018), config.frontHeight, 0);
    wedge.rotation.y = sideRotation(side);
    wedge.name = `VerandaSideTriangle_${side}`;
    group.add(wedge);
  };

  const addZipScreen = (group, side, config, withSupport) => {
    const direction = side === "left" ? -1 : 1;
    const x = direction * (config.width / 2 - 0.024);
    const rotationY = sideRotation(side);
    const span = Math.max(0.4, config.depth - 0.1);
    const cassetteHeight = Number(config.visual?.screenCassetteHeight || 0.105);
    const cassetteDepth = Number(config.visual?.screenCassetteDepth || 0.11);
    const supportDepth = profileMetres(config.profiles, "screen-support", "a", 0.05);
    const supportHeight = profileMetres(config.profiles, "screen-support", "b", 0.08);
    let cursorY = config.frontHeight;

    if (withSupport) {
      const support = new THREE.Mesh(new THREE.BoxGeometry(span, supportHeight, supportDepth), frameMaterial);
      support.position.set(x, cursorY - supportHeight / 2, 0);
      support.rotation.y = rotationY;
      support.name = `VerandaScreenSupport_${side}`;
      group.add(support);
      cursorY -= supportHeight;
    }

    const cassette = new THREE.Mesh(new THREE.BoxGeometry(span, cassetteHeight, cassetteDepth), frameMaterial);
    cassette.position.set(x, cursorY - cassetteHeight / 2, 0);
    cassette.rotation.y = rotationY;
    cassette.name = `VerandaScreenCassette_${side}`;
    group.add(cassette);
    cursorY -= cassetteHeight;

    const fabricHeight = Math.max(0.2, cursorY);
    const fabric = new THREE.Mesh(new THREE.PlaneGeometry(span, fabricHeight), screenMaterial);
    fabric.position.set(x, fabricHeight / 2, 0);
    fabric.rotation.y = rotationY;
    fabric.name = `VerandaScreenFabric_${side}`;
    group.add(fabric);

    const bottomBar = new THREE.Mesh(new THREE.BoxGeometry(span, 0.05, 0.075), frameMaterial);
    bottomBar.position.set(x, 0.025, 0);
    bottomBar.rotation.y = rotationY;
    bottomBar.name = `VerandaScreenBottomBar_${side}`;
    group.add(bottomBar);

    const guideGeometry = new THREE.BoxGeometry(0.05, fabricHeight, 0.075);
    for (const z of [-span / 2, span / 2]) {
      const guide = new THREE.Mesh(guideGeometry, frameMaterial);
      guide.position.set(x, fabricHeight / 2, z);
      guide.rotation.y = rotationY;
      guide.name = `VerandaScreenGuide_${side}`;
      group.add(guide);
    }
  };

  const addSideFill = (group, side, kind, config, withSupport) => {
    if (kind === "none") return;
    const direction = side === "left" ? -1 : 1;
    const x = direction * (config.width / 2 - 0.018);
    const rotationY = sideRotation(side);
    const material = wallFillMaterial(kind);
    if (kind === "top-wedge") {
      addTriangleFill(group, side, "full-glass", config);
      return;
    }
    if (kind === "zip-screen") {
      addZipScreen(group, side, config, withSupport);
      return;
    }
    const paneCount = kind === "sliding-glass" ? 3 : 1;
    const paneWidth = config.depth / paneCount;
    for (let index = 0; index < paneCount; index += 1) {
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(paneWidth - 0.025, config.frontHeight), material);
      pane.position.set(x, config.frontHeight / 2, -config.depth / 2 + paneWidth * (index + 0.5));
      pane.rotation.y = rotationY;
      pane.name = `VerandaSideFill_${side}`;
      group.add(pane);
    }
  };

  const addFrontFill = (group, kind, config) => {
    if (kind === "none") return;
    const material = wallFillMaterial(kind);
    const paneCount = kind === "sliding-glass" ? Math.max(2, Math.round(config.width / 1.2)) : 1;
    const paneWidth = config.width / paneCount;
    for (let index = 0; index < paneCount; index += 1) {
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(paneWidth - 0.025, config.frontHeight), material);
      pane.position.set(-config.width / 2 + paneWidth * (index + 0.5), config.frontHeight / 2, config.depth / 2 - 0.02);
      pane.name = "VerandaFrontFill";
      group.add(pane);
    }
  };

  const createScene = (config) => {
    root = resetRoot("VerandaVisualRoot");
    clearAnimationState();
    configureRoofMaterial(config.roofMaterial);
    const postWidth = profileMetres(config.profiles, "structural-post", "a", Number(config.visual?.postSize || 0.13));
    const postDepth = profileMetres(config.profiles, "structural-post", "b", Number(config.visual?.postSize || 0.13));
    const post = Math.max(postWidth, postDepth);
    const beamDepth = profileMetres(config.profiles, "frame-beam", "a", post);
    const beam = profileMetres(config.profiles, "frame-beam", "b", Number(config.visual?.beamHeight || 0.17));
    const rafterWidth = profileMetres(config.profiles, "roof-rafter", "a", Number(config.visual?.rafterWidth || 0.08));
    const rafterHeight = profileMetres(config.profiles, "roof-rafter", "b", Number(config.visual?.rafterHeight || beam * 0.72));
    const roofThickness = Number(config.visual?.roofThickness || 0.018);
    const angle = THREE.MathUtils.degToRad(config.roofAngle);
    const roofLength = Math.hypot(config.depth, config.backHeight - config.frontHeight);
    const midHeight = (config.backHeight + config.frontHeight) / 2;

    box(root, frameMaterial, config.width, beam, beamDepth, 0, config.backHeight - beam / 2, -config.depth / 2 + beamDepth / 2);
    box(root, frameMaterial, config.width, beam, beamDepth, 0, config.frontHeight - beam / 2, config.depth / 2 - beamDepth / 2);
    box(root, frameMaterial, beamDepth, beam, roofLength, -config.width / 2 + beamDepth / 2, midHeight - beam / 2, 0, angle);
    box(root, frameMaterial, beamDepth, beam, roofLength, config.width / 2 - beamDepth / 2, midHeight - beam / 2, 0, angle);

    const postGeometry = new THREE.BoxGeometry(postWidth, config.frontHeight, postDepth);
    const posts = new THREE.InstancedMesh(postGeometry, frameMaterial, config.postCount);
    const matrix = new THREE.Matrix4();
    for (let index = 0; index < config.postCount; index += 1) {
      const x = config.postCount === 1 ? 0 : -config.width / 2 + postWidth / 2 + ((config.width - postWidth) * index) / (config.postCount - 1);
      matrix.makeTranslation(x, config.frontHeight / 2, config.depth / 2 - postDepth / 2);
      posts.setMatrixAt(index, matrix);
    }
    posts.instanceMatrix.needsUpdate = true;
    posts.name = "VerandaPosts";
    root.add(posts);

    const rafterGeometry = new THREE.BoxGeometry(rafterWidth, rafterHeight, roofLength - beamDepth * 1.3);
    const rafters = new THREE.InstancedMesh(rafterGeometry, frameMaterial, config.rafterCount);
    const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(angle, 0, 0));
    for (let index = 0; index < config.rafterCount; index += 1) {
      const x = config.rafterCount === 1 ? 0 : -config.width / 2 + post + ((config.width - 2 * post) * index) / (config.rafterCount - 1);
      matrix.compose(new THREE.Vector3(x, midHeight, 0), quaternion, new THREE.Vector3(1, 1, 1));
      rafters.setMatrixAt(index, matrix);
    }
    rafters.instanceMatrix.needsUpdate = true;
    rafters.name = "VerandaRafters";
    root.add(rafters);

    const fieldWidth = (config.width - 2 * beamDepth) / config.roofFields;
    const panelGeometry = new THREE.BoxGeometry(Math.max(0.2, fieldWidth - 0.035), roofThickness, roofLength - beamDepth * 1.5);
    const panels = new THREE.InstancedMesh(panelGeometry, roofMaterial, config.roofFields);
    for (let index = 0; index < config.roofFields; index += 1) {
      const x = -config.width / 2 + beamDepth + fieldWidth * (index + 0.5);
      matrix.compose(new THREE.Vector3(x, midHeight + 0.035, 0), quaternion, new THREE.Vector3(1, 1, 1));
      panels.setMatrixAt(index, matrix);
    }
    panels.instanceMatrix.needsUpdate = true;
    panels.name = "VerandaRoofPanels";
    root.add(panels);

    const technicalWall = box(root, wallMaterial, config.width + 0.7, config.backHeight + 0.6, 0.12, 0, (config.backHeight + 0.6) / 2, -config.depth / 2 - 0.06);
    technicalWall.name = "TechnicalWall";
    technicalWall.userData.arExclude = true;

    addSideFill(root, "left", config.leftWall, config, config.leftScreenSupport);
    addSideFill(root, "right", config.rightWall, config, config.rightScreenSupport);
    if (config.leftWall !== "top-wedge") addTriangleFill(root, "left", config.leftTriangle, config);
    if (config.rightWall !== "top-wedge") addTriangleFill(root, "right", config.rightTriangle, config);
    addFrontFill(root, config.frontWall, config);

    if (config.lighting) {
      box(root, glowMaterial, config.width - 2 * post, 0.012, 0.018, 0, config.frontHeight - beam - 0.01, config.depth / 2 - post * 0.8).name = "LED_Linear";
    }

    ground.scale.setScalar(Math.max(config.width, config.depth) * 1.9);
    shadow.scale.set(config.width * 1.55, config.depth * 1.65, 1);
    frameScene(config.width, config.depth, config.backHeight);
    return root;
  };

  return {
    productType: "veranda",
    createScene,
    updateScene: (_scene, config) => createScene(config),
    disposeScene: () => { root = null; },
    getBounds: () => root ? new THREE.Box3().setFromObject(root) : new THREE.Box3(),
  };
}
