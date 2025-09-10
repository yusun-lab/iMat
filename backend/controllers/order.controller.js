import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// place user order (frontend checkout)
const placeOrder = async (req, res) => {
  const frontendUrl = "http://localhost:5173";

  try {
    // Pull fields from body
    const { items, amount, address } = req.body;

    // Basic validation
    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Cart items are required" });
    }
    if (typeof amount !== "number") {
      return res
        .status(400)
        .json({ success: false, message: "Amount is required" });
    }

    // Make sure we have authenticated user id (set by auth middleware)
    if (!req.user || !req.user.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Create & save order using authenticated user id
    const newOrder = new orderModel({
      userId: req.user.id,
      items,
      amount,
      address,
    });
    await newOrder.save();

    // Build Stripe line_items (note: Stripe expects snake_case keys)
    const line_items = items.map((item) => ({
      price_data: {
        currency: "SEK",
        product_data: {
          name: item.name || "Item",
        },
        unit_amount: item.price * 100, // convert to smallest currency unit (öre)
      },
      quantity: item.quantity,
    }));

    // Add delivery fee as an extra line item (unit_amount in smallest unit)
    line_items.push({
      price_data: {
        currency: "SEK",
        product_data: {
          name: "Delivery charges",
        },
        unit_amount: 20 * 100, // 2 SEK -> 200 öre
      },
      quantity: 1,
    });

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
    });

    // Return session url for frontend to redirect the user
    res.json({ success: true, sessionUrl: session.url });
  } catch (error) {
    console.error("Place order error:", error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      // Clear user's cart in DB (await so DB operation completes)
      await userModel.findByIdAndUpdate(req.user.id, { cartData: {} });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndUpdate(orderId, {
        payment: false,
        status: "cancelled",
      });
      // await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not paid" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder };
