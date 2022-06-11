import Head from "next/head";
import React from "react";
import { Navbar, Footer } from "./";

interface LayoutProps {
    pageName?: string,
    children: React.ReactNode
}

const Layout = ({pageName, children}: LayoutProps) => {
    return (
        <div className="grid min-h-screen">
            <Head>
                <title>Mohamed Sami{pageName ? ` | ${pageName}` : ''}</title>
            </Head>
            <div className="mx-10 md:mx-14 lg:mx-20 xl:mx-48">
                <Navbar />
                <main>{children}</main>
            </div>
            <div className="w-full place-self-end">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;