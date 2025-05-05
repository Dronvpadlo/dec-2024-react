import {userUrl} from "../consts/urls.ts";
import {IUser} from "../models/IModel.ts";

const getUsers = async ():Promise<IUser[]> => {
    const response = await fetch(userUrl)
    const items = await response.json()
    return items.users
}

export {
    getUsers
}