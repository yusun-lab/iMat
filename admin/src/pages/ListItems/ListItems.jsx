import React, { useEffect, useState } from "react";
import "./ListItems.css";
import axios from "axios";
import { toast } from "react-toastify";

const ListItems = () => {
  const apiUrl = "http://localhost:4000";

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${apiUrl}/api/food/list`);

    // console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    // console.log(foodId);
    const response = await axios.delete(`${apiUrl}/api/food/delete/${foodId}`);
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-column">
      <p>List of All Foods</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${apiUrl}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
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
