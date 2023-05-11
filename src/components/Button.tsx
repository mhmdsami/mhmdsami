import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  download?: string;
}

const Button = ({ children, href, download }: ButtonProps) => {
  return (
    <a
      className="rounded-xl bg-red px-4 py-1 font-bold text-black transition-all duration-300 hover:scale-110"
      href={href}
      download={download}
    >
      {children}
    </a>
  );
};

export default Button;
