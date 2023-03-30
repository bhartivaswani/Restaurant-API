const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Order = require('../models/orderModel')
const Menu = require('../models/menuModel')


// @desc Get Menu
// @route GET /api/menu
// @access Public
const getMenu = asyncHandler( async (req,res) => {
    const menus = await Menu.find()
    res.status(200).json(menus)
})

// @desc Update Item
// @route PUT /api/menu/id
// @access Public
const updateItem = asyncHandler( async (req,res)=>{
    const menuItem = await Menu.findById(req.params.id)
    
    if(!menuItem){
        res.status(400)
        throw new Error('Item not found')
    }

    const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {new:true,})
    res.status(200).json(updatedItem)
})

// @desc Delete Menu
// @route DELETE /api/menu/id
// @access Public
const deleteItem = asyncHandler( async (req,res)=>{
    const menuItem = await Menu.findById(req.params.id)
    
    if(!menuItem){
        res.status(400)
        throw new Error('Item not found')
    }

    const deleteItem = await Menu.findByIdAndRemove(req.params.id)

    res.status(200).json({id : req.params.id})
})

// @desc Set Menu
// @route POST /api/menu
// @access Public
const addItem = asyncHandler( async (req,res)=>{
    if(req.body.name===undefined || req.body.type===undefined || req.body.price===undefined || req.body.available===undefined || req.body.servingSize===undefined){
        res.status(400)
        throw new Error('Incomplete request')
    }

    const menu = await Menu.create({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        available: req.body.available,
        servingSize: req.body.servingSize
    })

    res.status(201).json(menu)
})

module.exports = {
    getMenu,
    updateItem,
    deleteItem,
    addItem
}