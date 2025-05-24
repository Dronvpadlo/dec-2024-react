import React from 'react';
import {useFetch} from "../hooks/UseFetch.tsx";
import {IUser} from "../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            {
                users.map((user, index) => <UserComponent key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;