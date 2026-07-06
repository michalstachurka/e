import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal, EASE } from "./Reveal";
import { asset } from "../lib/asset";
import { SpecPlate } from "./SpecPlate";
import { Parallax } from "./Parallax";

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

function PillarRow({
  p,
  index,
}: {
  p: (typeof PILLARS)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const imageLeft = index % 2 === 0;
  const ref = useRef<HTMLElement>(null);
  // Observe the unclipped row: IntersectionObserver never fires on an
  // element whose own clip-path leaves zero visible area.
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const hidden = reduce
    ? { opacity: 0 }
    : {
        clipPath: imageLeft ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)",
      };
  const shown = reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" };

  return (
    <article ref={ref} className="grid items-center gap-8 md:grid-cols-12 md:gap-0">
      {/* Graphic — horizontal wipe from its outer edge */}
      <div
        className={`md:col-span-7 ${imageLeft ? "md:col-start-1" : "md:col-start-6"} md:row-start-1`}
      >
        <motion.div
          initial={hidden}
          animate={inView ? shown : hidden}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <div className="frame-img aspect-[4/3]">
            <Parallax amount={6}>
              <img src={asset(p.image)} alt={p.alt} loading="lazy" />
            </Parallax>
          </div>
          <div className="mt-3">
            <SpecPlate left={p.plate[0]} right={p.plate[1]} />
          </div>
        </motion.div>
      </div>

      {/* Text beside the graphic, sliding in from its own side */}
      <Reveal
        x={imageLeft ? 120 : -120}
        className={`relative z-10 md:col-span-5 md:row-start-1 ${
          imageLeft ? "md:col-start-8 md:pl-10" : "md:col-start-1 md:pr-10 md:text-right"
        }`}
      >
        <div className="relative">
          {/* Ghost stage number behind the text */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute hidden font-display text-[clamp(7rem,12vw,11rem)] leading-none text-vn-bg-warm md:-top-24 md:block ${
              imageLeft ? "-left-2" : "-right-2"
            }`}
          >
            {p.no}
          </span>
          <div className="relative">
            <span className="spec text-vn-burgundy">
              {p.no} / 04
            </span>
            <h3 className="mt-4 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1]">
              {p.title}
            </h3>
            <p
              className={`mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-vn-muted ${
                imageLeft ? "" : "md:ml-auto"
              }`}
            >
              {p.text}
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function VisualSystem() {
  return (
    <section id="system" className="overflow-hidden bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">02 — System wizualizacji</p>
        </Reveal>
        <Reveal delay={0.08} mask>
          <h2 className="mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            System, który pilnuje obrazu{" "}
            <em className="text-vn-burgundy">od briefu do finalnego pliku</em>.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {PILLARS.map((p, i) => (
            <PillarRow key={p.no} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
