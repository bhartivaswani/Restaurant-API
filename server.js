const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000

const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

connectDB()

const app = express()

app.user('/api/user', require('./routes/userRoutes'))
app.user('/api/order', require('./routes/orderRoutes'))
app.user('/api/menu', require('./routes/menuRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))