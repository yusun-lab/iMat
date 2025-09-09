import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, login again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: tokenDecode.id };
    next();
  } catch (error) {
    console.error("Auth middleware error", error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;
