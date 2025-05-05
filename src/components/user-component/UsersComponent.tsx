import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent.tsx";
import {IUser} from "../../models/IModel.ts";
import {getUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams({page: '1'})
    const currentPage = query.get('page') || '1'
    useEffect(() => {
        getUsers(currentPage)
            .then(value => setUsers(value))
    }, [query]);
    return (
        <div>
            {
                users.map((user, index) => <UserComponent key={index} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;