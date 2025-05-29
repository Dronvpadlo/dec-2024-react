import React from 'react';
import ProductsComponent from "../components/products/ProductsComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const ProductsPage = () => {
    return (
        <div>
            <ProductsComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default ProductsPage;