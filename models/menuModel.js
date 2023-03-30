const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter name']
    },
    type:{
        type: String,
        required: [true, 'Please enter type']
    },
    price: {
        type: Number,
        required: [true, 'Please enter price']
    },
    available: {
        type: Boolean,
        required: [true, 'Please enter availability']
    },
    servingSize: {
        type: Number
    }
})

module.exports = mongoose.model('Menu', menuSchema)