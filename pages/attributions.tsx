import {
  Layout,
  Inspirations,
  AssetAttributions,
  TechStack,
} from "../components";
import { Fade } from "react-awesome-reveal";
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

export interface TechStackProps {
  name: string;
  url: string;
}

interface AttributionPageProps {
  inspirations: Array<InspirationProps>;
  assets: Array<AssetAttributionProps>;
  techStack: Array<TechStackProps>;
}

const attributions = ({
  inspirations,
  assets,
  techStack,
}: AttributionPageProps) => {
  return (
    <Layout pageName="Attributions">
      <Fade triggerOnce={true}>
        <div className="grid place-content-center gap-3">
          <Inspirations inspirations={inspirations} />
          <TechStack techStack={techStack} />
          <AssetAttributions assets={assets} />
        </div>
      </Fade>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
  const data = await res.json();

  const { inspirations, assets, techStack } = data;

  return {
    props: { inspirations, assets, techStack },
  };
};

export default attributions;
