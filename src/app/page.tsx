import Hero from "@/components/home/Hero";
import AboutBento from "@/components/home/AboutBento";
import Stats from "@/components/home/Stats";
import FlagshipEvents from "@/components/home/FlagshipEvents";
import CrewTeaser from "@/components/home/CrewTeaser";
import FestBanner from "@/components/home/FestBanner";
import Marquee from "@/components/ui/Marquee";
import { MARQUEE_WORDS } from "@/lib/site";

// Home page — built by the tech head. Each section lives in components/home/.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee words={MARQUEE_WORDS} />
      <AboutBento />
      <Stats />
      <FlagshipEvents />
      <CrewTeaser />
      <FestBanner />
    </>
  );
}
