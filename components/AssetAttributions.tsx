import type { AssetAttributionProps } from "../pages/attributions";

interface AssetAttributionComponentProps {
    assets: Array<AssetAttributionProps>;
}

const AssetAttributions = ({ assets }: AssetAttributionComponentProps) => {
    return (
        <>
            <h1 className="text-base md:text-xl font-bold uppercase text-red">Asset Attribution</h1>
            {assets.map(({ name, assetUrl, contributorName, contributorUrl }: AssetAttributionProps, index: number) => (
                <div key={index} className="text-lg">
                    <a href={assetUrl} target="_blank" className="font-bold hover:underline" rel="noreferrer">{name}</a> by <a href={contributorUrl} target="_blank" className="font-bold hover:underline" rel="noreferrer">{contributorName}</a>
                </div>
            ))}
        </>
    )
}

export default AssetAttributions;
