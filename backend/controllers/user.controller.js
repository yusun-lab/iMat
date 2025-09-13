import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create JWT token for authenticated user
    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password strength (minimum 8 characters)
    if (!validator.isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters and contain uppercase, lowercase, number, and symbol.",
      });
    }

    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user document
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Create JWT token for the new user
    const token = createToken(user._id);

    // Return success response with token
    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export { loginUser, registerUser };
