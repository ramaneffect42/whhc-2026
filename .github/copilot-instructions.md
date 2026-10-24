# WHHC website — AI agent instructions

**Read `AGENTS.md` in the repo root completely before writing any code. It is the source of truth.**

Critical rules (full detail in AGENTS.md):
1. Build ONE page; edit only the files allowed for it in AGENTS.md section 1 (`src/app/<page>/_components/*` and your `src/data/*` file). Read `src/app/<page>/BRIEF.md` first.
2. Next.js 16 App Router, TypeScript, Tailwind v4, Framer Motion. Pages are static. Never add `"use client"` to a `page.tsx`; put interactive UI in its own `"use client"` file. No `Math.random()`/`Date.now()` during server render.
3. Theme tokens only (`bg-bg bg-surface border-line text-ink text-mute text-brand bg-brand`, `font-display`, `container-x`, `section-y`). No hex colours, no new fonts.
4. Use `m.div` from framer-motion (never `motion.div`); animate only transform/opacity; prefer the `Reveal` component.
5. Images via `next/image` only; use `ImagePlaceholder` until real photos exist. Content lives in `src/data/*.ts` and is rendered with `.map()`.
6. Reuse shared components in `src/components/ui/*` (SectionHeading, Reveal, SpotlightCard, ImagePlaceholder, ButtonLink, CountUp). Do not edit shared files or add npm packages.
7. Mobile first; must work at 375px. Soft, inviting wording; general computer-science club tone (no cybersecurity/hacking/CTF); no phone numbers or personal data.
8. Finish only when `npm run lint` and `npm run build` pass with no errors. Never add Co-Authored-By trailers.
