const UserModel = require("./../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')

//creating the jwt string for each new user
const signToken = id => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES
  })
}

//REGISTER
exports.signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  newUser = await UserModel.create({ name, email, password })

  const token = signToken(newUser._id)

  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    isAdmin: newUser.isAdmin,
    createdAt: newUser.createdAt,
    token
  })
})


//LOGIN 

exports.login = asyncHandler(async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  //check if email & password present in req.body
  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please enter you email and password!'
    })
  }

  //check if user exists with given email
  const user = await UserModel.findOne({ email })

  //check if the user exists & password matches
  if (!user || !(await user.matchPassword(password, user.password))) {
    return res.status(400).json({
      status: 'fail',
      message: 'Incorrect email or password!'
    })
  }

  const token = signToken(user._id)

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token,
    createdAt: user.createdAt,
  })
})

//get auth profile data for an authorized user

exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    });
  } else {
    res.status(404);
    throw new Error("USER NOT FOUND");
  }
})


//user profile update for an authorized user

exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      createdAt: updatedUser.createdAt,
      token: signToken(updatedUser._id)
    });

  }
  else {
    res.status(404);
    throw new Error("USER NOT FOUND");
  }
})




