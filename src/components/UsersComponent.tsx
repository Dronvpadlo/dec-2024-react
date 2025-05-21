import React, {useCallback, useEffect, useMemo, useState} from 'react';
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState()

    const arr: number[] = useMemo(() => {
        return [1,5,22,4];
    },[]);


    const foo = useCallback(() => {
        console.log('callback')
    }, []);

    console.log('users')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            Users Component
            <UserComponent foo={foo} arr={arr} />
        </div>
    );
};

export default UsersComponent;