import PageHeader from "@/components/layout/PageHeader";
import AboutContent from "./_components/AboutContent";

export const metadata = { title: "About" };

// The header banner is built. Build everything below it in _components/AboutContent.tsx
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="// about"
        title="About WHHC"
        accent="WHHC"
        description="Who we are, what we believe in and what we do."
      />
      <AboutContent />
    </>
  );
}
