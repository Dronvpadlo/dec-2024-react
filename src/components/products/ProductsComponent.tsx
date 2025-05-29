import React, {useContext, useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getItems} from "../../services/axiosService.ts";
import {IProductsResponse} from "../../models/IProductsResponse.ts";
import {useSearchParams} from "react-router";
import ProductComponent from "./ProductComponent/ProductComponent.tsx";
import styles from './ProductsComponent.module.css'
import {ChangeThemeContext} from "../../context/ThemeContext.tsx";

const ProductsComponent = () => {

    const {theme} = useContext(ChangeThemeContext)
    const [products, setProducts] = useState<IProduct[]>([])
    const [query] = useSearchParams();
    useEffect(() => {
        const page = +query.get('page');
        const limit = page*30-30
        getItems<IProductsResponse>('/products?skip=' + limit.toString())
            .then(value => setProducts(value.products))
    }, [query]);


    return (
        <div className={styles[theme]}>

            {
                products.map((product, index) => <ProductComponent key={index} product={product}/>)
            }
        </div>
    );
};

export default ProductsComponent;