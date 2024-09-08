const UserModel = require("./../models/userModel");
const asyncHandler = require("express-async-handler");

// Get all users
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json({
    status: "success",
    length: users.length,
    data: {
      users,
    },
  });
});

// Get a single user by ID
exports.getUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "User not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// Update a user by ID
exports.updateUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Validate the updated document against the schema
  });
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "User not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// Delete a user by ID
exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "User not found!",
    });
  }
  res.status(204).json({
    status: "success",
    message: "User deleted successfully!",
  });
});
