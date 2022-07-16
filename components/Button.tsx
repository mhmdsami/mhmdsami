import React from "react";

interface ButtonProps {
  buttonContent: string;
  href: string;
  download?: string;
}

const Button = ({ buttonContent, href, download }: ButtonProps) => {
  return (
    <a
      className="rounded-xl bg-red px-4 py-1 font-bold text-black transition-all duration-300 hover:scale-110"
      href={href}
      download={download}
    >
      {buttonContent}
    </a>
  );
};

export default Button;
