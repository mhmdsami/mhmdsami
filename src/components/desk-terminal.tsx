"use client";

import { type FormEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import AsciiPortrait from "@/components/ascii-portrait";
import { accents, applyAccent, applyTheme, currentAccent, currentTheme } from "@/lib/theme";
import { site } from "@/shared/data/site";

type Line = { kind: "in" | "out" | "info"; text: string };

const COMMANDS = ["accent", "clear", "contact", "exit", "info", "man", "synth", "theme", "whoami"];

const ARGUMENTS: Record<string, Array<string>> = {
  accent: accents.map(({ id }) => id),
  synth: ["on", "off", "toggle"],
  theme: ["light", "dark"],
};

const MAN: Record<string, string> = {
  whoami: "print the current user",
  info: "information",
  theme: "set the theme",
  accent: "set the accent colour",
  contact: "email me",
  synth: "play the activity drums",
  man: "show this manual",
  clear: "clear the output",
  exit: "close the terminal",
};

function manEntry(command: string) {
  const description = MAN[command];
  if (!description) return [`No manual entry for ${command}.`];
  const options = ARGUMENTS[command];
  const synopsis = options ? `${command} [${options.join("|")}]` : command;
  return [
    `${command.toUpperCase()}(1)`,
    "",
    "NAME",
    `       ${command} - ${description}`,
    "",
    "SYNOPSIS",
    `       ${synopsis}`,
  ];
}

const MAN_PAGE = [
  "SAMI(1)                    sami@space manual                    SAMI(1)",
  "",
  "NAME",
  "       sami - a terminal for the portfolio",
  "",
  "SYNOPSIS",
  "       <command> [argument]",
  "",
  "COMMANDS",
  ...Object.entries(MAN).flatMap(([command, description]) => {
    const line = `       ${command.padEnd(12)}${description}`;
    const choices = ARGUMENTS[command]?.join(" | ") ?? null;
    return choices ? [line, `       ${" ".repeat(12)}${choices}`] : [line];
  }),
  "",
  "EXAMPLES",
  "       accent sakura",
  "       theme dark",
  "       synth",
  "       man accent",
];

function commonPrefix(values: Array<string>) {
  if (values.length === 0) return "";
  let prefix = values[0];
  for (let index = 1; index < values.length; index += 1) {
    const value = values[index];
    let length = 0;
    while (length < prefix.length && length < value.length && prefix[length] === value[length]) length += 1;
    prefix = prefix.slice(0, length);
    if (!prefix) break;
  }
  return prefix;
}

function complete(input: string) {
  if (!input.trim()) return "man ";
  const lower = input.toLowerCase();
  const space = lower.lastIndexOf(" ");

  if (space > 0) {
    const command = lower.slice(0, space);
    const options = ARGUMENTS[command];
    if (!options) return input;
    const partial = lower.slice(space + 1);
    const matches = options.filter((option) => option.startsWith(partial));
    if (matches.length === 1) return `${command} ${matches[0]}`;
    if (matches.length > 1) {
      const prefix = commonPrefix(matches);
      if (prefix.length > partial.length) return `${command} ${prefix}`;
    }
    return input;
  }

  const matches = COMMANDS.filter((command) => command.startsWith(lower));
  if (matches.length === 1) return `${matches[0]} `;
  if (matches.length > 1) {
    const prefix = commonPrefix(matches);
    if (prefix.length > lower.length) return prefix;
  }
  return input;
}

function preview(input: string) {
  const lower = input.toLowerCase();
  const space = lower.lastIndexOf(" ");

  if (space > 0) {
    const command = lower.slice(0, space);
    const options = ARGUMENTS[command];
    if (!options) return "";
    const partial = lower.slice(space + 1);
    if (!partial) return `  [${options.join("|")}]`;
    const matches = options.filter((option) => option.startsWith(partial));
    if (matches.length === 1) return matches[0].slice(partial.length);
    const prefix = commonPrefix(matches);
    return prefix.length > partial.length ? prefix.slice(partial.length) : "";
  }

  const matches = COMMANDS.filter((command) => command.startsWith(lower));
  if (matches.length === 1) return `${matches[0].slice(lower.length)} `;
  const prefix = commonPrefix(matches);
  return prefix.length > lower.length ? prefix.slice(lower.length) : "";
}

function InfoLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-border underline-offset-2 transition-colors duration-150 hover:text-primary hover:decoration-current"
    >
      {children}
    </a>
  );
}

