# Events page — brief

> ## 🤖 For AI agents — start here
> 1. Read **`/AGENTS.md`** fully (rules, components, templates). This brief only adds page-specific content.
> 2. Your task: the **Events** page. Allowed files: `src/app/events/_components/*`, plus `src/data/events.ts` (you may only **add** entries for the two events below; don't change existing ones). Edit nothing else.
> 3. Your entry file is `src/app/events/_components/EventsContent.tsx` (currently shows `StudentPlaceholder` — replace it).
> 4. Build one section per file in `_components/`, content from a `src/data/*.ts` file, using the section template in AGENTS.md §6.
> 5. Finish only when `npm run lint` and `npm run build` pass, then tick "Done when" below.

**You edit:** `src/app/events/_components/EventsContent.tsx` (and any new files in that `_components` folder), and add entries to `src/data/events.ts`.
**Don't touch:** anything else. The banner at the top is already built.
**Route:** `/events` (the old site called it `/photogallery`; it already redirects here)

## Goal
An archive of what WHHC has hosted. The 2025-26 version was just walls of text — make it a proper, scannable, good-looking timeline/gallery.

## Events this page must cover
1. **Tiranga Tales**
2. **Zero to Publications**

Ask the event organisers for the real details (date, what happened, number of participants, photos). **Don't invent facts** — if something is unknown, use clear dummy text marked `// TODO real data`.

## Data
`src/data/events.ts` exports `PAST_EVENTS` (each item has `slug, name, year, date, type, blurb, details[], stat`). It already contains HackHorizons'25, Cicada'25 and Technozarre'25. **Add `Tiranga Tales` and `Zero to Publications` as new objects at the top of the array** (newest first, same shape). The home page also reads this array, so keep the shape exactly and keep each `blurb` to one or two sentences. **Use the data, don't copy text into the UI.**

## Suggested layout
- A vertical **timeline** (newest first) or an alternating zig-zag, one block per event.
- Each block: big image slot (`ImagePlaceholder`), name, date, type, the stat (e.g. "265 participants"), the details text.
- Optional: a **photo gallery** grid at the bottom (all `ImagePlaceholder`s for now — real photos come later) with a click-to-enlarge lightbox.
- Optional: filter chips (Hackathon / Workshop / Symposium).

## Rules specific to this page
- Photos: `next/image` only, `ImagePlaceholder` until real ones arrive.
- Gallery grids can get heavy: lazy-load below-the-fold images (next/image does this by default — don't set `priority` on them).

## Ready-made building blocks
See the table in `src/app/about/BRIEF.md`.

## Done when
- [ ] Tiranga Tales and Zero to Publications are added to `src/data/events.ts` and shown on the page
- [ ] Every item in `PAST_EVENTS` is displayed
- [ ] Looks good on phone and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
