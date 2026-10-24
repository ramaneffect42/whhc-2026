<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# WHHC 2026-27 website — instructions for AI agents

**Read this whole file before writing code.** It is the single source of truth for every AI tool (Claude, Copilot, Cursor, Gemini, Codex, Windsurf…). Following it means your first attempt passes review.

## 0. TL;DR (the 12 rules that matter most)
1. You are building ONE page. Find it in §1 and edit **only** the files listed there.
2. Read that page's `BRIEF.md` first. It has the content, layout ideas and "done when" checklist.
3. Stack: Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion. Pages are **static**.
4. `page.tsx` files are server components. **Never** add `"use client"` to a `page.tsx`. Put interactive UI in its own file starting with `"use client"`.
5. Colours/fonts: use the theme tokens in §4 only. **No hex colours, no new fonts.**
6. Animate with `m.div` (never `motion.div`), only `transform` + `opacity`. Prefer the ready-made `Reveal`.
7. Images: `next/image` only, never `<img>`. Until real photos exist use `ImagePlaceholder`.
8. Content lives in `src/data/*.ts` and is rendered by `.map()`. Don't paste content into JSX.
9. Reuse the shared components in §5. Don't re-create buttons, cards, headings or reveals.
10. Mobile first. Must look right at **375px** wide and on a laptop.
11. No new npm packages. No cybersecurity/hacking wording (§8). No phone numbers/emails in the repo.
12. Before finishing: `npm run lint` and `npm run build` must both pass with zero errors.

## 1. Which page am I building? (your allowed files)

| Task | Route | You may edit | Brief |
|---|---|---|---|
| About | `/about` | `src/app/about/_components/*` | `src/app/about/BRIEF.md` |
| The Crew | `/crew` | `src/app/crew/_components/*`, **new** `src/data/crew.ts` | `src/app/crew/BRIEF.md` |
| Events | `/events` | `src/app/events/_components/*`, and **add entries only** to `src/data/events.ts` | `src/app/events/BRIEF.md` |
| Technozarre | `/technozarre` | `src/app/technozarre/_components/*` only (countdown timer + message block) | `src/app/technozarre/BRIEF.md` |

Photos, branding/logo and testing are handled by the tech head — not part of the student tasks.

Everything not in your row is **read-only**. In particular never edit: `src/app/layout.tsx`, `src/app/template.tsx`, `src/app/globals.css`, `src/lib/site.ts`, `src/components/layout/*`, `src/components/ui/*`, `src/components/home/*`, `src/components/effects/*`, `src/components/providers/*`, `next.config.ts`, `package.json`. If a shared component can't do what you need, build a variant **inside your own `_components` folder** (copy it, rename it) and mention it in your PR.

Each page's entry file (`page.tsx`) already renders the banner (`PageHeader`) and your content component. Your work is the content component, e.g. `src/app/crew/_components/CrewContent.tsx`. Delete the `StudentPlaceholder` line when your content is real.

## 2. Playbook (follow in order)
1. Read this file, then your `BRIEF.md`, then look at `src/components/home/AboutBento.tsx` and `FlagshipEvents.tsx` — they show the exact style expected.
2. Create your data file (if your page has one) in `src/data/` with an exported typed array (template in §6).
3. Build sections as small components in your `_components/` folder. One section = one file. Compose them in your `XContent.tsx`.
4. Wrap each section as in the template (§6): `<section className="section-y">` → `<div className="container-x">` → `SectionHeading` → content.
5. Run `npm run dev`, open the page, and check **375px** and desktop widths.
6. Run `npm run lint` then `npm run build`. Fix every error. Re-run until both are clean.
7. Tick the "Done when" list in your BRIEF.

