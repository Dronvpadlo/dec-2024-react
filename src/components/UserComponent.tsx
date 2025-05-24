import React, {FC} from 'react';
import {IUser} from "../models/IUser.ts";

type UserPropType = {
    user: IUser
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            <p>ID: {user.id}. Name: {user.name}</p>
            <p>Username: {user.username}, Address: {user.address.city}</p>
            <hr/>
        </div>
    );
};

export default UserComponent;