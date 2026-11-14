"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/components/ui/cn";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export interface ActivityDay {
  date: string;
  count: number;
}

interface ActivityGridProps {
  days: ActivityDay[];
  max: number;
  className?: string;
  interactive?: boolean;
}

function cellColor(count: number, max: number) {
  if (count === 0) return "color-mix(in srgb, var(--foreground) 7%, var(--background))";
  const mix = Math.round(20 + (count / max) ** 0.4 * 80);
  return `color-mix(in srgb, var(--primary) ${mix}%, var(--background))`;
}

type Cell = {
  visual: HTMLElement;
  x: number;
  y: number;
  scale: number;
  vx: number;
  vy: number;
  vs: number;
  cx: number;
  cy: number;
};

const RADIUS = 46;
const SPEED_RADIUS = 28;
const PULL = 14;
const SCALE = 0.6;

export default function ActivityGrid({ days, max, className, interactive = false }: ActivityGridProps) {
  const grid = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = grid.current;
    if (!root || !interactive || reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const cells: Cell[] = Array.from(root.querySelectorAll<HTMLElement>("[data-cell]"), (cell) => ({
      visual: cell.firstElementChild as HTMLElement,
      x: 0,
      y: 0,
      scale: 1,
      vx: 0,
      vy: 0,
      vs: 0,
      cx: 0,
      cy: 0,
    }));

    let pointer: { x: number; y: number } | null = null;
    let last: { x: number; y: number; time: number } | null = null;
    let vx = 0;
    let vy = 0;
    let raf: number | null = null;
    let prev = 0;

    const measure = () => {
      for (const cell of cells) {
        const rect = cell.visual.parentElement?.getBoundingClientRect();
        if (!rect) continue;
        cell.cx = rect.left + rect.width / 2;
        cell.cy = rect.top + rect.height / 2;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - (prev || now - 16.67)) / 1000, 0.032);
      prev = now;
      vx *= Math.exp(-dt * 7);
      vy *= Math.exp(-dt * 7);
      const speed = Math.min(1, Math.hypot(vx, vy) / 1400);
      let moving = speed > 0.001;

      for (const cell of cells) {
        const dx = pointer ? pointer.x - cell.cx : 0;
        const dy = pointer ? pointer.y - cell.cy : 0;
        const falloff = pointer ? Math.max(0, 1 - Math.hypot(dx, dy) / (RADIUS + speed * SPEED_RADIUS)) ** 2 : 0;

        let tx = dx * falloff * 0.3 + vx * 0.012 * falloff;
        let ty = dy * falloff * 0.3 + vy * 0.012 * falloff;
        let ts = 1 + falloff * (0.3 + speed * 0.18);

        tx = PULL * Math.tanh(tx / PULL);
        ty = PULL * Math.tanh(ty / PULL);
        ts = 1 + SCALE * Math.tanh((ts - 1) / SCALE);

        cell.vx += ((tx - cell.x) * 160 - cell.vx * 19) * dt;
        cell.x += cell.vx * dt;
        cell.vy += ((ty - cell.y) * 160 - cell.vy * 19) * dt;
        cell.y += cell.vy * dt;
        cell.vs += ((ts - cell.scale) * 160 - cell.vs * 19) * dt;
        cell.scale += cell.vs * dt;

        cell.visual.style.transform = `translate3d(${cell.x}px, ${cell.y}px, 0) scale(${cell.scale})`;

        if (
          Math.abs(tx - cell.x) > 0.001 ||
          Math.abs(cell.vx) > 0.001 ||
          Math.abs(ty - cell.y) > 0.001 ||
          Math.abs(cell.vy) > 0.001 ||
          Math.abs(ts - cell.scale) > 0.001 ||
          Math.abs(cell.vs) > 0.001
        ) {
          moving = true;
        }
      }

      raf = moving ? requestAnimationFrame(tick) : null;
      if (!raf) prev = 0;
    };

    const wake = () => {
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const now = performance.now();
      if (last) {
        const dt = Math.max(8, now - last.time) / 1000;
        const ix = Math.max(-1800, Math.min(1800, (event.clientX - last.x) / dt));
        const iy = Math.max(-1800, Math.min(1800, (event.clientY - last.y) / dt));
        vx = vx * 0.45 + ix * 0.55;
        vy = vy * 0.45 + iy * 0.55;
      }
      last = { x: event.clientX, y: event.clientY, time: now };
      pointer = { x: event.clientX, y: event.clientY };
      wake();
    };

    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      measure();
      move(event);
    };

    const leave = () => {
      pointer = null;
      last = null;
      wake();
    };

    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    root.addEventListener("pointercancel", leave);
    window.addEventListener("scroll", leave, true);
    window.addEventListener("resize", leave);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      root.removeEventListener("pointercancel", leave);
      window.removeEventListener("scroll", leave, true);
      window.removeEventListener("resize", leave);
      for (const cell of cells) cell.visual.style.transform = "";
    };
  }, [interactive, reduced]);

  return (
    <div
      ref={grid}
      className={cn("auto-cols-fr grid-flow-col grid-rows-7 gap-[3px]", interactive && "cursor-pointer", className)}
    >
      {days.map(({ date, count }, index) => (
        <span
          key={date}
          title={`${date}: ${count} ${count === 1 ? "contribution" : "contributions"}`}
          data-cell
          data-row={index % 7}
          data-col={Math.floor(index / 7)}
          className="aspect-square w-full"
        >
          <span
            aria-hidden="true"
            className="block h-full w-full rounded-[2px]"
            style={{ background: cellColor(count, max) }}
          />
        </span>
      ))}
    </div>
  );
}
