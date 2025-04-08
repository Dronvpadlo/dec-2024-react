import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [details, setDetails] = useState<IUser | null>(null)
    useEffect(() => {
            getUsers()
            .then(response =>{
                setUsers(response)
                console.log("vpadlo")
            })
    }, []);

    const vpadlo = (details: IUser) => {
        setDetails(details)
    }
    return (
        <div>
            <h4>{details?.id}. {details?.name}</h4><br/>
            <p>Username: {details?.username}. Phone: {details?.phone}. Email: {details?.email}</p>
            {
                users.map((user, index) => <UserComponent vpadlo={vpadlo} user={user} key={index}/>)
            }
        </div>
    );
};

export default UsersComponent;