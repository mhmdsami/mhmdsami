import { Layout, Button } from "./";
import Tilt from "react-tilt";

interface ErrorProps {
    pageName: string;
    errorCode: string;
    error: string;
    accessedUrl?: string;
    redirectTo: string;
    buttonContent: string;
}

const Error = ({ pageName, errorCode, error, redirectTo, buttonContent }: ErrorProps) => {
    const routes = [
        { page: "projects", href: "/projects"},
        { page: "blog", href: "/blog" },
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return(
        <Layout pageName={pageName} routes={routes}>
            <div className="grid place-items-center">
                <Tilt>
                    <div className="text-[10rem] text-red font-bold">{errorCode}</div>
                </Tilt>
                <div className="text-2xl mb-5">{error}</div>
                <Button buttonContent={buttonContent} href={redirectTo} />
            </div>
        </Layout>
    )
}

export default Error;
