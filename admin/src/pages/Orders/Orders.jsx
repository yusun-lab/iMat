import { React, useState, useEffect } from "react";
import "./Orders.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      const response = await axios.get(url + "/api/order/list-orders");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error");
      }
    };
    fetchAllOrders();
  }, [url]);

  return (
    <div className="order-add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcelIcon} alt="" />
            <div>
              <p>
                {order.items
                  .map((item) => `${item.name}x${item.quantity}`)
                  .join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
