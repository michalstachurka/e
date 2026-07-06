import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type PergolaParams = {
  width: number; // m (single module)
  depth: number; // m (wysięg)
  height: number; // m
  slatAngle: number; // deg, 0 = closed/flat, up to 120
  frameColor: string;
  slatColor: string;
  modules: 1 | 2;
  lighting: "none" | "linear" | "spots";
};

/** Soft radial ground shadow texture. */
function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(128, 128, 20, 128, 128, 128);
  g.addColorStop(0, "rgba(23,23,23,0.42)");
  g.addColorStop(1, "rgba(23,23,23,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

export function PergolaCanvas({ params }: { params: PergolaParams }) {
  const mount = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    group?: THREE.Group;
    material?: THREE.MeshStandardMaterial;
    slatMaterial?: THREE.MeshStandardMaterial;
    rebuild?: (p: PergolaParams) => void;
  }>({});

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(6.4, 3.4, 7.6);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 4.5;
    controls.maxDistance = 20;
    // Wheel zoom only after the user grabs the model, so page scroll is
    // never hijacked while passing over the canvas.
    controls.enableZoom = false;
    const armZoom = () => (controls.enableZoom = true);
    const disarmZoom = () => (controls.enableZoom = false);
    el.addEventListener("pointerdown", armZoom);
    el.addEventListener("pointerleave", disarmZoom);
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.target.set(0, 1.3, 0);
    controls.autoRotate = !reduce;
    controls.autoRotateSpeed = 0.55;

    // Ground shadow
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.005;
    scene.add(shadow);

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#2b2d2e"),
      roughness: 0.55,
      metalness: 0.35,
    });
    const slatMaterial = material.clone();
    const glowMaterial = new THREE.MeshBasicMaterial({ color: "#ffc98f" });
    glowMaterial.toneMapped = false;

    let group = new THREE.Group();
    scene.add(group);

    const rebuild = (p: PergolaParams) => {
      scene.remove(group);
      group.traverse((o) => {
        if (o instanceof THREE.Mesh) o.geometry.dispose();
        if (o instanceof THREE.Light) o.dispose();
      });
      group = new THREE.Group();

      const H = p.height;
      const post = 0.14;
      const beam = 0.18;
      const { width: W, depth: D } = p;
      const totalW = W * p.modules;

      const buildModule = (cx: number) => {
        const box = (w: number, h: number, d: number, x: number, y: number, z: number) => {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
          m.position.set(cx + x, y, z);
          group.add(m);
        };

        // Posts
        for (const sx of [-1, 1])
          for (const sz of [-1, 1])
            box(post, H, post, (sx * (W - post)) / 2, H / 2, (sz * (D - post)) / 2);
        // Top frame
        box(W, beam, post, 0, H - beam / 2, -(D - post) / 2);
        box(W, beam, post, 0, H - beam / 2, (D - post) / 2);
        box(post, beam, D - 2 * post, -(W - post) / 2, H - beam / 2, 0);
        box(post, beam, D - 2 * post, (W - post) / 2, H - beam / 2, 0);

        // Linear LED strip in the gutters: inner face of the top frame
        if (p.lighting === "linear") {
          const strip = 0.02;
          const y = H - beam + strip;
          const mk = (w: number, d: number, x: number, z: number) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, strip, d), glowMaterial);
            m.position.set(cx + x, y, z);
            group.add(m);
          };
          mk(W - 2 * post, strip, 0, -(D - post) / 2 + post * 0.8);
          mk(W - 2 * post, strip, 0, (D - post) / 2 - post * 0.8);
          mk(strip, D - 2 * post, -(W - post) / 2 + post * 0.8, 0);
          mk(strip, D - 2 * post, (W - post) / 2 - post * 0.8, 0);
          // Underside wash strips along the outer beams
          const under = H - beam - strip;
          const mkU = (w: number, d: number, x: number, z: number) => {
            const m = new THREE.Mesh(new THREE.BoxGeometry(w, strip, d), glowMaterial);
            m.position.set(cx + x, under, z);
            group.add(m);
          };
          mkU(W - 2 * post, 0.05, 0, -(D - post) / 2);
          mkU(W - 2 * post, 0.05, 0, (D - post) / 2);
          mkU(0.05, D - 2 * post, -(W - post) / 2, 0);
          mkU(0.05, D - 2 * post, (W - post) / 2, 0);
        }

        // Louvres (+ optional spots, ~1 per 1.5 m2)
        const slatW = 0.16;
        const gap = 0.05;
        const n = Math.floor((D - 2 * post) / (slatW + gap));
        const span = W - 2 * post;

        let spotSlats = new Set<number>();
        let spotsPerSlat = 0;
        if (p.lighting === "spots") {
          const target = Math.max(2, Math.round((W * D) / 1.5));
          const rows = Math.max(1, Math.round(Math.sqrt(target * (D / W))));
          spotsPerSlat = Math.max(1, Math.round(target / rows));
          const every = Math.max(1, Math.floor(n / rows));
          for (let i = Math.floor(every / 2); i < n; i += every) spotSlats.add(i);
        }

        for (let i = 0; i < n; i++) {
          const z = -(D - 2 * post) / 2 + (i + 0.5) * ((D - 2 * post) / n);
          const slat = new THREE.Mesh(new THREE.BoxGeometry(span, 0.015, slatW), slatMaterial);
          slat.position.set(cx, H - beam / 2, z);
          slat.rotation.x = THREE.MathUtils.degToRad(p.slatAngle);
          group.add(slat);

          if (spotSlats.has(i)) {
            for (let k = 0; k < spotsPerSlat; k++) {
              const x = -span / 2 + ((k + 0.5) * span) / spotsPerSlat;
              const dot = new THREE.Mesh(
                new THREE.CylinderGeometry(0.06, 0.06, 0.05, 16),
                glowMaterial,
              );
              // Child of the slat so spots tilt with the louvre
              dot.position.set(x, -0.045, 0);
              slat.add(dot);
            }
          }
        }
      };

      for (let m = 0; m < p.modules; m++) {
        buildModule((m - (p.modules - 1) / 2) * W);
      }

      // Warm fill light under the roof when any lighting is on
      if (p.lighting !== "none") {
        const pt = new THREE.PointLight("#ffc98f", 32, Math.max(totalW, D) * 2.4, 1.5);
        pt.position.set(0, H - 0.4, 0);
        group.add(pt);
      }

      shadow.scale.set(totalW * 1.6, D * 1.7, 1);
      scene.add(group);

      // Keep the whole structure in frame when dimensions/modules change
      controls.target.set(0, H * 0.55, 0);
      const radius = Math.max(totalW * 1.3, D * 1.9, H * 3.2, 6.5);
      const old = camera.position.clone().sub(controls.target);
      const az = Math.atan2(old.x, old.z);
      const elev = 0.2;
      camera.position.set(
        controls.target.x + radius * Math.sin(az) * Math.cos(Math.asin(elev)),
        controls.target.y + radius * elev,
        controls.target.z + radius * Math.cos(az) * Math.cos(Math.asin(elev)),
      );
    };

    stateRef.current = { group, material, slatMaterial, rebuild };
    rebuild(params);
    material.color.set(params.frameColor);
    slatMaterial.color.set(params.slatColor);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(el);

    const loop = () => {
      if (visible) {
        controls.update();
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      controls.dispose();
      pmrem.dispose();
      renderer.dispose();
      el.removeEventListener("pointerdown", armZoom);
      el.removeEventListener("pointerleave", disarmZoom);
      el.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to parameter changes without rebuilding the scene
  useEffect(() => {
    stateRef.current.rebuild?.(params);
    stateRef.current.material?.color.set(params.frameColor);
    stateRef.current.slatMaterial?.color.set(params.slatColor);
  }, [params]);

  return (
    <div
      ref={mount}
      aria-label="Interaktywny model 3D pergoli — przeciągnij, aby obrócić"
      role="img"
      className="h-full w-full cursor-grab active:cursor-grabbing [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
