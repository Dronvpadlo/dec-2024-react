import {createBrowserRouter} from "react-router";
import MainLayout from "../pages/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children:[
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':id/carts', element: <CartsPage/>}
                ]},
            {path: 'posts', element: <PostsPage/>}
        ]},
])