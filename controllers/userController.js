const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Order = require('../models/orderModel')
const Menu = require('../models/menuModel')

// @desc User Login
// @route POST /api/user/login/:id
// @access Public
const login = asyncHandler( async (req,res) => {
    if(req.params.password===undefined || req.params.id == undefined){
        res.status(400)
        throw new Error('Incomplete request')
    }

    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    if(req.params.password===user.password){
        res.status(200).json({id: user.id, status: "loggedin"})
    }
    else{
        res.status(200).json({id: user.id, status: "login failed"})
    }
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