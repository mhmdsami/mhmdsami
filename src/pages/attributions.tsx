import {
  Inspirations,
  AssetAttributions,
  TechStack,
} from "@/components/attributions";
import { Layout } from "@/components/shared";
import { Fade } from "react-awesome-reveal";
import type {
  Config,
  Inspiration as InspirationType,
  AssetAttribution as AssetAttributionType,
  TechStack as TechStackType,
} from "@/shared/types";
import type { GetStaticProps } from "next";

interface AttributionsProps {
  inspirations: Array<InspirationType>;
  assets: Array<AssetAttributionType>;
  techStack: Array<TechStackType>;
}

const attributions = ({
  inspirations,
  assets,
  techStack,
}: AttributionsProps) => {
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

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: AttributionsProps;
}> => {
  const res = await fetch(`${process.env.API_BASE_URL}/config`);
  const data: Config = await res.json();

  const { inspirations, assets, techStack } = data;

  return {
    props: { inspirations, assets, techStack },
  };
};

export default attributions;
