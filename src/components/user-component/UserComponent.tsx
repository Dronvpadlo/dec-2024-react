import React, {FC} from 'react';
import {IUser} from "../../models/IModel.ts";

type UserPropsType = {
    user: IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. Name: {user.firstName} {user.lastName} <br/>
            State: {user.address.state}, City: {user.address.city}
            <hr/>

            </div>
    );
};

export default UserComponent;