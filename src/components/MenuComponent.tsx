import React from 'react';
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <ul>
            <li><Link to={'/cars'}>All Cars</Link></li>
            <li><Link to={'/cars/post'}>Post Cars</Link></li>
        </ul>
    );
};

export default MenuComponent;