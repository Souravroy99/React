import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-blue p-4'>I can do it</h1>
      <Card channel="STROY" date={new Date()} />
      <Card channel={"Obsession"} date="NOW-NOW-NOW"/>
    </>
  )
}

export default App
