"use client";

import { useEffect, useState } from "react";

interface TimeProps {
  timeZone?: string;
  label?: string;
}

export default function Time({ timeZone = "Asia/Kolkata", label = "IST" }: TimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const read = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());

    setTime(read());
    const id = window.setInterval(() => setTime(read()), 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className="text-2xs text-tertiary tabular-nums">
      {time ?? "--:--"}
      <span className="ml-1 text-tertiary">{label}</span>
    </span>
  );
}
