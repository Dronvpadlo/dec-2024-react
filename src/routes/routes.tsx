import {createBrowserRouter} from "react-router";
import MainPage from "../pages/MainPage.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import PostCarsPage from "../pages/PostCarsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainPage/>, children: [
        {
            path: '/cars', element: <CarsPage/>
        },
        {
            path: '/cars/post', element: <PostCarsPage/>
        }
    ]
}])