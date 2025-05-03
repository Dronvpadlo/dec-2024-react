import React, {FC} from 'react';
import {IData} from "../models/IReqResIn.ts";

type UserPropsType = {
    user: IData
}

const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <div>{user.id}. {user.first_name} {user.last_name}</div>
            <img src={user.avatar} alt=""/>
            <p>{user.email}</p>
        </div>
    );
};

export default UserComponent;