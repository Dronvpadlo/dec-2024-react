import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <Link to={'/users'}>Users</Link>
        </div>
    );
};

export default MenuComponent;