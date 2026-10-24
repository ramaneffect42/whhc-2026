import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg/70 backdrop-blur-sm">
      <div className="container-x grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl font-bold tracking-wider text-brand glow-text">
            {SITE.short}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            {SITE.name} — {SITE.tagline}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-white/35">
            {SITE.department}
            <br />
            {SITE.campus}
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
            Quick links
          </h3>
          <ul className="space-y-3">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-ink/80 transition-colors hover:text-brand"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
            Find us
          </h3>
          <ul className="space-y-3">
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/80 transition-colors hover:text-brand"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center font-mono text-[11px] uppercase tracking-widest text-white/30">
        © {SITE.year} {SITE.name} · Made by the WHHC tech team
      </div>
    </footer>
  );
}
