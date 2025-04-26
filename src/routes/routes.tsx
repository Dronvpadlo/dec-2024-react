import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import PostsComponent from "../components/PostsComponent.tsx";
import CommentsComponent from "../components/CommentsComponent.tsx";
import ProductsComponent from "../components/ProductsComponent.tsx";
import UserJsPlaceholderComponent from "../components/UserJSPlaceholderComponent.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path: "/", element: <App/>, children: [
            {path: "users", element: <UsersPage/>, children: [
                    {path: '/jsonplaceholder', element: <UserJsPlaceholderComponent/>}
                ]},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/> },
            {path: "products", element: <ProductsComponent/> },
        ]}
])