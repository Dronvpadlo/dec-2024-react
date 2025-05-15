import React, {useEffect} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(value =>{
            console.log(value)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts()
                    .then(value => console.log(value)))
        })
    }, []);
    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;