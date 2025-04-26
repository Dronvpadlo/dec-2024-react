import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <ul>
           <li><Link to={"/users"}>Users</Link></li>
           <li><Link to={"/posts"}>Posts</Link></li>
           <li><Link to={"/comments"}>Comments</Link></li>
           <li><Link to={"/products"}>Products</Link></li>
        </ul>
    );
};

export default MenuComponent;