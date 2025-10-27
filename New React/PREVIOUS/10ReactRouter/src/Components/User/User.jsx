import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    
  return (
    <div className='bg-gray-700 text-center p-5 font-semibold text-3xl text-white'>UseParams : {userId}</div>
  )
}

export default User