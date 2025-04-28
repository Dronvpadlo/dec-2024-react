import {createBrowserRouter} from "react-router";
import MainLayout from "../pages/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id/carts', element: <CartsPage/>},
        ]},
])