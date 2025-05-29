import React, {FC, useContext} from 'react';
import {IProduct} from "../../../models/IProduct.ts";
import styles from './ProductComponent.module.css'
import {useNavigate} from "react-router";
import {ChangeThemeContext} from "../../../context/ThemeContext.tsx";


type ProductPropType = {
    product: IProduct,
}
const ProductComponent:FC<ProductPropType> = ({product}) => {

    const { theme} = useContext(ChangeThemeContext);

    const navigate = useNavigate();
    const onButtonClickNavigate = () => {
        navigate('/products/' + product.id)
    }

    
    return (
        <div className={styles.section}>
            <div className={styles[theme]}>
                <h4>{product.title}</h4>
                <img className={styles.imageHeight} src={product.thumbnail} alt={product.title}/>
                <p>Price: {product.price} $</p>
                <p>Sale: {product.discountPercentage} %</p>
                <p>Rating: {product.rating}/5</p>
                <p>Stock: {product.stock}/5</p>
                <p>Available Status: {product.availabilityStatus}</p>
                <button onClick={onButtonClickNavigate}>Details</button>
            </div>
        </div>
    );
};

export default ProductComponent;