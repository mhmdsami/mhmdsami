import { Navbar, Footer } from "./";
import React from "react";
import Head from "next/head";
import type { NavbarRoute } from "./Navbar";

interface LayoutProps {
  pageName?: string;
  routes?: Array<NavbarRoute>;
  children: React.ReactNode;
}

const Layout = ({ pageName, children, routes }: LayoutProps) => {
  return (
    <div className="grid min-h-screen">
      <Head>
        <title>Mohamed Sami{pageName && ` | ${pageName}`}</title>
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
