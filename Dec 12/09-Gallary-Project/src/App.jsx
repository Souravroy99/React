import { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'

function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    /*
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=5') ;
    const data = await res.json();
    console.log(data)
    */

    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    const data = res.data
    setUserData(data)
  }

  useEffect(() => {
    getData()
    console.log(index)
  }, [index])

  return (
    <>
      <div className='p-4 text-white'>
        <div className='flex'>
          {
            userData.map((data, idx) => {
              return <Card data={data} idx={idx}/>
            })
          }
        </div>

        <div className='flex text-black gap-[30px]'>
          <button onClick={() => setIndex((prev) => Math.max(1, prev - 1))} className='bg-orange-400 text-5xl'>Prev</button>
          <button onClick={() => setIndex((prev) => prev + 1)} className='bg-orange-400 text-5xl'>Next</button>

        </div>
      </div>
    </>
  )
}

export default App
