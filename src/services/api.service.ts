import axios from "axios";
import {ILogin} from "../models/ILogin.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IUser} from "../models/IUser.ts";
import {IUsersResponseModelType} from "../models/IUsersResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokensPair} from "../models/ITokensPair.ts";

const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});



axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = "Bearer " + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

export const login = async ({username, password, expiresInMins}:ILogin):Promise<IUserWithTokens> => {
    const loginData = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(loginData.data)
    localStorage.setItem('user', JSON.stringify(loginData.data))
    return loginData.data;
}

export const getAuthResponse = async ():Promise<IUser[]> => {
    const {data: {users}} = await axiosInstance.get<IUsersResponseModelType>('/users')
    return users;
}

export const refresh = async ():Promise<ITokensPair> => {
    const iUserWithToken = await retriveLocalStorage<IUserWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokensPair>('/refresh', {refreshToken: iUserWithToken.refreshToken, expiresInMin: 1});
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken));
}