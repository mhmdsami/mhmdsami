import { Layout, Project, Error, Button } from "../../components";
import type { ProjectProps } from "../api/projects";
import type { SkillSet } from "../api/data";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

interface SkillPageProps {
    projects: Array<ProjectProps>;
    skill: string;
    skillSets: Array<SkillSet>;
}

const skill = ({ projects, skill, skillSets } : SkillPageProps) => {
    const isValidSkill = (skill: string): string | undefined => {
        let name;
        skillSets.forEach(
            skillSet => skillSet.skills.forEach(
                _skill => {
                    if(_skill.slug === skill) {
                        name =  _skill.name;
                    }
                }));
        return name;
    }

    const name = isValidSkill(skill);

    return (
        <>
            {name ? (
                <Layout pageName={name}>
                    {projects.length ? (
                        <div className="grid gap-x-7 content-margin">
                            {projects.map((project: ProjectProps, index: number) => (
                                <Project key={index} {...project}>
                                    {project.desc}
                                </Project>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 items-center content-padding">
                            <div className="text-3xl font-bold">
                                Unfortunately,<br/>
                                I don&apos;t have any open source projects for&nbsp;
                                <span className="bg-red text-black-dark font-bold px-2 py-0.5 rounded-xl">{name}</span>
                                &nbsp;at the moment
                            </div>
                            <Button href="/skill">show me your skills</Button>
                        </div>
                    )}
                </Layout>
            ) : (
                <Error pageName="Skill Not Found"
                       errorCode="404"
                       error="Skill Not Found"
                       accessedUrl={skill}
                       redirectTo="/skills"
                       buttonContent="Show me your skills"
                />
            )}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const skill = typeof context.query.skill === "string" ? context.query.skill : " ";

    let res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
    let data = await res.json();

    const projects: Array<ProjectProps> = data.filter(({ tags }: ProjectProps) => tags.includes(skill));

    res = await fetch(`${process.env.API_BASE_URL}/api/data`);
    data = await res.json();

    const { skillSets } = data;

    return {
        props: { projects, skill, skillSets }
    };
};

export default skill;
