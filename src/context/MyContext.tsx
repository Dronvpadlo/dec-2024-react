import {createContext} from "react";
type MyContextType = {
    currentValue: number;
    increment: (obj: number) => void
}
export const init = {
    currentValue: 0,
    increment: (obj) => {
        console.log(obj)}};
export const MyContext = createContext<MyContextType>(init)