import Link from "next/link";
import {useState} from "react";


const Navbar = () => {
    const [isNavToggled, setNavToggled] = useState<boolean>(false)

    const toggleNav = () => setNavToggled(!isNavToggled);

    const NavbarElements = () => {
        const navLinks = [
            { page: "skills", href: "/#skills" },
            { page: "projects", href: "/projects"},
            { page: "blog", href: "/blog" },
            { page: "github", href: "https://github.com/sm-sami" },
            { page: "resume", href: "#" }
        ]

        return (
            <>
                {navLinks.map(({ page, href }, index) => (
                    <li key={index} className="hover:underline"><Link href={href}>{page}</Link></li>
                ))}
            </>
        )
    }

    return (
        <nav className="flex justify-between my-[10vh]">
            <div className="text-2xl font-bold cursor-pointer">
                <Link href="/">sm-sami</Link>
            </div>
            <div className="text-xl cursor-pointer">
                <ul className="flex flex-col gap-3 items-end md:hidden">
                    <button onClick={toggleNav}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                             className="text-3xl cursor-pointer" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </button>
                    {isNavToggled && <NavbarElements />}
                </ul>
                <ul className="hidden md:flex gap-5">
                    <NavbarElements />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;