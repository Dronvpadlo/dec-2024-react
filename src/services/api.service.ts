import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProducts.ts";
import {IProductResponseModelType} from "../models/IProductResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});



axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<void> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens))
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductResponseModelType>('/products');
    return products
}

export const refresh = async () => {
    const IUserWithToken = retriveLocalStorage<IUserWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken:IUserWithToken.refreshToken,
        expiresInMins:1
    });

    IUserWithToken.accessToken = accessToken;
    IUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWithToken))


}