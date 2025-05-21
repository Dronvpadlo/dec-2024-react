import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState()
    console.log('users')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);
    return (
        <div>
            Users Component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;