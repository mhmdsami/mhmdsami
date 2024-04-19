import { footerRoutes } from "@/shared/routes";
import Image from "next/image";
import Link from "next/link";

interface FooterRoute {
  page: string;
  href: string;
}

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-y-3 bg-gradient-to-b from-black-dark to-black py-6 text-red">
      <div className="text-xl font-bold">find me on</div>
      <ul className="flex gap-4">
        {footerRoutes.map(({ page, href }: FooterRoute, index: number) => (
          <li
            key={index}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <a href={href}>
              <Image
                src={`/icons/${page}.svg`}
                alt={page}
                width={32}
                height={32}
              />
            </a>
          </li>
        ))}
      </ul>
      <div>
        crafted with{" "}
        <a href="https://nextjs.org/" className="font-bold hover:underline">
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold hover:underline"
        >
          tailwindcss
        </a>
      </div>
    </footer>
  );
};

export default Footer;
