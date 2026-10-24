import { SITE } from "@/lib/site";

/** Decorative rotating seal — CSS only, pauses completely for reduced motion. */
export default function AboutSeal() {
  return (
    <div className="relative flex h-[270px] w-[270px] items-center justify-center">
      <div aria-hidden className="absolute inset-0 rounded-full border border-line" />
      <div aria-hidden className="absolute inset-7 rounded-full border border-dashed border-brand/25" />
      <div
        aria-hidden
        className="absolute inset-16 rounded-full bg-brand/10 blur-2xl"
      />

      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-spin text-white/40 [animation-duration:44s]"
      >
        <defs>
          <path
            id="about-seal-path"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>
        <text className="fill-current font-mono text-[8.5px] uppercase tracking-[0.3em]">
          <textPath href="#about-seal-path" startOffset="0">
            {`${SITE.short} · COMPUTER SCIENCE CLUB · ${SITE.campus} ·`}
          </textPath>
        </text>
      </svg>

      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
      />

      <div className="relative text-center">
        <p className="font-display text-5xl font-bold leading-none tracking-[0.18em] text-ink glow-text">
          {SITE.short}
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-brand">
          {SITE.departmentShort}
        </p>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
          {SITE.year}
        </p>
      </div>
    </div>
  );
}
