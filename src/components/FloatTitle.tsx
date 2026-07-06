import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "./Reveal";

/**
 * Display heading whose letters start at alternating vertical offsets and
 * settle onto the baseline with a left-to-right stagger.
 *
 * `text` supports *accent* segments (rendered italic in the accent color).
 */
export function FloatTitle({
  text,
  className,
  accentClass = "italic text-vn-burgundy",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  accentClass?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Split into (accent?) segments, then words, keeping a global letter index.
  const segments = text.split("*").map((s, i) => ({ s, accent: i % 2 === 1 }));
  let letterIndex = 0;

  return (
    <Tag ref={ref} aria-label={text.replaceAll("*", "")} className={className}>
      {segments.map((seg, si) => (
        <span key={si} className={seg.accent ? accentClass : undefined}>
          {seg.s.split(" ").flatMap((word, wi) => [
            word === "" ? null : (
              <span key={wi} className="inline-block whitespace-nowrap">
                {[...word].map((ch, ci) => {
                  const i = letterIndex++;
                  const fromY = reduce
                    ? "0em"
                    : `${(i % 2 ? 1 : -1) * (0.22 + ((i * 7) % 10) / 28)}em`;
                  return (
                    <motion.span
                      key={ci}
                      className="inline-block will-change-transform"
                      initial={{ y: fromY, opacity: reduce ? 0 : 0.001 }}
                      animate={
                        inView ? { y: "0em", opacity: 1 } : undefined
                      }
                      transition={{
                        duration: reduce ? 0.4 : 0.9,
                        delay: 0.02 * i,
                        ease: EASE,
                      }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
              </span>
            ),
            " ",
          ])}
        </span>
      ))}
    </Tag>
  );
}
