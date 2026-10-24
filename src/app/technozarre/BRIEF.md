# Technozarre page — brief

> ## 🤖 For AI agents — start here
> 1. Read **`/AGENTS.md`** fully (rules, components, templates). This brief only adds page-specific content.
> 2. Your task: the **Technozarre** page. Allowed files: `src/app/technozarre/_components/*` only. Edit nothing else.
> 3. Your entry file is `src/app/technozarre/_components/TechnozarreContent.tsx` (currently shows `StudentPlaceholder` — replace it).
> 4. Scope is deliberately small (see below): a **countdown timer** and a **message block**. Do not build event lists, filters or registration — those are added later.
> 5. Finish only when `npm run lint` and `npm run build` pass, then tick "Done when" below.

**You edit:** `src/app/technozarre/_components/TechnozarreContent.tsx` and any new files in that `_components` folder.
**Don't touch:** anything else. The banner at the top is already built.
**Route:** `/technozarre`

## Goal
The fest page for now is a simple "it's coming" page: how long until the fest, and what the fest is about. The fest name/status live in `FEST` in `src/lib/site.ts` (read-only, import it).

## What to build (final scope)
1. **Countdown timer** — days · hours · minutes · seconds until the fest starts.
2. **Message block** — a short, inviting text explaining what Technozarre is all about.

The event list, categories, registration and other sections will be **added later** — structure your files so that is easy (one section per file, composed in `TechnozarreContent.tsx`).

## Countdown details
- The fest start date is **not confirmed yet**. Keep it in one place, in your own folder: `_components/festDate.ts`
  ```ts
  // TODO: confirm the real start date with the fest organisers. Use null until then.
  export const FEST_START: string | null = null; // e.g. "2027-03-05T09:00:00+05:30"
  ```
- If `FEST_START` is `null`, show a friendly "Dates will be announced soon" state instead of numbers (no fake dates).
- It must be a **client component** in its own file (`"use client"`). Do NOT read the current time while rendering on the server (`Date.now()`/`new Date()` break prerendering). Start with `null` state, compute inside `useEffect`, and **clean up the timer**:
  ```tsx
  "use client";
  import { useEffect, useState } from "react";

  export default function Countdown({ target }: { target: string }) {
    const [left, setLeft] = useState<number | null>(null);
    useEffect(() => {
      const tick = () => setLeft(Math.max(0, new Date(target).getTime() - Date.now()));
      const first = setTimeout(tick, 0);       // first value right after mount
      const id = setInterval(tick, 1000);
      return () => { clearTimeout(first); clearInterval(id); };
    }, [target]);
    if (left === null) return null;            // nothing until mounted (avoids hydration mismatch)
    // convert `left` (ms) to days / hours / minutes / seconds and render four boxes
  }
  ```
- Render four boxes (Days / Hours / Minutes / Seconds) with big `font-display` numbers in `text-brand`, small `font-mono` labels, inside `SpotlightCard`s. Pad numbers with two digits. When the time reaches zero show "It's happening!".
- Make sure the four boxes fit at **375px** (2×2 grid on phones, 4 across from `sm:`).

## Message block details
- Short (3–5 sentences), warm and inviting; no promises. Use `SectionHeading` for the title.
- Starting text (rewrite in your own words): *Technozarre is our annual flagship technical symposium — a few days of technical contests, creative challenges and gaming, open to students from many colleges. Come to learn something new, meet people who like the same things, and have fun along the way.*
- Don't name specific events or dates in the text (not final).
- Optional: one `ImagePlaceholder` (`aspect-[16/9]`) next to the text for a future fest photo.

## Rules specific to this page
- Use `FEST.name` for the fest name; never hard-code "Technozarre'27" in JSX.
- No phone numbers, emails or personal details anywhere.
- At most one infinite animation on the page (e.g. a pulsing dot); the countdown digits themselves should not animate in a distracting way.

## Ready-made building blocks
See the table in `src/app/about/BRIEF.md` and `AGENTS.md` §5.

## Done when
- [ ] Countdown shows days/hours/minutes/seconds (or the "announced soon" state while the date is `null`), updates every second and cleans up its timer
- [ ] Message block about what the fest is all about
- [ ] Looks good on phone (375px) and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
