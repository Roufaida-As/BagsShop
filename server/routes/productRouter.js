const express = require("express");
const productRoute = express.Router();
const productsController = require('./../controllers/productsController')


//for all products
productRoute.route('/')
    .get(productsController.getAllProducts)


//for each product /products/id
productRoute.route('/:id')
    .get(productsController.getProduct)

module.exports = productRoute
