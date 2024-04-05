const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true,
            trim: true
        },
        image: {
            type: Object,
            default: {
                path: "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            }
        },
        desc: {
            type: String,
            required: true,
            trim: true
        },
        price:{
            type: Number,
            required:true
        },
        SKU: {  // stock keeping unit
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            trim:true
        },
        discount: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },{
        collection: "products",
        timestamps: true
    })

    module.exports = mongoose.model("Product", ProductSchema)