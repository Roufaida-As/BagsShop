const express = require("express");
const productRoute = express.Router();
const productsController = require("./../controllers/productsController");

// Route to get all products and create a new product
productRoute
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);

// Route to get, update, and delete a product by ID
productRoute
  .route("/:id")
  .get(productsController.getProduct)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = productRoute;
