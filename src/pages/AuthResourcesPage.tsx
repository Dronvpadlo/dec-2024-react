import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service.ts";
import {IProduct} from "../models/IProducts.ts";

const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts().then(value =>{
            setProducts(value)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts()
                    .then(value => setProducts(value)))
        })
    }, []);
    return (
        <div>
            {
                products.map((product, index) => <div key={index}>{product.id}. {product.title}</div>
                )
            }
        </div>
    );
};

export default AuthResourcesPage;