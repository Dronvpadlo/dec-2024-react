import {FC, memo} from 'react';
import {IUser} from "../models/IUser.ts";


const UserComponent:FC<{foo:()=> void, arr: number[], user:IUser}> = memo(({arr, user}) => {
    console.log('user')
    console.log(arr)
    return (
        <div>
            {user.id}. {user.username}
        </div>
    );
});

export default UserComponent;