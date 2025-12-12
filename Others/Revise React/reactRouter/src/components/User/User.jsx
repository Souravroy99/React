import { useParams } from 'react-router-dom'

const User = () => {

    const { userId, id, name } = useParams()

    return (
        <>
            <div className='bg-gray-600 p-4 text-2xl font-semibold text-white'>UserId: {userId}</div>
            <div className='bg-gray-600 p-4 text-2xl font-semibold text-white'>Id: {id}</div>
            <div className='bg-gray-600 p-4 text-2xl font-semibold text-white'>Name: {name}</div>
        </>
    )
}

export default User