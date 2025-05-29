import React, {useContext, useEffect, useState} from 'react';
import {IProduct} from "../../../models/IProduct.ts";
import {Link, useParams} from "react-router";
import {getItemById} from "../../../services/axiosService.ts";
import {ChangeThemeContext} from "../../../context/ThemeContext.tsx";
import styles from './ProductDetailsComponent.module.css'


const ProductDetailsComponent = () => {

    const {theme} = useContext(ChangeThemeContext)
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState<IProduct | null>(null)
    useEffect(() => {
        if(id){
            getItemById<IProduct>('/products', id)
                .then(value => setProductDetails(value))
        }

    }, [id]);

    return (
        <div className={styles[theme]}>
            <div className={styles.margin}><Link className={styles.links} to={'/products'}>Back</Link></div>

                {productDetails ? (
                    <>
                        <h4>Id: {productDetails.id}. {productDetails.title}</h4>
                        <div className={styles.productCard}>
                            <div className={styles.width}>
                                {productDetails.images.map((image, index) => (
                                    <img className={styles.width} key={index} src={image} alt={productDetails.title}/>
                                ))}
                            </div>
                            <div className={styles.width}><p>Description: {productDetails.description}</p>
                                <p>Category: {productDetails.category}</p>
                                <p>Price: {productDetails.price} $</p>
                                <p>Sale: {productDetails.discountPercentage} %</p>
                                <p>Rating: {productDetails.rating}/5</p>
                                <p>Stock: {productDetails.stock}/5</p>
                                <ul>
                                    {productDetails.tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>

                                <p>Brand: {productDetails.brand}</p>
                                <p>SKU: {productDetails.sku}</p>
                                <p>Weight: {productDetails.weight}</p>
                                <p>Dimensions:
                                    Width: {productDetails.dimensions.width}, Height: {productDetails.dimensions.height},
                                    Depth: {productDetails.dimensions.depth}</p>
                                <p>Warranty information: {productDetails.warrantyInformation}</p>
                                <p>Shipping information: {productDetails.shippingInformation}</p>
                                <p>Available Status: {productDetails.availabilityStatus}</p>
                                <p>Weight: {productDetails.weight}</p></div>
                        </div>

                    </>
                ) : (
                    <p>Завантаження продукту...</p>
                )}

        </div>
    );
};

export default ProductDetailsComponent;