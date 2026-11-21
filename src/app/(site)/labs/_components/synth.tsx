"use client";

import Link from "next/link";
import { type FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSynth } from "@/app/(site)/_hooks/use-synth";
import ActivityGrid from "@/components/activity-grid";
import { PlayButton } from "@/components/play-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { alignToWeeks, type ContributionDay } from "@/lib/contributions";
import { cn } from "@/utils/cn";

const ENDPOINT = "https://github-contributions-api.jogruber.de/v4";
const USERNAME = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

interface Stats {
  days: ContributionDay[];
  max: number;
}

function toDays(payload: unknown) {
  const entries =
    typeof payload === "object" &&
    payload !== null &&
    Array.isArray((payload as { contributions?: unknown }).contributions)
      ? (payload as { contributions: Array<unknown> }).contributions
      : [];

  return alignToWeeks(
    entries.flatMap((entry) => {
      if (typeof entry !== "object" || entry === null) return [];
      const { date, count } = entry as { date?: unknown; count?: unknown };
      return typeof date === "string" && typeof count === "number" ? [{ date, count }] : [];
    }),
  );
}

export default function Synth({ handle, stats }: { handle: string; stats: Stats }) {
  const [user, setUser] = useState(handle);
  const [current, setCurrent] = useState(stats);
  const [value, setValue] = useState(handle);
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef(new Map([[handle.toLowerCase(), stats]]));
  const request = useRef(0);
  const compact = useMediaQuery("(max-width: 639px)");
  const visible = useMemo(() => (compact ? current.days.slice(-182) : current.days), [compact, current.days]);
  const playhead = useRef<HTMLDivElement>(null);
  const { playing, toggle } = useSynth(visible, current.max, playhead);

  const load = useCallback(async (login: string) => {
    const key = login.toLowerCase();
    const cached = cache.current.get(key);
    if (cached) {
      setCurrent(cached);
      setUser(login);
      setError(null);
      setPending(null);
      return;
    }

    const id = ++request.current;
    setPending(login);
    setError(null);
    try {
      const response = await fetch(`${ENDPOINT}/${encodeURIComponent(login)}?y=last`);
      if (!response.ok) throw new Error(String(response.status));
      const days = toDays(await response.json());
      if (days.length === 0) throw new Error("empty");
      if (request.current !== id) return;

      const next = { days, max: Math.max(1, ...days.map((day) => day.count)) };
      cache.current.set(key, next);
      setCurrent(next);
      setUser(login);
      setPending(null);
    } catch {
      if (request.current !== id) return;
      setPending(null);
      setError(`couldn't load ${login}`);
    }
  }, []);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("user")?.replace(/^@/, "").trim();
    if (!param || param.toLowerCase() === handle.toLowerCase() || !USERNAME.test(param)) return;
    setValue(param);
    void load(param);
  }, [handle, load]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = value.replace(/^@/, "").trim();
    if (!login) return;
    if (!USERNAME.test(login)) {
      setPending(null);
      setError("not a valid github handle");
      return;
    }

    window.history.replaceState(
      null,
      "",
      login.toLowerCase() === handle.toLowerCase() ? "/labs/synth" : `/labs/synth?user=${encodeURIComponent(login)}`,
    );
    void load(login);
  };

  const total = current.days.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className="pt-8 sm:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-medium tracking-tight">Synth</h1>
        <div className="flex items-baseline gap-3 text-2xs text-tertiary">
          <Link href="/labs" className="transition-colors duration-150 hover:text-foreground">
            labs
          </Link>
          <Link href="/" className="transition-colors duration-150 hover:text-foreground">
            home
          </Link>
        </div>
      </div>
      <p className="mt-3 max-w-md text-balance text-sm text-secondary">
        Your year of GitHub contributions, played as drums.
      </p>

      <form onSubmit={submit} className="mt-8 font-mono text-xs">
        <label htmlFor="handle" className="text-2xs text-tertiary">
          github handle
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-sm border border-border bg-surface-1 px-2 py-1.5 transition-colors duration-150 focus-within:border-input">
          <span aria-hidden="true" className="shrink-0 text-primary">
            gh/
          </span>
          <input
            id="handle"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="go"
            placeholder="any public username"
            className="w-full bg-transparent text-foreground outline-none placeholder:text-tertiary"
          />
          <button
            type="submit"
            className="-mr-1 shrink-0 rounded-sm px-2 py-1 text-xs text-secondary transition-colors duration-150 hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            load
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="truncate font-mono text-xs text-secondary">
          {user} <span className="text-tertiary">· {total} contributions</span>
        </p>
        <PlayButton playing={playing} onToggle={toggle} label={`${user} contributions`} className="inline-flex" />
      </div>

      <div className={cn("mt-4 transition-opacity duration-150", pending && "opacity-40")}>
        <ActivityGrid days={visible} max={current.max} interactive playheadRef={playhead} />
      </div>

      <p aria-live="polite" className="mt-3 min-h-4 font-mono text-2xs text-tertiary">
        {pending ? `loading ${pending}…` : error}
      </p>
    </div>
  );
}
