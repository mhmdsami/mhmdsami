"use client";

import { cn } from "@/components/ui/cn";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-2.5 w-2.5">
      <path d="M3 2.2 9.4 6 3 9.8Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-2.5 w-2.5">
      <rect x="3" y="2.2" width="2.1" height="7.6" rx="0.4" fill="currentColor" />
      <rect x="6.9" y="2.2" width="2.1" height="7.6" rx="0.4" fill="currentColor" />
    </svg>
  );
}

interface SynthButtonProps {
  playing: boolean;
  onToggle: () => void;
  label: string;
  className?: string;
}

export function SynthButton({ playing, onToggle, label, className }: SynthButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={`${playing ? "Pause" : "Play"} ${label}`}
      className={cn(
        "items-center gap-1.5 rounded-sm border border-transparent px-1.5 py-0.5 text-2xs text-tertiary transition-colors duration-150 hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {playing ? <PauseIcon /> : <PlayIcon />}
      <span>{playing ? "pause" : "play"}</span>
    </button>
  );
}
