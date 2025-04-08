import * as React from "react";
import {FC} from "react";
import {IUser} from "../models/IUser.ts";

type MyComponentPropType = {
    user: IUser;
    vpadlo:(details:IUser) => void
}

const UserComponent: FC<MyComponentPropType> = ({user, vpadlo}) => {
    return(
        <div>{user.id}. {user.name} <br/>
            Mail: {user.email} <br/>
            Phone: {user.phone}
            <button onClick={() => {vpadlo(user)}}>details</button>
        </div>
    )
}


export default UserComponent;