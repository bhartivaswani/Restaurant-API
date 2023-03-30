const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Please enter name']
    },
    orderStatus: {
        type: String,
        required: [true, 'Please enter type']
    },
    order: [
        {
            name: {
                type: String,
                required: [true, 'Please enter type']
            },
            quantity: {
                type: Number,
                required: [true, 'Please enter type']
            },
            price: {
                type: Number,
                required: [true, 'Please enter type']
            },
        }
    ],
    address: {
        type: String,
        required: [true, 'Please enter type']
    },
    price: {
        type: Number,
        required: [true, 'Please enter type']
    },
    paymentMethod: {
        type: String,
        required: [true, 'Please enter type']
    },
    paymentStatus: {
        type: Boolean,
        required: [true, 'Please enter type']
    }
})

module.exports = mongoose.model('Order', orderSchema)