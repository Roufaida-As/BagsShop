//we will have some properties for each user like : name , email , password , confirmPassword....

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },

    },
    //tracking of when documents are created and last updated
    //Mongoose will automatically set or update the createdAt and updatedAt fields
    { timestamps: true }
);

const userModel = mongoose.model('User', userSchema)
module.exports = userModel