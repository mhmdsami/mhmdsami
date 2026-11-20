export interface Stop {
  from: string;
  to: string;
  city: string;
  country: string;
}

export interface Reading {
  title: string;
  author?: string;
  url?: string;
}

export interface Building {
  name: string;
  url?: string;
}

export interface SiteState {
  stops: Array<Stop>;
  building?: Building | null;
  reading?: Reading | null;
}

const SOURCE = process.env.NEXT_PUBLIC_STATE_URL;
const TIME_ZONE = "Asia/Kolkata";

export function today(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function activeStop(stops: Array<Stop> | undefined, date = new Date()): Stop | null {
  if (!stops?.length) return null;

  const day = today(date);
  return (
    [...stops]
      .sort((a, b) => a.from.localeCompare(b.from))
      .filter((stop) => stop.from <= day && day <= stop.to)
      .at(-1) ?? null
  );
}

export function parseState(value: unknown): SiteState | null {
  if (typeof value !== "object" || value === null) return null;

  const raw = value as { stops?: unknown; building?: unknown; reading?: unknown };
  const stops = Array.isArray(raw.stops)
    ? raw.stops.flatMap((entry) => {
        if (typeof entry !== "object" || entry === null) return [];
        const { from, to, city, country } = entry as Record<string, unknown>;
        if (typeof from !== "string" || typeof to !== "string") return [];
        if (typeof city !== "string" || typeof country !== "string") return [];
        return [{ from, to, city, country }];
      })
    : [];

  const building = (() => {
    if (typeof raw.building !== "object" || raw.building === null) return null;
    const { name, url } = raw.building as Record<string, unknown>;
    if (typeof name !== "string") return null;
    return { name, url: typeof url === "string" ? url : undefined };
  })();

  const reading = (() => {
    if (typeof raw.reading !== "object" || raw.reading === null) return null;
    const { title, author, url } = raw.reading as Record<string, unknown>;
    if (typeof title !== "string") return null;
    return {
      title,
      author: typeof author === "string" ? author : undefined,
      url: typeof url === "string" ? url : undefined,
    };
  })();

  return { stops, building, reading };
}

export async function fetchSiteState({ fresh = false }: { fresh?: boolean } = {}): Promise<SiteState | null> {
  if (!SOURCE) return null;

  try {
    const bucket = Math.floor(Date.now() / 60_000);
    const join = SOURCE.includes("?") ? "&" : "?";
    const response = await fetch(`${SOURCE}${join}v=${bucket}`, fresh ? { cache: "no-store" } : undefined);
    if (!response.ok) return null;
    return parseState(await response.json());
  } catch {
    return null;
  }
}

let request: Promise<SiteState | null> | null = null;

export function getSiteState() {
  request ??= fetchSiteState();
  return request;
}
