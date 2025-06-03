import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <Link to={'/home'}>Home</Link> <br/>
            <Link to={'/user'}>User</Link> <br/>
            <Link to={'/users'}>Users</Link> <br/>
        </div>
    );
};

export default MenuComponent;