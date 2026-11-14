"use client";

import type { MouseEvent } from "react";
import { toggleTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const onToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const keyboard = event.detail === 0;
    toggleTheme({
      x: keyboard ? rect.left + rect.width / 2 : event.clientX,
      y: keyboard ? rect.top + rect.height / 2 : event.clientY,
    });
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle light or dark theme"
      className="inline-flex size-7 items-center justify-center rounded-md text-tertiary transition-[color,background-color,scale] duration-150 hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 motion-reduce:active:scale-100"
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-icon theme-icon-sun"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-icon theme-icon-moon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
