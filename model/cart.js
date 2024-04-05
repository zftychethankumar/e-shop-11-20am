const mongoose = require('mongoose')
const User = require('./user')

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: User
    },
    products: {
        type: Array,
        default: []
    }
},{
    collection: "cart",
    timestamps: true
})

module.exports = mongoose.model("Cart", CartSchema)