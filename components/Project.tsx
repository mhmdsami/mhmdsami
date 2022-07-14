import { Tag } from "../components";
import { Fade } from "react-awesome-reveal"
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectComponentProps {
    name: string;
    project?: string;
    children?: React.ReactNode;
    image?: string;
    tags: Array<string>;
    repo?: string;
    deps?: string;
    contributed?: boolean;
    organizationUrl?: string;
}

const Project = ({ name, project, children, image, tags, repo, deps, contributed, organizationUrl }: ProjectComponentProps) => {
    return (
        <Fade triggerOnce={true} className="hover:z-20">
            <div className="bg-black rounded-md md:rounded-xl p-5 mt-4 mb-7">
                <div className="flex justify-between">
                    {project ? (
                        <div className="text-lg font-bold"><Link href={`/projects/${project}`}>{name}</Link></div>
                    ) : (
                        <div className="text-lg font-bold">{name}</div>
                    )}
                    {contributed && <Tag><a href={organizationUrl}>contributed</a></Tag>}
                </div>
                {children &&
                    <div className="flex flex-col gap-3">
                        {children}
                        <div className="hover:scale-150 z-10 duration-300">
                            {
                                deps ? (
                                    image && <a href={deps}><Image src={`/projects/${image}`} width={2880} height={1410} alt={name} className="rounded-sm md:rounded-md"/></a>
                                ) : (
                                    image && <Image src={`/projects/${image}`} width={2880} height={1410} alt={name} className="rounded-sm md:rounded-md"/>
                                )
                            }
                        </div>
                    </div>
                }
                <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2 mt-5 w-2/3 md:w-full">
                        <div className="font-medium">built with </div>
                        {tags.slice(0, 3).map((tag, index) => (
                            <div key={index}><Tag><Link href={`/skills/${tag}`}>{tag}</Link></Tag></div>
                        ))}
                        {tags.length > 3 && (
                            project ? (
                                <Tag><Link href={`/projects/${project}`}>{`+${tags.length-3}`}</Link></Tag>
                            ) : (
                                <Tag>+{tags.length - 3}</Tag>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-5">
                        {repo &&
                            <a href={repo} className="transition-all duration-300 hover:-translate-y-1">
                                <Image src="/icons/light/github.svg"  alt="github logo" width={28} height={28}/>
                            </a>
                        }
                        {deps &&
                            <a href={deps} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:-translate-y-1">
                                <Image src="/icons/light/website.svg"  alt="website" width={28} height={28}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Project;
