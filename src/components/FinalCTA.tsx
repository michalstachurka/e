import { Reveal } from "./Reveal";
import { asset } from "../lib/asset";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-vn-ink text-vn-cream"
    >
      {/* Ambient video, tinted burgundy */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        poster={asset("images/hero-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={asset("videos/hero.mp4")} type="video/mp4" />
        <source src={asset("videos/hero.webm")} type="video/webm" />
      </video>
      <div className="video-duotone" />
      <div className="video-duotone-boost" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,11,0.82)_0%,rgba(14,11,11,0.35)_55%,rgba(14,11,11,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_75%_35%,rgba(122,37,51,0.35),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-vn-cream/55">10 — Kontakt</p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-x-16 gap-y-8">
          <Reveal delay={0.08}>
            <div>
              <span className="pill">Napisz do nas</span>
              <p className="spec mt-4 text-vn-cream/60">kontakt@visnex.pl</p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div>
              <span className="pill">Zakres na start</span>
              <p className="spec mt-4 text-vn-cream/60">
                brief · kierunek wizualny · pakiet
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={-60}>
          <h2 className="mt-16 max-w-[1000px] text-[clamp(2.1rem,4.8vw,4.1rem)] leading-[1.1]">
            Potrzebujesz obrazów, które nie wyglądają jak{" "}
            <em>przypadkowe AI</em>?
          </h2>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-7 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/75">
            Opisz branżę, ofertę i zastosowanie. Przygotujemy kierunek wizualny
            i pakiet wizualizacji gotowych do publikacji.
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <a
            href="mailto:kontakt@visnex.pl?subject=Brief%20%E2%80%94%20wizualizacje%20visNEX"
            className="group mt-10 inline-block font-display text-[clamp(1.5rem,3.2vw,2.6rem)] italic text-vn-cream"
          >
            Wyślij brief → kontakt@visnex.pl
            <span className="mt-3 block h-px w-full origin-left bg-vn-cream/60 transition-transform duration-700 ease-out group-hover:scale-x-50" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
