const asyncHandler = require("express-async-handler");
const orderModel = require("../models/orderModel");


// Get all orders for an authorized user
exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await orderModel.find({ user: req.user._id }).sort({ _id: -1 });
  res.status(200).json({
    status: "success",
    length: orders.length,
    data: {
      orders,
    },
  });
});

// Get a single order by ID (order details) for an authorized user
exports.getOrder = asyncHandler(async (req, res) => {
  const order = await orderModel.findById(req.params.id).populate("user", "name email");
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

// Update an order by ID for an authorized user
exports.updateOrder = asyncHandler(async (req, res) => {
  const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
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

//update order status for payment for an authorized user

exports.updatePaymentStatus = asyncHandler(async (req, res) => {
  const order = await orderModel.findByIdAndUpdate(req.params.id, {
    isPaid: true,
    paidAt: Date.now()
  }, { new: true, runValidators: true });

  if (!order) {
    return res.status(404).json({
      status: 'fail',
      message: 'Order Not Found'
    });

  }

  res.status(200).json(order);
})



//create an order for an authorized user
exports.createOrder = asyncHandler(async (req, res) => {
  const { orderItems, userAdress, totalPrice } = req.body
  //case of no orders
  if (orderItems && orderItems.length === 0) {
    res.status(400).json({
      status: "fail",
      message: "you have 0 orders"
    })
  }
  else {
    const createdOrder = await orderModel.create({
      orderItems, userAdress, totalPrice, user: req.user._id
    })
    res.status(201).json(createdOrder)

  }
})

// Delete an order by ID for an authorized user
exports.deleteOrder = asyncHandler(async (req, res) => {
  const order = await orderModel.findByIdAndDelete(req.params.id);
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
