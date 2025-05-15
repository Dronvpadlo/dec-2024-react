import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <Link to={'/home'}>Home</Link>   <Link to={'/login'}>Login</Link>   <Link to={'/auth/users'}>Users</Link>
        </div>
    );
};

export default MenuComponent;