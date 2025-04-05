const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Header-оос Bearer token авах
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Token-ыг шалгах, decode хийх
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Хэрэглэгчийн мэдээллийг req.user-д хадгалах
      req.user = await User.findById(decoded.id).select("-password"); // password-ийг оруулахгүй
      next();
    } catch (error) {
      console.error("Token invalid:", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
