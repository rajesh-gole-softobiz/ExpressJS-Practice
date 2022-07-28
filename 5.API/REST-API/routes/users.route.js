const express = require('express');
const {getAllUsers, createUser, updateUser} = require('../controllers/users.controller');
const router = express.Router();

//GET
router.get('/', getAllUsers)


//POST
router.post('/', createUser)

//PUT
router.put('/:id', updateUser)



module.exports = router;