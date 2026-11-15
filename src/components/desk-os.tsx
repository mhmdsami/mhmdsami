"use client";

import { useEffect, useRef, useState } from "react";
import DeskScene from "@/components/desk-scene";
import DeskTerminal from "@/components/desk-terminal";
import { cn } from "@/components/ui/cn";
import { accents, applyAccent, currentAccent } from "@/lib/theme";

const ROWS = ["qwertyui", "asdfghjk", "zxcvbnm,"];
const SPECIAL: Record<string, number> = { Backspace: 24, " ": 25, Enter: 26 };

function keyTarget(key: string) {
  if (key in SPECIAL) return { desk: SPECIAL[key], laptop: null };
  const lower = key.toLowerCase();
  for (let row = 0; row < ROWS.length; row += 1) {
    const column = ROWS[row].indexOf(lower);
    if (column >= 0) return { desk: row * 8 + column, laptop: row * 8 + column };
  }
  if (lower.length === 1) {
    const index = lower.charCodeAt(0) % 24;
    return { desk: index, laptop: index };
  }
  return null;
}

export default function DeskOS({ className }: { className?: string }) {
  const [announcement, setAnnouncement] = useState("");
  const [terminal, setTerminal] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = root.current;
    if (!scene) return;

    const set = (key: string, lit: boolean) => {
      const target = keyTarget(key);
      if (!target) return;
      const selectors = [`[data-desk-key="${target.desk}"]`];
      if (target.laptop !== null) selectors.push(`[data-laptop-key="${target.laptop}"]`);
      scene.querySelectorAll(selectors.join(",")).forEach((element) => {
        element.classList.toggle("is-lit", lit);
      });
    };

    const clear = () => {
      scene.querySelectorAll(".is-lit").forEach((element) => {
        element.classList.remove("is-lit");
      });
    };

    const down = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
      if (!scene.getClientRects().length) return;
      set(event.key, true);
    };

    const up = (event: KeyboardEvent) => {
      set(event.key, false);
    };

    const onBlur = () => clear();
    const onVisibility = () => {
      if (document.hidden) clear();
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibility);
      clear();
    };
  }, []);

  const cycle = () => {
    const index = accents.findIndex(({ id }) => id === currentAccent());
    const next = accents[(index + 1) % accents.length];
    applyAccent(next.id);
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
