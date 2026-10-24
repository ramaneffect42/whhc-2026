import Marquee from "@/components/ui/Marquee";
import AboutIntro from "./AboutIntro";
import FocusSection from "./FocusSection";
import JoinSection from "./JoinSection";
import NumbersSection from "./NumbersSection";
import StorySection from "./StorySection";
import VisionSection from "./VisionSection";
import WhatWeDoSection from "./WhatWeDoSection";
import { VALUE_WORDS } from "./aboutData";

// About page — content lives in _components, facts come from src/lib/site and src/data/events.
export default function AboutContent() {
  return (
    <>
      <AboutIntro />
      <Marquee words={VALUE_WORDS} />
      <StorySection />
      <VisionSection />
      <WhatWeDoSection />
      <NumbersSection />
      <FocusSection />
      <JoinSection />
    </>
  );
}
