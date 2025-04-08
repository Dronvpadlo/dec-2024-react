import React, {useEffect, useState} from 'react';
import {IProduct} from "../models/IProduct.ts";
import {getProducts} from "../services/api.service.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts()
            .then(value => setProducts(value))
        console.log(products)
    }, []);
    return (
        <div>
            {
                products.map((product, index) => <ProductComponent key={index} product={product}/>)
            }
        </div>
    );
};

export default ProductsComponent;