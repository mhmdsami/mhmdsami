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

const Error = ({ pageName, errorCode, error, redirectTo, accessedUrl, buttonContent }: ErrorProps) => {
    return(
        <Layout pageName={pageName}>
            <div className="grid place-items-center">
                <Tilt>
                    <div className="text-[10rem] text-red font-bold">{errorCode}</div>
                </Tilt>
                <div className="text-2xl mb-5">
                    {error}&nbsp;
                    {accessedUrl && <span className="bg-red text-black-dark font-medium px-2 py-0.5 rounded-xl">{accessedUrl}</span>}
                </div>
                <Button buttonContent={buttonContent} href={redirectTo} />
            </div>
        </Layout>
    )
}

export default Error;
