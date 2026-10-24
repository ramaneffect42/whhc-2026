import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Member } from "@/data/crew";
import MemberCard from "./MemberCard";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  members: Member[];
  /** "wide" = up to 4 across (big teams), "narrow" = up to 2 centred (faculty) */
  layout?: "wide" | "narrow";
};

export default function CrewSection({
  eyebrow,
  title,
  accent,
  description,
  members,
  layout = "wide",
}: Props) {
  if (members.length === 0) return null; // empty groups simply don't appear

  const grid =
    layout === "narrow"
      ? "mx-auto max-w-2xl sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
        />
        <div className={`mt-14 grid gap-5 ${grid}`}>
          {members.map((member, i) => (
            <Reveal key={member.slug} delay={(i % 4) * 0.08}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
