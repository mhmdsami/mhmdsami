import Button from "@/components/button";
import Link from "next/link";

const Navbar = () => {
  const routes = [
    { page: "home", href: "/" },
    { page: "projects", href: "/projects" },
    { page: "github", href: "https://github.com/sm-sami" },
  ];

  return (
    <nav className="my-[10vh] flex items-center justify-between gap-3 px-8 text-xl md:px-14 lg:px-20 xl:px-52">
      <ul className="flex cursor-pointer items-center gap-3 md:gap-5">
        {routes.map(({ page, href }, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:scale-110"
          >
            <Link href={href}>{page}</Link>
          </li>
        ))}
      </ul>
      <Button href="resume.pdf" download="resume">
        resume
      </Button>
    </nav>
  );
};

export default Navbar;
