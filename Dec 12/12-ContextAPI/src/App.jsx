import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState("Light") ;

  return ( 
    <>
      <h1>App.jsx</h1>

      <Navbar theme={theme} />
    </>
  )
}

export default App
