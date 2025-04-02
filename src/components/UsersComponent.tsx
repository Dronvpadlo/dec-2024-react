import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response =>{
                setUsers(response)
                console.log("vpadlo")
            })
    }, []);
    return (
        <div>
            {
                users.map((user, index) => <UserComponent user={user} key={index}/>)
            }
        </div>
    );
};

export default UsersComponent;