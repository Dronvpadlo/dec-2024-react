import React from 'react';
import MenuComponent from "../components/MenuComponent.tsx";
import {Outlet} from "react-router";

const MainPage = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
            </div>
    );
};

export default MainPage;