import React from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser
    return (
        <div>
            {user.id}. {user.name} {user.username} <br/>
            Email: {user.email}, Phone: {user.phone} <br/>
            Company: {user.company.name} <br/>
            {user.company.bs} {user.company.catchPhrase}
            </div>
    );
};

export default UserDetailsPage;