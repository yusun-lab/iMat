import React from "react";
import "./ExploreMenu.css";
import { menuList } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Discover a diverse menu filled with irresistible dishes. We're here to
        satisfy your cravings and make every meal an unforgettable experience.
      </p>
      <div className="explore-menu-list">
        {menuList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menuName ? "All" : item.menuName
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menuName ? "active" : ""}
                src={item.menuImage}
                alt=""
              />
              <p>{item.menuName}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
