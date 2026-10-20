import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { FEST } from "@/lib/site";

const STATUS_TEXT = {
  "coming-soon": "Coming soon",
  open: "Registrations open",
  closed: "Registrations closed",
} as const;

export default function FestBanner() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-brand/40 bg-surface p-8 text-center md:p-20">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,rgb(255_50_50/0.35),transparent_65%)]"
            />
            <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
            <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-brand">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-brand shadow-[0_0_10px_#ff3232]" />
              {STATUS_TEXT[FEST.status]}
            </p>
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-none tracking-tight md:text-8xl">
              {FEST.name.split("'")[0]}
              <span className="text-brand glow-text">&rsquo;{FEST.name.split("'")[1]}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-mute md:text-lg">
              Our annual flagship symposium — technical battles, creative showdowns and gaming
              arenas. Be there when it drops.
            </p>
            <div className="mt-10">
              <ButtonLink href="/technozarre">Explore the fest</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
