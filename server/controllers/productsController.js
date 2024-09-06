const ProductModel = require('./../models/productModel')

// eliminating the need for repetitive try/catch blocks in each async route handler.
const asyncHandler = require("express-async-handler");

exports.getAllProducts =
    asyncHandler(async (req, res) => {
        const products = await ProductModel.find({});
        res.status(200).json({
            status: "success",
            length: products.length,
            data: {
                products
            }
        })
    })



// eliminating the need for repetitive try/catch blocks in each async route handler by using asyncHandler
exports.getProduct = asyncHandler(async (req, res) => {

    const product = await ProductModel.findById(req.params.id)
    if (!product) {
        return res.status(400).json({
            status: "fail",
            message: "product not found!"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            product
        }
    })
})