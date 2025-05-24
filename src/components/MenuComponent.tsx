import React from 'react';
import {Link} from "react-router";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div className={'target'}>
            <div ><Link to={'/'} className={'links'}>Home</Link></div>
            <div><Link to={'/auth'} className={'links'}>Auth</Link></div>
            <div><Link to={'/products'} className={'links'}>Products</Link></div>
            <div><Link to={'/carts'} className={'links'}>Carts</Link></div>
            <div><Link to={'/recipes'} className={'links'}>Recipes</Link></div>
            <div><Link to={'/users'} className={'links'}>Users</Link></div>
            <div><Link to={'/posts'} className={'links'}>Posts</Link></div>
            <div><Link to={'/comments'} className={'links'}>Comments</Link></div>
            <div><Link to={'/todos'} className={'links'}>Todos</Link></div>
            </div>
    );
};

export default MenuComponent;