import {IUser} from "../models/IUser.ts";

const getUsers = async ():Promise<IUser[]> =>{
    return await fetch(import.meta.env.VITE_API_JPURL)
        .then(value => value.json())
}

const getUser = async (id: string):Promise<IUser> =>{
    return await fetch(import.meta.env.VITE_API_JPURL + '/' + id)
        .then(value => value.json())
}

export {
    getUsers,
    getUser
}