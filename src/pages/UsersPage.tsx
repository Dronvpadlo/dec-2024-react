
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {userSliceAction} from "../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/UseAppSelector.ts";

const UsersPage = () => {


    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, []);
    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;