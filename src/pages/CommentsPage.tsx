import React from 'react';
import {Outlet} from "react-router";
import JSONPlaceholderComponent from "../components/JSONPlaceholderComponent.tsx";

const CommentsPage = () => {
    return (
        <div>
            Comments Page:
            <ul>
                <JSONPlaceholderComponent/>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;