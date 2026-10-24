"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STATEMENT =
  "We are a club for the curious — a place where questions are welcome, ideas are shared, and computer science is something we explore together.";

const WORDS = STATEMENT.split(" ");

type Progress = ReturnType<typeof useScroll>["scrollYProgress"];

function Word({
  word,
  progress,
  index,
  total,
}: {
  word: string;
  progress: Progress;
  index: number;
  total: number;
}) {
  const step = 1 / total;
  const opacity = useTransform(progress, [index * step, (index + 1) * step], [0.4, 1]);

  return (
    <m.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </m.span>
  );
}

/**
 * The opening statement lights up word by word as it scrolls through the
 * viewport. Opacity only, one transform for the rule underneath — cheap on
 * every device. The full sentence is mirrored for screen readers.
 */
export default function ScrollStatement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <div>
      <p
        ref={ref}
        aria-hidden
        className="max-w-3xl font-display text-[1.75rem] font-semibold uppercase leading-[1.22] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
      >
        {WORDS.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            word={word}
            progress={scrollYProgress}
            index={i}
            total={WORDS.length}
          />
        ))}
      </p>
      <p className="sr-only">{STATEMENT}</p>
      <m.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="mt-8 h-px w-full max-w-3xl origin-left bg-gradient-to-r from-brand via-brand/60 to-transparent"
      />
    </div>
  );
}
