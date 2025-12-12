import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(4)
  const [numbers, setNumbers] = useState(false)
  const [chars, setChars] = useState(false)

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numbers) str += "0123456789"
    if (chars) str += "!@#$%^&*():?><"

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length)
      pass += str[idx];
    }

    setPassword(pass)
  }, [length, numbers, chars])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, chars])


  return (
    <>
      <div className='max-w-xl w-full shadow-md rounded-lg mx-auto px-6 py-4 mt-20 bg-gray-700 text-orange-500'>
        <h1 className='text-3xl font-semibold text-center mb-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg mb-4 overflow-hidden'>

          <input

            ref={passwordRef}

            type="text"
            value={password}
            className='outline-none w-full text-xl font-semibold py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button onClick={copyPassword} style={{color: 'pink'}} className='bg-blue-700 text-lg px-2 font-semibold'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 pl-2">
            <input type="checkbox" onChange={() => setNumbers((prev) => !prev)} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 pl-2">
            <input type="checkbox" onChange={() => setChars((prev) => !prev)} />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/*
useCallback --> useCallback is a React Hook that lets you cache a function definition between re-renders.
*/