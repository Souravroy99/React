import { useState } from "react"

function App() {

  const [color, setColor] = useState('Aqua')

  return (
      <div className="w-full h-screen duration-500" style={{backgroundColor: color}}>

          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-row justify-center gap-10 shadow-lg bg-white rounded-3xl px-3 py-2">

                <button 
                onClick={()=>setColor('red')}
                className="outline-none px-3 py-2 rounded-full" style={{background: 'red'}}
                >RED
                </button>

                <button 
                onClick={()=>setColor('blue')}
                className="outline-none px-3 py-2 rounded-full" style={{background: 'blue'}}
                >BLUE
                </button>

                <button 
                onClick={()=>setColor('green')}
                className="outline-none px-3 py-2 rounded-full" style={{background: 'Green'}}
                >GREEN
                </button>

              </div>
          </div>

      </div>
  )
} 

export default App
