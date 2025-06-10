import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

const UserPage = () => {
    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id) dispatch(userSliceActions.loadUser(id))
    }, [id]);
    return (
        <div>
            {!loadState && <p>...Loading</p>}
            {user && <div key={user.id}>{user.id}. {user.name}</div>}
        </div>
    );
};

export default UserPage;