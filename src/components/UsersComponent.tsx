import {useEffect, useState} from 'react';
import {IUser} from "../models/IUser.ts";
import {getAuthResponse} from "../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAuthResponse().then(items => {
            console.log(items);
            setUsers(items)
        })
    }, []);
    return (
        <div>
            {
                users.map((user, index) => {
                    <UserComponent key={index} user={user}/>
                })
            }
        </div>
    );
};

export default UsersComponent;