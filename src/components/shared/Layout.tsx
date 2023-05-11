import { Navbar, Footer } from "@/components/shared";
import React from "react";
import Head from "next/head";
import type { Route } from "@/shared/types";

interface LayoutProps {
  pageName?: string;
  routes?: Array<Route>;
  children: React.ReactNode;
}

const Layout = ({ pageName, children, routes }: LayoutProps) => {
  const title = `Mohamed Sami ${pageName && `| ${pageName}`}`;
  return (
    <div className="grid min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar routes={routes} />
      <main>{children}</main>
      <div className="w-full place-self-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
