/**
 * The empty box shown on pages that still need to be built.
 * When you build your page, DELETE this component from your page's content file.
 */
export default function StudentPlaceholder({
  page,
  brief,
}: {
  page: string;
  brief: string;
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="hatch rounded-3xl border border-dashed border-brand/40 p-8 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold uppercase md:text-5xl">
            {page} page goes here
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-mute">
            Read <code className="font-mono text-ink">{brief}</code> to see what to build, then
            replace this box with your sections.
          </p>
        </div>
      </div>
    </section>
  );
}
