import {IProduct} from "./IProduct.ts";

export interface ICartsResponse {
    limit: number,
    carts: IProduct[],
    skip: number,
    total: number
}