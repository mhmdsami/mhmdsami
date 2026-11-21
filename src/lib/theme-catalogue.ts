export const THEMES = ["light", "dark"] as const;

export type Theme = (typeof THEMES)[number];

export const accents = [
  { id: "sage", label: "Sage" },
  { id: "tide", label: "Tide" },
  { id: "sakura", label: "Sakura" },
  { id: "honey", label: "Honey" },
  { id: "iris", label: "Iris" },
] as const;

export type Accent = (typeof accents)[number]["id"];

export const DEFAULT_THEME: Theme = "dark";
export const DEFAULT_ACCENT: Accent = "sage";

const ALIASES: Record<string, Accent> = {
  blue: "tide",
  rose: "sakura",
  yellow: "honey",
  purple: "iris",
};

export function parseTheme(value: unknown): Theme | null {
  return typeof value === "string" && (THEMES as ReadonlyArray<string>).includes(value) ? (value as Theme) : null;
}

export function parseAccent(value: unknown): Accent | null {
  if (typeof value !== "string") return null;
  const id = ALIASES[value] ?? value;
  return accents.some((accent) => accent.id === id) ? (id as Accent) : null;
}

export function nextAccent(current: Accent): Accent {
  const index = accents.findIndex(({ id }) => id === current);
  return accents[(index + 1) % accents.length].id;
}
