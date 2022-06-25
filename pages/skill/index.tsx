import { Layout, Skills } from "../../components";
import { NavbarRoute } from "../../components/Navbar";
import { Slide } from "react-awesome-reveal";
import { GetServerSideProps } from "next";
import type { SkillSet } from "../api/data";

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
        <Slide triggerOnce={true} direction="down">
            <Layout pageName="Skills" routes={routes}>
               <Skills skillSets={skillSets} />
            </Layout>
        </Slide>
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
