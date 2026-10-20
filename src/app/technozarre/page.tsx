import PageHeader from "@/components/layout/PageHeader";
import TechnozarreContent from "./_components/TechnozarreContent";
import { FEST } from "@/lib/site";

export const metadata = { title: FEST.name };

// The header banner is built. Build everything below it in _components/TechnozarreContent.tsx
export default function TechnozarrePage() {
  return (
    <>
      <PageHeader
        eyebrow="// the fest"
        title={FEST.name}
        accent={`'${FEST.name.split("'")[1]}`}
        description="Our annual flagship symposium — technical, non-technical and gaming events."
      />
      <TechnozarreContent />
    </>
  );
}
