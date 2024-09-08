const OrderModel = require("./../models/orderModel");
const asyncHandler = require("express-async-handler");

// Get all orders
exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({});
  res.status(200).json({
    status: "success",
    length: orders.length,
    data: {
      orders,
    },
  });
});

// Get a single order by ID
exports.getOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);
  if (!order) {
    return res.status(400).json({
      status: "fail",
      message: "Order not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

// Update an order by ID
exports.updateOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Validate the updated document against the schema
  });
  if (!order) {
    return res.status(400).json({
      status: "fail",
      message: "Order not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

// Delete an order by ID
exports.deleteOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findByIdAndDelete(req.params.id);
  if (!order) {
    return res.status(400).json({
      status: "fail",
      message: "Order not found!",
    });
  }
  res.status(204).json({
    status: "success",
    message: "Order deleted successfully!",
  });
});
