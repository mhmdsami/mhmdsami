"use client";

const items = [
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "ai-skills", label: "ai skills" },
  { id: "stack", label: "stack" },
];

export default function RailNav() {
  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-secondary lg:mt-8 lg:flex-col lg:gap-1.5">
      {items.map(({ id, label }) => (
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
