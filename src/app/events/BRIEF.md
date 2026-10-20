# Events page — brief

**You edit:** `src/app/events/_components/EventsContent.tsx` (and any new files in that `_components` folder).
**Don't touch:** anything else. The banner at the top is already built.
**Route:** `/events` (the old site called it `/photogallery`; it already redirects here)

## Goal
An archive of what WHHC has hosted. The 2025-26 version was just walls of text — make it a proper, scannable, good-looking timeline/gallery.

## Data (already written for you)
`src/data/events.ts` exports `PAST_EVENTS` with: HackHorizons'25, Cicada'25, Technozarre'25 — each has `name, date, type, blurb, details[], stat`. **Use that, don't copy text into the UI.** To add an event, add an object to that file.

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
- [ ] Every item in `PAST_EVENTS` is displayed
- [ ] Looks good on phone and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
