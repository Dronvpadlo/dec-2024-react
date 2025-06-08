import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.ts";
import {userSliceAction} from "../redux/slices/userSlice/userSlice.ts";

const UserPage = () => {
    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(userSliceAction.loadUser(id))
    }, [id]);
    return (
        <div>
            {!loadState && <div>Loading, please wait ... </div>}
            {
                user && <div>{user.id}. {user.name}</div>
            }
        </div>
    );
};

export default UserPage;