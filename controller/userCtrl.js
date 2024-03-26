const { StatusCodes } = require('http-status-codes')
const UserModel = require('../model/user')

// read all user info except admin 
const readAllusers = async (req,res) => {
    try {
        res.json({ msg: " read all users "})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message })
    }
}

module.exports = { readAllusers }