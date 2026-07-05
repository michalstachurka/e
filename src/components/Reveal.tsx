import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className,
  mask = false,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  /** Horizontal entrance offset in px — slide in from the side. */
  x?: number;
  className?: string;
  /** Masked slide-up reveal (for display headings). */
  mask?: boolean;
}) {
  const reduce = useReducedMotion();

  if (mask && !reduce) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <motion.div
          initial={{ y: "108%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-72px" }}
          transition={{ duration: 1.1, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: x ? 0 : y, x }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export { EASE };
