import { useState } from 'react'
import countries from './data'
import './App.css'

function App() {
  const [country, setCountry] = useState(0)

  return (
    <>
      <h2>Drop Down</h2>

      {/* 1st Drop Down */}

      <select value={country}
        onChange={(event) => {
        setCountry((event.target.value))
      }}>
      {
        countries.map((item, index) => { 
          return <option key={item.value} value={index.value}>{item.name}</option>
        })
      }
      </select>

      {/* 2nd Drop Down  */}
      <select>
      {
          countries[country].cities.map((item, index) => {
              return <option key={index} value={index}>{item}</option>
          })    
      }
      </select>
    </>
  )
}

export default App
