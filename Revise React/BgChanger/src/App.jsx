import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Black')

  const change = (bgColor) => {
    setColor(bgColor)
  }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className="fixed flex justify-center bottom-12 px-2 flex-wrap inset-x-0 gap-2">
          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Red")} style={{backgroundColor: "Red"}}>Red</button>
          </div>

          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Blue")} style={{backgroundColor: "Blue"}}>Blue</button>
          </div>

          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Green")} style={{backgroundColor: "Green"}}>Green</button>
          </div>

          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Yellow")} style={{backgroundColor: "Yellow"}}>Yellow</button>
          </div>

          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Gray")} style={{backgroundColor: "Gray"}}>Gray</button>
          </div>

          <div className="bg-white flex flex-wrap justify-center px-4 py-2 rounded-2xl"> 
              <button onClick={() => change("Orange")} style={{backgroundColor: "Orange"}}>Orange</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
