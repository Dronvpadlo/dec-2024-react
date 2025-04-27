import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent.tsx";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>("/users")
            .then(value => setUsers(value.users))
    }, []);
    return (
        <div>
            {
                users.map((user, index) => <UserComponent user={user} key={index}/>)
            }

        </div>
    );
};

export default UsersComponent;