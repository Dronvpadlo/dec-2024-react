import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, RouterProvider} from "react-router";

const routes = BrowserRouter

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
