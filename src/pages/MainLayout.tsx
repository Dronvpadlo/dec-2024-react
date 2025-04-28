import React from 'react';
import {Outlet} from "react-router";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            Main Page
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;