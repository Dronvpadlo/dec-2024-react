import './App.css'
import {coursesAndDurationArray} from "./materials/arrays-2.ts";
import TitleComponent from "./components/TitleComponent.tsx";

function App() {


  return (
    <>
        {
          coursesAndDurationArray.map((course, index) => (<TitleComponent key={index} course={course}/>
            ))

        }
    </>
  )
}

export default App
