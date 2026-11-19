"use client";

import { type FormEvent, type ReactNode, type RefObject, useCallback, useState } from "react";
import AsciiPortrait from "@/components/ascii-portrait";
import { activeStop } from "@/lib/site-state";
import { accents, applyAccent, applyTheme, currentAccent, currentTheme } from "@/lib/theme";
import { useSiteState } from "@/lib/use-site-state";
import { site } from "@/shared/data/site";

export type Line = { kind: "in" | "out" | "info"; text: string };

export const BASE_COMMANDS = ["accent", "clear", "contact", "info", "labs", "man", "synth", "theme", "whoami"];

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
  labs: "open the labs",
  synth: "play the activity drums",
  man: "show this manual",
  clear: "clear the output",
  exit: "close the terminal",
};

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

export function manEntry(command: string) {
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

export function manPage(commands: Array<string> = BASE_COMMANDS) {
  return [
    "SAMI(1)                    sami@space manual                    SAMI(1)",
    "",
    "NAME",
    "       sami - a terminal for the portfolio",
    "",
    "SYNOPSIS",
    "       <command> [argument]",
    "",
    "COMMANDS",
    ...commands.flatMap((command) => {
      const description = MAN[command];
      if (!description) return [];
      const line = `       ${command.padEnd(12)}${description}`;
      const choices = ARGUMENTS[command]?.join(" | ") ?? null;
      return choices ? [line, `       ${" ".repeat(12)}${choices}`] : [line];
    }),
    "",
    "EXAMPLES",
    "       accent sakura",
    "       theme dark",
    "       synth",
    "       labs torvalds",
    "       man accent",
  ];
}

export function complete(input: string, commands: Array<string> = BASE_COMMANDS) {
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

  const matches = commands.filter((command) => command.startsWith(lower));
  if (matches.length === 1) return `${matches[0]} `;
  if (matches.length > 1) {
    const prefix = commonPrefix(matches);
    if (prefix.length > lower.length) return prefix;
  }
  return input;
}

export function preview(input: string, commands: Array<string> = BASE_COMMANDS) {
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

  const matches = commands.filter((command) => command.startsWith(lower));
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
  const state = useSiteState();
  const stop = state ? activeStop(state.stops) : null;
  const building = state?.building ?? null;
  const reading = state?.reading ?? null;
  const githubs = site.profile.links.filter(({ label }) => label.startsWith("gh/"));
  const x = site.profile.links.find(({ label }) => label === "x");
  const xHandle = x?.href ? `@${x.href.replace(/\/$/, "").split("/").pop()}` : "x";
  const current = building ? (
    building.url ? (
      <InfoLink href={building.url}>{building.name}</InfoLink>
    ) : (
      building.name
    )
  ) : (
    site.terminal.current
  );
  const rows: Array<{ label: string; value: ReactNode }> = [
    {
      label: "role",
      value: (
        <>
          {site.terminal.role} <InfoLink href={site.terminal.companyUrl}>@{site.terminal.company}</InfoLink>
        </>
      ),
    },
    ...(stop ? [{ label: "loc", value: stop.city.toLowerCase() }] : []),
    { label: "curr", value: current },
    ...(reading
      ? [
          {
            label: "read",
            value: reading.url ? <InfoLink href={reading.url}>{reading.title}</InfoLink> : reading.title,
          },
        ]
      : []),
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
      <div className="hidden shrink-0 sm:block">
        <AsciiPortrait />
      </div>
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

export function useTerminal({ onExit, welcome }: { onExit?: () => void; welcome?: string } = {}) {
  const commands = onExit ? [...BASE_COMMANDS, "exit"] : BASE_COMMANDS;
  const [lines, setLines] = useState<Array<Line>>(welcome ? [{ kind: "out", text: welcome }] : []);
  const [value, setValue] = useState("");

  const reset = useCallback((message?: string) => {
    setLines(message ? [{ kind: "out", text: message }] : []);
    setValue("");
  }, []);

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
      out.push(...(argument ? manEntry(argument) : manPage(commands)));
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
      if (argument && argument !== "light" && argument !== "dark") {
        setLines((prev) => [...prev, { kind: "in", text: raw }]);
        return;
      }
      const next =
        argument === "light" || argument === "dark" ? argument : currentTheme() === "light" ? "dark" : "light";
      applyTheme(next);
      setLines((prev) => [...prev, { kind: "in", text: raw }]);
      return;
    } else if (command === "accent") {
      const chosen = accents.find(({ id }) => id === argument);
      if (argument && !chosen) {
        setLines((prev) => [...prev, { kind: "in", text: raw }]);
        return;
      }
      const index = accents.findIndex(({ id }) => id === currentAccent());
      applyAccent(chosen?.id ?? accents[(index + 1) % accents.length].id);
      setLines((prev) => [...prev, { kind: "in", text: raw }]);
      return;
    } else if (command === "labs") {
      window.location.assign(argument ? `/labs/synth?user=${encodeURIComponent(argument)}` : "/labs");
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
    if (close) onExit?.();
  };

  return { lines, value, setValue, submit, reset, commands };
}

interface TerminalScreenProps {
  lines: Array<Line>;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  commands?: Array<string>;
  inputRef?: RefObject<HTMLInputElement | null>;
  inputId?: string;
  label?: string;
}

export function TerminalScreen({
  lines,
  value,
  onChange,
  onSubmit,
  commands = BASE_COMMANDS,
  inputRef,
  inputId,
  label = "Terminal command",
}: TerminalScreenProps) {
  const ghost = preview(value, commands);

  return (
    <>
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

      <form onSubmit={onSubmit} className="flex items-center">
        <span className="shrink-0 text-primary">sami@space</span>
        <span className="ml-1.5 shrink-0 text-primary">$</span>
        <div className="relative ml-2 min-w-0 flex-1 overflow-hidden">
          <input
            id={inputId}
            ref={inputRef}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              event.preventDefault();
              const next = complete(value, commands);
              if (next !== value) onChange(next);
            }}
            aria-label={label}
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
    </>
  );
}
