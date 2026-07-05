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
    spec: "VN—CASE/01 · kategorie produktowe · seria 6 · ready",
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

export function CaseStudies() {
  return (
    <section
      id="przyklady"
      className="relative overflow-hidden bg-vn-charcoal-soft text-vn-cream"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_0%,rgba(122,37,51,0.22),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-cream/50">08 — Przykłady</p>
        </Reveal>
        <Reveal delay={0.08} mask>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Serie wizualne zamiast{" "}
            <em className="text-vn-burgundy-soft">pojedynczych obrazków</em>.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-36">
          {CASES.map((c) => (
            <article key={c.no} className="group/card grid gap-4 md:grid-cols-12">
              {/* Margin number */}
              <div className="md:col-span-1">
                <Reveal>
                  <span className="spec text-vn-cream/40">{c.no}</span>
                </Reveal>
              </div>

              <div className="relative md:col-span-11">
                <Reveal y={48}>
                  <div className="frame-img aspect-[16/10] max-h-[78vh] w-full bg-vn-ink md:aspect-[16/9]">
                    <Parallax amount={9}>
                      <img src={asset(c.image)} alt={c.alt} loading="lazy" />
                    </Parallax>
                  </div>
                </Reveal>

                {/* Title overlapping the frame, editorial showcase style */}
                <div className="absolute bottom-6 left-5 max-w-[85%] md:bottom-10 md:-left-6">
                  <Reveal delay={0.15} mask>
                    <h3 className="font-display text-[clamp(1.7rem,3.8vw,3.4rem)] leading-[1.08] text-vn-cream [text-shadow:0_1px_30px_rgba(14,11,11,0.45)]">
                      {c.title}
                    </h3>
                  </Reveal>
                </div>

                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                  <span className="pill">{c.industry}</span>
                  <span className="spec text-vn-cream/40">{c.spec}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
