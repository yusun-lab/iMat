import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg';
import search_icon from '../../assets/search-icon.svg';
import cart_icon from '../../assets/cart.svg';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState('contact-us');

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo'/>

      <ul className="navbar-menu">
        <li onClick={() => setMenuOpen('home')} className={menuOpen==='home'?'active':''}>Home</li>
        <li onClick={() => setMenuOpen('menu')} className={menuOpen==='menu'?'active':''}>Menu</li>
        <li onClick={() => setMenuOpen('contact-us')} className={menuOpen==='contact-us'?'active':''}>Contact us</li>
      </ul>

      <div className='navbar-right'>
        <img src={search_icon} alt="search_icon" />
        <div className='navbar-search-icon'>
          <img src={cart_icon} alt="cart_icon" />
          <div className='dot'></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
