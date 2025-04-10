import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserTypeProps ={
    user: IUser
}

const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {user.username}
            UserComponent
        </div>
    );
};

export default UserComponent;