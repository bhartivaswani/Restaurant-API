const express = require("express");
const {
  getMenu,
  updateItem,
  deleteItem,
  addItem,
} = require("../controllers/menuController");
const router = express.Router();

router.get("/", getMenu);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.post("/", addItem);

module.exports = router;
