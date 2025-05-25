import React, {useContext} from 'react';
import './HomePage.css'
import {ChangeThemeContext} from "../context/ThemeContext.tsx";

const HomePage = () => {

    const {theme} = useContext(ChangeThemeContext)
    return (
        <div className={theme}>
        </div>
    );
};

export default HomePage;