import { useState } from 'react'
import './App.css'
import OptimalTilingUI from './components/tiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OptimalTilingUI />
    </>
  )
}

export default App
