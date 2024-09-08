const router = require("express").Router();
const productModel = require("./../models/productModel");
const userModel = require("./../models/userModel");
const orderModel = require("./../models/orderModel");
const products = require("./../data/products");
const users = require("./../data/users");
const orders = require("./../data/orders");

// eliminating the need for repetitive try/catch blocks in each async route handler.
const AsynHandler = require("express-async-handler");

//using this method to create all products in one time
router.post(
  "/products",
  AsynHandler(async (req, res) => {
    const productsList = await productModel.insertMany(products);
    res.send({ productsList });
  })
);
router.post(
  "/users",
  AsynHandler(async (req, res) => {
    const usersList = await userModel.insertMany(users);
    res.send({ usersList });
  })
);
router.post(
  "/orders",
  AsynHandler(async (req, res) => {
    const ordersList = await orderModel.insertMany(orders);
    res.send({ ordersList });
  })
);
module.exports = router;
