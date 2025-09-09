import express from "express";
import {
  addToCart,
  deleteFromCart,
  getCart,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middleware/authentication.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/delete", authMiddleware, deleteFromCart);
cartRouter.get("/get", authMiddleware, getCart);

export default cartRouter;
