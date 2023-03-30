const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000

const connectDB = require('./config/db')

connectDB()

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))