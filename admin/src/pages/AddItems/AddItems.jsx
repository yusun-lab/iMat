import React, { useEffect, useState } from "react";
import "./AddItems.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddItems = () => {
  const apiUrl = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    if (!image) return;
    const previewUrl = URL.createObjectURL(image);
    return () => URL.revokeObjectURL(previewUrl);
  }, [image]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    try {
      const response = await axios.post(`${apiUrl}/api/food/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data?.message || "Item added");
        setData({
          name: "",
          description: "",
          price: "",
          category: "",
        });
        setImage(null);
      } else {
        toast.error(response.data?.message || "Failed to add item");
      }
    } catch (error) {
      error.response?.data?.message;
      console.error(error);
      toast.error("Network error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-items-page">
      <form className="flex-column" onSubmit={onSubmitHandler}>
        <div className="add-upload-image flex-column">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadIcon}
              alt="upload image"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />
        </div>

        <div className="add-food-name flex-column">
          <p>Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter food name"
            required
          />
        </div>

        <div className="add-food-description flex-column">
          <p>Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-column">
            <p>Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              required
            >
              <option value="" disabled>
                -- Please select --
              </option>
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
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Enter price"
              min="0"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-item-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItems;
