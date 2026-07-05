import { Reveal } from "./Reveal";
import { SpecPlate } from "./SpecPlate";

const CASES = [
  {
    title: "6 wizualizacji kategorii dla firmy od drzwi",
    industry: "drzwi",
    image: "/images/case-drzwi.webp",
    alt: "Drzwi dwuskrzydłowe w eleganckiej sali — wizualizacja kategorii",
    plate: ["VN—CASE/01 · kategorie", "seria 6 · ready"],
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Hero i sekcje dla strony o podłogach",
    industry: "podłogi",
    image: "/images/case-podlogi.webp",
    alt: "Podłoga drewniana w świetle dziennym — kadr hero dla strony o podłogach",
    plate: ["VN—CASE/02 · www", "hero + sekcje · ready"],
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    title: "Pionowe kadry do social media dla studia wnętrz",
    industry: "studio wnętrz",
    image: "/images/case-social.webp",
    alt: "Kamienna ściana w pokoju odsłuchowym — pionowy kadr do social media",
    plate: ["VN—CASE/03 · social", "9:16 · ready"],
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Kampania dla firmy od kuchni",
    industry: "kuchnie",
    image: "/images/case-kuchnie.webp",
    alt: "Kuchnia w układzie U — kadr kampanii reklamowej",
    plate: ["VN—CASE/04 · kampania", "seria · ready"],
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Obrazy ofertowe dla wykonawcy remontów",
    industry: "remonty",
    image: "/images/case-remonty.webp",
    alt: "Schody z oświetleniem LED przypodłogowym — obraz do oferty wykonawcy",
    plate: ["VN—CASE/05 · oferta", "PDF + www · ready"],
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
];

export function CaseStudies() {
  return (
    <section id="przyklady" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">08 — Przykłady</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Serie wizualne zamiast{" "}
            <em className="text-vn-burgundy">pojedynczych obrazków</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12 md:gap-6">
          {CASES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={0.05 * i}
              y={36}
              className={`group/card ${c.span}`}
            >
              <figure className="flex h-full flex-col">
                <div className={`frame-img ${c.aspect}`}>
                  <img src={c.image} alt={c.alt} loading="lazy" />
                </div>
                <figcaption className="flex flex-1 flex-col gap-3 border-x border-b hairline px-5 pb-5 pt-4">
                  <span className="spec text-vn-burgundy">{c.industry}</span>
                  <h3 className="text-lg leading-snug">{c.title}</h3>
                  <div className="mt-auto border-t hairline pt-3">
                    <SpecPlate left={c.plate[0]} right={c.plate[1]} />
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
