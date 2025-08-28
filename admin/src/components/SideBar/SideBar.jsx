import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-options">
        <div className="side-bar-option">
          <img src={assets.addIcon} alt="add icon" />
          <p>Add Items</p>
        </div>
        <div className="side-bar-option">
          <img src={assets.listItemsIcon} alt="list Items" />
          <p>List Items</p>
        </div>
        <div className="side-bar-option">
          <img src={assets.ordersIcon} alt="orders" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
