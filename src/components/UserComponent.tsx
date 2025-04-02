import * as React from "react";
import {FC} from "react";
import {IUser} from "../models/IUser.ts";

type MyComponentPropType = {
    user: IUser
}

const UserComponent: FC<MyComponentPropType> = ({user}) => {
    return(
        <div>{user.id}. {user.name} <br/>
            Mail: {user.email} <br/>
            Phone: {user.phone}
        </div>
    )
}


export default UserComponent;