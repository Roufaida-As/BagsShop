//we will have some properties like : name, image, description, price, qtyInStock
const mongoose = require("mongoose");

const prodcutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    qtyInStock: { type: Number, required: true, default: 0 },

});

const ProductModel = mongoose.model('Product', prodcutSchema)

module.exports = ProductModel