"use client";

import { m, useScroll, useSpring } from "framer-motion";

/** Thin red bar at the very top that fills as you scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand shadow-[0_0_12px_rgb(255_50_50/0.9)]"
    />
  );
}
