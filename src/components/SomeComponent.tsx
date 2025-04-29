import React, {useEffect} from 'react';
import {useSearchParams} from "react-router";

const SomeComponent = () => {
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const page = query.get('page');
        fetch('https://reqres.in/api/users?page=' + page)
            .then(value => value.json())
            .then(value => {
                console.log(value)
            })
    }, [query]);
    return (
        <div>
            
            </div>
    );
};

export default SomeComponent;