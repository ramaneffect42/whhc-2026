"use client";

import { m } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";
import { PILLARS, type Pillar } from "./aboutData";

const CALENDAR_MARKED = [3, 10, 17, 24];

function PillarGlyph({ kind }: { kind: Pillar["glyph"] }) {
  if (kind === "terminal") {
    return (
      <div aria-hidden className="relative overflow-hidden rounded-2xl border border-line bg-bg p-4 sm:p-5">
        <div className="flex items-center gap-1.5 border-b border-line pb-3">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            whhc · lab
          </span>
        </div>
        <div className="mt-5 space-y-3 font-mono text-[10px] sm:text-[11px]">
          <p className="text-brand">&gt; whoami</p>
          <p className="text-mute">curious_student</p>
          <p className="text-brand">&gt; learn --together</p>
          <p className="text-mute">everyone welcome</p>
          <p className="flex items-center gap-2 text-brand">
            &gt;
            <span className="inline-block h-3 w-1.5 animate-pulse-dot bg-brand" />
          </p>
        </div>
      </div>
    );
  }

  if (kind === "calendar") {
    return (
      <div aria-hidden className="relative overflow-hidden rounded-2xl border border-line bg-bg p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            Event calendar
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">WHHC</p>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-[3px] ${
                CALENDAR_MARKED.includes(i) ? "bg-brand/70" : "bg-white/[0.05]"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-mute">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-brand" />
            Workshops
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-white/20" />
            Contests
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-white/20" />
            Symposium
          </span>
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden className="relative overflow-hidden rounded-2xl border border-line bg-bg p-5">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-brand">
          Article
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
          WHHC
        </span>
      </div>
      <div className="mt-5 h-2.5 w-4/5 rounded-full bg-white/20" />
      <div className="mt-2 h-2.5 w-3/5 rounded-full bg-white/10" />
      <div className="mt-5 space-y-2">
        {[100, 95, 88, 70, 92, 45].map((width, i) => (
          <span
            key={i}
            style={{ width: `${width}%` }}
            className="block h-1.5 rounded-full bg-white/[0.06]"
          />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
        <span className="h-6 w-6 rounded-full border border-brand/40 bg-brand/15" />
        <span className="h-1.5 w-20 rounded-full bg-white/10" />
        <span className="ml-auto h-1.5 w-8 rounded-full bg-brand/40" />
      </div>
    </div>
  );
}

export default function PillarTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = PILLARS[active];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = PILLARS.length - 1;
    let next = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = index === 0 ? last : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-surface/60">
      <div role="tablist" aria-label="What we do" className="grid grid-cols-3 border-b border-line">
        {PILLARS.map((pillar, i) => {
          const selected = i === active;
          return (
            <button
              key={pillar.slug}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`pillar-tab-${pillar.slug}`}
              aria-selected={selected}
              aria-controls="pillar-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => handleKeyDown(event, i)}
              className={`relative flex flex-col items-start gap-1.5 px-2 py-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand sm:px-6 sm:py-5 ${
                i > 0 ? "border-l border-line" : ""
              } ${selected ? "bg-surface-2" : "hover:bg-surface-2/50"}`}
            >
              <span
                aria-hidden
                className={`font-mono text-[10px] tracking-[0.25em] ${
                  selected ? "text-brand" : "text-white/30"
                }`}
              >
                {pillar.index}
              </span>
              <span
                className={`font-display text-[10px] font-semibold uppercase tracking-[0.04em] sm:text-sm sm:tracking-[0.12em] ${
                  selected ? "text-ink" : "text-mute"
                }`}
              >
                {pillar.name}
              </span>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand transition-transform duration-300 ${
                  selected ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="pillar-panel"
        aria-labelledby={`pillar-tab-${current.slug}`}
        tabIndex={0}
        className="p-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand sm:p-8 md:p-10"
      >
        <m.div
          key={current.slug}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
              {current.kicker}
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              {current.name}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute sm:text-base">
              {current.summary}
            </p>
            <ul className="mt-7 grid gap-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink/85">
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <PillarGlyph kind={current.glyph} />
        </m.div>
      </div>
    </div>
  );
}
