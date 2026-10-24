# WHHC 2026-27 Website

White Hat Hackers Club · SRM IST Vadapalani. Built with Next.js, Tailwind and Framer Motion.

## Quick start
```bash
git clone <repo-url>
cd <folder>
npm install
npm run dev        # open http://localhost:3000
```

## Who builds what
| Page | Route | Task | Owner | Brief |
|---|---|---|---|---|
| Home | `/` | Done | Tech head | — |
| About | `/about` | Story, vision & mission, what we do, numbers, focus areas | Arcot Mohamed Shuwais | `src/app/about/BRIEF.md` |
| The Crew | `/crew` | Faculty, senior and junior board from a data file. **Built:** junior board + faculty placeholders. **Still needed:** senior board and faculty photos | Sivaraman | `src/app/crew/BRIEF.md` |
| Events | `/events` | Past-events timeline/gallery; cover Tiranga Tales and Zero to Publications | Amancherla Ananya Srokrithi | `src/app/events/BRIEF.md` |
| Technozarre | `/technozarre` | Countdown timer + message block about the fest | S. Keshav, S. Kumaresh | `src/app/technozarre/BRIEF.md` |

**Read [`AGENTS.md`](./AGENTS.md) first** — it has the rules, ready-made components and copy-paste templates (colours, animation, performance, git workflow). Every AI tool is pointed at it automatically (`CLAUDE.md`, `GEMINI.md`, Copilot, Cursor and Windsurf files).

## Using an AI tool?
Great — tell it: *"Read AGENTS.md and src/app/<your page>/BRIEF.md, then build my page. Only edit files in my page's folder."*
You are still responsible for understanding the code you submit.
