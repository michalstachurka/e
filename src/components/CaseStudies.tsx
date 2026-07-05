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

  const imageLeft = textFromLeft ? false : true; // image opposite the text origin? keep image aside text overlap

  return (
    <article
      ref={ref}
      className="group/card relative grid items-center gap-6 md:grid-cols-12"
    >
      {/* Image */}
      <div
        className={`md:col-span-8 ${imageLeft ? "md:col-start-1" : "md:col-start-5"}`}
      >
        <Reveal y={44}>
          <div className="frame-img aspect-[16/10]">
            <Parallax amount={7}>
              <img src={asset(c.image)} alt={c.alt} loading="lazy" />
            </Parallax>
          </div>
        </Reveal>
      </div>

      {/* Title sliding in from the side, overlapping the frame */}
      <motion.div
        style={reduce ? undefined : { x, opacity }}
        className={`md:absolute md:top-1/2 md:z-10 md:w-[46%] md:-translate-y-1/2 md:will-change-transform ${
          imageLeft ? "md:right-0 md:text-right" : "md:left-0"
        }`}
      >
        <span className="spec text-vn-burgundy">{c.no}</span>
        <h3 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,3rem)] leading-[1.08] text-vn-charcoal [text-shadow:0_0_18px_rgba(250,250,248,0.85),0_0_46px_rgba(250,250,248,0.6)]">
          {c.title}
        </h3>
        <div
          className={`mt-5 flex flex-wrap items-baseline gap-4 ${imageLeft ? "md:justify-end" : ""}`}
        >
          <span className="pill text-vn-charcoal/80">{c.industry}</span>
          <span className="spec text-vn-muted-light">{c.spec}</span>
        </div>
      </motion.div>
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
