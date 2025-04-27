import {createBrowserRouter} from "react-router";
import MainLayout from "../Pages/MainLayout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";

export const routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>}
        ]}
])