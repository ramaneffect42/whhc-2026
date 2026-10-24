# About page — brief

> ## 🤖 For AI agents — start here
> 1. Read **`/AGENTS.md`** fully (rules, components, templates). This brief only adds page-specific content.
> 2. Your task: the **About** page. Allowed files: `src/app/about/_components/*`. Edit nothing else.
> 3. Your entry file is `src/app/about/_components/AboutContent.tsx` (currently shows `StudentPlaceholder` — replace it).
> 4. Build one section per file in `_components/`, content from a `src/data/*.ts` file, using the section template in AGENTS.md §6.
> 5. Finish only when `npm run lint` and `npm run build` pass, then tick "Done when" below.

**You edit:** `src/app/about/_components/AboutContent.tsx` (and any new files in that `_components` folder).
**Don't touch:** anything outside this folder. The banner at the top is already built.
**Route:** `/about`

## Goal
Tell visitors who WHHC is. The home page only gives a short taste — this page goes deeper.

## Suggested sections
1. **Our story** — what WHHC is, when/why it started (ask a senior for the real history).
2. **Vision & mission** — use the text below (rewrite it in your own words, shorter is fine).
3. **What we do** — workshops, events, publications (articles on website/social).
4. **Numbers** — reuse `<CountUp>` with `STATS` from `@/lib/site`.
5. **Focus areas** — keep it general: programming, AI/ML, web, competitive coding, hackathons.
6. **Join us** — a call-to-action (`<ButtonLink href="...">`).

## Text from the old site (starting point)
- **Vision:** The club is based in the DCSE (E-Tech) — Department of Computer Science and Engineering (Emerging Technologies) — SRM Vadapalani, Chennai. The department has renowned faculty, many with 10+ years of experience, and an active research culture published at national and international conferences.
- **Mission:** WHHC is a student-driven technical club at SRMIST Vadapalani. Its goal is to inspire students to explore computer science beyond the classroom and help them grow. Beginners to advanced are welcome; the aim is a space where like-minded people discuss ideas and turn knowledge into meaningful progress.
- **What we do:** Workshops and events, plus online articles on the website and social media, to share the applications, advancements and future of computing.

> **Tone rule:** WHHC is a general computer-science club. Do **not** write about cybersecurity, ethical hacking or CTFs on any page.

## Ready-made building blocks (import, don't rewrite)
| Need | Import |
|---|---|
| Section title | `@/components/ui/SectionHeading` |
| Fade-in on scroll | `@/components/ui/Reveal` |
| Glowing hover card | `@/components/ui/SpotlightCard` |
| Counting numbers | `@/components/ui/CountUp` |
| Image slot | `@/components/ui/ImagePlaceholder` |
| Buttons | `@/components/ui/ButtonLink` |
| Site facts | `@/lib/site` |

Look at `src/components/home/AboutBento.tsx` to see how the home page uses them.

## Done when
- [ ] Looks good on phone (375px) and laptop
- [ ] No leftover `StudentPlaceholder`
- [ ] `npm run lint` and `npm run build` pass
- [ ] Read `/AGENTS.md` rules (performance + colours)
