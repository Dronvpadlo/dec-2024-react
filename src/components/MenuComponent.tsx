import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/users'}>Users</Link></p>
            <p><Link to={'/user/1'}>User</Link></p>
            <p><Link to={'/posts'}>Pasts</Link></p>

        </div>
    );
};

export default MenuComponent;