function Info() {
  const githubs = site.profile.links.filter(({ label }) => label.startsWith("gh/"));
  const x = site.profile.links.find(({ label }) => label === "x");
  const xHandle = x?.href ? `@${x.href.replace(/\/$/, "").split("/").pop()}` : "x";
  const rows: Array<{ label: string; value: ReactNode }> = [
    {
      label: "role",
      value: (
        <>
          {site.terminal.role} <InfoLink href={site.terminal.companyUrl}>@{site.terminal.company}</InfoLink>
        </>
      ),
    },
    { label: "loc", value: site.terminal.location },
    { label: "curr", value: site.terminal.current },
    {
      label: "gh",
      value: githubs.map((link, index) => (
        <span key={link.label}>
          {index > 0 ? <span className="text-tertiary"> · </span> : null}
          {link.href ? (
            <InfoLink href={link.href}>{link.label.replace(/^gh\//, "")}</InfoLink>
          ) : (
            link.label.replace(/^gh\//, "")
          )}
        </span>
      )),
    },
    {
      label: "x",
      value: x ? x.href ? <InfoLink href={x.href}>{xHandle}</InfoLink> : xHandle : "—",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <AsciiPortrait />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-primary">sami@space</p>
        <p className="text-[10px] text-tertiary">────────────</p>
        <dl className="mt-1 grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-x-2 text-[10px] leading-[14px]">
          {rows.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt className="text-primary">{label}</dt>
              <dd className="min-w-0 break-words text-secondary">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function DeskTerminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Array<Line>>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setLines([{ kind: "out", text: "type man · tab completes" }]);
    setValue("");
    previousFocus.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      previousFocus.current?.focus();
    };
  }, [open]);

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

  const ghost = preview(value);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const raw = value.trim();
    if (!raw) return;
    setValue("");

    const [command = "", argument] = raw.toLowerCase().split(/\s+/);
    const out: Array<string> = [];
    let close = false;

    if (command === "clear") {
      setLines([]);
      return;
    }

    if (command === "exit") {
      close = true;
    } else if (command === "help") {
      out.push("try man.");
    } else if (command === "man") {
      out.push(...(argument ? manEntry(argument) : MAN_PAGE));
    } else if (command === "whoami") {
      out.push("sami");
    } else if (command === "info") {
      setLines((prev) => [...prev, { kind: "in", text: raw }, { kind: "info", text: "" }]);
      return;
    } else if (command === "contact") {
      const { email } = site.profile;
      const link = document.createElement("a");
      link.href = `mailto:${email}`;
      link.click();
      out.push(email);
    } else if (command === "theme") {
      const next =
        argument === "light" || argument === "dark" ? argument : currentTheme() === "light" ? "dark" : "light";
      applyTheme(next);
      setLines((prev) => [...prev, { kind: "in", text: raw }]);
      return;
    } else if (command === "accent") {
      const chosen = accents.find(({ id }) => id === argument);
      const index = accents.findIndex(({ id }) => id === currentAccent());
      applyAccent(chosen?.id ?? accents[(index + 1) % accents.length].id);
      setLines((prev) => [...prev, { kind: "in", text: raw }]);
      return;
    } else if (command === "synth") {
      const action = argument === "on" || argument === "off" ? argument : "toggle";
      window.dispatchEvent(new CustomEvent("activity:synth", { detail: action }));
      setLines((prev) => [...prev, { kind: "in", text: raw }]);
      return;
    } else {
      out.push(`command not found: ${command}`, "try man");
    }

    setLines((prev) => [...prev, { kind: "in", text: raw }, ...out.map((text) => ({ kind: "out" as const, text }))]);
    if (close) onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close terminal"
        tabIndex={-1}
        onClick={onClose}
        className="desk-terminal-scrim absolute inset-0 cursor-default bg-[var(--scrim)] backdrop-blur-sm"
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
        className="desk-terminal relative z-10 flex h-[22rem] w-full max-w-md flex-col overflow-hidden rounded-md border bg-surface-1 font-mono shadow-2xl"
      >
        <div className="relative min-h-0 flex-1">
          <div
            ref={outputRef}
            onScroll={updateThumb}
            className="desk-terminal-output h-full overflow-y-auto px-4 py-3 font-mono text-xs leading-5"
          >
            <div role="log" aria-live="polite">
              {lines.map((line, index) => (
                <div key={`${index}-${line.text}`}>
                  {line.kind === "info" ? (
                    <Info />
                  ) : (
                    <p className="whitespace-pre-wrap">
                      {line.kind === "in" ? (
                        <>
                          <span className="text-primary">sami@space</span>
                          <span className="text-tertiary"> $ </span>
                        </>
                      ) : null}
                      <span className={line.kind === "in" ? "text-foreground" : "text-secondary"}>{line.text}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={submit} className="flex items-center">
              <span className="shrink-0 text-primary">sami@space</span>
              <span className="ml-1.5 shrink-0 text-primary">$</span>
              <div className="relative ml-2 min-w-0 flex-1 overflow-hidden">
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key !== "Tab") return;
                    event.preventDefault();
                    const next = complete(value);
                    if (next !== value) setValue(next);
                  }}
                  aria-label="Terminal command"
                  autoComplete="off"
                  spellCheck={false}
                  className="terminal-input w-full bg-transparent font-mono text-xs text-foreground outline-none placeholder:text-tertiary"
                />
                {ghost ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center whitespace-pre font-mono text-xs text-tertiary"
                  >
                    <span className="invisible">{value}</span>
                    {ghost}
                  </span>
                ) : null}
              </div>
            </form>
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
