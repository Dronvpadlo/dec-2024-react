import React from 'react';
import CartsComponent from "../components/carts/CartsComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const CartsPage = () => {
    return (
        <div>
            <CartsComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default CartsPage;