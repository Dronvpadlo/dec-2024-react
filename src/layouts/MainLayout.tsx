import React from 'react';
import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import UsersComponent from "../components/user-component/UsersComponent.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <UsersComponent/>
            <PaginationComponent/>
            </div>
    );
};

export default MainLayout;