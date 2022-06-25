import { Layout, Skills } from "../../components";
import type { SkillSet } from "../api/data";
import { GetServerSideProps } from "next";
import { NavbarRoute } from "../../components/Navbar";

interface SkillPageProps {
    skillSets: Array<SkillSet>;
}

const skill = ({ skillSets }: SkillPageProps) => {
    const routes: Array<NavbarRoute> = [
        { page: "projects", href: "/projects"},
        { page: "blog", href: "/blog" },
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return (
       <Layout pageName="Skills" routes={routes}>
           <Skills skillSets={skillSets} />
       </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
    const data = await res.json();

    const { skillSets } = data;

    return {
        props: { skillSets }
    };
}

export default skill;
