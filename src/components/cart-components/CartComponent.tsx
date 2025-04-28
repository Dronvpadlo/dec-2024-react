import React, {FC} from 'react';
import {ICart} from "../../models/ICart.ts";

type CartPropsType = {
    cart: ICart
}
const CartComponent:FC<CartPropsType> = ({cart}) => {
    return (
        <div>
            ID: {cart.id}. Cart Total: {cart.total}
        </div>
    );
};

export default CartComponent;