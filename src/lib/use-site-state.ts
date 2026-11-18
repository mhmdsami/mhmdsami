"use client";

import { useEffect, useState } from "react";
import { fetchSiteState, type SiteState } from "@/lib/site-state";

export function useSiteState() {
  const [state, setState] = useState<SiteState | null>(null);

  useEffect(() => {
    let alive = true;

    const load = () => {
      void fetchSiteState().then((next) => {
        if (alive) setState(next);
      });
    };

    load();

    const onVisible = () => {
      if (!document.hidden) load();
    };

    document.addEventListener("visibilitychange", onVisible);
    return () => {
      alive = false;
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return state;
}
