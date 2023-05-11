import React from "react";

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <div className="h-min w-min rounded-lg bg-red px-2 font-medium text-black-dark transition-all duration-300 hover:-translate-y-1">
      {children}
    </div>
  );
};

export default Tag;
