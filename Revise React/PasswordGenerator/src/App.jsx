import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(0)
  const [numbers, setNumbers] = useState(false)
  const [chars, setChars] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = "" ;
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numbers) str += "0123456789"
    if(chars) str += "!@#$%^&*():?><"

    for(let i=0 ; i<length ; i++) {
      let idx = Math.floor(Math.random() * str.length())
      pass += str[idx];
    }

    setPassword(pass)
  }, [length, numbers, chars])
  

  return (
    <>
      <h1 className='text-4xl text-white text-center'>Password Generator</h1>
    </>
  )
}

export default App

/*
useCallback --> useCallback is a React Hook that lets you cache a function definition between re-renders.
*/