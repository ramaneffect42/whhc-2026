import AboutSeal from "./AboutSeal";
import ScrollStatement from "./ScrollStatement";
import { SITE } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-50" />
      <div
        aria-hidden
        className="absolute -left-44 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p
              className="rise mb-7 font-mono text-xs uppercase tracking-[0.3em] text-brand"
              style={{ "--d": "80ms" } as React.CSSProperties}
            >
              {"// 01 — the idea"}
            </p>

            <ScrollStatement />

            <div
              className="rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-3"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              <span aria-hidden className="h-px w-12 bg-brand" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
                {SITE.tagline}
              </p>
            </div>
          </div>

          <div className="hidden justify-self-center lg:block">
            <AboutSeal />
          </div>
        </div>
      </div>
    </section>
  );
}
