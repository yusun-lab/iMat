import express from "express";
import authMiddleware from "../middleware/authentication.middleware.js";
import { placeOrder, verifyOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
