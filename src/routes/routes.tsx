import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthComponent from "../components/AuthComponent.tsx";
import CartsComponent from "../components/carts/CartsComponent.tsx";
import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PostsComponent from "../components/PostsComponent.tsx";
import CommentsComponent from "../components/CommentsComponent.tsx";
import TodosComponent from "../components/TodosComponent.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import ProductPage from "../pages/ProductPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: 'auth', element: <AuthComponent/>},
        {path: 'products', element: <ProductsPage/>},
        {path: 'products/:id', element: <ProductPage/>},
        {path: 'carts', element: <CartsPage/>},
        {path: 'recipes', element: <RecipesPage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsComponent/>},
        {path: 'comments', element: <CommentsComponent/>},
        {path: 'todos', element: <TodosComponent/>}
    ]
}])