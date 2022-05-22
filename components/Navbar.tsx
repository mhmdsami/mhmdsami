import Link from "next/link";

const Navbar = () => {
    const navElements = [
        { page: "blog", href: "/blog" },
        { page: "github", href: "https://github.com/sm-sami" },
        { page: "resume", href: "#" }
    ]

    return (
        <nav className="flex justify-between my-[10vh]">
            <div className="text-2xl font-bold cursor-pointer">
                <Link href="/">sm-sami</Link>
            </div>
            <div className="text-xl cursor-pointer">
                <ul className="flex gap-5">
                    {navElements.map(({ page, href }, index) => (
                        <li key={index} className="hover:underline"><Link href={href}>{page}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;