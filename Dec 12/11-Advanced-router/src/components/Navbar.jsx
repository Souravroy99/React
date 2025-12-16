import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h3>Navbar: Advance Router</h3>
            <div style={{ display: 'flex', gap: '4rem' }}>
                
                <NavLink 
                    to={'/'}
                    style={({isActive}) => {return {color: isActive ? "Red": ""}}} 
                >
                        Home
                </NavLink>

                <NavLink 
                    to={'/about'}
                    style={({isActive}) => ({color: isActive ? "Red": ""})} 
                >
                        About
                </NavLink>
                
                <NavLink 
                    to={'/product'}
                    style={({isActive}) => ({color: isActive ? "Red": ""})} 
                >
                        Product
                </NavLink>
                
                <NavLink 
                    to={'/courses'}
                    style={({isActive}) => ({color: isActive ? "Red": ""})} 
                >
                        Courses
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
