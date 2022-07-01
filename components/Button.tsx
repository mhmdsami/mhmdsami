interface ButtonProps {
    buttonContent: string;
    href: string;
}

const Button = ({ buttonContent, href }: ButtonProps) => {
    return(
        <a className="px-4 py-1 rounded-xl bg-red text-black font-bold transition-all duration-300 hover:scale-110" href={href}>
            {buttonContent}
        </a>
    )
}

export default Button;
