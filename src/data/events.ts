// Past events. Used by the Home page (flagship cards) and the Events page.
// To add an event: add an object here — no UI code needs to change.

export type PastEvent = {
  slug: string;
  name: string;
  year: number;
  date: string;
  type: string;
  /** One-line teaser for cards */
  blurb: string;
  /** Full write-up for the Events page */
  details: string[];
  stat: { value: string; label: string };
};

export const PAST_EVENTS: PastEvent[] = [
  {
    slug: "technozarre-25",
    name: "Technozarre'25",
    year: 2025,
    date: "2025",
    type: "National tech symposium",
    blurb:
      "Our flagship symposium on the theme “Tinkering Through Time” — from retro coding to futuristic tech.",
    details: [
      "Technozarre'25 was our flagship national-level technical symposium, themed “Tinkering Through Time”. It took participants on a journey through the evolution of computing, bridging legacy systems and the bleeding edge of modern innovation.",
      "The symposium featured technical competitions, hands-on workshops and non-technical events for every skill level — from retro-coding challenges and classic hardware debugging to AI-driven problem solving.",
    ],
    stat: { value: "National", label: "level symposium" },
  },
  {
    slug: "hackhorizons-25",
    name: "HackHorizons'25",
    year: 2025,
    date: "9–10 Oct 2025",
    type: "12-hour hackathon",
    blurb:
      "A 12-hour innovation marathon exploring Generative AI and Agentic AI.",
    details: [
      "HackHorizons 2025 was a rigorous 12-hour innovation marathon held on 9–10 October 2025, with 265 participants from internal and external institutions. Problem statements centred on Generative AI and Agentic AI.",
      "Teams turned early concepts into working MVPs with the help of internal mentoring rounds, and were judged on a strict two-stage rubric covering foundational quality, technical rigour and market potential.",
    ],
    stat: { value: "265", label: "participants" },
  },
  {
    slug: "cicada-25",
    name: "Cicada'25",
    year: 2025,
    date: "12 Sep 2025",
    type: "Python puzzle hunt",
    blurb:
      "A one-day Python puzzle hunt: easy and hard rounds of string wizardry, recursion and parsing.",
    details: [
      "Cicada'25 — Python Puzzle Hunt — was an intensive one-day workshop and technical challenge on 12 September 2025, with 86 participants (70 internal, 16 external).",
      "The competition ran in an Easy and a Hard round on HackerRank, testing advanced string manipulation, nested loops, recursion and intricate data parsing.",
    ],
    stat: { value: "86", label: "participants" },
  },
];
