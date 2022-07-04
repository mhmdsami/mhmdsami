interface ButtonProps {
    buttonContent: string;
    href: string;
    download?: string;
}

const Button = ({ buttonContent, href, download }: ButtonProps) => {
    return(
        <a className="px-4 py-1 rounded-xl bg-red text-black font-bold transition-all duration-300 hover:scale-110" href={href} download={download}>
            {buttonContent}
        </a>
    )
}

export default Button;
