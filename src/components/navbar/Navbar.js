import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'

import Button from '../button/Button';

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileButton = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(true)
    }else{
      setButton(false)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
      <div className='navbar-container container'>

        <Link to='/' className='navbar-logo' onClick={closeMobileButton}>
          <MdFingerprint className='navbar-icon' />
          LAVISH
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onClick={closeMobileButton}>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileButton}>
            <Link to='/services' className='nav-links'>
              Services
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileButton}>
            <Link to='/products' className='nav-links'>
              Products
            </Link>
          </li>
          <li className='nav-btn' onClick={closeMobileButton}>
            {!button ? (
              <Link to='/sign-up' className='btn-link'>
                <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>
            ):
              <Link to='/sign-up' className='btn-link' onClick={closeMobileButton}>
                <Button 
                  buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  >
                  SIGN UP
                </Button>
              </Link>
            }
          </li>
        </ul>

      </div>
    </div>
    </IconContext.Provider>
  )
}
export default Navbar;
