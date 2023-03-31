const express = require("express");
const router = express.Router();
const {} = require("../controllers/orderController");

router.get("/:id", getOrder);
router.post("/", placeOrder);
router.delete("/:id/:oid", deleteOrder);
router.put("/:id/:oid", updateOrder);

module.exports = router;
