import './App.css'
import {coursesTitleArray} from "./materials/arrays-2.ts";
import TitleComponent from "./components/TitleComponent.tsx";

function App() {


  return (
    <>
        {
            coursesTitleArray.map((title, index) => (<TitleComponent key={index} book={title}/>
            ))

        }
    </>
  )
}

export default App
