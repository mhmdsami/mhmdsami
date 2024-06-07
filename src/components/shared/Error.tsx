import { Layout, Button } from "@/components/shared";

interface ErrorProps {
  pageName: string;
  errorCode: string;
  error: string;
  accessedUrl?: string;
  redirectTo: string;
  buttonContent: string;
}

const Error = ({
  pageName,
  errorCode,
  error,
  redirectTo,
  accessedUrl,
  buttonContent,
}: ErrorProps) => {
  return (
    <Layout pageName={pageName}>
      <div className="grid place-items-center">
          <div className="text-[10rem] font-bold text-red">{errorCode}</div>
        <div className="mb-5 text-2xl">
          {error}&nbsp;
          {accessedUrl && (
            <span className="rounded-xl bg-red px-2 py-0.5 font-medium text-black-dark">
              {accessedUrl}
            </span>
          )}
        </div>
        <Button href={redirectTo}>{buttonContent}</Button>
      </div>
    </Layout>
  );
};

export default Error;
