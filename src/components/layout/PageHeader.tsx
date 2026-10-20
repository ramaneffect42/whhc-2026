/**
 * Shared banner at the top of every inner page (About / Crew / Events / Technozarre).
 * Already built — students should NOT edit this, only fill in their own page content.
 */
export default function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  /** Part of the title to colour red */
  accent?: string;
  description?: string;
}) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-16 pt-40 md:pb-24 md:pt-52">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
      />
      <div className="container-x">
        <p className="rise mb-5 font-mono text-xs uppercase tracking-[0.3em] text-brand">
          {eyebrow}
        </p>
        <h1
          className="rise font-display text-5xl font-bold uppercase leading-[1] tracking-tight md:text-8xl"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          {parts[0]}
          {accent && <span className="text-brand glow-text">{accent}</span>}
          {parts[1]}
        </h1>
        {description && (
          <p
            className="rise mt-6 max-w-2xl text-base leading-relaxed text-mute md:text-lg"
            style={{ "--d": "220ms" } as React.CSSProperties}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
