import { getUrl } from "../../../../../utils/url"

type Props = {
    productUrl?: string;
}

export default function SeeMoreLink({productUrl} : Props) {

    return (
        productUrl && productUrl != "" ? <a href={getUrl(productUrl)}> Ver Mais </a> : ''
    )
}