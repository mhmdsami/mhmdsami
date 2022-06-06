import Head from "next/head";
import React from "react";
import { Navbar, Footer } from "./";

interface LayoutProps {
    pageName?: string,
    children: React.ReactNode
}

const Layout = ({pageName, children}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Mohamed Sami{pageName ? ` | ${pageName}` : ''}</title>
            </Head>
            <div className="mx-10 md:mx-14 lg:mx-20 xl:mx-48">
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;