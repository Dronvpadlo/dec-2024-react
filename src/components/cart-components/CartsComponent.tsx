import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ICart} from "../../models/ICart.ts";
import {getCarts} from "../../services/general.api.service.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import CartComponent from "./CartComponent.tsx";

const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        // getting carts by user with id 5
        getCarts(id)
            .then(({carts}: ICartResponseModel) => {
                setCarts(carts);
            });
    }, [id]);
    console.log(id)
    return (
        <div>
            {
                carts.map((cart, index) => <CartComponent key={index} cart={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;