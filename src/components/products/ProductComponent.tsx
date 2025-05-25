import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

type ProductPropType = {
    product: IProduct
}
const ProductComponent:FC<ProductPropType> = ({product}) => {
    return (
        <div>
            <h4>Id: {product.id}. {product.title}</h4>
            <p>{product.weight}</p>
        </div>
    );
};

export default ProductComponent;