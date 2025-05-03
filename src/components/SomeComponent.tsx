import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router";
import {IData, IReqResIn} from "../models/IReqResIn.ts";
import {getUsers} from "../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";

const SomeComponent = () => {
    const [query, setQuery] = useSearchParams();
    const page = query.get('page')
    const [response, setResponse] = useState<IData[]>([])
    useEffect(() => {
        const page = query.get('page')
       getUsers( page || '')
            .then(value => {
                setResponse(value.data)
            })
    }, [page]);
    return (
        <div>
            {
                response.map((item, index) => <UserComponent key={index} user={item}/>)
            }
        </div>
    );
};

export default SomeComponent;