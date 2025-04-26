import './App.css'
import MenuComponent from "./Components/MenuComponent.tsx";
import {Outlet} from "react-router";

function App() {

  return (
    <>
      <MenuComponent/>
      This is App Component, Your content is below:
        <Outlet/>

    </>
  )
}

export default App
