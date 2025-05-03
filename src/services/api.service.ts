import {IReqResIn} from "../models/IReqResIn.ts";

const getUsers = async (page: string):Promise<IReqResIn> => {
    return await  fetch(`https://reqres.in/api/users?page=` + page)
        .then(value => value.json())
}
export {getUsers}