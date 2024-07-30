import Tag from "@/components/tag";
import type { Project as ProjectType } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface ProjectProps extends ProjectType {
  children?: ReactNode;
}

const Project = ({
  name,
  children,
  image,
  skills,
  repo,
  deps,
  contributed,
  organizationUrl,
}: ProjectProps) => {
  return (
    <div className="mb-7 mt-4 flex flex-col rounded-md bg-black p-5 md:rounded-xl">
      <div className="flex justify-between">
        <div className="text-lg font-bold">{name}</div>
        {contributed && (
          <Tag>
            <a href={organizationUrl}>contributed</a>
          </Tag>
        )}
      </div>
      {children && (
        <div className="flex grow flex-col gap-3">
          {children}
          <div>
            {deps
              ? image && (
                  <a href={deps}>
                    <Image
                      src={image}
                      alt={name}
                      className="rounded-sm md:rounded-md"
                    />
                  </a>
                )
              : image && (
                  <Image
                    src={image}
                    alt={name}
                    className="grow rounded-sm md:rounded-md"
                  />
                )}
          </div>
        </div>
      )}
      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="flex w-2/3 flex-col gap-2 md:w-full">
          <div className="font-medium">built with </div>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ name, slug }, index) => (
              <Tag key={index}>
                {slug ? (
                  <Link
                    className="text-sm font-semibold"
                    href={`/skills/${slug}`}
                  >
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </Tag>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {repo && (
            <a
              href={repo}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src="/icons/github.svg"
                alt="github logo"
                width={28}
                height={28}
              />
            </a>
          )}
          {deps && (
            <a
              href={deps}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src="/icons/website.svg"
                alt="website"
                width={28}
                height={28}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
