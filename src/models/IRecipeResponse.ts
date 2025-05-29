import {IRecipe} from "./IRecipe.ts";

export interface IProductsResponse {
    limit: number,
    recipes: IRecipe[],
    skip: number,
    total: number
}