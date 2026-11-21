"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Terminal, useTerminal } from "@/app/_components/terminal";
import { lockScroll } from "@/utils/scroll-lock";

export default function DeskTerminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, value, setValue, submit, reset, commands } = useTerminal({ onExit: onClose });
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    reset("type man · tab completes");
    previousFocus.current = document.activeElement as HTMLElement | null;
    const unlock = lockScroll();
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      unlock();
      window.clearTimeout(timer);
      previousFocus.current?.focus();
    };
  }, [open, reset]);

  const updateThumb = useCallback(() => {
    const output = outputRef.current;
    const thumb = thumbRef.current;
    if (!output || !thumb) return;
    if (output.scrollHeight <= output.clientHeight + 1) {
      thumb.style.opacity = "0";
      return;
    }
    const ratio = output.clientHeight / output.scrollHeight;
    const height = Math.max(20, ratio * output.clientHeight);
    const maxTop = output.clientHeight - height;
    const top = (output.scrollTop / Math.max(1, output.scrollHeight - output.clientHeight)) * maxTop;
    thumb.style.height = `${height}px`;
    thumb.style.transform = `translateY(${top}px)`;
    thumb.style.opacity = "1";
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (thumbRef.current) thumbRef.current.style.opacity = "0";
    }, 650);
  }, []);

  useEffect(() => {
    if (lines.length === 0) return;
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
    updateThumb();
  }, [lines, updateThumb]);

  useEffect(() => {
    return () => {
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
    };
  }, []);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close terminal"
        tabIndex={-1}
        onClick={onClose}
        className="desk-terminal-scrim absolute inset-0 cursor-default bg-(--scrim) backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Desk terminal"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
        }}
        className="desk-terminal relative z-10 flex h-88 w-full max-w-md flex-col overflow-hidden rounded-md border bg-surface-1 font-mono shadow-2xl"
      >
        <div className="relative min-h-0 flex-1">
          <div
            ref={outputRef}
            onScroll={updateThumb}
            className="desk-terminal-output h-full overflow-y-auto px-4 py-3 font-mono text-xs leading-5"
          >
            <Terminal
              lines={lines}
              value={value}
              onChange={setValue}
              onSubmit={submit}
              commands={commands}
              inputRef={inputRef}
              label="Terminal command"
            />
          </div>
          <div
            ref={thumbRef}
            aria-hidden="true"
            className="pointer-events-none absolute right-0.5 top-0 w-1 rounded-full bg-primary/45 opacity-0 transition-opacity duration-200"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
