import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavBar = ({ toggleLogin }) => {
  const [menuOpen, setMenuOpen] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenuOpen("home")}
          className={menuOpen === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenuOpen("menu")}
          className={menuOpen === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenuOpen("app-download")}
          className={menuOpen === "app-download" ? "active" : ""}
        >
          Download APP
        </a>
        <a
          href="#footer"
          onClick={() => setMenuOpen("contact-us")}
          className={menuOpen === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.searchIcon} alt="searchIcon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.cartIcon} alt="cartIcon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => toggleLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
