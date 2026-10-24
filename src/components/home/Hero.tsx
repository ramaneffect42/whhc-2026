"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { FEST, SITE } from "@/lib/site";

/**
 * Full-screen hero. The text uses CSS entrance animations (.rise) so it shows
 * immediately — Framer Motion only adds the scroll parallax on top.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

  return (
    <section ref={ref} className="relative isolate flex min-h-svh items-center overflow-hidden">
      {/* background layers */}
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <m.div
        aria-hidden
        style={{ scale: glowScale }}
        className="absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_85%)]"
      />

      <m.div style={{ y, opacity }} className="container-x relative py-32 text-center">
        <p
          className="rise mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-bg/50 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-mute backdrop-blur"
          style={d(100)}
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-brand shadow-[0_0_10px_#ff3232]" />
          {SITE.campus} · {SITE.year}
        </p>

        <h1
          data-text={SITE.short}
          className="rise glitch animate-float font-display text-[5.5rem] font-bold leading-none tracking-wider text-ink glow-text sm:text-[9rem] md:text-[13rem]"
          style={d(250)}
        >
          {SITE.short}
        </h1>

        <p
          className="rise mt-4 font-display text-lg font-medium uppercase tracking-[0.3em] text-ink/70 sm:text-2xl sm:tracking-[0.5em]"
          style={d(450)}
        >
          {SITE.name}
        </p>

        <p className="rise mt-8 text-base text-mute sm:text-lg" style={d(600)}>
          {SITE.tagline}
        </p>

        <div
          className="rise mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={d(800)}
        >
          <ButtonLink href="/technozarre">{FEST.name}</ButtonLink>
          <ButtonLink href="/about" variant="ghost">
            What we do
          </ButtonLink>
        </div>
      </m.div>

      {/* scroll cue */}
      <div
        aria-hidden
        className="rise absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35"
        style={d(1200)}
      >
        scroll
        <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
