import { Layout, Hero, Skills, FeaturedProjects } from "./";

const Landing = () => {
    return (
        <Layout pageName="Home">
            <Hero />
            <Skills />
            <FeaturedProjects />
        </Layout>
    )
}

export default Landing;