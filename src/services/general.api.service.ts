import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = "https://dummyjson.com"

export const getAll = async <T,> (endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(response => response.json());
}

export const getCarts = async (id):Promise<ICartResponseModel> => {
    return await fetch('https://dummyjson.com/carts/user/' + id)
        .then(res => res.json())
}