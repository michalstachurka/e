import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Reveal";

export function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-vn-ink text-vn-cream"
    >
      {/* Header visual */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? undefined : { scale: 1.06 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <img
          src="/images/hero-header.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[68%_center]"
        />
      </motion.div>

      {/* Legibility overlays — tuned to keep the burgundy glow alive */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,11,0.9)_0%,rgba(14,11,11,0.55)_38%,rgba(14,11,11,0.08)_68%,rgba(14,11,11,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,11,0.45)_0%,rgba(14,11,11,0)_28%,rgba(14,11,11,0)_55%,rgba(14,11,11,0.72)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 pt-40 md:px-10 md:pb-20">
        <motion.p {...enter(0.15)} className="eyebrow text-vn-cream/60">
          Ekspercka usługa wspierana AI
        </motion.p>

        <motion.h1
          {...enter(0.3)}
          className="mt-7 max-w-[1050px] text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.04]"
        >
          Wizualizacje AI, które wyglądają jak{" "}
          <em className="text-vn-burgundy-soft">materiał dla marki premium</em>.
        </motion.h1>

        <motion.p
          {...enter(0.48)}
          className="mt-8 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/72"
        >
          visNEX tworzy spójne obrazy do stron, ofert i reklam dla firm z branży
          wnętrzarskiej i budowlanej — z kontrolą stylu, realizmu i jakości na
          każdym etapie.
        </motion.p>

        <motion.div {...enter(0.62)} className="mt-10 flex flex-wrap gap-4">
          <a href="#pakiety" className="btn btn-cream">
            Zamów pakiet wizualizacji
          </a>
          <a href="#proces" className="btn btn-ghost-cream">
            Zobacz proces
          </a>
        </motion.div>

        <motion.div
          {...enter(0.8)}
          className="mt-16 flex flex-col justify-between gap-3 border-t border-white/12 pt-5 sm:flex-row sm:items-baseline"
        >
          <p className="spec text-vn-cream/45">
            Drzwi · podłogi · kuchnie · sztukateria · LED · remonty · home
            improvement
          </p>
          <p className="spec hidden text-vn-cream/35 md:block">
            VN—HERO/01 · 16:9 · status: ready
          </p>
        </motion.div>
      </div>
    </section>
  );
}
