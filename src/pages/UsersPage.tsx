import React, {useEffect} from 'react';
import {useAppSelector,} from "../main.tsx";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

const UsersPage = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <div>
            {
                users.map((user) => <div>{user.id}. {user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;