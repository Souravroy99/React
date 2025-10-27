import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import { increment, decrement } from "./counter/counterSlice"

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return ( 
    <>
      <Navbar />
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
          Currently value is: {count}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>

    </>
  )
}

export default App
