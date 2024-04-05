const mongoose = require('mongoose')
const Cart = require('./cart')
const User = require('./user')

const OrderSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.ObjectId,
        ref: Cart
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: User
    },
    paymentId: {
        type: String,
        trim: true
    },
    paymentMode: {
        type: String,
        trim: true,
        enum: ["cod", "upi", "online", "wallets", "card"],
        default: "cod"
    },
    paymentStatus: {
        type: String,
        trim:true,
        enum: ["pending", "success","failed"],
        default: "pending"
    },
    orderStatus: {
        type: String,
        trim: true,
        enum: ["pending", "confirmed","canceled"],
        default: "pending"
    },
    deliveryStatus: {
        type: String,
        trim: true,
        enum: ["pending","processing", "delivered", "returned"],
        default: "pending"
    }
},{
    collection: "order",
    timestamps: true
})

module.exports = mongoose.model("Order", OrderSchema)