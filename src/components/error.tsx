import Button from "@/components/button";

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
  );
};

export default Error;
