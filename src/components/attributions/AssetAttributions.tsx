import type { AssetAttribution as AssetAttributionType } from "@/shared/types";

const AssetAttributions = ({
  assets,
}: {
  assets: Array<AssetAttributionType>;
}) => {
  return (
    <>
      <h1 className="text-base font-bold uppercase text-red md:text-xl">
        Asset Attribution
      </h1>
      {assets.map(
        (
          {
            name,
            assetUrl,
            contributorName,
            contributorUrl,
          }: AssetAttributionType,
          index: number
        ) => (
          <div key={index} className="text-base md:text-lg">
            <a
              href={assetUrl}
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              {name}
            </a>{" "}
            by{" "}
            <a
              href={contributorUrl}
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              {contributorName}
            </a>
          </div>
        )
      )}
    </>
  );
};

export default AssetAttributions;
