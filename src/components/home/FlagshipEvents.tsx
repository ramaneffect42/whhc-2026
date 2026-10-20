import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { PAST_EVENTS } from "@/data/events";

export default function FlagshipEvents() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="// 02 — flagship events"
            title="Where the magic happens"
            accent="magic"
          />
          <Reveal>
            <ButtonLink href="/events" variant="ghost">
              All events
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PAST_EVENTS.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.1}>
              <Link href="/events" className="block h-full" aria-label={`${e.name} — read more`}>
                <SpotlightCard className="group h-full">
                  <div className="flex h-full flex-col p-4">
                    <div className="overflow-hidden rounded-2xl">
                      <div className="transition-transform duration-700 group-hover:scale-105">
                        <ImagePlaceholder aspect="aspect-[4/3]" label={`${e.slug}.jpg`} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
                        {e.type}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-bold uppercase">{e.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{e.blurb}</p>
                      <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                        <div>
                          <p className="font-display text-2xl font-bold text-ink">{e.stat.value}</p>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                            {e.stat.label}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="text-xl text-brand transition-transform duration-300 group-hover:translate-x-1.5"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
