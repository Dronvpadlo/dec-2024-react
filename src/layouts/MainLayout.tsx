import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <hr/>

            </ul>
            <Outlet/>
            <hr/>
            <p>VPADLO prod all right reserved 2025</p>
        </div>
    );
};

export default MainLayout;