const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Order = require('../models/orderModel')
const Menu = require('../models/menuModel')

// @desc User Login
// @route POST /api/user/login
// @access Public
const login = asyncHandler( async (req,res) => {
    const {email,password}=req.body;
    //check if user exists
    const user=users.find(user=>user.email===email && user.password===password);
    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }
    return res.json({ message: 'Login successful'});
})

// @desc User Singup
// @route POST /api/user/signup
// @access Public
const signup = asyncHandler( async (req,res) => {

})

// @desc Update user information
// @route PUT /api/user/:id
// @access Public
const updateUser = asyncHandler( async (req,res) => {

})

// @desc Delete User
// @route DELETE /api/user/:id
// @access Public
const deleteUser = asyncHandler( async (req,res) => {

})

module.exports = {
    login,
    signup,
    updateUser,
    deleteUser
}