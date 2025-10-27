import {useState} from 'react'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(prevCounter => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(ounter => ounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = ()=>{
      setCounter(counter - 1)
  }

  return ( 
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Increase Val</button>

      <button
      onClick={removeValue}
      >Decrease Val</button>
    </>
  )
}

export default App
