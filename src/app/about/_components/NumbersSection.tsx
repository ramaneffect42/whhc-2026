import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SITE, STATS } from "@/lib/site";

export default function NumbersSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 05 — by the numbers"
          title="A community, in numbers."
          accent="numbers."
          description="Each of these started with one room, one evening and a few people who chose to show up."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal className="h-full">
            <SpotlightCard className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10">
                <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-brand/10 blur-[90px]"
                />

                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
                    {SITE.short} · {SITE.year}
                  </p>
                  <p className="mt-6 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    Every number is a room full of people.
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute sm:text-base">
                    Workshops, meetups, hackathons and the small conversations in between — that is
                    what these numbers are made of.
                  </p>
                </div>

                <div className="relative mt-10 flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-brand" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {SITE.tagline}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <dl className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between bg-surface p-5 transition-colors duration-300 hover:bg-surface-2 sm:p-8"
                >
                  <dt className="order-2 mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-4xl font-bold leading-none text-brand glow-text sm:text-5xl md:text-6xl">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
