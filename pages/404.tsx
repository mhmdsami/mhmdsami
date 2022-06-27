import { Error } from "../components";
import type { GetStaticProps, GetStaticPropsContext } from "next";

const custom404 = () => {
    return (
        <Error pageName="Page Not Found"
               errorCode="404"
               error="Page Not Found"
               redirectTo="/"
               buttonContent="Take me back home"
        />
    )
}

export default custom404;
