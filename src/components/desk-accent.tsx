"use client";

import { useState } from "react";
import DeskScene from "@/components/desk-scene";
import { cn } from "@/components/ui/cn";
import { accents, applyAccent, currentAccent } from "@/lib/theme";

export default function DeskAccent({ className }: { className?: string }) {
  const [announcement, setAnnouncement] = useState("");

  const cycle = () => {
    const index = accents.findIndex(({ id }) => id === currentAccent());
    const next = accents[(index + 1) % accents.length];
    applyAccent(next.id);
    setAnnouncement(`${next.label} accent`);
  };

  return (
    <div className={cn("desk-accent relative", className)}>
      <DeskScene />
      <button
        type="button"
        onClick={cycle}
        title="Cycle accent"
        aria-label="Cycle accent colour"
        className="desk-mug-button absolute size-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
        style={{ left: "74%", top: "69%" }}
      />
      <span aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </div>
  );
}
