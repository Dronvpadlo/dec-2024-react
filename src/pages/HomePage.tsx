import React, {useContext} from 'react';
import './HomePage.css'
import {ChangeThemeContext} from "../context/ThemeContext.tsx";
import MenuComponent from "../components/MenuComponent.tsx";
import {Outlet} from "react-router";

const HomePage = () => {

    const {theme} = useContext(ChangeThemeContext)
    return (
        <div className={theme}>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default HomePage;