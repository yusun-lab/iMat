import express from "express";
import authMiddleware from "../middleware/authentication.middleware.js";
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", authMiddleware, verifyOrder);
orderRouter.get("/user-orders", authMiddleware, userOrders);

export default orderRouter;
