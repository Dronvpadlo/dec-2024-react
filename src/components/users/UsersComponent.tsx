import React, {useEffect, useState} from 'react';
import {getItems} from "../../services/axiosService.ts";
import {IUserResponse} from "../../models/IUserResponse.ts";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

    const UsersComponent = () => {
        const [users, setUsers] = useState<IUser[]>([])
        useEffect(() => {
            getItems<IUserResponse>('/users')
                .then(value => setUsers(value.users))

        }, []);
        return (
            <div>
                {
                    users.map((user, index) => <UserComponent key={index} user={user}/>)
                }
            </div>
        );
    };

export default UsersComponent;