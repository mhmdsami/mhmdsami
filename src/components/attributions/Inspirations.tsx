import Image from "next/image";
import type { Inspiration as InspirationType } from "@/shared/types";

const Inspirations = ({
  inspirations,
}: {
  inspirations: Array<InspirationType>;
}) => {
  return (
    <>
      <h1 className="text-base font-bold uppercase text-red md:text-xl">
        Inspired By
      </h1>
      <div className="flex flex-col gap-5">
        {inspirations.map(
          ({ name, github, portfolio }: InspirationType, index: number) => (
            <div
              key={index}
              className="flex flex-row justify-between gap-5 md:w-[50vw] md:gap-0 lg:w-[40vw]"
            >
              <a
                className="text-xl font-bold text-white transition-all duration-300 hover:translate-x-2 hover:text-red md:text-2xl"
                href={portfolio}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/icons/light/github.svg"
                    alt="github"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/icons/light/website.svg"
                    alt="portfolio"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Inspirations;
