const { StatusCodes } = require('http-status-codes')
const Cart = require('../model/cart')

// create
const createCart = async (req,res) => {
    try {
        let { products } = req.body
        let user = req.userId

        // create cart
        let data = await Cart.create({
            user,
            products
        })

        
        return res.status(StatusCodes.CREATED).json({ status: true, length: data.length, cart: data })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// read all
const allCart = async (req,res) => {
    try {
        let data = await Cart.find({})

        return res.status(StatusCodes.OK).json({ status: true, length: data.length, carts: data})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// read single
const singleCart = async (req,res) => {
    try {

        let id = req.params.id 

        let extCart = await Cart.findById(id)

            if(!extCart)
                return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `Requested cart id not found`})


        return res.status(StatusCodes.OK).json({ status: true, cart: extCart })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// update
const updateCart = async (req,res) => {
    try {
        let id = req.params.id 

        let extCart = await Cart.findById(id)

            if(!extCart)
                return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `Requested cart id not found`})

        await Cart.findByIdAndUpdate({_id: id}, req.body)

        return res.status(StatusCodes.ACCEPTED).json({ status: true, msg: "cart updated successfully"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// delete 
const deleteCart = async (req,res) => {
    try {
        let id = req.params.id 

        let extCart = await Cart.findById(id)

            if(!extCart)
                return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `Requested cart id not found`})

        await Cart.findByIdAndDelete({_id: id})

        return res.status(StatusCodes.ACCEPTED).json({ status: true, msg: "cart deleted successfully"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}

module.exports = { createCart, allCart, singleCart, updateCart, deleteCart }