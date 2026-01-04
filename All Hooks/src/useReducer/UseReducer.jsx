import { useReducer } from 'react'
import { reducer } from './reducer_function'

const UseReducerHook = () => {
    
  const initialValue = 0 
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <button onClick={() => dispatch({type: "DEC", payload: 5})}> <h1>-</h1> </button>

      <h1>{count}</h1>
      
      <button onClick={() => dispatch({type: "INC", payload: 10})}> <h1>+</h1> </button>
    </div>
  )
}

export default UseReducerHook
