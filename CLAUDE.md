@AGENTS.md

# WHHC 2026-27 website — rules for humans AND AI tools

Club website for the White Hat Hackers Club, SRM IST Vadapalani. **Content tone: WHHC is a general computer-science club — never write about cybersecurity, ethical hacking or CTFs; the name is just a name.** Next.js (App Router, TypeScript) + Tailwind v4 + Framer Motion. Statically generated and served from Vercel's CDN, so it stays fast under heavy traffic.

> The Next.js version here has breaking changes from older versions. Check `node_modules/next/dist/docs/` before using a Next API you are unsure about.

## If you are a student building a page
1. Open your page's `BRIEF.md` (`src/app/<page>/BRIEF.md`).
2. **Only edit files inside your own page folder** (`src/app/<page>/`) plus your data file in `src/data/`. Do **not** edit `layout.tsx`, `globals.css`, `components/layout/*`, `components/ui/*`, `components/home/*` or `lib/site.ts`. If you need something changed there, ask the tech head.
3. Build your sections in `src/app/<page>/_components/`. Delete the `StudentPlaceholder` once your page is real.
4. Before every PR: `npm run lint` and `npm run build` must pass.

## Folder map
```
src/app/            routes (page.tsx = Home, about/ crew/ events/ technozarre/)
src/app/<page>/BRIEF.md           what to build
src/app/<page>/_components/       YOUR page's code
src/components/ui/                shared building blocks (Reveal, SpotlightCard, ...)
src/components/layout/            navbar, footer, PageHeader (don't edit)
src/components/home/              home-page sections
src/components/effects/           site-wide effects (embers, scroll bar)
src/data/                         content as data (events, crew, fest events)
src/lib/site.ts                   site-wide facts: name, nav, socials, FEST name/status
public/images/                    real photos (until then use <ImagePlaceholder>)
```

## Design system (do not invent your own)
- Theme: pure black, signature red. Use tokens only: `bg-bg bg-surface bg-surface-2 border-line text-ink text-mute text-brand bg-brand text-brand-deep`. **No random hex colours.**
- Fonts: `font-display` (headings, UPPERCASE), `font-sans` (body), `font-mono` (small labels). Don't import other fonts.
- Page width: wrap content in `container-x`; vertical spacing: `section-y`.
- Look at `src/components/home/*` for how sections should feel.

## Motion rules
- Use `m.div` from `framer-motion`, **never** `motion.div` (the app uses LazyMotion strict mode).
- Prefer the ready-made `Reveal` for scroll-in animation.
- Animate **only `transform` and `opacity`** (x, y, scale, rotate, opacity). Never animate width/height/top/left/margin.
- No infinite animations on lists of items (cards, photos). One decorative loop per section, max.
- No autoplaying video, no WebGL/three.js, no big canvases unless the tech head approves.
- GSAP only if truly needed: import it in the page that uses it, never in shared/layout code.
- Respect reduced motion (already handled by `MotionProvider` and globals.css; don't bypass it).

## Performance rules (the site must not lag)
- Images: always `next/image` (`import Image from "next/image"`) with a sensible `sizes`; **never** `<img>`. Only add `priority` for the single biggest above-the-fold image.
- Compress photos before committing (aim < 300 KB each). No multi-MB images/GIFs in the repo.
- Don't install new npm packages without asking. Especially no UI kits, icon packs (use inline SVG / emoji), or animation libs.
- Content lives in `src/data/*.ts` and is rendered by mapping — not copy-pasted into JSX.
- Pages are static. Don't use `cookies()`, `headers()`, `Math.random()` or `Date.now()` while rendering on the server; random/time-based things belong in a client component (`"use client"`) inside `useEffect`.
- Only add `"use client"` to components that need state, effects or browser APIs. Keep it off by default.

## Privacy & safety
- Never commit phone numbers, emails, passwords, API keys or `.env` files. Coordinator names only.
- Don't hotlink images from other sites.

## Git workflow
- One branch per page: `git checkout -b page/crew`. Commit small and often. Open a PR into `main`. The tech head reviews and merges.
- Never push directly to `main`. Never `git push --force`.

## Roadmap (don't build yet, but don't block it)
Technozarre'27 will get on-site event registration forms, a participant login, per-event coordinator dashboards and a super-admin portal. This needs a backend + database + auth, added later in route groups like `src/app/(portal)/`. Keep the public pages static and keep data in `src/data/` so it can be moved to a database later.

## Commands
```bash
npm install     # once
npm run dev     # http://localhost:3000
npm run lint
npm run build   # must pass before a PR
```
