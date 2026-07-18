import { profileMetres } from "../core/profile-definitions.js";

const FALLBACK_COLORS = {
  anthracite: "#2B2D2E",
  "warm-white": "#E8E6E0",
  black: "#0E0F10",
  bronze: "#4A3527",
};

export const MAX_SIDE_SHUTTER_PANELS = 4;

export function sideShutterLayout(span, requestedPanelWidth = 1.2) {
  const safeSpan = Math.max(0.5, Number(span) || 0.5);
  const panelCount = Math.max(1, Math.min(MAX_SIDE_SHUTTER_PANELS, Math.ceil(safeSpan / Math.max(0.6, requestedPanelWidth))));
  const gap = 0.025;
  const panelWidth = (safeSpan - gap * (panelCount - 1)) / panelCount;
  const closedCenters = Array.from({ length: panelCount }, (_, index) => -safeSpan / 2 + panelWidth / 2 + index * (panelWidth + gap));
  const stackedCenters = Array.from({ length: panelCount }, (_, index) => -safeSpan / 2 + panelWidth / 2 + index * Math.min(0.055, panelWidth * 0.08));
  return { span: safeSpan, panelCount, panelWidth, gap, closedCenters, stackedCenters };
}

export function addStructureSideShutters({ THREE, root, config, width, depth, height, baseMaterial }) {
  const settings = config.sideShutters;
  if (!settings?.sides || !Object.values(settings.sides).some(Boolean)) return null;

  const material = baseMaterial.clone();
  material.color.set(FALLBACK_COLORS[settings.color] || settings.color || FALLBACK_COLORS.anthracite);
  material.roughness = 0.42;
  material.metalness = 0.62;
  const frameWidth = profileMetres(config.profiles, "side-shutter-frame", "a", Number(config.visual?.sideShutterFrameWidth || 0.045));
  const frameDepth = profileMetres(config.profiles, "side-shutter-frame", "b", 0.038);
  const bladeDepth = profileMetres(config.profiles, "side-shutter-blade", "a", 0.09);
  const bladeThickness = profileMetres(config.profiles, "side-shutter-blade", "b", 0.016);
  const bladePitch = Math.max(bladeThickness * 1.5, Number(config.visual?.sideShutterBladePitch || 0.12));
  const maxPanelWidth = Number(config.visual?.sideShutterPanelMaxWidth || 1.2);
  const panelHeight = Math.max(0.55, height - 0.18);
  const baseY = 0.045;
  const shutterRoot = new THREE.Group();
  shutterRoot.name = "AluminiumSideShutters";
  root.add(shutterRoot);

  const addFrameBar = (target, w, h, d, x, y, z, name) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z);
    mesh.name = name;
    mesh.userData.profileId = "side-shutter-frame";
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    target.add(mesh);
    return mesh;
  };

  const sides = {
    front: { span: width, position: [0, 0, depth / 2 + frameDepth * 0.55], rotationY: 0 },
    back: { span: width, position: [0, 0, -depth / 2 - frameDepth * 0.55], rotationY: Math.PI },
    left: { span: depth, position: [-width / 2 - frameDepth * 0.55, 0, 0], rotationY: -Math.PI / 2 },
    right: { span: depth, position: [width / 2 + frameDepth * 0.55, 0, 0], rotationY: Math.PI / 2 },
  };
  const slideProgress = settings.panelMotion === "sliding" ? Math.max(0, Math.min(1, settings.openingPercent / 100)) : 0;
  const bladeAngle = THREE.MathUtils.degToRad(Math.max(0, Math.min(90, settings.bladeAngle)));

  for (const [side, placement] of Object.entries(sides)) {
    if (!settings.sides[side]) continue;
    const sideRoot = new THREE.Group();
    sideRoot.name = `SideShutters_${side}`;
    sideRoot.position.set(...placement.position);
    sideRoot.rotation.y = placement.rotationY;
    shutterRoot.add(sideRoot);
    const layout = sideShutterLayout(placement.span, maxPanelWidth);

    if (settings.panelMotion === "sliding") {
      addFrameBar(sideRoot, layout.span + frameWidth, frameWidth * 0.58, frameDepth * 0.7, 0, baseY + panelHeight + frameWidth * 0.45, 0, `SideShutterTopTrack_${side}`);
      addFrameBar(sideRoot, layout.span + frameWidth, frameWidth * 0.45, frameDepth * 0.7, 0, baseY + frameWidth * 0.25, 0, `SideShutterBottomGuide_${side}`);
    }

    for (let index = 0; index < layout.panelCount; index += 1) {
      const panel = new THREE.Group();
      const x = THREE.MathUtils.lerp(layout.closedCenters[index], layout.stackedCenters[index], slideProgress);
      panel.position.set(x, baseY, 0);
      panel.name = `SideShutterPanel_${side}_${index + 1}`;
      sideRoot.add(panel);
      const innerWidth = Math.max(0.2, layout.panelWidth - frameWidth * 2);
      const innerHeight = Math.max(0.3, panelHeight - frameWidth * 2);
      addFrameBar(panel, layout.panelWidth, frameWidth, frameDepth, 0, frameWidth / 2, 0, `SideShutterFrameBottom_${side}_${index + 1}`);
      addFrameBar(panel, layout.panelWidth, frameWidth, frameDepth, 0, panelHeight - frameWidth / 2, 0, `SideShutterFrameTop_${side}_${index + 1}`);
      addFrameBar(panel, frameWidth, panelHeight - frameWidth * 2, frameDepth, -layout.panelWidth / 2 + frameWidth / 2, panelHeight / 2, 0, `SideShutterFrameLeft_${side}_${index + 1}`);
      addFrameBar(panel, frameWidth, panelHeight - frameWidth * 2, frameDepth, layout.panelWidth / 2 - frameWidth / 2, panelHeight / 2, 0, `SideShutterFrameRight_${side}_${index + 1}`);

      const horizontal = settings.bladeOrientation === "horizontal";
      const bladeCount = horizontal
        ? Math.max(3, Math.min(36, Math.floor(innerHeight / bladePitch)))
        : Math.max(3, Math.min(24, Math.floor(innerWidth / bladePitch)));
      const geometry = horizontal
        ? new THREE.BoxGeometry(innerWidth, bladeThickness, bladeDepth)
        : new THREE.BoxGeometry(bladeThickness, innerHeight, bladeDepth);
      const blades = new THREE.InstancedMesh(geometry, material, bladeCount);
      const matrix = new THREE.Matrix4();
      const quaternion = new THREE.Quaternion();
      const scale = new THREE.Vector3(1, 1, 1);
      for (let bladeIndex = 0; bladeIndex < bladeCount; bladeIndex += 1) {
        const position = horizontal
          ? new THREE.Vector3(0, frameWidth + innerHeight * (bladeIndex + 0.5) / bladeCount, 0)
          : new THREE.Vector3(-innerWidth / 2 + innerWidth * (bladeIndex + 0.5) / bladeCount, frameWidth + innerHeight / 2, 0);
        quaternion.setFromEuler(new THREE.Euler(horizontal ? bladeAngle : 0, horizontal ? 0 : bladeAngle, 0));
        matrix.compose(position, quaternion, scale);
        blades.setMatrixAt(bladeIndex, matrix);
      }
      blades.instanceMatrix.needsUpdate = true;
      blades.name = `SideShutterBlades_${side}_${index + 1}_${settings.bladeOrientation}_${settings.bladeMotion}`;
      blades.userData.profileId = "side-shutter-blade";
      blades.castShadow = true;
      blades.receiveShadow = true;
      panel.add(blades);
    }
  }
  return shutterRoot;
}
