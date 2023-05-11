import { Error } from "@/components/shared";

const custom404 = () => {
  return (
    <Error
      pageName="Page Not Found"
      errorCode="404"
      error="Page Not Found"
      redirectTo="/"
      buttonContent="take me back home"
    />
  );
};

export default custom404;
