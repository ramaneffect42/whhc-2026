"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the small Framer Motion feature set once for the whole app.
 * RULE: use `m.div` (not `motion.div`) everywhere — `strict` will complain if not.
 * Also respects the user's "reduce motion" OS setting automatically.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
