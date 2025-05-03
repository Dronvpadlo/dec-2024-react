import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import SomeComponent from "../components/SomeComponent.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <App/>, children: [
        {path: '/mails', element: <SomeComponent/>}
    ]
}
])