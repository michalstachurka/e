import { useEffect, useRef } from "react";
import * as THREE from "three";

const FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec3 uBase;
  uniform vec3 uGlow;
  uniform vec3 uSheen;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * 1.6;
    float t = uTime * 0.045;

    // Layered flowing silk folds
    float q = fbm(p + vec2(t * 0.7, -t * 0.4));
    float r = fbm(p + q * 1.4 + vec2(-t, t * 0.6));
    float folds = fbm(p * 1.5 + r * 1.8 - vec2(t * 0.5, 0.0));

    vec3 col = uBase;
    col = mix(col, uGlow, smoothstep(0.32, 0.85, folds));
    col = mix(col, uSheen, pow(smoothstep(0.55, 0.95, r * folds + q * 0.25), 2.2) * 0.55);

    // Gentle vignette to seat the type
    float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.5, 0.48)));
    col *= mix(0.62, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

/** Ambient WebGL silk backdrop in brand colors. Fills its (positioned) parent. */
export function SilkCanvas({ className }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uBase: { value: new THREE.Color("#141112") },
      uGlow: { value: new THREE.Color("#5b1825") },
      uSheen: { value: new THREE.Color("#a64a5a") },
    };
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG }),
    );
    scene.add(mesh);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w, h);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let raf = 0;
    let visible = true;
    const start = performance.now();
    const loop = () => {
      if (visible) {
        uniforms.uTime.value = (performance.now() - start) / 1000;
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(el);

    if (reduce) {
      uniforms.uTime.value = 12;
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mount}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full ${className ?? ""}`}
    />
  );
}
