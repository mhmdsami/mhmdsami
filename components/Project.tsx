import Image from "next/image";
import React from "react";

interface ProjectComponentProps {
    name: string;
    children?: React.ReactNode;
    image?: string;
    repo?: string;
    deps?: string;
}

const Project = ({ name, children, image, repo, deps }: ProjectComponentProps) => {
    return (
        <div id="projects" className="bg-gray-200 rounded-md md:rounded-xl p-5 mt-4 mb-7">
            <div className="text-lg font-bold">{name}</div>
            {children &&
                <div className="flex flex-col gap-3">
                    {children}
                    {
                        deps ? (
                            image && <a href={deps}>{image && <img src={`./projects/${image}`} alt={name} className="rounded-sm md:rounded-md"/>}</a>
                        ) : (
                            image && <img src={`./projects/${image}`} alt={name} className="rounded-sm md:rounded-md"/>
                        )
                    }
                </div>
            }
            <div className="flex gap-2 place-content-center mt-5">
                {repo &&
                    <a href={repo} className="transition-all duration-300 hover:-translate-y-1">
                        <Image src={`/socials/github.svg`}  alt="github logo" width={28} height={28}/>
                    </a>
                }
                {deps &&
                    <a href={deps} className="transition-all duration-300 hover:-translate-y-1">
                        <Image src={`/website.svg`}  alt="website" width={28} height={28}/>
                    </a>
                }
            </div>
        </div>
    )
}

export default Project;
