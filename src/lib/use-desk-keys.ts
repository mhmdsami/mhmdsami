"use client";

import { type RefObject, useEffect } from "react";

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

export function useDeskKeys(root: RefObject<HTMLElement | null>, options?: { skipInputs?: boolean }) {
  const skipInputs = options?.skipInputs ?? true;

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
      if (skipInputs && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable))
        return;
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
  }, [root, skipInputs]);
}
