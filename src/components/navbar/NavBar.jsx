import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaPiedPiper } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
  <>
    <nav className='navbar' id='navbar'>
      <div className="icon">
        <FaPiedPiper />
      </div>
      <div className="logo">
        DME Web
      </div>
        <ul className={click ? 'mobile-menu active' : 'mobile-menu'}>
          <li className="mobile-menu-items">
            <Link to='/' className='mobile-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="mobile-menu-items">
            <Link to='/about' className='mobile-links' onClick={closeMobileMenu}>About</Link>
          </li>
          <li className="mobile-menu-items">
            <Link to='/bootcamps' className='mobile-links' onClick={closeMobileMenu}>Bootcamps
            <BsFillCaretDownFill />
            
            </Link>
          </li>
          <li className="mobile-menu-items">
            <Link to='/blog' className='mobile-links' onClick={closeMobileMenu}>Blog</Link>
          </li>
          <li className="mobile-menu-items">
            <Link to='/contact' className='mobile-links' onClick={closeMobileMenu}>Contact</Link>
          </li>
          <div className="mobile-menu" onClick={clickHandler}>
          { click ? <FaTimes size='25px'/> : <FaBars size='25px'/> } 
        </div>
        </ul>
      </nav>
    </>
  )
}

export default NavBar