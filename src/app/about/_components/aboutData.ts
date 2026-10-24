import { PAST_EVENTS } from "@/data/events";
import { FEST } from "@/lib/site";

/** Words for the value strip below the opening statement. */
export const VALUE_WORDS = [
  "Learn",
  "Explore",
  "Grow",
  "Together",
  "Curiosity",
  "Community",
  "Ideas",
  "Computer science",
] as const;

/** The three ideas that guide the club. */
export const PRINCIPLES = [
  {
    title: "Learn together",
    line: "Share the question, not just the answer. Nobody figures it out alone.",
  },
  {
    title: "Explore widely",
    line: "Follow the topic that pulls you, then see where it connects.",
  },
  {
    title: "Grow steadily",
    line: "Small steps, repeated. That is how confidence is made.",
  },
] as const;

export type JourneyItem = {
  key: string;
  when: string;
  label: string;
  title: string;
  blurb: string;
  stat?: { value: string; label: string };
  next?: boolean;
};

const RECENT_CHAPTERS = ["cicada-25", "hackhorizons-25", "technozarre-25"] as const;

const recent = RECENT_CHAPTERS.flatMap((slug): JourneyItem[] => {
  const event = PAST_EVENTS.find((entry) => entry.slug === slug);
  if (!event) return [];
  return [
    {
      key: event.slug,
      when: event.date,
      label: event.type,
      title: event.name,
      blurb: event.blurb,
      stat: event.stat,
    },
  ];
});

/** Recent event chapters plus the next one, so dates and stats stay in one place. */
export const JOURNEY: JourneyItem[] = [
  ...recent,
  {
    key: "next",
    when: "Next",
    label: "The next chapter",
    title: FEST.name,
    blurb: "A new chapter is already taking shape. The date will land here when it’s ready.",
    next: true,
  },
];

export type Pillar = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  points: string[];
  glyph: "terminal" | "calendar" | "article";
};

/** What the club actually does, shown as switchable panels. */
export const PILLARS: Pillar[] = [
  {
    slug: "workshops",
    index: "01",
    name: "Workshops",
    kicker: "Learn by doing",
    summary:
      "Hands-on sessions where the screen is yours. We start at the beginning, then follow the room’s curiosity as far as it goes.",
    points: ["Beginner-friendly, always", "Try it rather than watch it", "Questions welcome at every step"],
    glyph: "terminal",
  },
  {
    slug: "events",
    index: "02",
    name: "Events",
    kicker: "Show up together",
    summary:
      "Hackathons, puzzle hunts and our annual symposium — days that mix friendly competition with a lot of learning.",
    points: ["Hackathons and coding contests", "Puzzle hunts with a twist", "Our annual symposium"],
    glyph: "calendar",
  },
  {
    slug: "publications",
    index: "03",
    name: "Publications",
    kicker: "Ideas, written down",
    summary:
      "Articles on this site and our social channels that explore the applications, advances and future of computing — written by students, for students.",
    points: ["Articles on the site and socials", "The future of computing", "Written by members"],
    glyph: "article",
  },
];

export type FocusArea = {
  slug: string;
  index: string;
  name: string;
  blurb: string;
};

/** Six directions a member can explore. */
export const FOCUS_AREAS: FocusArea[] = [
  {
    slug: "programming",
    index: "01",
    name: "Programming",
    blurb:
      "The fundamentals, made friendly. Logic, syntax and the confidence to keep going when something finally clicks.",
  },
  {
    slug: "web-development",
    index: "02",
    name: "Web Development",
    blurb: "From a first layout to a finished experience — the craft of making things people can use.",
  },
  {
    slug: "ai-ml",
    index: "03",
    name: "AI & Machine Learning",
    blurb:
      "How machines learn, what it changes and where the field might go next. The ideas, not just the hype.",
  },
  {
    slug: "competitive-coding",
    index: "04",
    name: "Competitive Coding",
    blurb:
      "Puzzles under pressure. Sharpen your problem-solving alongside people who enjoy the same challenge.",
  },
  {
    slug: "hackathons",
    index: "05",
    name: "Hackathons",
    blurb: "A day or two of ideas, teamwork and rapid learning. Everyone starts somewhere.",
  },
  {
    slug: "open-source",
    index: "06",
    name: "Open Source",
    blurb: "Read code, ask questions, contribute. Learn how projects grow by joining one.",
  },
];
