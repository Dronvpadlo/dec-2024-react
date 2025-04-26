import React from 'react';
import JSONPlaceholderComponent from "../components/JSONPlaceholderComponent.tsx";
import {Outlet} from "react-router";
import DummyJSONComponent from "../components/DummyJSONComponent.tsx";

const PostsPage = () => {
    return (
        <div>
            Posts Page:
            <ul>
                <JSONPlaceholderComponent/>
                <DummyJSONComponent/>
            </ul>
            <Outlet/>
        </div>
    );
};

export default PostsPage;