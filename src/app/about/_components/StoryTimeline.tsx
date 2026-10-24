"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { JOURNEY } from "./aboutData";

export default function StoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.7"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* rail + scroll-linked fill */}
      <div aria-hidden className="absolute inset-y-0 left-2 w-px bg-line md:left-36" />
      <m.div
        aria-hidden
        style={{ scaleY: fill }}
        className="absolute inset-y-0 left-2 w-px origin-top bg-gradient-to-b from-brand via-brand to-brand/20 md:left-36"
      />

      <ol className="space-y-8 md:space-y-10">
        {JOURNEY.map((item, i) => (
          <li
            key={item.key}
            className="relative pl-8 md:grid md:grid-cols-[8rem_1fr] md:gap-8 md:pl-0"
          >
            <span
              aria-hidden
              className={`absolute left-2 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border md:left-36 ${
                item.next
                  ? "animate-pulse-dot border-brand bg-brand"
                  : "border-brand/70 bg-bg"
              }`}
            />

            <div className="mb-3 md:mb-0 md:pt-6 md:text-right">
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-mute">
                {item.when}
              </p>
            </div>

            <Reveal className="md:col-start-2" delay={i * 0.06}>
              <SpotlightCard className="h-full">
                <div className="relative p-5 sm:p-6 md:p-7">
                  {item.next && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-brand/30"
                    />
                  )}

                  <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-10">
                    <div className="max-w-xl">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                        {item.label}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-mute">{item.blurb}</p>
                    </div>

                    {item.stat ? (
                      <div className="flex shrink-0 items-baseline gap-3 border-t border-line pt-4 md:flex-col md:items-end md:justify-end md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        <span className="font-display text-2xl font-bold text-ink">
                          {item.stat.value}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                          {item.stat.label}
                        </span>
                      </div>
                    ) : (
                      <div className="flex shrink-0 items-center gap-2.5 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 md:items-end md:justify-end md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-brand" />
                        In the works
                      </div>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
