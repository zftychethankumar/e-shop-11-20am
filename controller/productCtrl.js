const { StatusCodes } = require('http-status-codes')
const Product = require('../model/product')


// add product
const createProduct = async (req,res) => {
    try {

        const { title, image, desc,price, SKU, category, discount } = req.body

        // check the product exists or not
        let extPro = await Product.findOne({title})
            if(extPro)
                return res.status(StatusCodes.CONFLICT).json({ status:false, msg: `Product title already exists.`})

        // create a product
        let newProduct = await Product.create({
            title,
            image,
            desc,
            price,
            SKU,
            category,
            discount
        })

        res.status(StatusCodes.CREATED).json({ status: true, msg: "product created successfully", product: newProduct })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// read all products
const readAllProduct = async (req,res) => {
    try {
        let data = await Product.find()

        res.status(StatusCodes.OK).json({ status: true, length: data.length, products: data })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// read single product
const readSingleProduct = async (req,res) => {
    try {
        // read router params
        let id = req.params.id

        // find the product by ref id
        let data = await Product.findById(id)
            if(!data)
                return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `requested product id not found` })

        
        res.status(StatusCodes.OK).json({ status: true, product: data })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// update product
const updateProduct = async (req,res) => {
    try {
        // read router params
        let id = req.params.id

        // find the product by ref id
        let data = await Product.findById(id)
            if(!data)
                return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `requested product id not found` })

        // update
        await Product.findByIdAndUpdate({_id: id}, req.body)
        
        res.status(StatusCodes.ACCEPTED).json({ status: true, msg: "Product updated Successfully"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}
// delete product 
const deleteProduct = async (req,res) => {
    try {
         // read router params
         let id = req.params.id

         // find the product by ref id
         let data = await Product.findById(id)
             if(!data)
                 return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `requested product id not found` })
 
         // delete
         await Product.findByIdAndDelete({_id: id})
         
         res.status(StatusCodes.ACCEPTED).json({ status: true, msg: "Product deleted Successfully"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}

module.exports = { createProduct, readAllProduct, readSingleProduct, updateProduct, deleteProduct}