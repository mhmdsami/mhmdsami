"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { fetchSiteState, type SiteState } from "@/lib/site-state";

const SiteStateContext = createContext<SiteState | null>(null);

export function SiteStateProvider({ initial, children }: { initial: SiteState | null; children: ReactNode }) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    let alive = true;

    const load = () => {
      void fetchSiteState({ fresh: true }).then((next) => {
        if (alive && next) setState(next);
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

  return <SiteStateContext.Provider value={state}>{children}</SiteStateContext.Provider>;
}

export function useSiteState() {
  return useContext(SiteStateContext);
}
