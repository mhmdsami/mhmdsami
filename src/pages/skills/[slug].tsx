import { Layout, ProjectList, Error, Button } from "@/components/shared";
import skillSets from "@/shared/data/skillsets";
import allProjects from "@/shared/data/projects";
import { useRouter } from "next/router";

const Skill = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || Array.isArray(slug)) {
    return (
      <Error
        pageName="Skill Not Found"
        errorCode="404"
        error="Skill Not Found"
        redirectTo="/skills"
        buttonContent="Show me your skills"
      />
    );
  }

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

  const name = isValidSkill(slug);

  if (!name) {
    return (
      <Error
        pageName="Skill Not Found"
        errorCode="404"
        error="Skill Not Found"
        accessedUrl={slug}
        redirectTo="/skills"
        buttonContent="Show me your skills"
      />
    );
  }

  const projects = allProjects.filter((project) => project.tags.includes(slug));

  return (
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
  );
};

export default Skill;
