import type {NextPage} from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";

const blog: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mohamed Sami | Blog</title>
            </Head>
            <Navbar />
            <div className="flex flex-col gap-4 mt-48 items-center">
                <div className="text-4xl font-bold">Coming Soon 👀</div>
                <div>
                    For updates <a href="https://github.com/sm-sami/blog" className="bg-gray-100 px-1 py-0.5 rounded-md cursor-pointer">⭐ Star</a> the repo on GitHub
                </div>
                <div>
                    View the latest deployment <a href="https://blog-sm-sami.vercel.app/" className="cursor-pointer hover:underline">here</a>
                </div>
            </div>
        </>
    )
}

export default blog;