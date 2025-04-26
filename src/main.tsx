import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import UsersComponent from "./Components/UsersComponent.tsx";
import PostsComponent from "./Components/PostsComponent.tsx";
import CommentsComponent from "./Components/CommentsComponent.tsx";
import ProductsComponent from "./Components/ProductsComponent.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route path={"/users"} element={<UsersComponent/>}/>
                <Route path={"/posts"} element={<PostsComponent/>}/>
                <Route path={"/comments"} element={<CommentsComponent/>}/>
                <Route path={"/products"} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
