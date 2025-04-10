import {IUser} from "../models/IUser.ts";
let VITE_API_USERS_URL;
const getUsers = async ():Promise<IUser[]> =>{

    return await fetch(VITE_API_USERS_URL+ '/users')
        .then(value => value.json())
}

export {
    getUsers
}