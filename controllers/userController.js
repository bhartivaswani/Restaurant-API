const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Order = require("../models/orderModel");
const Menu = require("../models/menuModel");

// @desc User Login
// @route POST /api/user/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  const user = await User.find({email:email, password:password});
  if (user.length == 0) {
    res.status(404)
    throw new Error("User not found");
  }
  return res.json({ message: "Login successful", id: user[0]._id});
});

// @desc User Singup
// @route POST /api/user/signup
// @access Public
const signup = asyncHandler(async (req, res) => {
  const { name, email, contactno, password } = req.body;
  //Creating new user
  const newUser = { 
    name: name, 
    email: email, 
    contactNo: contactno, 
    password: password };
  const temp = await User.create(newUser);
  return res.json({ message: "User account created successfully", id: temp.id });
});

// @desc Update user information
// @route PUT /api/user/:id
// @access Public
const updateUser = asyncHandler(async (req, res) => {
  const { email, oldpassword, newpassword } = req.body;
  const user = await User.find({email: email, password: oldpassword}).exec();
  if (user.length==0) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  const temp = {
    name: user.name,
    email: user.email,
    contactNo: user.contactNo,
    password: newpassword
  }

  await User.findByIdAndUpdate(req.params.id, temp)
  return res.status(200).json({ userId: user.id, message: "Password Changed Successfully"});
});

// @desc Delete User
// @route DELETE /api/user/:id
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = User.find({email:email, password:password});
  if (user.length==0) {
    res.status(401).json({ message: "Invalid Credentials" });
  } 
  await User.findByIdAndRemove(req.params.id);
  return res.json({ message: "Account Deleted Successfully" });
});

module.exports = {
  login,
  signup,
  updateUser,
  deleteUser,
};
