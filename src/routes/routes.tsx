import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import PostsDJComponent from "../components/PostComponents/DummyJson/PostsDJComponent.tsx";
import CommentsJSONPlaceholderComponent from "../components/CommentComponents/JsonPlaceholder/CommentsJSONPlaceholderComponent.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UsersDJComponent from "../components/UserComponents/DummyJson/UsersDJComponent.tsx";
import UsersJSPlaceholderComponent from "../components/UserComponents/JsonPlaceholder/UsersJSPlaceholderComponent.tsx";
import PostsJSPlaceholderComponent from "../components/PostComponents/JsonPlaceholder/PostsJSPlaceholderComponent.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "users",
                element: <UsersPage/>,
                children: [
                    {
                        path: "jsonplaceholder",
                        element: <UsersJSPlaceholderComponent/>
                    },
                    {
                        path: "dummyjson",
                        element: <UsersDJComponent/>
                    }
                ]
            },
            {
                path: "posts",
                element: <PostsPage/>,
                children: [
                    {
                        path: "jsonplaceholder",
                        element: <PostsJSPlaceholderComponent/>
                    },
                    {
                        path: "dummyjson",
                        element: <PostsDJComponent/>
                    }
                ]},
            {
                path: "comments",
                element: <CommentsPage/>,
                children: [
                    {
                        path: "jsonplaceholder",
                        element: <CommentsJSONPlaceholderComponent/>
                    }
                ]
            }
        ]
    }
]);