import React from 'react';
import useFetch from "../hooks/useFetch.tsx";
import {IProduct} from "../models/IProduct.ts";
import {baseUrl} from "../urls/urls.ts";

const ProductsComponent = () => {

    const products = useFetch<IProduct>(baseUrl + '/products')
    console.log(products)
    return (
        <div>
            {
                products.map((product,  index) => <div key={index}>{product.id}. {product.title}</div>)
            }
        </div>
    );
};

export default ProductsComponent;