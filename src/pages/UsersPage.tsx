import React from 'react';
import UsersComponent from "../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComponent/>

            </div>
    );
};

export default UsersPage;