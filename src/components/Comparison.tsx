import { Reveal, EASE } from "./Reveal";
import { motion } from "framer-motion";
import { FloatTitle } from "./FloatTitle";
import { SilkCanvas } from "./SilkCanvas";

const LINE = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

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
        <FloatTitle
          text="Różnica między generatorem a *usługą ekspercką.*"
          accentClass="italic text-vn-burgundy-soft"
          className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]"
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.1} y={36} className="h-full">
            <div className="flex h-full flex-col border border-white/10 p-8 md:p-10">
              <p className="spec text-vn-cream/45">Zwykły generator AI</p>
              <motion.ul
                className="mt-8 space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ staggerChildren: 0.09 }}
              >
                {GENERATOR.map((item) => (
                  <motion.li
                    variants={LINE}
                    key={item}
                    className="flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/55"
                  >
                    <span aria-hidden="true" className="spec text-vn-cream/30">
                      —
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={36} className="h-full">
            <div className="relative flex h-full flex-col border border-vn-burgundy-soft/40 bg-white/[0.035] p-8 md:p-10">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-vn-burgundy" />
              <p className="wordmark text-[1.05rem] text-vn-cream">
                <em>vis</em>NEX
              </p>
              <motion.ul
                className="mt-8 space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
              >
                {VISNEX.map((item) => (
                  <motion.li
                    variants={LINE}
                    key={item}
                    className="flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.5em] block h-[7px] w-[7px] shrink-0 self-start bg-vn-burgundy-soft"
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
