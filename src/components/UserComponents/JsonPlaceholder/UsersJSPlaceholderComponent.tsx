import React, {useEffect, useState} from 'react';
import {getJPUsers} from "../../../services/api.service.tsx";
import {IUser} from "../../../models/IUser.ts";
import UserJSPlaceholderComponent from "./UserJSPlaceholderComponent.tsx";

const UsersJSPlaceholderComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getJPUsers()
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            Users:
            {
                users.map((user, index) => <UserJSPlaceholderComponent key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersJSPlaceholderComponent;