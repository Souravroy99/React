import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([])
    
  useEffect(() => {
      fetch('https://api.github.com/users/SouravRoy99')
      .then(response => response.json())
      .then(data => {
          setData(data) ;
      })
  }, [])

  return (
    <div className='flex flex-col  text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Get My Profile Image" width={250} className='mx-auto mt-10' />
    </div>
  )
}

export default Github