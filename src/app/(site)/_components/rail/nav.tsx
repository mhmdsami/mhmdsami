"use client";

import { usePathname } from "next/navigation";
import { goToSection, sections } from "@/lib/sections";

export default function Nav() {
  const pathname = usePathname();

  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!goToSection(id)) return;
    event.preventDefault();
  };

  if (pathname !== "/") return null;

  return (
    <nav className="mt-3 hidden gap-x-4 gap-y-1 text-xs text-secondary lg:mt-8 lg:flex lg:flex-col lg:gap-1.5">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`/#${id}`}
          onClick={(event) => go(event, id)}
          className="w-fit py-1 transition-colors duration-150 hover:text-foreground lg:py-0"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
