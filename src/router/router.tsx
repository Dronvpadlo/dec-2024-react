import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import React from "react";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import UserPostsPage from "../pages/UserPostsPage.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: '/users', element: <UsersPage/>, children: [
                    {path: 'posts/:userId', element:<UserPostsPage/>},
                ]},
            {path: '/users/details', element: <UserDetailsPage/>},
            {path: '/posts', element: <PostsPage/>},
        ]
    },
])