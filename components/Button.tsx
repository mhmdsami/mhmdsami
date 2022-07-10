interface ButtonProps {
    children: React.ReactNode;
    href: string;
    download?: string;
}

const Button = ({ children, href, download }: ButtonProps) => {
    return(
        <a className="px-4 py-1 rounded-xl bg-red text-black font-bold transition-all duration-300 hover:scale-110" href={href} download={download}>
            {children}
        </a>
    )
}

export default Button;
