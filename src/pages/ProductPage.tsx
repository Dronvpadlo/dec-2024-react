import React from 'react';
import {useParams} from "react-router";
import ProductDetailsComponent from "../components/products/ProductDetails/ProductDetailsComponent.tsx";

const ProductPage = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>

            <ProductDetailsComponent/>
        </div>
    );
};

export default ProductPage;