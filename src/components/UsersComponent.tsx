import React, {useCallback, useMemo} from 'react';
import UserComponent from "./UserComponent.tsx";
import {useFetch} from "../hooks/UseFetch.tsx";

const UsersComponent = () => {

    const arr: number[] = useMemo(() => {
        return [1,5,22,4];
    },[]);

    const foo = useCallback(() => {
        console.log('callback')
    }, []);

    const users = useFetch();

    return (
        <div>
            Users Component

            {
                users.map((user, index) => <UserComponent key={index} foo={foo} arr={arr} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;