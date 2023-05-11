import type { TechStack as TechStackType } from "@/shared/types";

const TechStack = ({ techStack }: { techStack: Array<TechStackType> }) => {
  return (
    <>
      <h1 className="text-base font-bold uppercase text-red md:text-xl">
        Built With
      </h1>
      <div className="grid gap-y-3 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map(({ name, url }: TechStackType, index: number) => (
          <a
            key={index}
            className="text-xl font-bold text-white transition-all duration-300 hover:translate-x-2 hover:text-red"
            href={url}
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
};

export default TechStack;
