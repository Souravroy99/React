import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  // localStorage.clear();
  // sessionStorage.clear(); 

  localStorage.setItem('user', 'Sourav')
  localStorage.setItem('age', 21)

  console.log(localStorage.getItem('user'))
  console.log(localStorage.getItem('age'))

  localStorage.removeItem('age')

  const obj = {
    'name': "Roy",
    'age': 21
  }

  localStorage.setItem('obj', JSON.stringify(obj))

  return (
    <>
        <h1>Sourav</h1>
    </>
  )
}

export default App
