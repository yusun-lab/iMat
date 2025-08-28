import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="admin-panel-logo"
        src={assets.adminPanelLogo}
        alt="admin panel logo"
      />
      <img
        className="admin-avatar"
        src={assets.adminAvatar}
        alt="admin avatar"
      />
    </div>
  );
};

export default NavBar;
