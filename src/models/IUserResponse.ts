import {IUser} from "./IUser.ts";

export interface IUserResponse {
    limit: number,
    users: IUser[],
    skip: number,
    total: number
}