import PageHeader from "@/components/layout/PageHeader";
import CrewContent from "./_components/CrewContent";

export const metadata = { title: "The Crew" };

// The header banner is built. Build everything below it in _components/CrewContent.tsx
export default function CrewPage() {
  return (
    <>
      <PageHeader
        eyebrow="// the crew"
        title="Meet the crew"
        accent="crew"
        description="The faculty and student leaders behind the club."
      />
      <CrewContent />
    </>
  );
}
