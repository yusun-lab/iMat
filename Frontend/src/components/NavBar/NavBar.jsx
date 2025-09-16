import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavBar = ({ toggleLogin }) => {
  const [menuOpen, setMenuOpen] = useState("home");

  const { getTotalCartAmount, token, setToken, setSearchTerm } =
    useContext(StoreContext);

  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      {/* <ul className="navbar-menu">
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
      </ul> */}

      <div className="navbar-right">
        <img
          src={assets.searchIcon}
          alt="searchIcon"
          onClick={() => setShowSearch(!showSearch)}
          style={{ cursor: "pointer" }}
        />

        {showSearch && (
          <input
            type="text"
            placeholder="Search food..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="navbar-search-input"
          />
        )}

        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.cartIcon} alt="cart Icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => toggleLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profileIcon} alt="" />

            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/my-orders")}>
                <img src={assets.orderIcon} alt="" />
                <p>My orders</p>
              </li>

              <hr />

              <li onClick={logout}>
                <img src={assets.logoutIcon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
