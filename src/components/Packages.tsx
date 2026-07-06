import { Reveal } from "./Reveal";
import { FloatTitle } from "./FloatTitle";

type Pack = {
  name: string;
  audience: string;
  scope: string[];
  price: string;
  priceNote?: string;
  featured?: boolean;
  cta: string;
};

const PACKAGES: Pack[] = [
  {
    name: "Start",
    audience: "Dla firm, które chcą sprawdzić kierunek.",
    scope: [
      "6 finalnych wizualizacji",
      "1 kierunek wizualny",
      "1 tura poprawek",
      "formaty 16:9 lub 9:16",
      "gotowe pliki do użycia",
    ],
    price: "od 990 zł",
    priceNote: "netto",
    cta: "Zamów pakiet Start",
  },
  {
    name: "Strona",
    audience: "Dla firm, które potrzebują obrazów do landing page’a lub nowej strony.",
    scope: [
      "12 finalnych wizualizacji",
      "hero + sekcje + kategorie",
      "2 tury poprawek",
      "spójny styl serii",
      "formaty pod www i social",
    ],
    price: "od 1 990 zł",
    priceNote: "netto",
    featured: true,
    cta: "Zamów pakiet Strona",
  },
  {
    name: "Kampania",
    audience: "Dla marek, które potrzebują większej serii do reklam, www i social.",
    scope: [
      "24 finalne wizualizacje",
      "kilka formatów",
      "warianty stylistyczne",
      "2 tury poprawek",
      "selekcja i dopracowanie finalnych obrazów",
    ],
    price: "od 3 490 zł",
    priceNote: "netto",
    cta: "Zamów pakiet Kampania",
  },
  {
    name: "Dla agencji",
    audience: "Dla agencji www, SEO i marketingowych.",
    scope: [
      "stała współpraca",
      "wizualizacje dla klientów końcowych",
      "priorytetowa realizacja",
      "możliwość pracy white label",
      "rozliczenie pakietowe albo miesięczne",
    ],
    price: "wycena indywidualna",
    cta: "Porozmawiajmy",
  },
];

export function Packages() {
  return (
    <section id="pakiety" className="bg-vn-bg-warm">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">07 — Pakiety</p>
        </Reveal>
        <FloatTitle
          text="Pakiety na start, *stronę albo kampanię.*"
          className="mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i} y={48} className="h-full">
              <article
                className={`flex h-full flex-col p-8 ${
                  p.featured
                    ? "relative bg-vn-charcoal text-vn-cream"
                    : "border hairline bg-vn-bg"
                }`}
              >
                {p.featured && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-vn-burgundy" />
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl">{p.name}</h3>
                  {p.featured && (
                    <span className="spec text-vn-burgundy-soft">
                      najczęściej wybierany
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 min-h-[3.6em] text-[0.875rem] leading-relaxed ${
                    p.featured ? "text-vn-cream/65" : "text-vn-muted"
                  }`}
                >
                  {p.audience}
                </p>

                <ul
                  className={`mt-6 space-y-3 border-t pt-6 text-[0.9375rem] leading-snug ${
                    p.featured ? "border-white/12" : "hairline"
                  }`}
                >
                  {p.scope.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className={`block h-[6px] w-[6px] mt-[0.5em] shrink-0 self-start ${
                          p.featured ? "bg-vn-burgundy-soft" : "bg-vn-burgundy"
                        }`}
                      />
                      <span className={p.featured ? "text-vn-cream/85" : "text-vn-charcoal/85"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <p
                    className={`font-display text-[1.75rem] leading-none ${
                      p.featured ? "text-vn-cream" : "text-vn-charcoal"
                    }`}
                  >
                    {p.price}
                    {p.priceNote && (
                      <span
                        className={`ml-2 align-baseline text-[0.9rem] ${
                          p.featured ? "text-vn-cream/55" : "text-vn-muted"
                        }`}
                      >
                        {p.priceNote}
                      </span>
                    )}
                  </p>
                  <a
                    href="#kontakt"
                    className={`btn mt-6 w-full ${p.featured ? "btn-burgundy" : "btn-charcoal"}`}
                  >
                    {p.cta}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="spec mt-10 text-vn-muted-light">
            Ceny orientacyjne — finalna wycena zależy od zakresu, formatów i liczby poprawek.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
