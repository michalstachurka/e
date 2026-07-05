import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";
import { Parallax } from "./Parallax";

const CASES = [
  {
    no: "01",
    title: "6 wizualizacji kategorii dla firmy od drzwi",
    industry: "drzwi",
    image: "/images/case-drzwi.webp",
    alt: "Drzwi dwuskrzydłowe w eleganckiej sali — wizualizacja kategorii",
    spec: "VN—CASE/01 · kategorie · seria 6 · ready",
  },
  {
    no: "02",
    title: "Hero i sekcje dla strony o podłogach",
    industry: "podłogi",
    image: "/images/case-podlogi.webp",
    alt: "Podłoga drewniana w świetle dziennym — kadr hero dla strony o podłogach",
    spec: "VN—CASE/02 · www · hero + sekcje · ready",
  },
  {
    no: "03",
    title: "Pionowe kadry do social media dla studia wnętrz",
    industry: "studio wnętrz",
    image: "/images/case-social.webp",
    alt: "Kamienna ściana w pokoju odsłuchowym — pionowy kadr do social media",
    spec: "VN—CASE/03 · social · 9:16 · ready",
  },
  {
    no: "04",
    title: "Kampania dla firmy od kuchni",
    industry: "kuchnie",
    image: "/images/case-kuchnie.webp",
    alt: "Kuchnia w układzie U — kadr kampanii reklamowej",
    spec: "VN—CASE/04 · kampania · seria · ready",
  },
  {
    no: "05",
    title: "Obrazy ofertowe dla wykonawcy remontów",
    industry: "remonty",
    image: "/images/case-remonty.webp",
    alt: "Schody z oświetleniem LED przypodłogowym — obraz do oferty wykonawcy",
    spec: "VN—CASE/05 · oferta · PDF + www · ready",
  },
];

function CaseRow({ c, index }: { c: (typeof CASES)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const textFromLeft = index % 2 === 1; // text enters from the side opposite the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 0.42"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [textFromLeft ? "-45%" : "45%", "0%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  return (
    <article ref={ref} className="group/card relative">
      {/* Full-bleed frame */}
      <Reveal y={52}>
        <div className="relative">
          <div className="frame-img aspect-[16/10] max-h-[86vh] w-full md:aspect-[16/8.5]">
            <Parallax amount={8}>
              <img src={asset(c.image)} alt={c.alt} loading="lazy" />
            </Parallax>
          </div>
          {/* Legibility gradient for the overlaid title */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,11,11,0.55)_100%)]"
          />

          {/* Title sliding in from alternating sides, over the image */}
          <motion.div
            style={reduce ? undefined : { x, opacity }}
            className={`absolute bottom-6 z-10 max-w-[88%] will-change-transform md:bottom-10 md:max-w-[62%] ${
              textFromLeft ? "left-5 md:left-10" : "right-5 text-right md:right-10"
            }`}
          >
            <span className="spec text-vn-cream/70">{c.no}</span>
            <h3 className="mt-2 font-display text-[clamp(1.9rem,4.4vw,4rem)] leading-[1.06] text-vn-cream [text-shadow:0_2px_34px_rgba(14,11,11,0.55)]">
              {c.title}
            </h3>
          </motion.div>
        </div>
      </Reveal>

      <div
        className={`mt-4 flex flex-wrap items-baseline gap-4 ${
          textFromLeft ? "" : "justify-end"
        }`}
      >
        <span className="pill text-vn-charcoal/80">{c.industry}</span>
        <span className="spec text-vn-muted-light">{c.spec}</span>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="przyklady" className="overflow-hidden bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">08 — Przykłady</p>
        </Reveal>
        <Reveal delay={0.08} mask>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Serie wizualne zamiast{" "}
            <em className="text-vn-burgundy">pojedynczych obrazków</em>.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {CASES.map((c, i) => (
            <CaseRow key={c.no} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
