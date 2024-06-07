import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Mohamed Sami",
  description:
    "I craft memorable web experiences, automate repetitive and boring tasks, fix bugs, and build cool stuff for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
