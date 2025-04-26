import React, {FC} from 'react';
import {IUser} from "../../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}
const UserJSPlaceholderComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name}
            </div>
    );
};

export default UserJSPlaceholderComponent;