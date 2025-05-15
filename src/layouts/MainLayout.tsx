import React from 'react';
import {Outlet} from "react-router";
import MenuComponent from "../components/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;