## 3. Stack facts & gotchas
- **Next 16 + Cache Components are ON** (`next.config.ts`). Static pages are prerendered. During server render do **not** use `Math.random()`, `Date.now()`, `new Date()`, `cookies()`, `headers()` — they break prerendering. Time/random things belong in a client component inside `useEffect`.
- `metadata` can only be exported from a server file (`page.tsx`), never from a `"use client"` file.
- Add `"use client"` only to components that use state, effects, event handlers or browser APIs (filters, tabs, countdown, lightbox, hover tilt). Keep everything else server-side.
- A server component may import and render client components. A client component may **not** import a server-only module.
- Dynamic routes (e.g. `/events/[slug]`) are out of scope — keep one page per task.
- ESLint (react-hooks) flags: calling `setState` synchronously inside `useEffect`, missing keys in `.map()`, `any` types, unused vars, `<img>`. Fix these, don't disable the rule.
- Always clean up timers/listeners: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, [])`.
- Tailwind v4: theme lives in `src/app/globals.css` (`@theme`). There is no `tailwind.config.js`. Arbitrary values are fine (`w-[420px]`) but colours must use tokens.
- Path alias: `@/` = `src/`. Example: `import Reveal from "@/components/ui/Reveal";`
- `framer-motion` runs in `LazyMotion strict` mode: `motion.div` **throws**; use `import { m } from "framer-motion"` and `m.div`.
- `prefers-reduced-motion` is handled globally. Don't write code that bypasses it.

## 4. Design tokens & utilities (the only palette)

Theme: **pure black with signature red** (`bg-bg` is true black; red is the accent). Don't tint or lighten the background.

| Use | Class |
|---|---|
| Page background | `bg-bg` (already applied to `<body>`; don't repaint it) |
| Card / panel | `bg-surface`, `bg-surface-2` |
| Borders | `border-line` (or `border-brand/40` for emphasis) |
| Body text | `text-ink` (primary), `text-mute` (secondary) |
| Accent | `text-brand`, `bg-brand`, `border-brand`, `text-brand-deep` (+ opacity e.g. `bg-brand/15`) |
| Headings | `font-display` + `uppercase` + `font-bold` |
| Body | `font-sans` (default) |
| Small labels | `font-mono text-xs uppercase tracking-[0.3em]` |

Custom utilities (defined in `globals.css`): `container-x` (page width + gutters) · `section-y` (vertical spacing) · `glass` · `glow-text` (red glow on text) · `hatch` (empty-image pattern) · `bg-grid` · `rise` (CSS entrance animation, delay via `style={{"--d":"200ms"}}`).

Spacing rhythm: sections use `section-y`; gaps between cards `gap-5`; card padding `p-6 sm:p-8`; card radius `rounded-2xl`. Headings: section title via `SectionHeading` (don't hand-roll `h2` styles).

Responsive: write mobile classes first, then `sm:` (640) `md:` (768) `lg:` (1024). Typical grids: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`.

## 5. Shared components (import these, don't rebuild)

| Component | Import | Props | Notes |
|---|---|---|---|
| `SectionHeading` | `@/components/ui/SectionHeading` | `eyebrow: string`, `title: string`, `accent?: string` (substring of title to colour red), `description?: string`, `align?: "left"\|"center"` | Self-animates. Eyebrow style: `"// 01 — topic"` |
| `Reveal` | `@/components/ui/Reveal` | `children`, `delay?: number` (s), `y?: number`, `className?` | Fade+slide on scroll, plays once. Stagger lists with `delay={i * 0.1}` |
| `SpotlightCard` | `@/components/ui/SpotlightCard` | `children`, `className?` | Card with cursor-following red glow. Put padding **inside** (`<div className="p-6">`) |
| `ImagePlaceholder` | `@/components/ui/ImagePlaceholder` | `aspect?` (Tailwind class e.g. `"aspect-[4/3]"`), `label?` (file name hint), `className?` | Empty slot for photos not yet available |
| `ButtonLink` | `@/components/ui/ButtonLink` | `href`, `children`, `variant?: "primary"\|"ghost"`, `className?` | Internal links only. For external links write an `<a target="_blank" rel="noopener noreferrer">` styled like it |
| `CountUp` | `@/components/ui/CountUp` | `to: number`, `suffix?`, `duration?` | Animated number |
| `Marquee` | `@/components/ui/Marquee` | `words: readonly string[]` | Scrolling strip. One per page max |
| `StudentPlaceholder` | `@/components/layout/StudentPlaceholder` | `page`, `brief` | **Delete** when your page is real |
| Site facts | `@/lib/site` | `SITE`, `FEST`, `NAV`, `SOCIALS`, `STATS`, `MARQUEE_WORDS` | Read-only. Never hard-code the club/fest name — use `SITE.name` / `FEST.name` |
| Past events data | `@/data/events` | `PAST_EVENTS: PastEvent[]` | Ready to use on the Events page |

## 6. Copy-paste templates

**Section (server component)**
```tsx
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { THINGS } from "@/data/things";

export default function ThingsSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="// 01 — things" title="Our things" accent="things" description="One friendly sentence." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THINGS.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold uppercase">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{t.blurb}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Data file (`src/data/things.ts`)**
```ts
export type Thing = { slug: string; name: string; blurb: string };
export const THINGS: Thing[] = [
  { slug: "one", name: "One", blurb: "…" },
];
```

**Interactive piece (client component, own file)**
```tsx
"use client";
import { useState } from "react";

