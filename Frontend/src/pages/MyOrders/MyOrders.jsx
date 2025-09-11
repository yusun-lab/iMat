import React from "react";
import "./MyOrders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(url + "/api/order/user-orders", {
        headers: { token },
      });
      setData(response.data?.data || []);
    };

    if (token) {
      fetchOrders();
    }
  }, [token, url]);

  return (
    <div className="my-orders">
      <h2>My orders</h2>
      <div className="my-orders__container">
        {data.map((order) => {
          return (
            <div key={order._id} className="my-orders__order">
              <img src={assets.parcelIcon} alt="" />
              <p>
                {order.items
                  .map((item) => `${item.name}x${item.quantity}`)
                  .join(", ")}
              </p>

              <p>SEK {order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button>Track Order </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
