import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between mx-48 my-20">
            <div className="text-2xl font-bold cursor-pointer">
                <Link href="/">sm-sami</Link>
            </div>
            <div className="text-xl cursor-pointer">
                <ul className="flex gap-5">
                    <li className="hover:underline"><Link href="/blog">blog</Link></li>
                    <li className="hover:underline"><a href="https://github.com/sm-sami">github</a></li>
                    <li className="hover:underline">resume</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;