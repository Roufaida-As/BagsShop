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

// Create a new product
exports.createProduct = asyncHandler(async (req, res) => {
  const newProduct = await ProductModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

// Update a product by ID
exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated document against the schema
    }
  );
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

// Delete a product by ID
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product not found!",
    });
  }
  res.status(204).json({
    status: "success",
    message: "Product deleted successfully!",
  });
});
