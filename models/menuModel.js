const mongoose = request('mongoose')

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
        type: Int32,
        required: [true, 'Please enter price']
    },
    available: {
        type: Boolean,
        required: [true, 'Please enter availability']
    },
    servingSize: {
        type: Int32
    }
})

module.exports = mongoose.model('Menu', menuSchema)