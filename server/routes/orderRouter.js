const express = require("express");
const orderRoute = express.Router();

const ordersController = require("./../controllers/ordersController");

// For all orders
orderRoute.route("/").get(ordersController.getAllOrders);

// For each order /orders/:id
orderRoute
  .route("/:id")
  .get(ordersController.getOrder)
  .put(ordersController.updateOrder)
  .delete(ordersController.deleteOrder);

module.exports = orderRoute;
