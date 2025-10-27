import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount, incrementByAmount } from '../counter/counterSlice'

function Navbar() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const x = 10 ;

  return (<>
      <span>Decrement from Navbar by {x}:: </span>
      <button onClick={() => dispatch(decrementByAmount(x))}>-</button>
      <br />

      <span>Increment from Navbar by {x}:: </span>
      <button onClick={() => dispatch(incrementByAmount(x))}>+</button>
      <br />
      <br />


      <div>This is Navbar ::: {count} </div>
  </>
  )
}

export default Navbar