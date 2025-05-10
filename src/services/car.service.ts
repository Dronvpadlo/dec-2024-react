import {ICar} from "../models/ICar.ts";
import axios from "axios";



const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1"
})
const getCars = async ():Promise<ICar[]> => {
    const cars = await axiosInstance.get<ICar[]>('/cars');
    return cars.data;
}

export {
    getCars
}