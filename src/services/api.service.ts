import {IProduct} from "../models/IProduct.ts";

const getProducts = async ():Promise<IProduct[]>=>
{
    const response = await fetch('https://dummyjson.com/products');
    const items = await response.json()
    return items.products;
}
export {
    getProducts
}