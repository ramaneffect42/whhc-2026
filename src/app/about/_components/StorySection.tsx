import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import StoryTimeline from "./StoryTimeline";

export default function StorySection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 02 — our story"
          title="The story so far."
          accent="story"
          description={`${SITE.short} is a student-driven technical club at ${SITE.campus}. It started with a simple idea — computer science is more fun when it’s learned together — and grew into a community that keeps showing up.`}
        />

        <StoryTimeline />

        <Reveal className="mt-12">
          <ButtonLink href="/events" variant="ghost">
            See all events
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
