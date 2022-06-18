import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ProjectComponentProps {
    name: string;
    children?: React.ReactNode;
    image?: string;
    tags: Array<string>;
    repo?: string;
    deps?: string;
}

const Project = ({ name, children, image, tags, repo, deps }: ProjectComponentProps) => {
    return (
        <div className="bg-black rounded-md md:rounded-xl p-5 mt-4 mb-7">
            <div className="text-lg font-bold">{name}</div>
            {children &&
                <div className="flex flex-col gap-3">
                    {children}
                    {
                        deps ? (
                            image && <a href={deps}>{image && <img src={`/projects/${image}`} alt={name} className="rounded-sm md:rounded-md"/>}</a>
                        ) : (
                            image && <img src={`./projects/${image}`} alt={name} className="rounded-sm md:rounded-md"/>
                        )
                    }
                </div>
            }
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2 mt-5 w-2/3 md:w-full">
                    <div className="font-medium">built with </div>
                    {tags.map((tag, ind) => (
                        <div key={ind} className="bg-red text-black-dark px-2 rounded-lg font-medium h-min w-min transition-all duration-300 hover:-translate-y-1"><Link href={`/skill/${tag}`}>{tag}</Link></div>
                    ))}
                </div>
                <div className="flex gap-2 mt-5">
                    {repo &&
                        <a href={repo} className="transition-all duration-300 hover:-translate-y-1">
                            <Image src="/icons/light/github.svg"  alt="github logo" width={28} height={28}/>
                        </a>
                    }
                    {deps &&
                        <a href={deps} className="transition-all duration-300 hover:-translate-y-1">
                            <Image src="/icons/light/website.svg"  alt="website" width={28} height={28}/>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;
