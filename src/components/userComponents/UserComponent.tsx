import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps ={
    user: IUser
}

const UserComponent:FC<UserTypeProps> = ({user}) => {
    const navigate = useNavigate();
    const oneClickHandler = () => {
        navigate('posts/' + user.id, {state: user})
    }
    return (
        <div>
            <Link to={'details'} state={user}>{user.id}. {user.username}</Link> <button onClick={oneClickHandler}>Details</button>
        </div>
    );
};

export default UserComponent;