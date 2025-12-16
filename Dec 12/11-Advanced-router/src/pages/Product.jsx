import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '5rem' }}>
        <h1>Product:</h1>
        <Link to="/product/men">Product-Men</Link>
        <Link to="/product/women">Product-Women</Link>
      </div>

      <Outlet />
    </>
  )
}

export default Product