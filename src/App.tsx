import './App.css'
import {useEffect} from "react";
import {getUsers, postUser} from "./services/api.service.ts";

function App() {
  useEffect(() => {
    getUsers().then(value => console.log(value))
    postUser({id: 1, name: 'Arthur', email: 'Morgan@dgsf.com'}).then(value => console.log(value))
  }, []);

  return (
    <>

    </>
  )
}

export default App
