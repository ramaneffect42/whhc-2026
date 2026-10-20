import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  /** Word(s) of the title to colour red */
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: Props) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <Reveal className={align === "center" ? "mx-auto text-center" : ""}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
        {parts[0]}
        {accent && <span className="text-brand glow-text">{accent}</span>}
        {parts[1]}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-mute md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
