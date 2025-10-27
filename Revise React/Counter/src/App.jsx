import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


  const addFunc = () => {
    // setCounter((count) => count+1)
    counter = counter + 1 ;
    console.log(counter);
  }
  const removeFunc = () => {
    // setCounter((count) => count-1)
    counter = counter - 1 ;
    console.log(counter);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addFunc}>Add Value</button>
      <button onClick={removeFunc}>Remove Value</button>
    </>
  )
}

export default App
