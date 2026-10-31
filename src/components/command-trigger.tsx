"use client";

export default function CommandTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-command"))}
      aria-label="Open command menu"
      className="flex h-7 w-fit min-w-12 items-center justify-center gap-1.5 rounded-md border px-3 text-secondary transition-colors duration-150 hover:bg-surface-2 hover:text-foreground"
    >
      <span className="text-xl leading-none">⌘</span>
      <span className="text-sm leading-none">K</span>
    </button>
  );
}
