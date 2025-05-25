import React, {useState} from 'react';
import {Outlet} from "react-router";
import MenuComponent from "../components/MenuComponent.tsx";
import './MainLayout.css'
import {ChangeThemeContext, ThemeContext} from "../context/ThemeContext.tsx";

const MainLayout = () => {

    const [themeColor, setThemeColor] = useState<string>('day')
    return (
        <div className={'margin'}>
        <ChangeThemeContext.Provider value={{
            theme: themeColor,
            changeTheme: (theme: string) => {
                setThemeColor(theme)
            }
        }}>
        <div className={'section'}>
            <MenuComponent/>
            <Outlet/>
        </div>
        </ChangeThemeContext.Provider>
        </div>
    );
};

export default MainLayout;