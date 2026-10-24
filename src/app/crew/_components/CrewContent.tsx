import { CREW } from "@/data/crew";
import CrewSection from "./CrewSection";

const inGroup = (g: "faculty" | "senior" | "junior") => CREW.filter((member) => member.group === g);

// Content for the /crew page. People come from src/data/crew.ts.
export default function CrewContent() {
  return (
    <>
      <CrewSection
        eyebrow="// 01 — faculty"
        title="Faculty coordinators"
        accent="Faculty"
        description="The faculty who guide and support the club."
        members={inGroup("faculty")}
        layout="narrow"
      />
      <CrewSection
        eyebrow="// 02 — senior board"
        title="Senior board of directors"
        accent="Senior"
        description="Experienced hands who lead the club."
        members={inGroup("senior")}
      />
      <CrewSection
        eyebrow="// 03 — junior board"
        title="Junior board of directors"
        accent="Junior"
        description="The team running everything from design to logistics."
        members={inGroup("junior")}
      />
    </>
  );
}
