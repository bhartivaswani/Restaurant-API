const express = require("express");
const router = express.Router();
const { getOrder,placeOrder, deleteOrder, updateOrder } = require("../controllers/orderController");

router.get("/:id", getOrder);
router.post("/", placeOrder);
router.delete("/:id/:oid", deleteOrder);
router.put("/:id/:oid", updateOrder);

module.exports = router;
