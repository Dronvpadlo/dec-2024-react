import React, {useState} from 'react';
import './MainLayout.css'
import {ChangeThemeContext} from "../context/ThemeContext.tsx";
import HomePage from "../pages/HomePage.tsx";

const MainLayout = () => {

    const [themeColor, setThemeColor] = useState<string>('night')
    return (
        <ChangeThemeContext.Provider value={{
            theme: themeColor,
            changeTheme: (theme: string) => {
                setThemeColor(theme)
            }
        }}>
        <div>
            <HomePage/>
        </div>
        </ChangeThemeContext.Provider>
    );
};

export default MainLayout;