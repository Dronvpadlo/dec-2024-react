import React, {FC} from 'react';
import {IProduct} from "../models/IProduct.ts";

type ProductProp = {
    product: IProduct
}
const ProductComponent:FC<ProductProp> = ({product}) => {
    return (
        <div>
            <p>{
                product.brand
            }</p>
            <p>{
                product.category
            }</p>
            </div>
    );
};

export default ProductComponent;