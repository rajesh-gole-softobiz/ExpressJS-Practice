let users = require('../models/users.model')
const {v4: uuidv4} = require('uuid');


const getAllUsers = (req,res)=>{
    res.status(200).json({users})
}

const createUser = (req,res)=>{
    const newUser = {
    id:  uuidv4(),
    username : req.body.username,
    email : req.body.email
    }
    users.push(newUser)
    res.status(201).json({users})
}

module.exports = {getAllUsers,createUser};