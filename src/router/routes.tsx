import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import React from "react";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'user/1', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
]);