import { Reveal } from "./Reveal";
import { SilkCanvas } from "./SilkCanvas";

const GENERATOR = [
  "przypadkowe prompty",
  "zmienny styl",
  "obraz bez celu",
  "dużo odrzutów",
  "efekt „ładne, ale sztuczne”",
  "brak kontroli nad produktem",
  "trudna powtarzalność",
];

const VISNEX = [
  "brief pod zastosowanie",
  "kierunek wizualny",
  "spójna seria",
  "selekcja i poprawki",
  "nacisk na realizm",
  "produkt jako bohater",
  "gotowość do publikacji",
];

export function Comparison() {
  return (
    <section className="relative overflow-hidden bg-vn-charcoal-soft text-vn-cream">
      {/* Quiet burgundy atmosphere */}
      <SilkCanvas className="opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,26,24,0.55),rgba(28,26,24,0.2)_40%,rgba(28,26,24,0.6))]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-cream/50">05 — Porównanie</p>
        </Reveal>
        <Reveal delay={0.08} mask>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Różnica między generatorem a{" "}
            <em className="text-vn-burgundy-soft">usługą ekspercką</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.1} x={-130} className="h-full">
            <div className="flex h-full flex-col border border-white/10 p-8 md:p-10">
              <p className="spec text-vn-cream/45">Zwykły generator AI</p>
              <ul className="mt-8 space-y-4">
                {GENERATOR.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/55"
                  >
                    <span aria-hidden="true" className="spec text-vn-cream/30">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} x={130} className="h-full">
            <div className="relative flex h-full flex-col border border-vn-burgundy-soft/40 bg-white/[0.035] p-8 md:p-10">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-vn-burgundy" />
              <p className="wordmark text-[1.05rem] text-vn-cream">
                <em>vis</em>NEX
              </p>
              <ul className="mt-8 space-y-4">
                {VISNEX.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.5em] block h-[7px] w-[7px] shrink-0 self-start bg-vn-burgundy-soft"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
