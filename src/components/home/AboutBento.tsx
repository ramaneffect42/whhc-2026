import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SITE } from "@/lib/site";

const hl = "font-medium text-brand";

export default function AboutBento() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 01 — who we are"
          title="Curious? Come explore."
          accent="explore."
          description="A student-driven community at SRM Vadapalani for everyone curious about computer science and technology — beginners to advanced."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <SpotlightCard className="h-full">
              <div className="grid h-full gap-6 p-6 sm:grid-cols-[1fr_0.8fr] sm:p-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                    Our vision
                  </p>
                  <p className="mt-4 leading-relaxed text-mute">
                    Based in the {SITE.departmentShort} at SRM Vadapalani, Chennai, our department brings{" "}
                    <span className={hl}>faculty with over a decade of experience</span> and an
                    active research culture — shared by students and staff at{" "}
                    <span className={hl}>national and international conferences</span>. We
                    want every member to grow alongside it.
                  </p>
                </div>
                <ImagePlaceholder aspect="aspect-[4/3] sm:aspect-auto sm:h-full" label="vision.jpg" />
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard className="h-full">
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                  Our mission
                </p>
                <p className="mt-4 leading-relaxed text-mute">
                  To <span className={hl}>inspire students</span> to explore computer science beyond the
                  classroom and help them grow along the way — a space where like-minded people{" "}
                  <span className={hl}>start the conversation</span> and turn knowledge into
                  meaningful progress.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.05}>
            <SpotlightCard>
              <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                    What we do
                  </p>
                  <p className="mt-4 leading-relaxed text-mute">
                    Through workshops, events and our online articles, we share the applications,
                    advances and future of computing and technology.
                  </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["01", "Workshops", "Hands-on sessions from fundamentals to advanced."],
                    ["02", "Events", "Hackathons, coding contests, puzzle hunts and our annual fest."],
                    ["03", "Publications", "Articles on our site and social channels."],
                  ].map(([n, t, s]) => (
                    <li key={n} className="rounded-xl border border-line bg-black/40 p-5">
                      <span className="font-mono text-xs text-brand">{n}</span>
                      <p className="mt-2 font-display text-xl font-semibold uppercase">{t}</p>
                      <p className="mt-1 text-sm text-mute">{s}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
