import React from 'react';
import MenuComponent from "../components/MenuComponent.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;