import { error } from "console";
import foodModel from "../models/FoodModel.js";
import fs from "fs";
import path from "path";

// Add food item
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No image uploaded" });
    }

    if (!name || !description || !price || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const food = new foodModel({
      name,
      description,
      price: Number(price),
      category,
      // name: req.body.name,
      // description: req.body.description,
      // price: req.body.price,
      // category: req.body.category,
      image: req.file.filename,
    });

    await food.save();
    res.status(201).json({
      success: true,
      message: "Food item added successfully",
      data: food,
    });
  } catch (error) {
    console.log("Add food error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in adding food item" });
  }
};

// Get food list
const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("Fetch food list error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in fetching food list" });
  }
};

// Delete food item
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Food ID is required" });
    }

    const food = await foodModel.findById(id);

    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    if (food.image) {
      const imagePath = path.join("uploads", food.image);
      fs.unlink(imagePath, (err) => {
        if (error) console.warn("Image deletion error:", error);
      });
    }

    await foodModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.log("Delete food error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in deleting food item" });
  }
};

export { addFood, foodList, deleteFood };
