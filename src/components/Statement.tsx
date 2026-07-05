import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const LINES = [
  { text: "Spójne obrazy.", accent: false },
  { text: "Pod kontrolą człowieka.", accent: true },
  { text: "Gotowe do publikacji.", accent: false },
];

// Scroll slice in which each line assembles; they overlap and finish together.
const RANGES: [number, number][] = [
  [0.02, 0.52],
  [0.16, 0.68],
  [0.3, 0.84],
];

/** Deterministic pseudo-random scatter per character (in em). */
function scatter(seed: number) {
  const h = (seed * 2654435761) % 1000;
  const sx = h % 2 ? 1 : -1;
  const sy = h % 3 ? 1 : -1;
  return {
    dx: sx * (0.35 + ((h * 7) % 100) / 90),
    dy: sy * (0.3 + ((h * 13) % 100) / 140),
  };
}

function Char({
  progress,
  char,
  range,
  seed,
}: {
  progress: MotionValue<number>;
  char: string;
  range: [number, number];
  seed: number;
}) {
  const { dx, dy } = scatter(seed);
  const x = useTransform(progress, range, [`${dx}em`, "0em"]);
  const y = useTransform(progress, range, [`${dy}em`, "0em"]);
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.45 * (range[1] - range[0])],
    [0, 1],
  );
  if (char === " ") return <span> </span>;
  return (
    <motion.span style={{ x, y, opacity }} className="inline-block will-change-transform">
      {char}
    </motion.span>
  );
}

function Line({
  progress,
  text,
  accent,
  range,
  lineIndex,
}: {
  progress: MotionValue<number>;
  text: string;
  accent: boolean;
  range: [number, number];
  lineIndex: number;
}) {
  const chars = [...text];
  const span = range[1] - range[0];
  return (
    <p
      aria-label={text}
      className={`font-display text-[clamp(2.3rem,6.2vw,5rem)] leading-[1.08] tracking-[-0.015em] ${
        accent ? "italic text-vn-burgundy" : "text-vn-charcoal"
      }`}
    >
      {chars.map((c, i) => {
        // Letters settle left-to-right, each over ~55% of the line's slice.
        const start = range[0] + (i / chars.length) * span * 0.45;
        return (
          <Char
            key={`${lineIndex}-${i}`}
            progress={progress}
            char={c}
            range={[start, start + span * 0.55]}
            seed={lineIndex * 97 + i * 31 + c.charCodeAt(0)}
          />
        );
      })}
    </p>
  );
}

/**
 * Scroll-pinned brand statement: scattered letters drift into place and
 * compose the manifesto, closed by a drawn rule and spec plate.
 */
export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const ruleScale = useTransform(scrollYProgress, [0.8, 0.97], [0, 1]);
  const specOpacity = useTransform(scrollYProgress, [0.85, 0.97], [0, 1]);

  if (reduce) {
    return (
      <section className="bg-vn-bg">
        <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          {LINES.map((l) => (
            <p
              key={l.text}
              className={`font-display text-[clamp(2.3rem,6.2vw,5rem)] leading-[1.08] ${
                l.accent ? "italic text-vn-burgundy" : "text-vn-charcoal"
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
    <section ref={ref} className="relative h-[300vh] bg-vn-bg">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <div className="space-y-2 md:space-y-3">
            {LINES.map((l, i) => (
              <Line
                key={l.text}
                progress={scrollYProgress}
                text={l.text}
                accent={l.accent}
                range={RANGES[i]}
                lineIndex={i}
              />
            ))}
          </div>

          <motion.div
            style={{ scaleX: ruleScale }}
            className="mt-12 h-px origin-left bg-vn-line"
          />
          <motion.p
            style={{ opacity: specOpacity }}
            className="spec mt-5 text-vn-muted-light"
          >
            VN—STATEMENT/01 · zasada każdego obrazu
          </motion.p>
        </div>
      </div>
    </section>
  );
}
