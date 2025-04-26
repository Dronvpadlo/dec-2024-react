import React from 'react';
import {Outlet} from "react-router";
import JSONPlaceholderComponent from "../components/JSONPlaceholderComponent.tsx";
import DummyJSONComponent from "../components/DummyJSONComponent.tsx";

const CommentsPage = () => {
    return (
        <div>
            Comments Page:
            <ul>
                <JSONPlaceholderComponent/>
                <DummyJSONComponent/>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;