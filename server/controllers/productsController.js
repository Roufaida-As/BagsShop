const ProductModel = require("./../models/productModel");
const asyncHandler = require("express-async-handler");

// Get all products
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.status(200).json({
    status: "success",
    length: products.length,
    data: {
      products,
    },
  });
});

// Get a single product by ID
exports.getProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

