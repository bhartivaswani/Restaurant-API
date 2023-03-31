const express = require('express')
const router = express.Router()
const { login, signup, updateUser, deleteUser } = require('../controllers/userController')

router.post('/login', login)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/signup', signup)

module.exports = router