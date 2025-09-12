import { React, useContext, useState, useEffect, useCallback } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url + "/api/order/user-orders", {
        headers: { token },
      });
      setData(response.data?.data || []);
    } catch (err) {
      setError("failed to fetch orders");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [url, token]);

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [fetchOrders, token]);

  if (loading) return <p>Loading your orders...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const statusColors = {
    "Order Processing": "blue",
    "Out for Delivery": "yellowgreen",
    Delivered: "green",
    Cancelled: "red",
  };

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="my-orders__container">
        {data.map((order) => {
          return (
            <div key={order._id} className="my-orders__order">
              <img src={assets.parcelIcon} alt="Parcel" />

              <p>
                {order.items
                  .map((item) => `${item.name}*${item.quantity}`)
                  .join(", ")}
              </p>

              <p>SEK {order.amount.toFixed(2)}</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span style={{ color: statusColors[order.status] || "gray" }}>
                  &#x25cf;
                </span>{" "}
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
