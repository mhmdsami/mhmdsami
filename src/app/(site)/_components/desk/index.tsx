"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import DeskScene from "@/app/(site)/_components/desk/scene";
import DeskTerminal from "@/app/(site)/_components/desk/terminal";
import { useDeskKeys } from "@/app/(site)/_hooks/use-desk-keys";
import { cycleAccent } from "@/lib/theme";
import { cn } from "@/utils/cn";

export default function Desk({ className }: { className?: string }) {
  const [announcement, setAnnouncement] = useState("");
  const [terminal, setTerminal] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useDeskKeys(root);

  const cycle = () => {
    const next = cycleAccent();
    setAnnouncement(`${next.label} accent`);
  };

  return (
    <div ref={root} className={cn("desk-os relative", className)}>
      <DeskScene />
      <button
        type="button"
        onClick={cycle}
        title="Cycle accent"
        aria-label="Cycle accent colour"
        className="desk-mug-button absolute size-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
        style={{ left: "74%", top: "69%" }}
      />
      <Link
        href="/labs"
        title="Open the labs"
        aria-label="Open the labs"
        className="desk-laptop-button absolute cursor-pointer rounded-sm"
        style={{ left: "28.9%", top: "17.5%", width: "20.9%", height: "33%" }}
      />
      <button
        type="button"
        onClick={() => setTerminal(true)}
        title="Open terminal"
        aria-label="Open desk terminal"
        className="desk-screen-button absolute cursor-pointer rounded-sm"
        style={{ left: "57.3%", top: "6.1%", width: "29.7%", height: "48.3%" }}
      />
      <span aria-live="polite" className="sr-only">
        {announcement}
      </span>
      <DeskTerminal open={terminal} onClose={() => setTerminal(false)} />
    </div>
  );
}
