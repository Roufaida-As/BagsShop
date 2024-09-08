//we will have some properties for each user like : name , email , password , confirmPassword....
const bcrypt = require('bcryptjs')
const validator = require('validator')
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, validate: [validator.isEmail, 'Please enter a valid email.'] },
        password: {
            type: String, required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    //tracking of when documents are created and last updated
    //Mongoose will automatically set or update the createdAt and updatedAt fields
    { timestamps: true }
);

//USING DOCUMENT MIDLLEWARE TO ENCRYPT THE PASSWORD BEFORE SAVING IT
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    //async version of hash method
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

//validate password match or not for login 
userSchema.methods.matchPassword = async function (pswd, pswdDB) {
    return await bcrypt.compare(pswd, pswdDB);
};

module.exports = mongoose.model('User', userSchema)