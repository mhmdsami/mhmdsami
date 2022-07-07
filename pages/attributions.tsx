import { Layout, Inspirations, AssetAttributions } from "../components";
import type { GetServerSideProps } from "next";

export interface InspirationProps {
    name: string;
    github: string;
    portfolio: string;
}

export interface AssetAttributionProps {
    name: string;
    assetUrl: string;
    contributorName: string;
    contributorUrl: string;
}

interface AttributionPageProps {
    inspirations: Array<InspirationProps>;
    assets: Array<AssetAttributionProps>
}

const attributions = ({ inspirations, assets }: AttributionPageProps) => {
    return (
        <Layout pageName="Attributions">
            <div className="grid gap-3 place-content-center">
                <Inspirations inspirations={inspirations} />
                <AssetAttributions assets={assets} />
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
    const data = await res.json();

    const { inspirations, assets } = data;

    return {
        props: { inspirations, assets }
    };
}

export default attributions;
