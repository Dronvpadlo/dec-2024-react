import React, {useContext, useEffect, useState} from 'react';
import {getItems} from "../../services/axiosService.ts";
import {IUserResponse} from "../../models/IUserResponse.ts";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent/UserComponent.tsx";
import styles from './UsersComponent.module.css'
import {ChangeThemeContext} from "../../context/ThemeContext.tsx";
import {useSearchParams} from "react-router";

const UsersComponent = () => {

        const {theme} = useContext(ChangeThemeContext);
        const [users, setUsers] = useState<IUser[]>([])
        const [query] = useSearchParams();
        useEffect(() => {
            const page = +query.get('page')
            const limit = page*30-30
            getItems<IUserResponse>('/users?skip=' + limit.toString())
                .then(value => setUsers(value.users))
            console.log(users)
        }, [query]);
        return (
            <div className={styles[theme]}>
                {
                    users.map((user, index) => <UserComponent key={index} user={user}/>)
                }
            </div>
        );
    }

export default UsersComponent;