/** Endless scrolling text strip. Pure CSS animation (no JS, no re-renders). */
export default function Marquee({ words }: { words: readonly string[] }) {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {words.map((w) => (
        <li
          key={w}
          className="flex items-center gap-10 font-display text-2xl font-semibold uppercase tracking-wider text-white/25 md:text-4xl"
        >
          {w}
          <span className="text-brand">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-y border-line bg-black/40 py-5">
      <p className="sr-only">{words.join(", ")}</p>
      <div className="flex w-max animate-marquee will-change-transform">
        {row}
        {row}
      </div>
    </div>
  );
}
