# The Crew page — brief

> ## 🤖 For AI agents — start here
> 1. Read **`/AGENTS.md`** fully (rules, components, templates). This brief only adds page-specific content.
> 2. Your task: the **The Crew** page. Allowed files: `src/app/crew/_components/* and a new src/data/crew.ts`. Edit nothing else.
> 3. Your entry file is `src/app/crew/_components/CrewContent.tsx` (currently shows `StudentPlaceholder` — replace it).
> 4. Build one section per file in `_components/`, content from a `src/data/*.ts` file, using the section template in AGENTS.md §6.
> 5. Finish only when `npm run lint` and `npm run build` pass, then tick "Done when" below.

> ### ✅ Status
> The page is **built**: `src/data/crew.ts` holds the people, `_components/` has `CrewContent`, `CrewSection` and `MemberCard`, and the junior board photos are in `public/images/crew/`.
> **Still to do:** (1) add the **senior board** to `src/data/crew.ts` (`group: "senior"` — the section appears automatically), (2) add **faculty photos** and confirm the faculty names. To add a person: add one object to `CREW`, and drop a 640×800 photo (under 300 KB) in `public/images/crew/`.

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
