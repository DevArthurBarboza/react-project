// import Product from "../../../../types/Product";

import Product from "@/types/Product";

import "@/styles/components/product/product_cart.scss";
import SeeMoreLink from "./Item/SeeMoreLink";

type Props = {
    product: Product;
    showSeeMoreLink?: boolean; // Made optional by adding "?"
};

export default function Item({ product, showSeeMoreLink = false }: Props) {

    return (  
        <div className="product-card">
            {renderProductImg(product)}

            <div className="product-data">

                <span className="stock-status">
                    <em>
                        {product.inStock ? 'Em Estoque' : 'Fora de Estoque'}
                    </em>
                </span>

                <span className="product-name">
                    {product.name}
                </span>
                <span className="product-price">
                    {product.price}
                </span>
            </div>

            {showSeeMoreLink ? <SeeMoreLink productUrl={product.url} /> : ''}
        </div>
    );

    function renderProductImg(product : Product) {
        if (!(product instanceof Product)) {
            return '';
        }

        if (!product.image_url || product.image_url == '') {
            return '';
        }

        return (
            <div className="product-image">
                <img src={product.image_url} alt="" />
            </div> 
        )
    }
}   