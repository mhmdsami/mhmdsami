import Button from "@/components/button";
import Error from "@/components/error";
import ProjectList from "@/components/project-list";
import allProjects from "@/shared/data/projects";
import skills from "@/shared/data/skills";

export default function Skill({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [, skill] = Object.entries(skills).find(
    ([, { slug: s }]) => s === slug,
  ) ?? [];

  if (!skill) {
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

  const projects = allProjects.filter((project) =>
    project.skills.includes(skill),
  );

  return (
    <>
      {projects.length ? (
        <div className="grid gap-x-7 px-8 md:grid-cols-2 md:px-14 lg:px-20 xl:px-52">
          <ProjectList projects={projects} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 px-8 md:px-14 lg:px-20 xl:px-52">
          <div className="text-3xl font-bold">
            Unfortunately,
            <br />I don&apos;t have any open source projects for&nbsp;
            <span className="rounded-xl bg-red px-2 py-0.5 font-bold text-black-dark">
              {skill.name}
            </span>
            &nbsp;at the moment
          </div>
          <Button href="/skills">show me your skills</Button>
        </div>
      )}
    </>
  );
}
