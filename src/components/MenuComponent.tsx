import React, {useContext} from 'react';
import {Link} from "react-router";
import {ChangeThemeContext} from "../context/ThemeContext.tsx";
import styles from './MenuComponent.module.css';

const MenuComponent = () => {
    const { theme, changeTheme } = useContext(ChangeThemeContext);

    const changeThemeHandler = () => {
        changeTheme(theme === 'day' ? 'night' : 'day');
    };

    return (
        <div className={styles[theme]}>
            <div><Link to="/" className={styles.links}>Home</Link></div>
            <div><Link to="/auth" className={styles.links}>Auth</Link></div>
            <div><Link to="/products" className={styles.links}>Products</Link></div>
            <div><Link to="/carts" className={styles.links}>Carts</Link></div>
            <div><Link to="/recipes" className={styles.links}>Recipes</Link></div>
            <div><Link to="/users" className={styles.links}>Users</Link></div>
            <div><Link to="/posts" className={styles.links}>Posts</Link></div>
            <div><Link to="/comments" className={styles.links}>Comments</Link></div>
            <div><Link to="/todos" className={styles.links}>Todos</Link></div>
            <div><button onClick={changeThemeHandler}>Change Theme</button></div>
        </div>
    );
};

export default MenuComponent;