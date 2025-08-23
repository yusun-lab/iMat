import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';


const NavBar = ({toggleLogin}) => {

  const [menuOpen, setMenuOpen] = useState('home');

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='logo'/>
      </Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenuOpen('home')} className={ menuOpen==='home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenuOpen('menu')} className={menuOpen==='menu'?'active':''}>Menu</a>
        <a href='#app-download' onClick={() => setMenuOpen('app-download')} className={menuOpen==='app-download'?'active':''}>Download APP</a>
        <a href='#footer' onClick={() => setMenuOpen('contact-us')} className={menuOpen==='contact-us'?'active':''}>Contact us</a>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search_icon" />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.cart_icon} alt="cart_icon" />
          </Link>
          <div className='dot'></div>
        </div>

        <button onClick={()=>toggleLogin (true)}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
