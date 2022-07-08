import type { TechStackProps } from "../pages/attributions";

interface TechStackComponentProps {
    techStack: Array<TechStackProps>
}

const TechStack = ({ techStack }: TechStackComponentProps) => {
    return (
        <>
            <h1 className="text-base md:text-xl font-bold uppercase text-red">Built With</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-3">
                {techStack.map(({ name, url }: TechStackProps, index: number) => (
                    <a key={index} className="text-xl text-white font-bold transition-all duration-300 hover:translate-x-2 hover:text-red" href={url}>{name}</a>
                ))}
            </div>
        </>
    )
}

export default TechStack;
