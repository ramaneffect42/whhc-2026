"use client";

import { useEffect, useRef } from "react";

type Ember = { x: number; y: number; r: number; vy: number; vx: number; a: number; tw: number };

/**
 * Drifting red embers behind the whole site — ONE canvas for every page.
 * Performance rules baked in:
 *  - fewer particles on phones / low-core devices
 *  - pixel ratio capped at 1.5
 *  - pauses when the tab is hidden
 *  - disabled entirely for prefers-reduced-motion
 */
export default function EmberField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lowEnd = (navigator.hardwareConcurrency ?? 4) <= 4 || window.innerWidth < 640;
    const COUNT = lowEnd ? 32 : 70;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let raf = 0;
    let embers: Ember[] = [];

    const spawn = (anywhere: boolean): Ember => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.35 + 0.08),
      vx: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.7 + 0.2,
      tw: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      embers = Array.from({ length: COUNT }, () => spawn(true));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.x += e.vx;
        e.y += e.vy;
        e.tw += 0.03;
        if (e.y < -10) embers[i] = spawn(false);
        ctx.globalAlpha = e.a * (0.55 + 0.45 * Math.sin(e.tw));
        ctx.fillStyle = "#ff3232";
        ctx.fillRect(e.x, e.y, e.r, e.r);
      }
      raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
