import { site } from "@/data/site";
import { type Accent, accents, parseAccent, parseTheme, THEMES, type Theme } from "@/lib/theme";

export type Outcome =
  | { type: "text"; lines: Array<string> }
  | { type: "info" }
  | { type: "clear" }
  | { type: "exit" }
  | { type: "navigate"; href: string }
  | { type: "mail"; email: string }
  | { type: "synth"; action: "on" | "off" | "toggle" }
  | { type: "theme"; theme: Theme }
  | { type: "toggle-theme" }
  | { type: "accent"; accent: Accent }
  | { type: "cycle-accent" }
  | { type: "invalid" };

export interface CommandSpec {
  id: string;
  man: string;
  args?: Array<string>;
  run: (argument: string | undefined, commands: Array<CommandSpec>) => Outcome;
}

const text = (lines: Array<string>): Outcome => ({ type: "text", lines });

export const BASE_COMMANDS: Array<CommandSpec> = [
  {
    id: "whoami",
    man: "print the current user",
    run: () => text(["sami"]),
  },
  {
    id: "info",
    man: "information",
    run: () => ({ type: "info" }),
  },
  {
    id: "theme",
    man: "set the theme",
    args: [...THEMES],
    run: (argument) => {
      if (!argument) return { type: "toggle-theme" };
      const theme = parseTheme(argument);
      return theme ? { type: "theme", theme } : { type: "invalid" };
    },
  },
  {
    id: "accent",
    man: "set the accent colour",
    args: accents.map(({ id }) => id),
    run: (argument) => {
      if (!argument) return { type: "cycle-accent" };
      const accent = parseAccent(argument);
      return accent ? { type: "accent", accent } : { type: "invalid" };
    },
  },
  {
    id: "contact",
    man: "email me",
    run: () => ({ type: "mail", email: site.profile.email }),
  },
  {
    id: "labs",
    man: "open the labs",
    run: (argument) => ({
      type: "navigate",
      href: argument ? `/labs/synth?user=${encodeURIComponent(argument)}` : "/labs",
    }),
  },
  {
    id: "synth",
    man: "play the activity drums",
    args: ["on", "off", "toggle"],
    run: (argument) => {
      const action = argument ?? "toggle";
      if (action !== "on" && action !== "off" && action !== "toggle") return { type: "invalid" };
      return { type: "synth", action };
    },
  },
  {
    id: "man",
    man: "show this manual",
    run: (argument, commands) => text(argument ? manEntry(argument, commands) : manPage(commands)),
  },
  {
    id: "clear",
    man: "clear the output",
    run: () => ({ type: "clear" }),
  },
];

export const EXIT_COMMAND: CommandSpec = {
  id: "exit",
  man: "close the terminal",
  run: () => ({ type: "exit" }),
};

export function manPage(commands: Array<CommandSpec>) {
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
    ...commands.flatMap(({ id, man, args }) => {
      const line = `       ${id.padEnd(12)}${man}`;
      return args?.length ? [line, `       ${" ".repeat(12)}${args.join(" | ")}`] : [line];
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

export function manEntry(command: string, commands: Array<CommandSpec>) {
  const spec = commands.find(({ id }) => id === command);
  if (!spec) return [`No manual entry for ${command}.`];
  const synopsis = spec.args?.length ? `${spec.id} [${spec.args.join("|")}]` : spec.id;
  return [
    `${spec.id.toUpperCase()}(1)`,
    "",
    "NAME",
    `       ${spec.id} - ${spec.man}`,
    "",
    "SYNOPSIS",
    `       ${synopsis}`,
  ];
}

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

export function complete(input: string, commands: Array<CommandSpec>) {
  if (!input.trim()) return "man ";
  const lower = input.toLowerCase();
  const space = lower.lastIndexOf(" ");

  if (space > 0) {
    const id = lower.slice(0, space);
    const options = commands.find((command) => command.id === id)?.args;
    if (!options?.length) return input;
    const partial = lower.slice(space + 1);
    const matches = options.filter((option) => option.startsWith(partial));
    if (matches.length === 1) return `${id} ${matches[0]}`;
    if (matches.length > 1) {
      const prefix = commonPrefix(matches);
      if (prefix.length > partial.length) return `${id} ${prefix}`;
    }
    return input;
  }

  const matches = commands.filter((command) => command.id.startsWith(lower)).map(({ id }) => id);
  if (matches.length === 1) return `${matches[0]} `;
  if (matches.length > 1) {
    const prefix = commonPrefix(matches);
    if (prefix.length > lower.length) return prefix;
  }
  return input;
}

export function preview(input: string, commands: Array<CommandSpec>) {
  const lower = input.toLowerCase();
  const space = lower.lastIndexOf(" ");

  if (space > 0) {
    const id = lower.slice(0, space);
    const options = commands.find((command) => command.id === id)?.args;
    if (!options?.length) return "";
    const partial = lower.slice(space + 1);
    if (!partial) return `  [${options.join("|")}]`;
    const matches = options.filter((option) => option.startsWith(partial));
    if (matches.length === 1) return matches[0].slice(partial.length);
    const prefix = commonPrefix(matches);
    return prefix.length > partial.length ? prefix.slice(partial.length) : "";
  }

  const matches = commands.filter((command) => command.id.startsWith(lower)).map(({ id }) => id);
  if (matches.length === 1) return `${matches[0].slice(lower.length)} `;
  const prefix = commonPrefix(matches);
  return prefix.length > lower.length ? prefix.slice(lower.length) : "";
}
