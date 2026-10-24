import type { ReactNode } from "react";

type Props = {
  /** Tailwind aspect class, e.g. "aspect-video", "aspect-[4/3]", "aspect-[3/4]" */
  aspect?: string;
  /** Tells whoever replaces it what image belongs here, e.g. "hero-bg.jpg" */
  label?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * An empty slot where a real photo will go.
 *
 * REPLACING IT LATER:
 *   1. put the image in /public/images/...
 *   2. swap <ImagePlaceholder .../> for
 *        <Image src="/images/xyz.jpg" alt="describe it" fill className="object-cover" sizes="..." />
 *      inside a `relative` + same-aspect wrapper. Always use next/image (not <img>).
 */
export default function ImagePlaceholder({
  aspect = "aspect-video",
  label = "image",
  className = "",
  children,
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`hatch relative w-full overflow-hidden rounded-2xl border border-line ${aspect} ${className}`}
    >
      <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-white/25">
        img · {label}
      </span>
      {children}
    </div>
  );
}
