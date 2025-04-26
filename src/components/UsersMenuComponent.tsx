import React from 'react';
import {Link, Outlet} from "react-router";

const UsersMenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={"users/jsonplaceholder"}>JS Placeholder</Link></li>
                <li><Link to={"users/dummyjson"}>Dummy</Link></li>
            </ul>
        </div>
    );
};

export default UsersMenuComponent;