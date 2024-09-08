const router = require("express").Router();
const productModel = require("./../models/productModel");
const products = require("./../data/products");


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


module.exports = router;
