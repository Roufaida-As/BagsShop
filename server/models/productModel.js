//we will have some properties like : name, image, description, price, qtyInStock
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true, default: 0 },
  qtyInStock: { type: Number, required: true, default: 0 },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
