const express = require("express");
const orderRoute = express.Router();
const protect = require("./../protectingRoutes");
const ordersController = require("./../controllers/ordersControllers");

// For all orders
orderRoute
    .route("/")
    .get(protect, ordersController.getAllOrders)
    .post(protect, ordersController.createOrder)

// For each order /orders/:id
orderRoute
    .route("/:id")
    .get(protect, ordersController.getOrder)
    .patch(protect, ordersController.updateOrder)
    .delete(protect, ordersController.deleteOrder);

orderRoute.route('/:id/payment').patch(protect, ordersController.updatePaymentStatus)

module.exports = orderRoute;
