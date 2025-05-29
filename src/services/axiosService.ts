import axios from "axios";
import {baseUrl} from "../urls/urls.ts";

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
});
export const getItems = async <T, >(endpoint: string): Promise<T> => {
    const { data } = await axiosInstance.get<T>(endpoint);
    return data;
};

export const getItemById = async <T, >(endpoint: string, id: string): Promise<T> => {
    const {data } = await axiosInstance.get<T>(`${endpoint}/${id}`);
    return data;
}



