import express from "express";
import authMiddleware from "../middleware/authentication.middleware.js";
import {
  listOrders,
  placeOrder,
  userOrders,
  verifyOrder,
  updateStatus,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", authMiddleware, verifyOrder);
orderRouter.get("/user-orders", authMiddleware, userOrders);
orderRouter.get("/list-orders", listOrders);
orderRouter.post("/update-status", updateStatus);

export default orderRouter;
