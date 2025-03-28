import './App.css'
import {books} from "./data/books.ts";
import MyBook from "./components/MyBook.tsx";

function App() {


  return (
    <>
        {
            books.map((book, index) => (<MyBook key={index} book={book}/>

            ))

        }
    </>
  )
}

export default App
