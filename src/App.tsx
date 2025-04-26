import './App.css'
import MenuComponent from "./components/MenuComponent.tsx";
import {Outlet} from "react-router";

function App() {


  return (

    <>
      <MenuComponent/>
        App Component
      <Outlet/>
    </>
  )
}

export default App
