import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthComponent from "../components/AuthComponent.tsx";
import ProductsComponent from "../components/products/ProductsComponent.tsx";
import CartsComponent from "../components/CartsComponent.tsx";
import RecipesComponent from "../components/RecipesComponent.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import PostsComponent from "../components/PostsComponent.tsx";
import CommentsComponent from "../components/CommentsComponent.tsx";
import TodosComponent from "../components/TodosComponent.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: 'home', element: <HomePage/>},
        {path: 'auth', element: <AuthComponent/>},
        {path: 'products', element: <ProductsComponent/>},
        {path: 'carts', element: <CartsComponent/>},
        {path: 'recipes', element: <RecipesComponent/>},
        {path: 'users', element: <UsersComponent/>},
        {path: 'posts', element: <PostsComponent/>},
        {path: 'comments', element: <CommentsComponent/>},
        {path: 'todos', element: <TodosComponent/>}
    ]
}])