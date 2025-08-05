import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg';
import search_icon from '../../assets/search-icon.svg';
import cart_icon from '../../assets/cart.svg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={search_icon} alt="search-icon" />
        <div className='navbar-search-icon'>
          <img src={cart_icon} alt="" />
          <div className='dot'></div>
        </div>
        <button>Sign in</button>

      </div>
    </div>
  )
}

export default NavBar
