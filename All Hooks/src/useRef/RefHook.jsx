// useRef is a React hook used to store a value or reference that persists across 
// renders without causing the component to re-render when it changes.

import { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    
    const [userInput, setUserInput] = useState("")

    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1

    }, [userInput])

  return (
    <div>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <h1>Number of time the component rendered: {count.current}</h1>
    </div>
  )
}

export default RefHook
