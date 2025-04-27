import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";


type UserPropsType = {
    user: IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;