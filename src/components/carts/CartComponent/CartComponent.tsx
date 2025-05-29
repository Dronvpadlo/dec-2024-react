import React, {FC, useContext} from 'react';
import {ICart} from "../../../models/ICart.ts";
import CartProductsComponent from "./CartProductsComponent.tsx";
import styles from './CartComponent.module.css'
import {ChangeThemeContext} from "../../../context/ThemeContext.tsx";

type CartPropType = {
    cart: ICart
}
const CartComponent:FC<CartPropType> = ({cart}) => {

    const {theme} = useContext(ChangeThemeContext)
    return (
        <div className={styles[theme]}>
            <div>
                <ul className={styles.section}>{cart.products.map((product, index) => <li key={index}><CartProductsComponent product={product}/>
                </li>)}</ul>
            </div>
            <div>Total products: {cart.totalProducts}</div>
            <div>Total Quantity: {cart.totalQuantity}</div>
            <div>Total: {cart.total}$</div>
        </div>
    );
};

export default CartComponent;