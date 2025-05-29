import React, {useContext, useEffect, useState} from 'react';
import styles from './CartsComponent.module.css'
import {ChangeThemeContext} from "../../context/ThemeContext.tsx";
import {ICart} from "../../models/ICart.ts";
import {getItems} from "../../services/axiosService.ts";
import CartComponent from "./CartComponent/CartComponent.tsx";
import {useSearchParams} from "react-router";

const CartsComponent = () => {

    const theme = useContext(ChangeThemeContext)
    const [carts, setCarts] = useState<ICart[]>([])
    const [query] = useSearchParams();

    useEffect(() => {
        const page = query.get('page')
        const limit = page*30-30
        getItems('/carts?skip=' + limit.toString())
            .then(value => setCarts(value.carts))
    }, [query]);

    return (
        <div className={styles[theme]}>
            <div className={styles.section}>
            {
                carts.map((cart, index) => <CartComponent key={index} cart={cart}/>)
            }
            </div>
        </div>
    );
};

export default CartsComponent;