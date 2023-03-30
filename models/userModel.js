const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter name']
    },
    email:{
        type: String,
        required: [true, 'Please enter email']
    },
    contactNo: {
        type: String,
        required: [true, 'Please enter contact number']
    },
    password: {
        type: String,
        required: [true, 'Please enter password']
    }
})

module.exports = mongoose.model('users', userSchema)