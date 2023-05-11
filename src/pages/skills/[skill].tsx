import { Layout, ProjectList, Error, Button } from "@components";
import type { ProjectProps } from "../api/projects";
import type { SkillSet } from "./";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

interface SkillPageProps {
  projects: Array<ProjectProps>;
  skill: string;
  skillSets: Array<SkillSet>;
}

const skill = ({ projects, skill, skillSets }: SkillPageProps) => {
  const isValidSkill = (skill: string): string | undefined => {
    let name;
    skillSets.forEach((skillSet) =>
      skillSet.skills.forEach((_skill) => {
        if (_skill.slug === skill) {
          name = _skill.name;
        }
      })
    );
    return name;
  };

  const name = isValidSkill(skill);

  return (
    <>
      {name ? (
        <Layout pageName={name}>
          {projects.length ? (
            <div className="content-margin grid gap-x-7">
              <ProjectList projects={projects} />
            </div>
          ) : (
            <div className="content-padding flex flex-col items-center gap-4">
              <div className="text-3xl font-bold">
                Unfortunately,
                <br />I don&apos;t have any open source projects for&nbsp;
                <span className="rounded-xl bg-red px-2 py-0.5 font-bold text-black-dark">
                  {name}
                </span>
                &nbsp;at the moment
              </div>
              <Button href="/skills">show me your skills</Button>
            </div>
          )}
        </Layout>
      ) : (
        <Error
          pageName="Skill Not Found"
          errorCode="404"
          error="Skill Not Found"
          accessedUrl={skill}
          redirectTo="/skills"
          buttonContent="Show me your skills"
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const skill =
    typeof context.query.skill === "string" ? context.query.skill : " ";

  let res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
  let data = await res.json();

  const projects: Array<ProjectProps> = data.filter(({ tags }: ProjectProps) =>
    tags.includes(skill)
  );

  res = await fetch(`${process.env.API_BASE_URL}/api/data`);
  data = await res.json();

  const { skillSets } = data;

  return {
    props: { projects, skill, skillSets },
  };
};

export default skill;