export default function Filter({ options }: { options: readonly string[] }) {
  const [active, setActive] = useState(options[0]);
  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button key={o} role="tab" aria-selected={o === active} onClick={() => setActive(o)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
            o === active ? "border-brand bg-brand/15 text-brand" : "border-line text-mute hover:border-brand/50"
          }`}>
          {o}
        </button>
      ))}
    </div>
  );
}
```

**Image (when a real photo exists in `public/images/...`)**
```tsx
import Image from "next/image";

<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
  <Image src="/images/events/cicada-25.jpg" alt="Participants solving puzzles at Cicada'25" fill
    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
</div>
```
Always write a meaningful `alt`. Only the single largest above-the-fold image may use `priority`.

**Small custom animation**
```tsx
import { m } from "framer-motion"; // in a "use client" file
<m.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>…</m.div>
```
Only `x`, `y`, `scale`, `rotate`, `opacity`. At most one infinite loop per section, never on repeated items.

## 7. Performance budget (the site must not lag)
- No autoplay video, WebGL/three.js, big canvases, parallax on many elements, or per-item infinite animations.
- Photos ≤ 300 KB each (compress before committing); no GIFs; use `.jpg`/`.webp`.
- Don't import heavy libraries. GSAP only with tech-head approval, imported in your page only.
- Lists of 30+ items: `Reveal` is fine (plays once); no scroll-linked animation per item.
- `npm run build` must succeed; it will fail if you break prerendering.

## 8. Content rules
- **Tone:** WHHC is a *general computer-science club*. Do **not** write about cybersecurity, ethical hacking or CTFs. The name is just a name.
- **Soft, inviting wording.** Avoid promises/commitments (e.g. "we will make you an expert", "build", "ship", "master", "guarantee"). Prefer *learn, explore, grow, discover, together*.
- **Department:** "Department of Computer Science and Engineering (Emerging Technologies)", short **DCSE (E-Tech)** (also written CSE (E-Tech)). Use `SITE.department` / `SITE.departmentShort`.
- **Fest name:** always `FEST.name` from `@/lib/site` (currently "Technozarre'27").
- **No personal data in the repo:** no phone numbers, emails, addresses, passwords, keys, `.env`. Coordinator/crew **names and roles only**.
- Don't invent facts (dates, numbers, names). If unknown use clear dummy data and label it `// TODO real data`.
- Don't hotlink images or fonts from other websites.

## 9. Verify before you finish
```bash
npm run lint     # must print no errors
npm run build    # must list your route as "○ (Static)" and finish with no errors
npm run dev      # then open http://localhost:3000/<your-route> and check 375px + desktop
```
Checklist: no horizontal scroll at 375px · every image has `alt` · every `.map()` has a `key` · no leftover `StudentPlaceholder`/TODOs you can resolve · keyboard Tab reaches every button/link · only your allowed files changed (`git status`).

## 10. Never do this
- Edit shared/read-only files (§1) or add dependencies.
- Use `motion.div`, `<img>`, inline hex colours, new fonts, `dangerouslySetInnerHTML`, `any`, `// @ts-ignore`, `eslint-disable`.
- Add `"use client"` to `page.tsx` or to whole pages.
- Use `Math.random()`/`Date.now()` during server render.
- Commit secrets, phone numbers, `node_modules`, `.next`, or large files.
- Add `Co-Authored-By:` / "Generated with AI" trailers to commits or PRs.

## 11. Git
- One branch per task: `git checkout -b page/crew` (names are in the task sheet).
- Small commits with clear messages (`crew: add faculty cards`). Open a PR into `main`; the tech head reviews and merges.
- Never push to `main` directly. Never force-push.

## 12. Prompt students can paste into any AI tool
> Read `AGENTS.md` and `src/app/<PAGE>/BRIEF.md` in this repo. Build the `<PAGE>` page by editing only the files AGENTS.md §1 allows. Follow the templates in AGENTS.md §6, use only the shared components and tokens, keep it mobile-friendly, and make `npm run lint` and `npm run build` pass. Explain each file you create in one sentence.

## 13. Roadmap (don't build, don't block)
Technozarre'27 will later get on-site registration forms, participant login, per-event coordinator dashboards and a super-admin portal (backend + database + auth, in a route group like `src/app/(portal)/`). Keep public pages static and keep content in `src/data/` so it can move to a database later.

## 14. Project map
```
src/app/layout.tsx · template.tsx · globals.css · fonts.ts   shell (read-only)
src/app/page.tsx                                             Home (tech head)
src/app/<page>/page.tsx                                      route entry (banner + content)
src/app/<page>/_components/                                  YOUR code
src/app/<page>/BRIEF.md                                      your instructions
src/components/ui/        shared building blocks   src/components/layout/  navbar, footer, banner
src/components/home/      home sections            src/components/effects/ embers, scroll bar
src/data/                 content as data          src/lib/site.ts         site-wide facts
public/images/            real photos              CLAUDE.md etc.          pointers to this file
```
