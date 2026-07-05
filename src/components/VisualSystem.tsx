import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Reveal, EASE } from "./Reveal";
import { asset } from "../lib/asset";
import { SpecPlate } from "./SpecPlate";

const PILLARS = [
  {
    no: "01",
    title: "Kierunek wizualny",
    text: "Ustalamy styl, kategorię, zastosowanie i to, co obraz ma sprzedać.",
    image: "/images/system-kierunek.webp",
    alt: "Loftowa kuchnia w graficie, dębie i cegle",
    plate: ["VN—SYS/01 · kuchnie", "4:5 · direction"] as [string, string],
  },
  {
    no: "02",
    title: "Prompt engineering",
    text: "Tworzymy precyzyjne prompty pod scenę, materiał, światło, kadr i produkt.",
    image: "/images/system-prompt.webp",
    alt: "Sztukateria LED w dwukondygnacyjnym holu",
    plate: ["VN—SYS/02 · sztukateria LED", "4:5 · generated"] as [string, string],
  },
  {
    no: "03",
    title: "Selekcja",
    text: "Odrzucamy obrazy, które wyglądają sztucznie, generycznie albo nie pokazują oferty.",
    image: "/images/system-selekcja.webp",
    alt: "Drzwi przesuwne w nowoczesnym domu",
    plate: ["VN—SYS/03 · drzwi", "16:9 · selected"] as [string, string],
  },
  {
    no: "04",
    title: "Korekty",
    text: "Dopracowujemy perspektywę, proporcje, kolor, światło i detale.",
    image: "/images/system-korekty.webp",
    alt: "Podłoga w jodełkę w świetle dziennym",
    plate: ["VN—SYS/04 · podłogi", "16:9 · refined"] as [string, string],
  },
];

export function VisualSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(3, Math.max(0, Math.floor(v * 4.35))));
  });

  const current = PILLARS[active];

  // Static fallback for reduced motion: simple stacked stages
  if (reduce) {
    return (
      <section id="system" className="bg-vn-bg">
        <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          <p className="eyebrow text-vn-muted">02 — System wizualizacji</p>
          <h2 className="mt-8 max-w-[720px] text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.14]">
            System, który pilnuje obrazu od briefu do finalnego pliku.
          </h2>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <figure key={p.no}>
                <div className="frame-img aspect-[4/3]">
                  <img src={asset(p.image)} alt={p.alt} loading="lazy" />
                </div>
                <figcaption className="mt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="spec text-vn-burgundy">{p.no}</span>
                    <h3 className="text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-[0.9375rem] text-vn-muted">{p.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="system" ref={ref} className="relative h-[300vh] bg-vn-bg">
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

            <ol className="mt-8" aria-label="Etapy systemu">
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
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                      active === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="max-w-[44ch] overflow-hidden text-[0.875rem] leading-relaxed text-vn-muted">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Stage progress */}
            <div className="mt-8 hidden h-px w-full max-w-[280px] bg-vn-line md:block">
              <motion.div
                className="h-px origin-left bg-vn-burgundy"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </div>

          {/* Single frame with wipe transitions */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] max-h-[68vh] w-full overflow-hidden bg-vn-cream">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.image}
                  src={asset(current.image)}
                  alt={current.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.06 }}
                  animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              </AnimatePresence>
              {/* Stage number stamped on the frame */}
              <div className="absolute bottom-4 right-5">
                <span className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-vn-cream/90 [text-shadow:0_2px_24px_rgba(14,11,11,0.5)]">
                  {current.no}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <SpecPlate left={current.plate[0]} right={current.plate[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
