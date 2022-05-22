import Head from "next/head";
import React from "react";
import { Navbar, Footer } from "./";

interface LayoutProps {
    pageName: string,
    children: React.ReactNode
}

const Layout = ({pageName, children}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Mohamed Sami | {pageName}</title>
            </Head>
            <div className="mx-48">
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;