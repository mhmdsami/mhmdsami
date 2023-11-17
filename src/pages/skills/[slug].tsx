import { Layout, ProjectList, Error, Button } from "@/components/shared";
import type { SkillSet, Project, Skill } from "@/shared/types";
import type { GetServerSideProps, GetStaticPropsContext } from "next";

interface SkillPageProps {
  projects: Array<Project>;
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
            <div className="content-padding grid md:grid-cols-2 gap-x-7">
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/skills`);
  const skillSets: Array<SkillSet> = await res.json();

  const paths = skillSets
    .map(({ skills }: SkillSet) =>
      skills
        .filter(({ makePage }: Skill) => makePage)
        .map(({ slug }: Skill) => ({
          params: { slug },
        }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(`${process.env.API_BASE_URL}/projects`);
  const data = await res.json();

  const skill = context.params!.slug as string;

  const projects: Array<Project> = data.filter(({ tags }: Project) =>
    tags.includes(skill)
  );

  const skillSetsRes = await fetch(`${process.env.API_BASE_URL}/skills`);
  const skillSets = await skillSetsRes.json();

  return {
    props: { projects, skill, skillSets },
  };
};

export default skill;
