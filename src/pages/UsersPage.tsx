import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store/Store.tsx";
import {userActions} from "../redux/slices/userSlice.ts";
import {IUser} from "../models/IUser.ts";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            {users.map((user: IUser) => <div key={user.id}>{user.username}</div>)}
        </div>
    );
};

export default UsersPage;