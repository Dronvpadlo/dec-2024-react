import {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.services.tsx";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map((user, index) => <UserComponent key={index} user={user}/>)
            }
            usersComponent
        </div>
    );
};

export default UsersComponent;