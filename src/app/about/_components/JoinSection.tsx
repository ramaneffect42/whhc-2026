import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { SITE, SOCIALS } from "@/lib/site";

export default function JoinSection() {
  return (
    <section className="pb-24 pt-6 md:pb-36 md:pt-10">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-brand/40 bg-surface p-6 sm:p-10 md:p-16">
            <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
            <div
              aria-hidden
              className="absolute -bottom-48 left-1/2 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
            />
            <div
              aria-hidden
              className="absolute -right-20 -top-20 -z-10 h-64 w-64 animate-spin rounded-full border border-dashed border-brand/25 [animation-duration:60s]"
            />

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">
              {"// 07 — join us"}
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
              The door is <span className="text-brand glow-text">open.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-mute md:text-lg">
              You don&rsquo;t need to know everything to belong here — just bring your questions.
              Come to an event, meet the crew, or say hello on social media. We would love to have
              you in the room.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/events" className="w-full sm:w-auto">
                See what&rsquo;s next
              </ButtonLink>
              <ButtonLink href="/crew" variant="ghost" className="w-full sm:w-auto">
                Meet the crew
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                Follow along
              </span>
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {label}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              {SITE.departmentShort} · {SITE.campus}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
