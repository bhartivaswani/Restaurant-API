const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Order = require('../models/orderModel')
const Menu = require('../models/menuModel')

const getMenu = (req,res) => {
    res.status(200).json({message:"Menu", search: `${req.query.search}`, sort: `${req.query.sort}`, filter: `${req.query.filter}`})
}

const updateItem = (req,res)=>{
    res.status(200).json({message:"Update", price: `${req.query.price}`, available: `${req.query.available}`, servingSize: `${req.query.servingSize}`})
}

const deleteItem = (req,res)=>{
    res.status(200).json({message:"Delete", name: `${req.query.name}`})
}

const addItem = (req,res)=>{
    res.status(200).json({message:"Add", name: `${req.body.name}`,type: `${req.body.type}`, price: `${req.body.price}`, available: `${req.body.available}`, servingSize: `${req.body.servingSize}`})
}

module.exports = {
    getMenu,
    updateItem,
    deleteItem,
    addItem
}