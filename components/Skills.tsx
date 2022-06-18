import Link from "next/link";
import type {SkillSet} from "../pages/api/data";

interface SkillsProps {
    skillSets: Array<SkillSet>
}

const Skills = ({ skillSets }: SkillsProps) => {
    return (
        <div id="skills" className="py-[5vh] content-padding text-black bg-white">
            <div className="text-base md:text-xl font-bold uppercase text-red">Skills</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                {skillSets.map((skillSet, index) => (
                    <div key={index} className="flex flex-col my-2 w-52 gap-y-3">
                        <div className="text-2xl md:text-3xl text-gray-600 font-bold">{skillSet.title}</div>
                        <div className="flex gap-2 flex-wrap">
                            {skillSet.skills.map(( { name, slug }, ind) => (
                                <div key={ind} className="bg-black text-white px-2 rounded-lg font-medium"><Link href={`/skill/${slug}`}>{name}</Link></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
