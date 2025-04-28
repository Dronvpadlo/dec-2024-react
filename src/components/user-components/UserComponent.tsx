import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";


type UserPropsType = {
    user: IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate('/users/' + user.id + '/carts')
    }
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName} <br/>
            <button onClick={onButtonClickNavigate}>Info</button>
            <hr/>
        </div>
    );
};

export default UserComponent;