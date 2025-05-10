import axios from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": 'application/json'}
});

export const getUsers = async ():Promise<IUser[]> => {
    const response = await axiosInstance.get<IUser[]>('/users')
    return response.data;
}
export const postUser = async (user: IUser) => {
    const request = await axiosInstance.post<IUser>('/users', user)
    return request.data
}

axiosInstance.interceptors.request.use((request) => {
    console.log(request)
    request.headers.set('Vpadlo', 'Prod')
    return request
})

axiosInstance.interceptors.response.use((response) => {
    console.log(response)
    return response
})
