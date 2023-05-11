import { Layout } from "@/components";
import { blogPageRoutes } from "@/constants";
import type { NextPage } from "next";

const blog: NextPage = () => {
  return (
    <Layout pageName="Blog" routes={blogPageRoutes}>
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-bold">Coming Soon 👀</div>
        <div>
          For updates{" "}
          <a
            href="https://github.com/sm-sami/blog"
            className="cursor-pointer rounded-md bg-white px-1 py-0.5 text-black"
          >
            ⭐ Star
          </a>{" "}
          the repo on GitHub
        </div>
        <div>
          View the latest deployment{" "}
          <a
            href="https://blog-sm-sami.vercel.app/"
            className="cursor-pointer font-bold hover:underline"
          >
            here
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default blog;
