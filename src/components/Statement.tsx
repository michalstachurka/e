import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SilkCanvas } from "./SilkCanvas";

const LINES = [
  { text: "Spójne obrazy.", from: "-58%", accent: false },
  { text: "Pod kontrolą człowieka.", from: "62%", accent: true },
  { text: "Gotowe do publikacji.", from: "-64%", accent: false },
];

// Each line converges over its own slice of scroll, finishing together.
const RANGES: [number, number][] = [
  [0.04, 0.5],
  [0.18, 0.66],
  [0.34, 0.82],
];

function Line({
  progress,
  text,
  from,
  accent,
  range,
}: {
  progress: MotionValue<number>;
  text: string;
  from: string;
  accent: boolean;
  range: [number, number];
}) {
  const x = useTransform(progress, range, [from, "0%"]);
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.55 * (range[1] - range[0])],
    [0, 1],
  );
  return (
    <motion.p
      style={{ x, opacity }}
      className={`font-display text-[clamp(2.4rem,6.4vw,5rem)] leading-[1.06] tracking-[-0.015em] will-change-transform ${
        accent ? "italic text-vn-burgundy-soft" : "text-vn-cream"
      }`}
    >
      {text}
    </motion.p>
  );
}

/**
 * Scroll-pinned brand statement over a WebGL silk backdrop: three lines
 * slide in from opposite sides and lock into a single composed manifesto.
 */
export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const ruleScale = useTransform(scrollYProgress, [0.72, 0.95], [0, 1]);
  const specOpacity = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);

  if (reduce) {
    return (
      <section className="relative overflow-hidden bg-[#141112] text-vn-cream">
        <SilkCanvas />
        <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          {LINES.map((l) => (
            <p
              key={l.text}
              className={`font-display text-[clamp(2.4rem,6.4vw,5rem)] leading-[1.06] ${
                l.accent ? "italic text-vn-burgundy-soft" : "text-vn-cream"
              }`}
            >
              {l.text}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-[#141112]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <SilkCanvas />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[22vh] bg-[linear-gradient(180deg,#141112,transparent)]"
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <div className="space-y-2 md:space-y-3">
            {LINES.map((l, i) => (
              <Line
                key={l.text}
                progress={scrollYProgress}
                text={l.text}
                from={l.from}
                accent={l.accent}
                range={RANGES[i]}
              />
            ))}
          </div>

          <motion.div
            style={{ scaleX: ruleScale }}
            className="mt-12 h-px origin-left bg-vn-cream/30"
          />
          <motion.p
            style={{ opacity: specOpacity }}
            className="spec mt-5 text-vn-cream/45"
          >
            VN—STATEMENT/01 · zasada każdego obrazu
          </motion.p>
        </div>
      </div>
    </section>
  );
}
