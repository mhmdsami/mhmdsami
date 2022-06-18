import Image from "next/image";

const Footer = () => {
    const footerElements = [
        { site: "github" , href: "https://github.com/sm-sami" },
        { site: "linkedin", href: "https://www.linkedin.com/in/sm-sami/" },
        { site: "instagram", href: "https://www.instagram.com/graphicdesigner.js/" }
    ];

    return (
        <footer className="flex flex-col items-center gap-y-3 py-6 bg-white text-red">
            <div className="text-xl font-bold">
                find me on
            </div>
            <ul className="flex gap-4">
                {footerElements.map(({ site, href }, index) => (
                    <li key={index} className="transition-all duration-300 hover:-translate-y-1"><a href={href}><Image src={`/socials/${site}.svg`} alt={site} width={32} height={32}/></a></li>
                ))}
            </ul>
            <div>crafted with <a href="https://nextjs.org/" className="font-bold hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" className="font-bold hover:underline">tailwindcss</a></div>
        </footer>
    )
}

export default Footer;