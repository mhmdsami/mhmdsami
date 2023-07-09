import { Button, Error, Layout } from "@/components/shared";
import { Tag } from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/shared/types";
import type { GetStaticProps, GetStaticPropsContext } from "next";

const project = ({ name, slug, desc, repo, deps, tags, image }: Project) => {
  return (
    <div>
      {name ? (
        <Layout pageName={name}>
          <div className="content-margin flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p>{desc}</p>
            <div className="flex flex-col gap-2 md:w-3/4 md:flex-row">
              <p className="whitespace-nowrap font-bold uppercase text-red">
                built with
              </p>
              <div className="flex flex-wrap gap-2 md:flex-nowrap">
                {tags.map((tag, index) => (
                  <Tag key={index}>
                    <Link href={`/skills/${tag}`}>{tag}</Link>
                  </Tag>
                ))}
              </div>
            </div>
            <div className="self-center pt-2">
              {image &&
                (deps ? (
                  <Link href={deps}>
                    <Image
                      src={image}
                      alt={name}
                      width={2880}
                      height={1410}
                      className="rounded-sm hover:cursor-pointer hover:opacity-50 md:rounded-md"
                    />
                  </Link>
                ) : (
                  <Image
                    src={image}
                    alt={name}
                    width={2880}
                    height={1410}
                    className="rounded-sm md:rounded-md"
                  />
                ))}
            </div>
            <div className="flex flex-col items-center gap-x-4 sm:flex-row sm:justify-center">
              {repo && (
                <Button href={repo}>
                  <div className="flex gap-1">
                    <Image
                      src="/icons/dark/github.svg"
                      width={20}
                      height={20}
                      alt="github repo"
                    />
                    view source code
                  </div>
                </Button>
              )}
              {deps && (
                <Button href={deps}>
                  <div className="flex gap-1">
                    <Image
                      src="/icons/dark/website.svg"
                      width={20}
                      height={20}
                      alt="deployment link"
                    />
                    view deployment
                  </div>
                </Button>
              )}
            </div>
          </div>
        </Layout>
      ) : (
        <Error
          pageName={name}
          errorCode="404"
          error="Project Not Found"
          accessedUrl={slug}
          redirectTo="/projects"
          buttonContent="explore other projects"
        />
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/projects`);
  const projects = await res.json();

  const paths = projects.map((project: Project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<{ props: Project }> => {
  const slug = context.params!.slug as string;
  const res = await fetch(`${process.env.API_BASE_URL}/projects/${slug}`);
  const projectDetails = await res.json();

  return {
    props: { ...projectDetails },
  };
};

export default project;
