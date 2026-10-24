import SectionHeading from "@/components/ui/SectionHeading";
import PillarTabs from "./PillarTabs";

export default function WhatWeDoSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="// 04 — what we do"
          title="Three ways we learn together."
          accent="together."
          description="Workshops, events and articles. Different formats, the same belief — computer science is better when it’s shared."
        />
        <PillarTabs />
      </div>
    </section>
  );
}
