import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const GROUPS = [
  { title: "Faculty coordinators", note: "Guiding the club", img: "faculty.jpg" },
  { title: "Senior board", note: "Leading the way", img: "senior-board.jpg" },
  { title: "Junior board", note: "The next generation", img: "junior-board.jpg" },
];

export default function CrewTeaser() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 03 — the crew"
          title="The people behind WHHC"
          accent="WHHC"
          description="Faculty, seniors and juniors — one team keeping the club running."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <Link href="/crew" className="group block">
                <div className="overflow-hidden rounded-2xl border border-line transition-colors duration-300 group-hover:border-brand/50">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <ImagePlaceholder aspect="aspect-[3/4]" label={g.img} className="rounded-none border-0" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase">{g.title}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-mute">
                      {g.note}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-xl text-brand transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
