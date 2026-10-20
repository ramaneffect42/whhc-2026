"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Main"
        className="glass flex w-full max-w-5xl items-center justify-between rounded-full py-2 pl-5 pr-2 md:pr-3"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-2xl font-bold tracking-wider text-ink transition-colors hover:text-brand glow-text"
          aria-label={`${SITE.short} home`}
        >
          {SITE.short}
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-widest transition-colors ${
                  isActive(href)
                    ? "bg-brand/15 text-brand shadow-[inset_0_0_0_1px_rgb(255_50_50/0.35)]"
                    : "text-ink/80 hover:text-brand"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass absolute inset-x-4 top-[4.9rem] rounded-3xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map(({ href, label }, i) => (
                <m.li
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3.5 font-display text-lg font-semibold uppercase tracking-widest ${
                      isActive(href) ? "text-brand" : "text-ink/85"
                    }`}
                  >
                    {label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
