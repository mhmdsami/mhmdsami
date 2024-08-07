import type { SkillSet } from "@/shared/types";
import Link from "next/link";

interface SkillsProps {
  skillSets: Array<SkillSet>;
  backgroundColor?: string;
}

const Skills = ({ skillSets, backgroundColor }: SkillsProps) => {
  return (
    <div
      id="skills"
      className={`px-8 py-[5vh] md:px-14 lg:px-20 xl:px-52 ${backgroundColor}`}
    >
      <div className="text-base font-bold uppercase text-red md:text-xl">
        Skills
      </div>
      <div className="grid gap-y-7 md:grid-cols-2 lg:grid-cols-3">
        {skillSets.map(({ title, skills }: SkillSet, index) => (
          <div key={index} className="my-2 flex w-52 flex-col gap-y-3">
            <div className="text-gray-600 text-2xl font-bold md:text-3xl">
              {title}
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, slug }, ind) => (
                <div
                  key={ind}
                  className="rounded-lg bg-red px-2 font-bold text-black-dark transition-all duration-300 hover:-translate-y-1"
                >
                  {slug ? <Link href={`/skills/${slug}`}>{name}</Link> : name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
