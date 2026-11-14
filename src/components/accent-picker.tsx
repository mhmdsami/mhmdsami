"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/ui/cn";
import { type Accent, accents, applyAccent, currentAccent } from "@/lib/theme";

export default function AccentPicker() {
  const [active, setActive] = useState<Accent>("sage");

  useEffect(() => {
    setActive(currentAccent());
  }, []);

  return (
    <fieldset>
      <legend className="sr-only">Accent color</legend>
      <div className="flex items-center gap-2">
        {accents.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            title={label}
            aria-label={`${label} accent`}
            aria-pressed={active === id}
            data-accent-option
            onClick={() => {
              applyAccent(id);
              setActive(id);
            }}
            className={cn("accent-swatch size-3.5 rounded-full", `accent-swatch-${id}`)}
            style={{ background: `var(--swatch-${id})` }}
          />
        ))}
      </div>
    </fieldset>
  );
}
