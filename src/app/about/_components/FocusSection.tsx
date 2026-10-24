import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { FOCUS_AREAS } from "./aboutData";

export default function FocusSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 06 — focus areas"
          title="Find your corner."
          accent="corner."
          description="Six directions to explore. Start anywhere — the point is to keep going."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => (
            <Reveal key={area.slug} delay={i * 0.06} className="h-full">
              <SpotlightCard className="h-full">
                <div className="group flex h-full flex-col overflow-hidden p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden
                      className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand"
                    >
                      {"// "}
                      {area.index}
                    </span>
                    <span
                      aria-hidden
                      className="grid h-7 w-7 place-items-center rounded-full border border-line transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/10"
                    >
                      <span className="h-1.5 w-1.5 bg-brand/60 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-brand" />
                    </span>
                  </div>

                  <h3 className="mt-12 font-display text-2xl font-bold uppercase leading-tight sm:text-[1.7rem]">
                    {area.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{area.blurb}</p>

                  <div aria-hidden className="mt-7 h-px w-full bg-line">
                    <span className="block h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
