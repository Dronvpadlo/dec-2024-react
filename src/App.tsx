import './App.css'
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)
  return (
      <>
          <h2>{counter}</h2>
          <button onClick={() => {
              setCounter(counter - 1);
          }}>
              Increment
          </button>

          <button onClick={() => {
              setCounter(counter + counter);
          }}>
              Double
          </button>

          <button onClick={() => {
              setCounter(counter + 1)
          }}>
              Decrement
          </button>

          <button onClick={() => {
              setCounter(prevState => {
                  return prevState/2
              });
          }}>
              Half
          </button>

      </>
  )
}

export default App
