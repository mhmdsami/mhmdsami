import type { NextPage } from "next";
import { Layout } from "../components";
import { NavbarRoute } from "../components/Navbar";

const blog: NextPage = () => {
    const routes: Array<NavbarRoute> = [
        { page: "home", href: "/"},
        { page: "projects", href: "/projects"},
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return (
        <Layout pageName="Blog" routes={routes}>
            <div className="flex flex-col gap-4 items-center">
                <div className="text-4xl font-bold">Coming Soon 👀</div>
                <div>
                    For updates <a href="https://github.com/sm-sami/blog" className="bg-white text-black px-1 py-0.5 rounded-md cursor-pointer">⭐ Star</a> the repo on GitHub
                </div>
                <div>
                    View the latest deployment <a href="https://blog-sm-sami.vercel.app/" className="cursor-pointer font-bold hover:underline">here</a>
                </div>
            </div>
        </Layout>
    )
}

export default blog;