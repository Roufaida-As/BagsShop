//we want only authorized users to access orders apis aka validating users

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const UserModel = require("./models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_STR);
    req.user = await UserModel.findById(decodedToken.id).select("-password");
    next();

  }
  if (!token) {
    res.status(400).json({
      status: 'fail',
      message: 'Not authorized!, Please provide a valid token!'
    });
  }
});

module.exports = protect;