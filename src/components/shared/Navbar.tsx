import { Button } from "@/components/shared";
import { defaultRoutes } from "@/shared/routes";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Link from "next/link";
import type { Route } from "@/shared/types";

const Navbar = ({ routes }: { routes?: Array<Route> }) => {
  const [isNavToggled, setNavToggled] = useState<boolean>(false);

  const toggleNav = () => setNavToggled(!isNavToggled);

  const NavbarElements = ({ routes }: { routes?: Array<Route> }) => {
    routes = routes ?? defaultRoutes;
    return (
      <>
        {routes.map(({ page, href, isSamePage }: Route, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:scale-110"
          >
            {isSamePage ? (
              <ScrollLink to={href} smooth={true} duration={700}>
                {page}
              </ScrollLink>
            ) : (
              <Link href={href}>{page}</Link>
            )}
          </li>
        ))}
      </>
    );
  };

  return (
    <nav className="content-padding text-xl my-[10vh] flex justify-between items-center gap-3">
      <ul className="cursor-pointer flex items-center gap-3 md:gap-5">
        <NavbarElements routes={routes} />
      </ul>
      <Button href="resume.pdf" download="sami-resume.pdf">
        resume
      </Button>
    </nav>
  );
};

export default Navbar;
