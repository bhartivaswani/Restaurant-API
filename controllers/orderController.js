const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

// @desc Get Order by user id
// @route GET /api/order/:id
// @access Public
const getOrder = asyncHandler(async (req, res) => {
  if (req.params.id === undefined) {
    const order = await Order.find();
    res.status(200).json(order);
  }

  const orderItem = await Order.findById(req.params.id);

  if (!orderItem) {
    res.status(400);
    throw new Error("Order not found");
  }

  res.status(200).json(orderItem);
});

// @desc Placing a new order
// @route POST /api/order
// @access Public
const placeOrder = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (
    req.body.userId === undefined ||
    req.body.orderStatus === undefined ||
    req.body.address === undefined ||
    req.body.price === undefined ||
    req.body.paymentMethod === undefined ||
    req.body.paymentStatus === undefined
  ) {
    res.status(400);
    throw new Error("Incomplete request");
  }
  const temp = {
    userId: req.body.userId,
    orderStatus: req.body.orderStatus,
    address: req.body.address,
    price: req.body.price,
    paymentMethod: req.body.paymentMethod,
    paymentStatus: req.body.paymentStatus,
    order: [
      {
        name: req.body.ordername,
        price: req.body.orderprice,
        quantity: req.body.orderquantity,
      },
    ],
  };
  const order = await Order.create(temp);
  res.status(201).json(order);
});

// @desc Deleting an order
// @route DELETE /api/order/:id/:oid
// @access Public
const deleteOrder = asyncHandler(async (req, res) => {
  const orderItem = await Order.findById(req.params.oid);

  if (!orderItem) {
    res.status(400);
    throw new Error("Bad Request");
  }

  if (orderItem.userId !== req.params.id) {
    res.status(400);
    throw new Error("Bad Request");
  }

  const deleteItem = await Order.findByIdAndRemove(req.params.id);

  res.status(200).json(deleteItem);
});

// @desc updateOrder
// @route PUT /api/order/
// @access Public
const updateOrder = asyncHandler(async (req, res) => {
  const orderItem = await Order.findById(req.body.oid);

  if (!orderItem) {
    res.status(400);
    throw new Error("Bad Request");
  }

  if (orderItem.userId !== req.body.id) {
    res.status(400);
    throw new Error("Bad Request");
  }

  const updatedItem = await Order.findByIdAndUpdate(req.body.oid, req.body, {
    new: true,
  });

  res.status(200).json(updatedItem);
});

// @desc updateOrder
// @route PUT /api/order/status/:id
// @access Private
const updateStatus = asyncHandler(async (req, res) => {
  const orderItem = await Order.findById(req.body.oid);

  if (!orderItem) {
    res.status(400);
    throw new Error("Bad Request");
  }

  if (req.params.id !== "admin") {
    res.status(400);
    throw new Error("Bad Request");
  }

  const updatedItem = await Order.findByIdAndUpdate(req.body.oid, req.body, {
    new: true,
  });

  res.status(200).json(updatedItem);
});

module.exports = {
  getOrder,
  placeOrder,
  deleteOrder,
  updateOrder,
  updateStatus,
};
