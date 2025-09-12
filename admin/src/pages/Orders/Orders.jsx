import { React, useState, useEffect, useCallback } from "react";
import "./Orders.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = useCallback(async () => {
    try {
      const response = await axios.get(url + "/api/order/list-orders");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders");
    }
  }, [url]);

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  const statusHandler = async (event, orderId) => {
    // console.log(event, orderId);

    try {
      const newStatus = event.target.value;
      const response = await axios.post(url + "/api/order/update-status", {
        orderId,
        status: newStatus,
      });

      if (response.data.success) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success("Order status updated");
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Status update error:", error);
      toast.error("Error updating order status");
    }
  };

  return (
    <div className="orders flex-column">
      <h3>Orders</h3>

      <div className="order-list">
        {orders.map((order) => (
          <div key={order._id} className="order-item">
            <img src={assets.parcelIcon} alt="" />

            <div>
              <p className="order-item-food">
                {order.items
                  .map((item) => `${item.name}*${item.quantity}`)
                  .join(", ")}
              </p>

              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>

              <div className="order-item-address">
                <p>{order.address.street},</p>

                <p>
                  {[
                    order.address.municipality,
                    order.address.county,
                    order.address.country,
                    order.address.postalCode,
                  ].join(", ")}
                </p>
              </div>

              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <div className="order-summary">
              <p>Items: {order.items.length}</p>

              <p>SEK {order.amount}</p>

              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="order-status"
              >
                <option value="Order Processing">Order Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
