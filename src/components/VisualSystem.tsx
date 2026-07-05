import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

const PILLARS = [
  {
    no: "01",
    title: "Kierunek wizualny",
    text: "Ustalamy styl, kategorię, zastosowanie i to, co obraz ma sprzedać.",
  },
  {
    no: "02",
    title: "Prompt engineering",
    text: "Tworzymy precyzyjne prompty pod scenę, materiał, światło, kadr i produkt.",
  },
  {
    no: "03",
    title: "Selekcja",
    text: "Odrzucamy obrazy, które wyglądają sztucznie, generycznie albo nie pokazują oferty.",
  },
  {
    no: "04",
    title: "Korekty",
    text: "Dopracowujemy perspektywę, proporcje, kolor, światło i detale.",
  },
];

// Mosaic tiles fly in from different directions and lock into one composition.
const TILES = [
  {
    image: "/images/system-kierunek.webp",
    alt: "Loftowa kuchnia w graficie, dębie i cegle",
    cls: "col-span-2 row-span-2",
    from: { x: -38, y: -26, r: -3 },
    range: [0.04, 0.24] as [number, number],
  },
  {
    image: "/images/system-prompt.webp",
    alt: "Sztukateria LED w dwukondygnacyjnym holu",
    cls: "col-span-2 row-span-3",
    from: { x: 42, y: -18, r: 3 },
    range: [0.27, 0.47] as [number, number],
  },
  {
    image: "/images/system-selekcja.webp",
    alt: "Drzwi przesuwne w nowoczesnym domu",
    cls: "col-span-2 row-span-2",
    from: { x: -42, y: 26, r: 3 },
    range: [0.5, 0.7] as [number, number],
  },
  {
    image: "/images/system-korekty.webp",
    alt: "Podłoga w jodełkę w świetle dziennym",
    cls: "col-span-1 row-span-1",
    from: { x: 20, y: 48, r: -4 },
    range: [0.73, 0.88] as [number, number],
  },
  {
    image: "/images/detail-spiek.webp",
    alt: "Spiek kwarcowy w pracowni artystycznej",
    cls: "col-span-1 row-span-1",
    from: { x: 48, y: 34, r: 4 },
    range: [0.79, 0.94] as [number, number],
  },
];

function Tile({
  progress,
  tile,
}: {
  progress: MotionValue<number>;
  tile: (typeof TILES)[number];
}) {
  const x = useTransform(progress, tile.range, [`${tile.from.x}%`, "0%"]);
  const y = useTransform(progress, tile.range, [`${tile.from.y}%`, "0%"]);
  const rotate = useTransform(progress, tile.range, [tile.from.r, 0]);
  const opacity = useTransform(
    progress,
    [tile.range[0], tile.range[0] + 0.3 * (tile.range[1] - tile.range[0])],
    [0, 1],
  );
  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      className={`frame-img will-change-transform ${tile.cls}`}
    >
      <img
        src={asset(tile.image)}
        alt={tile.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}

export function VisualSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v < 0.27 ? 0 : v < 0.5 ? 1 : v < 0.73 ? 2 : 3);
  });

  // Static fallback: plain mosaic + pillar list
  if (reduce) {
    return (
      <section id="system" className="bg-vn-bg">
        <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          <p className="eyebrow text-vn-muted">02 — System wizualizacji</p>
          <h2 className="mt-8 max-w-[720px] text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.14]">
            System, który pilnuje obrazu od briefu do finalnego pliku.
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ol className="space-y-8">
              {PILLARS.map((p) => (
                <li key={p.no}>
                  <div className="flex items-baseline gap-4">
                    <span className="spec text-vn-burgundy">{p.no}</span>
                    <h3 className="text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-[0.9375rem] text-vn-muted">{p.text}</p>
                </li>
              ))}
            </ol>
            <div className="grid grid-cols-2 gap-2">
              {TILES.slice(0, 4).map((t) => (
                <div key={t.image} className="frame-img aspect-square">
                  <img src={asset(t.image)} alt={t.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="system" ref={ref} className="relative h-[320vh] bg-vn-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-5 md:px-10 lg:grid-cols-12">
          {/* Rail */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-vn-muted">02 — System wizualizacji</p>
            </Reveal>
            <Reveal delay={0.08} mask>
              <h2 className="mt-6 text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.14]">
                System, który pilnuje obrazu od briefu do finalnego pliku.
              </h2>
            </Reveal>

            <ol className="mt-8 hidden md:block" aria-label="Etapy systemu">
              {PILLARS.map((p, i) => (
                <li
                  key={p.no}
                  className={`border-l-2 py-3.5 pl-6 transition-[border-color,opacity] duration-500 ${
                    active === i
                      ? "border-vn-burgundy opacity-100"
                      : "border-vn-line opacity-40"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`spec ${active === i ? "text-vn-burgundy" : "text-vn-muted"}`}
                    >
                      {p.no}
                    </span>
                    <h3 className="text-lg lg:text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-1.5 max-w-[44ch] text-[0.875rem] leading-relaxed text-vn-muted">
                    {p.text}
                  </p>
                </li>
              ))}
            </ol>
            {/* Compact pillar ticker on small screens */}
            <p className="spec mt-6 text-vn-burgundy md:hidden">
              {PILLARS[active].no} · {PILLARS[active].title}
            </p>
          </div>

          {/* Assembling mosaic */}
          <div className="lg:col-span-7">
            <div className="grid aspect-[4/4.4] max-h-[74vh] w-full grid-cols-4 grid-rows-4 gap-2 sm:gap-3">
              {TILES.map((t) => (
                <Tile key={t.image} progress={scrollYProgress} tile={t} />
              ))}
            </div>
            <div className="spec mt-4 flex justify-between text-vn-muted-light">
              <span>VN—SYS · mozaika procesu</span>
              <span>4 etapy · jedna całość</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
