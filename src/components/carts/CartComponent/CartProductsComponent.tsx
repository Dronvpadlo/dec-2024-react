import React, {FC} from 'react';
import {Products} from "../../../models/ICart.ts";

type CartProductPropType = {
    product: Products
}
const CartProductsComponent:FC<CartProductPropType> = ({product}) => {
    return (
        <div>
            <div>Title: {product.title}</div>
            <img src={product.thumbnail} alt={product.title}/>
            <div>Price: {product.price}$</div>
            <div>Quantity: {product.quantity}</div>
            <div>Discount Percentage: {product.discountPercentage}%</div>
            <div>Discount total: {product.discountedTotal}$</div>
            <div>Total: {product.total}$</div>
        </div>
    );
};

export default CartProductsComponent;