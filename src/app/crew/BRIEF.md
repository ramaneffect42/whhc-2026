# The Crew page — brief

**You edit:** `src/app/crew/_components/CrewContent.tsx` (and any new files in that `_components` folder), plus create `src/data/crew.ts` for the people data.
**Don't touch:** anything else. The banner at the top is already built.
**Route:** `/crew`

## Goal
Show everyone who runs the club, in three groups:
1. **Faculty coordinators** — Dr. P. Jayanthi, Dr. S. Jayalakshmi (confirm current faculty with a senior)
2. **Senior board of directors**
3. **Junior board of directors**

## Data first, UI second
Put people in **`src/data/crew.ts`** — never hard-code names inside the UI. Suggested shape:

```ts
export type Member = {
  name: string;
  role: string;            // e.g. "Joint Technical Head"
  group: "faculty" | "senior" | "junior";
  photo?: string;          // e.g. "/images/crew/name.jpg" — optional until we have photos
  links?: { label: string; href: string }[]; // LinkedIn / GitHub
};
export const CREW: Member[] = [ /* ... */ ];
```
Then the page just maps over `CREW`. Next year's team = edit one file.

## Design idea
The 2025-26 site showed each person as a card styled like an **SD card**. Keep that idea if you can — or invent your own. Make it feel special: tilt on hover, flip to show role/links, etc.

## Rules specific to this page
- Photos: use `<Image>` from `next/image`, never `<img>`. Until photos exist, use `<ImagePlaceholder aspect="aspect-[3/4]" />`.
- 30+ cards = lots of animation. Animate with `Reveal` only (it plays once). **No** per-card infinite animations.
- Must work on a phone: 1 column → 2 → 3/4 columns.

## Ready-made building blocks
See the table in `src/app/about/BRIEF.md` — same components apply.

## Done when
- [ ] All three groups shown, data lives in `src/data/crew.ts`
- [ ] Looks good on phone and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
