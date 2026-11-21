"use client";

import { type FormEvent, type ReactNode, type RefObject, useCallback, useMemo, useState } from "react";
import { BASE_COMMANDS, type CommandSpec, complete, EXIT_COMMAND, preview } from "@/app/_components/terminal/commands";
import { site } from "@/data/site";
import { activeStop } from "@/lib/site-state";
import { useSiteState } from "@/lib/site-state-context";
import { applyAccent, applyTheme, currentTheme, cycleAccent } from "@/lib/theme";

export type Line = { kind: "in" | "out" | "info"; text: string };

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
        <p className="text-2xs text-tertiary">────────────</p>
        <dl className="mt-1 grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-x-2 text-2xs leading-[15px]">
          {rows.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt className="text-primary">{label}</dt>
              <dd className="min-w-0 wrap-break-word text-secondary">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function useTerminal({ onExit, welcome }: { onExit?: () => void; welcome?: string } = {}) {
  const commands = useMemo(() => (onExit ? [...BASE_COMMANDS, EXIT_COMMAND] : BASE_COMMANDS), [onExit]);
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

    const [id = "", argument] = raw.toLowerCase().split(/\s+/);
    const command = commands.find(({ id: commandId }) => commandId === id);
    const echo = () => setLines((prev) => [...prev, { kind: "in", text: raw }]);
    const print = (out: Array<string>) =>
      setLines((prev) => [...prev, { kind: "in", text: raw }, ...out.map((text) => ({ kind: "out" as const, text }))]);

    if (!command) {
      print([`command not found: ${id}`, "try man"]);
      return;
    }

    const outcome = command.run(argument, commands);

    switch (outcome.type) {
      case "invalid":
        echo();
        return;
      case "clear":
        setLines([]);
        return;
      case "exit":
        echo();
        onExit?.();
        return;
      case "info":
        setLines((prev) => [...prev, { kind: "in", text: raw }, { kind: "info", text: "" }]);
        return;
      case "navigate":
        window.location.assign(outcome.href);
        return;
      case "mail": {
        const link = document.createElement("a");
        link.href = `mailto:${outcome.email}`;
        link.click();
        print([outcome.email]);
        return;
      }
      case "synth":
        window.dispatchEvent(new CustomEvent("activity:synth", { detail: outcome.action }));
        echo();
        return;
      case "theme":
        applyTheme(outcome.theme);
        echo();
        return;
      case "toggle-theme":
        applyTheme(currentTheme() === "light" ? "dark" : "light");
        echo();
        return;
      case "accent":
        applyAccent(outcome.accent);
        echo();
        return;
      case "cycle-accent":
        cycleAccent();
        echo();
        return;
      case "text":
        print(outcome.lines);
        return;
    }
  };

  return { lines, value, setValue, submit, reset, commands };
}

interface TerminalProps {
  lines: Array<Line>;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  commands?: Array<CommandSpec>;
  inputRef?: RefObject<HTMLInputElement | null>;
  inputId?: string;
  label?: string;
}

export function Terminal({
  lines,
  value,
  onChange,
  onSubmit,
  commands = BASE_COMMANDS,
  inputRef,
  inputId,
  label = "Terminal command",
}: TerminalProps) {
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

const SHADE_CLASS: Record<string, string> = {
  "#": "shade-hash",
  "=": "shade-eq",
  "*": "shade-star",
  "+": "shade-plus",
};

const LINES = `

                                         *+++*+++**
                                      *+=+++++++++++*
                                     +++++++++++=++=++*
                                    *++++********++====*
                    *              *+++**#######*++++==+
                                    *++*########***++==+
                    *               *++*########***+++==
                    *               *+*****++++++*+++++**
                    *                *#*#************+***
                    *                 *#*##**##******+****
            *                         **####***++****+****
   * *     **********                  *********+**++*****
+++++++    ++++++++++                 **+*********+++****
++++++++  *++++++++++                   *++*****+++++*****          **
++++++++***++++++++++                    **++++++++************    ***
+++++++++++++++++++++                   **  ************#***#** *******
+++++++++++++++++++++      *            *  *****++*********#**  ********
++++++++++++++++++++*      *                 *******#***  *#** *********
***++**++*+=++==+++*       **           *   *****   * *  * **  **********
*******+***+++===+          *             *** *         *  ** ********+**
*******+*++++++++       *** *  *                 *   ***  *** ********+***
*******+********         *****             *    *   ***  ***#*************
********** ****   **      ****  *         *    **   **  ***************+**
   **      ***     ***********   *            **   *   ****************+**
                    **********   **          ***      *********************
              *      ****+*****   *          ****   ********++*************
             **********+++*****    *         ****   ********++*************
             **********+++*******    **   * *****  *********+************+*
              *****+++++*+********** ***  ******* **********+***************
                 ***++++*+*********#*#*********** *********++***************
                  ****+++***********###*#*****************++++***************
                   ******** *##########*#******************+*******************
                             *************************#**##########******************
              * **************************************************#*##*#******###*+++*
             ***#*************************************************#####*#*####*####+*
              *******************************************************************+++*
               ****************************************************************++++**
              *##*********************************************************+++++++++*
              *********************************************++++++++++++++++++++++++***
              *******************************************+++++++++++++++++++++++++*  **
                *****************************************+++++++++++++++++++++++++    *
              *  ****************************************++++++++++++++++++++++++*
                 ***********************+++++++**********++++++++++++++++++++++++**
                  ***************************++**********++++++++++++++++++++++++++*`.split("\n");

function runs(line: string) {
  return line.match(/(.)\1*/g) ?? [];
}

function AsciiPortrait() {
  return (
    <pre
      role="img"
      aria-label="Portrait of Mohamed Sami"
      className="shrink-0 font-mono text-[3.8px] leading-[4.5px] text-primary"
    >
      {LINES.map((line, index) => (
        <span key={index}>
          {runs(line).map((run, runIndex) => (
            <span key={runIndex} className={SHADE_CLASS[run[0]]}>
              {run}
            </span>
          ))}
          {"\n"}
        </span>
      ))}
    </pre>
  );
}
