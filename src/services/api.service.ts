import {userUrl} from "../consts/urls.ts";
import {IUser} from "../models/IModel.ts";

const getUsers = async (page: string):Promise<IUser[]> => {
    const limit = 30;
    const skip = limit *(+page) - limit
    const response = await fetch(userUrl + '?skip=' + skip)
    const items = await response.json()
    return items.users
}

export {
    getUsers
}