import {
  type Accent,
  accents,
  DEFAULT_ACCENT,
  DEFAULT_THEME,
  nextAccent,
  parseAccent,
  parseTheme,
  THEMES,
  type Theme,
} from "@/lib/theme-catalogue";
import { serializeCookie } from "@/utils/cookies";

export { type Accent, accents, DEFAULT_ACCENT, DEFAULT_THEME, nextAccent, parseAccent, parseTheme, THEMES, type Theme };

type ViewTransition = {
  finished: Promise<void>;
  skipTransition?: () => void;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

let activeTransition: ViewTransition | null = null;

const STORAGE_KEY = "theme";
const ACCENT_KEY = "accent";
export function currentTheme(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  return parseTheme(document.documentElement.dataset.theme) ?? DEFAULT_THEME;
}

export function applyTheme(theme: Theme, persist = true) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  if (persist) document.cookie = serializeCookie(STORAGE_KEY, theme);
  const color = theme === "light" ? "#f7f7f3" : "#000000";
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", color);
  });
}

export function currentAccent(): Accent {
  if (typeof document === "undefined") return DEFAULT_ACCENT;
  return parseAccent(document.documentElement.dataset.accent) ?? DEFAULT_ACCENT;
}

export function applyAccent(accent: Accent, persist = true) {
  document.documentElement.dataset.accent = accent;
  if (persist) document.cookie = serializeCookie(ACCENT_KEY, accent);
}

export function cycleAccent() {
  const accent = accents.find(({ id }) => id === nextAccent(currentAccent())) ?? accents[0];
  applyAccent(accent.id);
  return accent;
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

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 8;

  root.style.setProperty("--theme-sweep-x", `${x}px`);
  root.style.setProperty("--theme-sweep-y", `${y}px`);
  root.style.setProperty("--theme-sweep-r", `${radius}px`);

  activeTransition?.skipTransition?.();
  const transition = startViewTransition.call(document, () => applyTheme(next));
  activeTransition = transition;

  transition.finished.finally(() => {
    if (activeTransition !== transition) return;
    activeTransition = null;
    root.style.removeProperty("--theme-sweep-x");
    root.style.removeProperty("--theme-sweep-y");
    root.style.removeProperty("--theme-sweep-r");
  });

  return next;
}
