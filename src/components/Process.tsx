import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Brief",
    text: "Opisujesz branżę, ofertę, styl, formaty i zastosowanie obrazów.",
  },
  {
    no: "02",
    title: "Kierunek",
    text: "Ustalamy estetykę, typ kadrów, ton marki i zasady wizualne.",
  },
  {
    no: "03",
    title: "Produkcja",
    text: "Tworzymy warianty, selekcjonujemy najlepsze i odrzucamy słabe ujęcia.",
  },
  {
    no: "04",
    title: "Finalizacja",
    text: "Dopracowujemy wybrane obrazy i przygotowujemy pliki do publikacji.",
  },
];

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.72", "end 0.45"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const markerTop = useTransform(progress, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);

  return (
    <section id="proces" className="overflow-hidden bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">06 — Proces</p>
        </Reveal>
        <Reveal delay={0.08} y={-70}>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Proces prosty dla klienta.{" "}
            <em className="text-vn-burgundy">Precyzyjny po naszej stronie.</em>
          </h2>
        </Reveal>

        {/* Timeline: growing center line, steps alternating around it */}
        <div ref={lineRef} className="relative mx-auto mt-24 max-w-[980px]">
          {/* Rail + progress line (left on mobile, centered from md up) */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-vn-line md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={reduce ? undefined : { scaleY: progress }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-vn-burgundy md:left-1/2 md:-translate-x-1/2"
          />
          {/* Travelling marker */}
          {!reduce && (
            <motion.div
              style={{ top: markerTop }}
              className="absolute left-[7px] z-10 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vn-burgundy bg-vn-bg md:left-1/2"
            />
          )}

          <ol className="space-y-20 md:space-y-28">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.no}
                  className="relative grid gap-3 pl-10 md:grid-cols-2 md:gap-0 md:pl-0"
                >
                  {/* Node on the line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[7px] top-2 h-[7px] w-[7px] -translate-x-1/2 bg-vn-burgundy md:left-1/2"
                  />
                  <Reveal
                    x={left ? -110 : 110}
                    className={
                      left
                        ? "md:col-start-1 md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14"
                    }
                  >
                    <span className="spec text-vn-burgundy">
                      {s.no} / 04
                    </span>
                    <h3 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)]">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-vn-muted ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      {s.text}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
