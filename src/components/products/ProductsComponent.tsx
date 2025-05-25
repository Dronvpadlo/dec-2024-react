import React, {useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getItems, getProducts} from "../../services/axiosService.ts";
import ProductComponent from "./ProductComponent.tsx";
import {IProductsResponse} from "../../models/IProductsResponse.ts";

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getItems<IProductsResponse>('/products')
            .then(value => setProducts(value.products))
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