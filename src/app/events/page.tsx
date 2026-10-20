import PageHeader from "@/components/layout/PageHeader";
import EventsContent from "./_components/EventsContent";

export const metadata = { title: "Events" };

// The header banner is built. Build everything below it in _components/EventsContent.tsx
export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="// events"
        title="Past events"
        accent="events"
        description="A look back at what we have hosted — and how it went."
      />
      <EventsContent />
    </>
  );
}
