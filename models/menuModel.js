const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    type:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    servingSize: {
        type: Number
    }
})

module.exports = mongoose.model('Menu', menuSchema)