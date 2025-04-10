import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserTypeProps ={
    user: IUser
}

const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.username} {user.name} <br/>
            Email: {user.email} <br/>
            Phone: {user.phone}
        </div>
    );
};

export default UserComponent;