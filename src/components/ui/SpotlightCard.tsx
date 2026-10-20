"use client";

import type { PointerEvent, ReactNode } from "react";

/** Card with a red glow that follows the cursor. Pure CSS variables — very cheap. */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onPointerMove={onMove}
      className={`spotlight rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-brand/40 ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
