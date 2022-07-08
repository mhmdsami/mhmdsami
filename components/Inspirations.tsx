import Image from "next/image";
import type { InspirationProps } from "../pages/attributions";

interface InspirationsComponentProps {
    inspirations: Array<InspirationProps>;
}

const Inspirations = ({ inspirations }: InspirationsComponentProps) => {
    return (
        <>
            <h1 className="text-base md:text-xl font-bold uppercase text-red">Inspired By</h1>
            <div className="flex flex-col gap-5">
                {inspirations.map(({ name, github, portfolio }: InspirationProps, index: number) => (
                    <div key={index} className="flex flex-row gap-5 md:gap-0 md:w-[50vw] lg:w-[40vw] justify-between">
                        <a className="text-xl md:text-2xl text-white font-bold transition-all duration-300 hover:translate-x-2 hover:text-red" href={portfolio} target="_blank" rel="noreferrer">{name}</a>
                        <div className="flex gap-3">
                            <a href={github} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:-translate-y-1">
                                <Image src="/icons/light/github.svg"  alt="github" width={28} height={28} />
                            </a>
                            <a href={portfolio} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:-translate-y-1">
                                <Image src="/icons/light/website.svg"  alt="portfolio" width={28} height={28} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Inspirations;
