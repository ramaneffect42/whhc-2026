// ONE place for site-wide facts. Change them here, they update everywhere.

export const SITE = {
  name: "White Hat Hackers Club",
  short: "WHHC",
  tagline: "Learn. Explore. Grow together.",
  campus: "SRM IST, Vadapalani",
  department: "Department of Computer Science and Engineering (Emerging Technologies)",
  departmentShort: "DCSE (E-Tech)",
  year: "2026-27",
} as const;

// The yearly fest. Next year: change name + status, nothing else.
export const FEST = {
  name: "Technozarre'27",
  status: "coming-soon" as "coming-soon" | "open" | "closed",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/crew", label: "The Crew" },
  { href: "/events", label: "Events" },
  { href: "/technozarre", label: FEST.name },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/whhc.srm.vdp/" },
  { label: "Facebook", href: "https://www.facebook.com/WHHC.SRM/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/white-hat-hackers-club-638389212/",
  },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Events conducted" },
  { value: 100, suffix: "+", label: "Club members" },
  { value: 5, suffix: "", label: "Campus ambassadors" },
  { value: 3, suffix: "", label: "Meetups" },
] as const;

export const MARQUEE_WORDS = [
  "Programming",
  "Web Development",
  "AI & ML",
  "Competitive Coding",
  "Hackathons",
  "Workshops",
  "Puzzle Hunts",
  "Open Source",
] as const;
