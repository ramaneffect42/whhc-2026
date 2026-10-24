import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Member } from "@/data/crew";

/** One person: portrait on top, name and role below. Photo is optional. */
export default function MemberCard({ member }: { member: Member }) {
  return (
    <SpotlightCard className="group h-full">
      <div className="p-3">
        <div className="overflow-hidden rounded-xl">
          <div className="transition-transform duration-700 group-hover:scale-105">
            {member.photo ? (
              <div className="relative aspect-[4/5]">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder
                aspect="aspect-[4/5]"
                label={`${member.slug}.jpg`}
                className="rounded-none border-0"
              />
            )}
          </div>
        </div>
        <div className="px-2 pb-3 pt-5">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight">
            {member.name}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-brand">
            {member.role}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}
