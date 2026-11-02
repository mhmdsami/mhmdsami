"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const LETTERS = ["s", "a", "m", "i"];

const STATES = [
  [1, 1, 1, 1],
  [0.15, 1, 0.15, 1],
  [1, 0.15, 0.15, 1],
];

export default function Wordmark() {
  const [state, setState] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) setState(0);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    const id = window.setInterval(() => setState((current) => (current + 1) % STATES.length), 2200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <span aria-hidden className="inline-flex">
      {LETTERS.map((letter, index) => (
        <span
          key={letter}
          className="transition-opacity duration-500 ease-out"
          style={{ opacity: STATES[state][index] }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
