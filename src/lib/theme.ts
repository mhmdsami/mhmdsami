export type Theme = "light" | "dark";

export const accents = [
  { id: "sage", label: "Sage" },
  { id: "blue", label: "Pastel blue" },
  { id: "rose", label: "Rose" },
  { id: "yellow", label: "Pastel yellow" },
  { id: "purple", label: "Purple" },
] as const;

export type Accent = (typeof accents)[number]["id"];

const STORAGE_KEY = "theme";
const ACCENT_KEY = "accent";
let activeSweep = 0;

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode can reject storage; the theme still applies for this visit.
  }
  const color = theme === "light" ? "#f7f7f3" : "#000000";
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", color);
  });
}

export function currentAccent(): Accent {
  if (typeof document === "undefined") return "sage";
  const value = document.documentElement.dataset.accent;
  return accents.some(({ id }) => id === value) ? (value as Accent) : "sage";
}

export function applyAccent(accent: Accent) {
  document.documentElement.dataset.accent = accent;
  try {
    window.localStorage.setItem(ACCENT_KEY, accent);
  } catch {
    // Private mode can reject storage; the accent still applies for this visit.
  }
}

export function toggleTheme(origin?: { x: number; y: number }): Theme {
  const next: Theme = currentTheme() === "dark" ? "light" : "dark";
  const root = document.documentElement;
  const startViewTransition = (document as ViewTransitionDocument).startViewTransition;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!startViewTransition || reduce) {
    applyTheme(next);
    return next;
  }

  const x = origin?.x ?? window.innerWidth;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 8;

  root.style.setProperty("--theme-sweep-x", `${x}px`);
  root.style.setProperty("--theme-sweep-y", `${y}px`);
  root.style.setProperty("--theme-sweep-r", `${radius}px`);

  const transition = startViewTransition.call(document, () => applyTheme(next));
  const sweep = ++activeSweep;
  transition.finished.finally(() => {
    if (sweep !== activeSweep) return;
    root.style.removeProperty("--theme-sweep-x");
    root.style.removeProperty("--theme-sweep-y");
    root.style.removeProperty("--theme-sweep-r");
  });

  return next;
}
