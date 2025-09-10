import userModel from "../models/user.model.js";

// add item to user cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.user.id);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    const itemId = req.body.itemId;

    if (!itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Item ID is required" });
    }

    cartData[itemId] = (cartData[itemId] || 0) + 1;
    await userModel.findByIdAndUpdate(req.user.id, { cartData });

    res.json({ success: true, message: "Added to cart", cartData });
  } catch (error) {
    console.error("Add to cart error", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete item from user cart
const deleteFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.user.id);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    const itemId = req.body.itemId;

    if (!itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Item ID is required" });
    }

    if (!cartData[itemId] || cartData[itemId] <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Item not in cart" });
    }

    cartData[itemId] -= 1;
    if (cartData[itemId] === 0) {
      delete cartData[itemId];
    }

    await userModel.findByIdAndUpdate(req.user.id, { cartData });
    res.json({ success: true, message: "Deleted from cart", cartData });
  } catch (error) {
    console.error("Delete from cart error", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// fetch user cart
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.user.id);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: userData.cartData || {} });
  } catch (error) {
    console.error("Get cart error", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addToCart, deleteFromCart, getCart };
