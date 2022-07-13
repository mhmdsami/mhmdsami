import Link from "next/link";
import type { SkillSet } from "../pages/api/data";

interface SkillsProps {
    skillSets: Array<SkillSet>
    backgroundColor?: string;
}

const Skills = ({ skillSets, backgroundColor }: SkillsProps) => {
    return (
        <div id="skills" className={`py-[5vh] content-padding ${backgroundColor}`}>
            <div className="text-base md:text-xl font-bold uppercase text-red">Skills</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                {skillSets.map(({ title, skills }: SkillSet, index) => (
                    <div key={index} className="flex flex-col my-2 w-52 gap-y-3">
                        <div className="text-2xl md:text-3xl text-gray-600 font-bold">{title}</div>
                        <div className="flex gap-2 flex-wrap">
                            {skills.map(( { name, slug, hasPage }, ind) => (
                                <div key={ind} className="bg-red text-black-dark px-2 rounded-lg font-bold transition-all duration-300 hover:-translate-y-1">
                                    {hasPage ? <Link href={`/skills/${slug}`}>{name}</Link> : name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
