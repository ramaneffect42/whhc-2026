import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

const variants = {
  primary:
    "bg-brand text-black shadow-[0_0_30px_-4px_rgb(255_50_50/0.7)] hover:shadow-[0_0_46px_0_rgb(255_50_50/0.9)] hover:-translate-y-0.5",
  ghost:
    "border border-white/20 text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5",
} as const;

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
