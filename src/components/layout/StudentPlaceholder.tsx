/**
 * The empty box shown on pages that still need to be built.
 * When you build your page, DELETE this component from your page's content file.
 */
export default function StudentPlaceholder({
  page,
  brief,
  owner = "unassigned",
}: {
  page: string;
  brief: string;
  owner?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="hatch rounded-3xl border border-dashed border-brand/40 p-8 text-center md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
            🚧 under construction
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase md:text-5xl">
            {page} page goes here
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-mute">
            Read <code className="font-mono text-ink">{brief}</code> to see what to build, then
            replace this box with your sections.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-white/35">
            owner: {owner}
          </p>
        </div>
      </div>
    </section>
  );
}
