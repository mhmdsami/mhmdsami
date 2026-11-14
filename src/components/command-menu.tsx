"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import AccentPicker from "@/components/accent-picker";
import { toggleTheme } from "@/lib/theme";
import { site } from "@/shared/data/site";

interface Command {
  id: string;
  label: string;
  hint: string;
  tag?: string;
  run: () => void;
}

const sections = [
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "stack", label: "stack" },
  { id: "activity", label: "activity" },
];

function jump(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function open(href: string) {
  window.open(href, "_blank", "noopener,noreferrer");
}

export default function CommandMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<Array<Command>>(
    () => [
      ...sections.slice(0, 3).map(({ id, label }) => ({
        id,
        label,
        hint: "go",
        run: () => jump(id),
      })),
      {
        id: "ai-skills",
        label: "ai skills",
        hint: "↗",
        run: () => open("https://skills.sam1.space"),
      },
      ...sections.slice(3).map(({ id, label }) => ({
        id,
        label,
        hint: "go",
        run: () => jump(id),
      })),
      {
        id: "theme",
        label: "toggle theme",
        hint: "◐",
        run: () => {
          window.requestAnimationFrame(() => toggleTheme({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
        },
      },
      ...site.work.flatMap((project) => {
        const href = project.repo ?? project.href;
        return href
          ? [
              {
                id: `project-${project.name}`,
                label: project.name,
                tag: "project",
                hint: "↗",
                run: () => open(href),
              },
            ]
          : [];
      }),
      {
        id: "copy-email",
        label: "copy email",
        hint: "↵",
        run: async () => {
          try {
            await navigator.clipboard.writeText("siamasdev@gmail.com");
            setStatus("copied siamasdev@gmail.com");
            window.setTimeout(() => setOpenMenu(false), 800);
          } catch {
            setStatus("clipboard blocked");
          }
        },
      },
      {
        id: "resume",
        label: "resume",
        hint: "↗",
        run: () => open("/resume.pdf"),
      },
      {
        id: "github",
        label: "github",
        hint: "↗",
        run: () => open("https://github.com/sm-sami"),
      },
      {
        id: "linkedin",
        label: "linkedin",
        hint: "↗",
        run: () => open("https://www.linkedin.com/in/sm-sami"),
      },
      {
        id: "x",
        label: "x",
        hint: "↗",
        run: () => open("https://x.com/siamasdev"),
      },
      {
        id: "source",
        label: "source",
        hint: "↗",
        run: () => open("https://github.com/mhmdsami/mhmdsami"),
      },
    ],
    [],
  );

  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpenMenu((current) => !current);
        return;
      }

      if (event.key === "/" && !typing && !openMenu) {
        event.preventDefault();
        setOpenMenu(true);
      }
    };

    const onOpen = () => setOpenMenu(true);

    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command", onOpen);
    };
  }, [openMenu]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const item = list.querySelector<HTMLElement>(`[data-command="${active}"]`);
    if (!item) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    if (itemRect.top < listRect.top) {
      list.scrollTop -= listRect.top - itemRect.top;
    } else if (itemRect.bottom > listRect.bottom) {
      list.scrollTop += itemRect.bottom - listRect.bottom;
    }
  }, [active]);

  useEffect(() => {
    if (!openMenu) return;

    setQuery("");
    setActive(0);
    setStatus("");
    previousFocus.current = document.activeElement as HTMLElement | null;
    if (listRef.current) listRef.current.scrollTop = 0;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
      previousFocus.current?.focus();
    };
  }, [openMenu]);

  if (!openMenu) return null;

  const run = (command: Command | undefined) => {
    if (!command) return;
    command.run();
    if (command.id !== "copy-email") setOpenMenu(false);
  };

  const onPanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpenMenu(false);
      return;
    }

    if ((event.target as HTMLElement).closest("[data-accent-option]")) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, filtered.length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    }

    if (event.key === "Enter") {
      event.preventDefault();
      run(filtered[active]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[var(--scrim)] px-4 pt-[16vh] backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close command menu"
        tabIndex={-1}
        onClick={() => setOpenMenu(false)}
        className="absolute inset-0 cursor-default"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="relative z-10 w-full max-w-md overflow-hidden rounded-lg border bg-surface-1 shadow-2xl"
        onKeyDown={onPanelKeyDown}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            if (listRef.current) listRef.current.scrollTop = 0;
          }}
          placeholder="jump to…"
          aria-label="Search commands"
          className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none placeholder:text-tertiary"
        />

        <div className="flex items-center justify-between gap-4 border-b px-4 py-2">
          <span className="text-2xs text-tertiary">accent</span>
          <AccentPicker />
        </div>

        <div ref={listRef} className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-3 text-sm text-tertiary">No matches.</p>
          ) : (
            filtered.map((command, index) => (
              <button
                key={command.id}
                type="button"
                data-command={index}
                onMouseMove={() => setActive(index)}
                onClick={() => run(command)}
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors duration-100 ${
                  index === active ? "bg-surface-2 text-foreground" : "text-secondary"
                }`}
              >
                <span>{command.label}</span>
                <span className="flex items-center gap-2">
                  {command.tag && (
                    <span className="rounded-sm border px-1.5 py-0.5 text-2xs text-tertiary">{command.tag}</span>
                  )}
                  <span className="text-2xs text-tertiary">{command.hint}</span>
                </span>
              </button>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t px-4 py-2 text-2xs text-tertiary">
          <span>{status || "↑↓ navigate · ↵ run"}</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
