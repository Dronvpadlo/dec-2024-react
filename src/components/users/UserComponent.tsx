import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};

export default UserComponent;