import React, {useEffect} from 'react';

import {useAppDispatch} from "../redux/hooks/UseAppDispatch.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/UseAppSelector.ts";

const UsersPage = () => {

    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <div>
            {!loadState && <p>...Loading</p>}
            {
                users.map((user) => <div key={user.id}>{user.id}. {user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;