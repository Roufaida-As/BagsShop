const express = require("express");
const productRoute = express.Router();
const moviesController = require('./../controllers/productsController')


//for all products
productRoute.route('/')
    .get(moviesController.getAllProducts)


//for each product /products/id
productRoute.route('/:id')
    .get(moviesController.getProduct)

module.exports = productRoute