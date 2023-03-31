const express = require("express");
const router = express.Router();
const { getOrder,placeOrder, deleteOrder, updateOrder, updateStatus } = require("../controllers/orderController");

router.get("/:id", getOrder);
router.post("/", placeOrder);
router.delete("/:id/:oid", deleteOrder);
router.put("/", updateOrder);
router.put("/status/:id", updateStatus);

module.exports = router;
