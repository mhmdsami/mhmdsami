"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/ui/cn";

export interface RotatingItem {
  text: string;
  lang?: string;
  className?: string;
}

export default function RotatingText({
  items,
  className,
  interval = 4000,
}: {
  items: Array<RotatingItem>;
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    if (items.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => {
        setLeaving(current);
        return (current + 1) % items.length;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [items.length, interval]);

  useEffect(() => {
    if (leaving === null) return;
    const timer = window.setTimeout(() => setLeaving(null), 500);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  return (
    <span className={cn("inline-grid overflow-hidden align-bottom", className)}>
      {items.map((item, itemIndex) => {
        const active = itemIndex === index;
        const outgoing = itemIndex === leaving;

        return (
          <span
            key={item.text}
            lang={item.lang}
            dir="auto"
            aria-hidden={!active}
            className={cn(
              "col-start-1 row-start-1 whitespace-nowrap transition-[transform,opacity] duration-500 ease-out",
              active
                ? "translate-y-0 opacity-100"
                : outgoing
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0",
              item.className,
            )}
          >
            {item.text}
          </span>
        );
      })}
    </span>
  );
}
