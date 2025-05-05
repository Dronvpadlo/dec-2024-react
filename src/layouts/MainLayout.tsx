import React from 'react';
import MenuComponent from "../components/MenuComponent.tsx";
import UsersComponent from "../components/UserComponent/UsersComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <UsersComponent/>
            </div>
    );
};

export default MainLayout;