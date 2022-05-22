interface SkillSet {
    title: string,
    skills: Array<string>
}

const Skills = () => {
    const skillSets: Array<SkillSet> = [
        { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'] },
        { title: 'Frontend', skills: ['HTML', 'CSS', 'React', 'Next.js', 'Svelte', 'TailwindCSS' ] },
        { title: 'Backend', skills: ['Nodejs', 'Express'] },
        { title: 'Database', skills: ['MongoDB'] },
        { title: 'Misc', skills: ['Git', 'Figma']}
    ]

    return (
        <div id="skills" className="pt-[5vh]">
            <div className="text-lg font-bold uppercase">Skills</div>
            <div className="grid grid-cols-3 gap-y-7">
                {skillSets.map(({ title, skills}, index) => (
                    <div key={index} className="flex flex-col my-2 w-52 gap-y-3">
                        <div className="text-3xl text-gray-600 font-bold">{title}</div>
                        <div className="flex gap-2 flex-wrap">
                            {skills.map((skill, ind) => (<div key={ind} className="bg-gray-200 px-2 rounded-lg font-medium">{skill}</div>))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;