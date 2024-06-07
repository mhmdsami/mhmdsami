"use client";

import ProjectList from "@/components/project-list";
import Error from "@/components/error";
import Button from "@/components/button";
import skillSets from "@/shared/data/skillsets";
import allProjects from "@/shared/data/projects";

export default function Skill({ params: { slug } }: { params: { slug: string } }){
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
    <>
      {projects.length ? (
        <div className="px-8 md:px-14 lg:px-20 xl:px-52 grid md:grid-cols-2 gap-x-7">
          <ProjectList projects={projects} />
        </div>
      ) : (
        <div className="px-8 md:px-14 lg:px-20 xl:px-52 flex flex-col items-center gap-4">
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
    </>
  );
};
