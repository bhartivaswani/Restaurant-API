const express = require('express')
const { getMenu,updateItem,deleteItem,addItem } = require('../controllers/menuController')
const router = express.Router()

router.get('/', getMenu)

router.put('/', updateItem)

router.delete('/', deleteItem)

router.post('/', addItem)

module.exports = router