import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const modifyFunc = (val) => {
    setCounter((count) => count + val) ;
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={() => modifyFunc(+1)}>Add Value</button>
      <button onClick={() => modifyFunc(-1)}>Remove Value</button>
    </>
  )
}

export default App
