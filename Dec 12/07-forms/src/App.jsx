import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("")

  const submitHandler = (e) => {
    console.log(e)
    e.preventDefault();

  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter your name'/>
        <button>Click Me</button>
      </form>
    </>
  )
}

export default App
