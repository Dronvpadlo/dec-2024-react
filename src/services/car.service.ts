import {ICar, ICarPost} from "../models/ICar.ts";
import axios from "axios";



const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1"
})
const getCars = async ():Promise<ICar[]> => {
    const response = await axiosInstance.get<ICar[]>('/cars');
    return response.data;
}

const postCar = async (car):Promise<ICarPost> => {
    const request = await axiosInstance.post<ICarPost>('/cars', car)
    return request.data
}

export {
    getCars, postCar
}