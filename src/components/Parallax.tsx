import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Slow vertical drift of media inside a clipping frame while scrolling.
 * Children are scaled up slightly so the drift never exposes edges.
 */
export function Parallax({
  children,
  amount = 7,
  className,
}: {
  children: ReactNode;
  /** Drift range in % of the frame height. */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
  return (
    <div ref={ref} className={`h-full w-full ${className ?? ""}`}>
      <motion.div style={{ y, scale: 1 + amount / 45 }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
