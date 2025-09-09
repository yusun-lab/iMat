import express from "express";
import {
  addFood,
  foodList,
  deleteFood,
} from "../controllers/food.controller.js";
import multer from "multer";
import path from "path";

const foodRouter = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("uploads"));
  },
  filename: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/svg+xml",
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(
        new Error(
          "Only .jpg, .jpeg, .png, .gif, .bmp, .webp, .svg files are allowed"
        )
      );
    }

    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Routes
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", foodList);

foodRouter.delete("/delete/:id", deleteFood);

export default foodRouter;
