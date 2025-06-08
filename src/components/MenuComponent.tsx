import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            Menu
            <p><Link to='/users'>Users</Link></p>
            <p><Link to='/posts'>Posts</Link></p>
            <p><Link to='/comments'>Comments</Link></p>
            <p><Link to='/complex'>Complex</Link></p>
        </div>
    );
};

export default MenuComponent;