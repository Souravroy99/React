import { useRef } from 'react'

const RefHook_DOM = () => {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "#8a0c3a"
    }

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default RefHook_DOM
