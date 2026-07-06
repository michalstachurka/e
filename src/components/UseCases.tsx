import { Reveal } from "./Reveal";
import { SpecPlate } from "./SpecPlate";
import { asset } from "../lib/asset";
import { Parallax } from "./Parallax";

const CASES = [
  {
    title: "Hero na stronę",
    text: "Duże kadry do pierwszych sekcji strony, landing page’y i kampanii.",
    image: "/images/use-hero.webp",
    alt: "Sypialnia z boazerią ścienną w burgundzie i orzechu — kadr hero",
    plate: ["boazeria ścienna", "16:9 · ready"],
    span: "md:col-span-12",
    aspect: "aspect-[16/9] md:aspect-[21/9]",
  },
  {
    title: "Kategorie produktowe",
    text: "Spójne wizualizacje dla drzwi, podłóg, kuchni, listew, LED, blatów i innych ofert.",
    image: "/images/use-kategorie.webp",
    alt: "Kuchnia z kamiennym blatem — wizualizacja kategorii produktowej",
    plate: ["kuchnie", "4:5 · ready"],
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:h-full",
  },
  {
    title: "Reklamy i social media",
    text: "Pionowe i poziome obrazy do kampanii, postów, rolek, banerów i grafik sprzedażowych.",
    image: "/images/use-social.webp",
    alt: "Piwnica win z czarnym kamiennym blatem — pionowy kadr do social media",
    plate: ["wnętrza premium", "9:16 · ready"],
    span: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
  },
  {
    title: "Oferty i prezentacje",
    text: "Materiały do PDF-ów, moodboardów, ofert handlowych i prezentacji dla klienta.",
    image: "/images/use-oferty.webp",
    alt: "Sztukateria i listwy przysufitowe — obraz do oferty handlowej",
    plate: ["sztukateria", "4:5 · ready"],
    span: "md:col-span-12",
    aspect: "aspect-[16/9] md:aspect-[16/8]",
  },
];

export function UseCases() {
  return (
    <section id="zastosowania" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">03 — Zastosowania</p>
        </Reveal>
        <Reveal delay={0.08} x={-140}>
          <h2 className="mt-8 max-w-[880px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Obrazy do miejsc, w których klient naprawdę{" "}
            <em className="text-vn-burgundy">podejmuje decyzję</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12 md:gap-6">
          {CASES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={0.09 * i}
              y={56}
              className={`group/card ${c.span}`}
            >
              <div className="flex h-full flex-col">
                <div className={`frame-img ${c.aspect}`}>
                  <Parallax><img src={asset(c.image)} alt={c.alt} loading="lazy" /></Parallax>
                </div>
                <div className="flex flex-1 flex-col border-x border-b hairline bg-vn-bg px-5 pb-5 pt-4">
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mb-5 mt-2 text-[0.9375rem] leading-relaxed text-vn-muted">
                    {c.text}
                  </p>
                  <div className="mt-auto border-t hairline pt-3">
                    <SpecPlate left={c.plate[0]} right={c.plate[1]} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
