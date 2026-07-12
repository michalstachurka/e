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

  const addSideFill = (group, side, kind, config) => {
    if (kind === "none") return;
    const direction = side === "left" ? -1 : 1;
    const x = direction * (config.width / 2 - 0.018);
    const rise = config.backHeight - config.frontHeight;
    const rotationY = side === "left" ? -Math.PI / 2 : Math.PI / 2;
    const material = wallFillMaterial(kind);
    if (kind === "top-wedge") {
      const shape = new THREE.Shape();
      shape.moveTo(-config.depth / 2, 0);
      shape.lineTo(config.depth / 2, 0);
      shape.lineTo(-config.depth / 2, rise);
      shape.closePath();
      const wedge = new THREE.Mesh(new THREE.ShapeGeometry(shape), glassMaterial);
      wedge.position.set(x, config.frontHeight, 0);
      wedge.rotation.y = rotationY;
      wedge.name = `VerandaTopWedge_${side}`;
      group.add(wedge);
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
    if (rise > 0.02) {
      const shape = new THREE.Shape();
      shape.moveTo(-config.depth / 2, 0);
      shape.lineTo(config.depth / 2, 0);
      shape.lineTo(-config.depth / 2, rise);
      shape.closePath();
      const wedge = new THREE.Mesh(new THREE.ShapeGeometry(shape), material);
      wedge.position.set(x, config.frontHeight, 0);
      wedge.rotation.y = rotationY;
      group.add(wedge);
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
    const post = Number(config.visual?.postSize || 0.13);
    const beam = Number(config.visual?.beamHeight || 0.17);
    const rafterWidth = Number(config.visual?.rafterWidth || 0.08);
    const roofThickness = Number(config.visual?.roofThickness || 0.018);
    const angle = THREE.MathUtils.degToRad(config.roofAngle);
    const roofLength = Math.hypot(config.depth, config.backHeight - config.frontHeight);
    const midHeight = (config.backHeight + config.frontHeight) / 2;

    box(root, frameMaterial, config.width, beam, post, 0, config.backHeight - beam / 2, -config.depth / 2 + post / 2);
    box(root, frameMaterial, config.width, beam, post, 0, config.frontHeight - beam / 2, config.depth / 2 - post / 2);
    box(root, frameMaterial, post, beam, roofLength, -config.width / 2 + post / 2, midHeight - beam / 2, 0, angle);
    box(root, frameMaterial, post, beam, roofLength, config.width / 2 - post / 2, midHeight - beam / 2, 0, angle);

    const postGeometry = new THREE.BoxGeometry(post, config.frontHeight, post);
    const posts = new THREE.InstancedMesh(postGeometry, frameMaterial, config.postCount);
    const matrix = new THREE.Matrix4();
    for (let index = 0; index < config.postCount; index += 1) {
      const x = config.postCount === 1 ? 0 : -config.width / 2 + post / 2 + ((config.width - post) * index) / (config.postCount - 1);
      matrix.makeTranslation(x, config.frontHeight / 2, config.depth / 2 - post / 2);
      posts.setMatrixAt(index, matrix);
    }
    posts.instanceMatrix.needsUpdate = true;
    posts.name = "VerandaPosts";
    root.add(posts);

    const rafterGeometry = new THREE.BoxGeometry(rafterWidth, beam * 0.72, roofLength - post * 1.3);
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

    const fieldWidth = (config.width - 2 * post) / config.roofFields;
    const panelGeometry = new THREE.BoxGeometry(Math.max(0.2, fieldWidth - 0.035), roofThickness, roofLength - post * 1.5);
    const panels = new THREE.InstancedMesh(panelGeometry, roofMaterial, config.roofFields);
    for (let index = 0; index < config.roofFields; index += 1) {
      const x = -config.width / 2 + post + fieldWidth * (index + 0.5);
      matrix.compose(new THREE.Vector3(x, midHeight + 0.035, 0), quaternion, new THREE.Vector3(1, 1, 1));
      panels.setMatrixAt(index, matrix);
    }
    panels.instanceMatrix.needsUpdate = true;
    panels.name = "VerandaRoofPanels";
    root.add(panels);

    const technicalWall = box(root, wallMaterial, config.width + 0.7, config.backHeight + 0.6, 0.12, 0, (config.backHeight + 0.6) / 2, -config.depth / 2 - 0.06);
    technicalWall.name = "TechnicalWall";
    technicalWall.userData.arExclude = true;

    addSideFill(root, "left", config.leftWall, config);
    addSideFill(root, "right", config.rightWall, config);
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
