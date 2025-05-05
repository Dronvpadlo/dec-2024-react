import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent.tsx";
import {IUser} from "../../models/IModel.ts";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then(value => setUsers(value))
        console.log(users)
    }, []);
    return (
        <div>
            {
                users.map((user, index) => <UserComponent key={index} user={user}/>)
            }
            <button onClick={}>prev</button>
            <button>next</button>
        </div>
    );
};

export default UsersComponent;