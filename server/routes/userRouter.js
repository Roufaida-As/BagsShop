const express = require("express");
const userRoute = express.Router();
const usersController = require("./../controllers/usersController");
const protect = require("./../protectingRoutes");


userRoute.route('/signup').post(usersController.signup)
userRoute.route('/login').post(usersController.login)
userRoute.route('/profile')
    .get(protect, usersController.getUserProfile)
    .patch(protect, usersController.updateUserProfile)


module.exports = userRoute;
