//we will have some properties for each "order Item" like :name , quantity,image,price..
//also properties for the whole order like : user(name,email, adress), order Items (array) , payment method , total price...

const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
});

const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
        orderItems: [orderItemSchema],
        userAdress: {
            city: { type: String, required: true },
            address: { type: String, required: true },
            phoneNumber: { type: Number, required: true },
            division: { type: String, required: true },
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        //show the payment state 
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },

    },
    //tracking of when documents are created and last updated
    //Mongoose will automatically set or update the createdAt and updatedAt fields
    { timestamps: true }
);

const orderModel = mongoose.model('Order', orderSchema)
module.exports = orderModel