import React, { useContext } from "react";
import "./FoodItem.css";
import { assets, PlusIcon, MinusIcon } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          src={url + "/images/" + image} //Go to the uploads folder on your backend server, find this image, and display it.
          alt={name}
          className="food-item-image"
        />

        {!cartItems[id] ? (
          <PlusIcon
            onClick={() => addToCart(id)}
            className="orange-plus-icon"
          />
        ) : (
          <div className="food-item-counter">
            <MinusIcon onClick={() => removeFromCart(id)} />
            <p>{cartItems[id]}</p>
            <PlusIcon
              onClick={() => addToCart(id)}
              color="green"
              className="green-plus-icon"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <p>{name}</p>
        <img src={assets.ratingStars} alt="" />
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">SEK {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
