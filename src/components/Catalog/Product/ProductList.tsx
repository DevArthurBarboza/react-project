import ProductCard from "./ProductList/Item";
import type Product from "../../../types/Product";

type Props = {
    products : Product[]
}

export default function ProductList({products} : Props) {

    return (
        <>
            {products.map((product : Product) => {
                return (<ProductCard key={product.id} product={product} showSeeMoreLink={true}/>)
            })}
        </>
    );
}