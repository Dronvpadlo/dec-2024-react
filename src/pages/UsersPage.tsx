import React from 'react';
import UsersMenuComponent from "../components/UsersMenuComponent.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <>
            <UsersMenuComponent/>
            <Outlet/>
        </>
    );
};

export default UsersPage;