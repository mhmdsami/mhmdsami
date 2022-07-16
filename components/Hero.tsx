import { Link } from "react-scroll";

interface HeroProps {
  name: string;
  greeting: string;
  tag: string;
}

const Hero = ({ name, greeting, tag }: HeroProps) => {
  return (
    <div className="content-padding flex min-h-[85vh] flex-col bg-gradient-to-b from-black-dark to-black">
      <main className="my-28 flex flex-col justify-between md:flex-row">
        <div className="text-4xl lg:text-5xl">
          {greeting}!
          <span className="inline-block origin-bottom-right animate-wave select-none">
            👋
          </span>
          <br />
          I&apos;m <span className="font-emphasis text-red">{name}</span>
        </div>
        <div className="flex select-none items-end text-xl text-gray xl:text-2xl">
          {tag}
        </div>
      </main>
      <div className="flex animate-bounce cursor-pointer select-none place-content-center pt-20 text-red">
        <Link to="skills" smooth="true" duration={700}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
