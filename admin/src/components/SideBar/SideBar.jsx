import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-options">
        <NavLink to="/add-items" className="side-bar-option">
          <img src={assets.addIcon} alt="add icon" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list-items" className="side-bar-option">
          <img src={assets.listItemsIcon} alt="list Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink to="orders" className="side-bar-option">
          <img src={assets.ordersIcon} alt="orders" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
