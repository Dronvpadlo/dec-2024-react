import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: "/home", element: <HomePage/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                path: '/auth/users', element: <AuthResourcesPage/>
            }
        ]
    }
])