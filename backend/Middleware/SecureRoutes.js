import jwt from "jsonwebtoken";
import User from "../models/user-models.js";

const Secureroutes = async (req, res, next) => {
  try {
    // Get token from cookie or Authorization header
    let token = req.cookies.jwt;

    if (!token && req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts[0] === "Bearer" && parts[1]) {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    const verified = jwt.verify(token, process.env.jwt_token); // ✅ env variable
    if (!verified) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(verified.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // ✅ attach user for controller
    next();
  } catch (error) {
    console.error("SecureRoutes error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default Secureroutes;
