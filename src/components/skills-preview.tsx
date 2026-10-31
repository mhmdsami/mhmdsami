import type { AgentSkill } from "@/shared/types";

export default function SkillsPreview({ skills }: { skills: Array<AgentSkill> }) {
  return (
    <ul className="space-y-5">
      {skills.map(({ name, description }) => (
        <li key={name}>
          <p className="text-sm font-medium">{name}</p>
          <p className="mt-1.5 text-sm leading-6 text-secondary">{description}</p>
        </li>
      ))}
    </ul>
  );
}
