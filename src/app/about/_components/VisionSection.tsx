import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SITE } from "@/lib/site";
import { PRINCIPLES } from "./aboutData";

export default function VisionSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 03 — vision & mission"
          title="Curiosity, with company."
          accent="company."
          description="Two ideas keep us pointing the same way: explore widely, and bring people along."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SpotlightCard className="h-full">
              <div className="relative flex h-full flex-col overflow-hidden p-6 sm:p-8 md:p-10">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-brand/15"
                />
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-brand/10"
                />

                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
                  Our vision
                </p>
                <p className="mt-6 max-w-xl font-display text-2xl font-medium leading-[1.3] sm:text-3xl md:text-[2.4rem]">
                  A community where every curious student finds people to{" "}
                  <span className="text-brand glow-text">learn with</span>.
                </p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
                  Based in the {SITE.departmentShort} at {SITE.campus}, Chennai, we grow
                  alongside a department of experienced faculty and an active research culture —
                  one that shares its work at national and international conferences.
                </p>

                <div className="mt-auto flex items-center gap-3 pt-9">
                  <span aria-hidden className="h-px w-10 bg-brand" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {SITE.campus}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            <Reveal delay={0.08} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
                    Our mission
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">
                    To inspire students to explore computer science beyond the classroom — to
                    ask, try, share and grow, and to turn shared knowledge into meaningful
                    progress. Beginners and advanced learners are equally at home here.
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.16} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
                    What guides us
                  </p>
                  <ul className="mt-4">
                    {PRINCIPLES.map((principle, i) => (
                      <li
                        key={principle.title}
                        className={`flex gap-4 py-4 ${i > 0 ? "border-t border-line" : "pb-0"}`}
                      >
                        <span
                          aria-hidden
                          className="font-mono text-[10px] leading-5 text-brand"
                        >
                          0{i + 1}
                        </span>
                        <div>
                          <p className="font-display text-base font-semibold uppercase tracking-wide">
                            {principle.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-mute">
                            {principle.line}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
