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
            <Navbar/>
            <main>{children}</main>
            <div className="w-full place-self-end">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;