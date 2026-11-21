export const sections = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "activity", label: "activity" },
  { id: "stack", label: "stack" },
  { id: "education", label: "education" },
  { id: "ai-skills", label: "ai skills" },
] as const;

export function goToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  return true;
}
