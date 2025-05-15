import {IProduct} from "./IProducts.ts";

export type IProductResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}