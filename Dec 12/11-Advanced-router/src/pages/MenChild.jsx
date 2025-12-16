import { Link } from 'react-router-dom'

const MenChild = () => {
  return (
    <div>
      <h1>  MenChild Products</h1>  
      <Link to={'/product/men'}>Back to Parent</Link>
    </div>
  )
}

export default MenChild
