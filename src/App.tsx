import './App.css'
import {coursesArray} from "./materials/arrays-2.ts";
import CourseComponent from "./components/CourseComponent.tsx";

function App() {


  return (
    <>
        {
          coursesArray.map((course, index) => (<CourseComponent key={index} course={course}/>
            ))

        }
    </>
  )
}

export default App
