import React from 'react';
import {Outlet} from "react-router";
import MenuComponent from "../components/MenuComponent.tsx";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className={'section'}>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;