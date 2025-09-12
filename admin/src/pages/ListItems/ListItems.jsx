import React, { useEffect, useState } from "react";
import "./ListItems.css";
import axios from "axios";
import { toast } from "react-toastify";

const ListItems = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message || "Error fetching list");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error while fetching list");
    } finally {
      setLoading(false);
    }
  };

  const deleteFood = async (foodId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const response = await axios.delete(`${url}/api/food/delete/${foodId}`);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message || "Failed to delete food");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error while deleting food");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list flex-column">
      <h3>List of All Foods</h3>

      {loading && <p>Loading...</p>}

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price (SEK)</b>
          <b>Action</b>
        </div>

        {list.map((item) => {
          return (
            <div key={item._id} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => deleteFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;
