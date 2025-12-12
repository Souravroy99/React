import {useState} from 'react'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    if(counter == 0) {
      setCounter(0)
    }
    else {
      setCounter(counter - 1)
    }
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
