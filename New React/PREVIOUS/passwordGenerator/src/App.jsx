import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8) ;
  const [numberAllow, setNumberAllow] = useState(false) ;
  const [charAllow, setCharAllow] = useState(false) ;
  const [password, setPassword] = useState("") ;

  // useRef Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current.select()
      window.navigator.clipboard.writeText(password)
  }, [password])
  

  // useCallBack Hook ---> Memoization
  
  const passwordGenerator = ()=>{  
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += '0123456789'
    if(charAllow) str += '!@%(&()*%${}<>~?'

    for(let i=1 ; i<=length ; i++)
      {
        let char = Math.floor(Math.random() * str.length)
        pass += str[char]
      }

      setPassword(pass) ;
  }


  useEffect(()=>{
      passwordGenerator()
  }, [length, numberAllow, charAllow]) ;


  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md text-orange-500 bg-gray my-8 px-4 rounded-lg mb-8 py-1 bg-red-800'>

        <h1 className='text-white text-center mb-4'>Password Generator</h1>

        <div className='flex shadow mb-10'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 h-10 text-xl rounded-lg overflow-hidden'
          placeholder='Password'
          readOnly

          ref={passwordRef}

          />
          <button 
          onClick={copyPasswordToClipBoard}
          className='bg-blue-700 text-white px-3 py-1 outline-none'>
          Copy
          </button>

        </div>

        <div className='text-lg font-semibold flex gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" 
                min={8}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(ele)=>setLength(ele.target.value)}
              />
              <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>

              <input type="checkbox" 
              defaultChecked={numberAllow} id="numberInput" 
              onChange={()=> {
                setNumberAllow((prevCheck) => !prevCheck)
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>

          <input type="checkbox" 
          defaultChecked={charAllow} id="characterInput" 
          onChange={()=> {
            setCharAllow((prevCheck) => !prevCheck)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

        </div>


    </>
  )
}

export default App
