import React from 'react';
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            Main Page
            <Outlet/>
        </div>
    );
};

export default MainLayout;