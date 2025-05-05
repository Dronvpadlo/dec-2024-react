import React, {FC} from 'react';
import {IUser} from "../../models/IModel.ts";

type UserPropsType = {
    user: IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}
            <hr/>

            </div>
    );
};

export default UserComponent;