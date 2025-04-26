import './App.css'
import {Outlet} from "react-router";
import MenuComponent from "./components/MenuComponent.tsx";

function App() {

  return (
    <>
        <MenuComponent/>
      This is App file, your links shows below:
        <Outlet/>
    </>
  )
}

export default App
