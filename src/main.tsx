import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import UsersMenuComponent from "./components/UsersMenuComponent.tsx";
import PostsComponent from "./components/PostsComponent.tsx";
import CommentsComponent from "./components/CommentsComponent.tsx";
import ProductsComponent from "./components/ProductsComponent.tsx";
import UserJsPlaceholderComponent from "./components/UserJSPlaceholderComponent.tsx";
import UsersDJComponent from "./components/UsersDJComponent.tsx";

const routes = createBrowserRouter([
    {path: "/", element: <App/>, children: [
            {path: "users", element: <UsersMenuComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/> },
            {path: "products", element: <ProductsComponent/> },
            {path: "users/jsonplaceholder", element: <UserJsPlaceholderComponent/>},
            {path: "users/dummyjson", element: <UsersDJComponent/>}
        ]}
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
