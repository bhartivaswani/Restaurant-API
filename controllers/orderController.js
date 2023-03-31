const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Order = require("../models/orderModel");
const Menu = require("../models/menuModel");

// @desc Get Order by user id
// @route GET /api/order/:id
// @access Public
const getOrder = asyncHandler(async (req, res) => {});

// @desc Placing a new order
// @route POST /api/order
// @access Public
const placeOrder = asyncHandler(async (req, res) => {});

// @desc Deleting an order
// @route DELETE /api/order/:id/:oid
// @access Public
const deleteOrder = asyncHandler(async (req, res) => {});

// @desc updateOrder
// @route PUT /api/order/:id/:oid
// @access Public
const updateOrder = asyncHandler(async (req, res) => {});

module.exports = {
  getOrder,
  placeOrder,
  deleteOrder,
  updateOrder,
};
