import { useState } from 'react'
import { NavLink } from 'react-router-dom'
//import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'          <Hamburger />
import { ReactComponent as Brand } from '../img/menu-outline.svg'       
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
    <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar