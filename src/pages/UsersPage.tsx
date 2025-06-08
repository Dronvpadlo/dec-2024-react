import React, {useEffect} from "react";
import {userSliceAction} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.ts";

const UsersPage = () => {


    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>Loading, please wait ... </div>}
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;