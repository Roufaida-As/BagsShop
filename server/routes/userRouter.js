const express = require("express");
const userRoute = express.Router();
const usersController = require("./../controllers/usersController");

// For all users
userRoute.route("/").get(usersController.getAllUsers);

// For each user /users/:id
userRoute
  .route("/:id")
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = userRoute;
