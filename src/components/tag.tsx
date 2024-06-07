import { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-min w-min rounded-md bg-red px-2 font-medium text-black-dark transition-all duration-300 hover:-translate-y-1">
      {children}
    </div>
  );
};

export default Tag;
