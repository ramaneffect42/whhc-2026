# Technozarre page — brief  ⭐ hardest page

**You edit:** `src/app/technozarre/_components/TechnozarreContent.tsx` (and any new files in that `_components` folder), plus create `src/data/technozarre.ts`.
**Don't touch:** anything else. The banner at the top is already built.
**Route:** `/technozarre`

## Goal
The page for our annual fest (`FEST` in `src/lib/site.ts` — name and status live there). Show every event of the fest so visitors can pick and register.

## Event categories on the 2025-26 site
- **Technical** — e.g. E-Treasure Hunt, SQLize, Python Puzzle Hunt, Code in the Dark, Competitive Programming
- **Non-technical** — e.g. Shipwreck, IPL Auction, Scribble, Whisper Challenge, Trivia
- **Gaming** — e.g. BGMI, Valorant, FIFA

(Ask the fest organisers for the real 2027 list — use the above only as dummy data.)

## Data first, UI second
Create `src/data/technozarre.ts`. Suggested shape:

```ts
export type FestEvent = {
  slug: string;
  name: string;
  category: "technical" | "non-technical" | "gaming";
  date: string;            // "TBA" is fine
  time: string;
  venue: string;
  description: string;
  coordinators: { name: string }[]; // ⚠️ NO phone numbers in the repo (see rules)
  registerUrl?: string;    // leave empty for now
};
export const FEST_EVENTS: FestEvent[] = [ /* ... */ ];
```

## Design
- Category tabs/filters (All / Technical / Non-technical / Gaming).
- Event cards with date, time, venue and a **Register** button.
- Register button: if `registerUrl` is missing show a disabled "Registrations opening soon". *(Real registration forms will be built later as part of the main site — not your job now.)*
- A countdown to the fest date is a nice touch (client component, update every second — clean up the interval!).

## Rules specific to this page
- **Never commit phone numbers or personal details.** Show coordinator names only for now.
- Fix the old site's copy-paste bugs: no duplicate event names.
- Photos: `next/image`, `ImagePlaceholder` until real ones arrive.

## Ready-made building blocks
See the table in `src/app/about/BRIEF.md`.

## Done when
- [ ] All categories + events displayed from `src/data/technozarre.ts`
- [ ] Filtering works
- [ ] Looks good on phone and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
