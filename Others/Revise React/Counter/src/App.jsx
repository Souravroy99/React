import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const modifyFunc = (val) => {
    setCounter((count) => count + val) ;
    setCounter((count) => count + val) ;
    setCounter((count) => count + val) ;
  }

/*
  React optimizes performance by batching multiple state updates together in the same event (like a button click).
  Even though you called setCounter() three times, React doesn’t immediately re-render after each one.

   Instead, it:
    1.) Queues all three updates.
    2.) Runs them together in one render pass.
*/


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
