import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children: [
            {path: '/home', element: <HomePage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/user', element: <UserPage/>},
        ]
    },
])