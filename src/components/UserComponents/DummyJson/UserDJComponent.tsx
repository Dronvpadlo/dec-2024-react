import React, {FC} from 'react';
import {IUserDJ} from "../../../models/IUserDJ.ts";

type UserPropsType = {
    user: IUserDJ
}
const UserDjComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName}
            </div>
    );
};

export default UserDjComponent;