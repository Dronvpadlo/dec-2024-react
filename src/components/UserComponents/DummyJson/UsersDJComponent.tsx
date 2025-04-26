import React, {useEffect, useState} from 'react';
import {getDJUsers} from "../../../services/api.service.tsx";
import {IUserDJ} from "../../../models/IUserDJ.ts";
import UserDJComponent from "./UserDJComponent.tsx";

const UsersDjComponent = () => {
    const [users, setUsers] = useState<IUserDJ[]>([])
    useEffect(() => {
        getDJUsers()
            .then(value => setUsers(value))
        console.log(users)
    }, []);
    return (
        <div>
            Users:
            {
                users.map((user, index) => <UserDJComponent key={index} user={user}/>)
            }
            </div>
    );
};

export default UsersDjComponent;