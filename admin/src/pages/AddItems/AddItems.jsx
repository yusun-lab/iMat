import React from "react";
import "./AddItems.css";
import { assets } from "../../assets/assets";

const AddItems = () => {
  return (
    <div className="add-items-page">
      <form className="flex-column">
        <div className="add-upload-image flex-column">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.uploadIcon} alt="" />
            <input type="file" id="image" hidden required />
          </label>
        </div>

        <div className="add-food-name flex-column">
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            required
          />
        </div>

        <div className="add-food-description flex-column">
          <p>Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-column">
            <p>Category</p>
            <select name="category" required>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-column">
            <p>Price</p>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-item-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItems;
