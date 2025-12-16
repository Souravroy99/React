import { Link, Outlet } from 'react-router-dom'

const Men = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '4rem' }}>
      <h3>Men products</h3>  
        <Link to={'/product'}>Men_Parent</Link>
        <Link to={'/product/men/menChild'}>Men_Child</Link>
      </div>

      <Outlet />
    </>
  )
}

export default Men
