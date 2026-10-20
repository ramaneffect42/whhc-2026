import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/site";

export default function Stats() {
  return (
    <section className="pb-8 md:pb-16">
      <div className="container-x">
        <Reveal>
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 text-center md:p-12 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                  i > 0 ? "md:border-l md:border-line" : ""
                } ${i >= 2 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <dt className="order-2 mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
                  {s.label}
                </dt>
                <dd className="font-display text-5xl font-bold text-brand glow-text md:text-7xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
