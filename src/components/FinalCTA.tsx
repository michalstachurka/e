import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-vn-burgundy-deep text-vn-cream"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_30%_110%,rgba(23,23,23,0.55),transparent_70%),radial-gradient(45%_60%_at_85%_0%,rgba(166,74,90,0.35),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-vn-cream/55">10 — Kontakt</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-[900px] text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.08]">
            Potrzebujesz obrazów, które nie wyglądają jak{" "}
            <em>przypadkowe AI</em>?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/75">
            Opisz branżę, ofertę i zastosowanie. Przygotujemy kierunek wizualny
            i pakiet wizualizacji gotowych do publikacji.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="mailto:kontakt@visnex.pl?subject=Brief%20%E2%80%94%20wizualizacje%20visNEX"
              className="btn btn-cream"
            >
              Wyślij brief
            </a>
            <a
              href="mailto:kontakt@visnex.pl"
              className="spec text-vn-cream/70 underline decoration-vn-cream/30 underline-offset-4 transition-colors hover:text-vn-cream"
            >
              kontakt@visnex.pl
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
