import {IProduct} from "./IProduct.ts";

export interface IProductsResponse {
    limit: number,
    products: IProduct[],
    skip: number,
    total: number
}