"use client";

import { cn } from "@/utils/cn";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3.5 w-3.5">
      <path d="M3 2.2 9.4 6 3 9.8Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3.5 w-3.5">
      <rect x="3" y="2.2" width="2.1" height="7.6" rx="0.4" fill="currentColor" />
      <rect x="6.9" y="2.2" width="2.1" height="7.6" rx="0.4" fill="currentColor" />
    </svg>
  );
}

interface PlayButtonProps {
  playing: boolean;
  onToggle: () => void;
  label: string;
  className?: string;
}

export function PlayButton({ playing, onToggle, label, className }: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={`${playing ? "Pause" : "Play"} ${label}`}
      className={cn(
        "cursor-pointer items-center gap-1.5 rounded-sm border border-transparent pl-2 pr-3 py-0 text-sm text-tertiary transition-colors duration-150 hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {playing ? <PauseIcon /> : <PlayIcon />}
      <span>{playing ? "pause" : "play"}</span>
    </button>
  );
}
