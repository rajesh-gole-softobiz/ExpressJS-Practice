const express = require('express');
const {getAllUsers, createUser, updateUser, deleteUser} = require('../controllers/users.controller');
const router = express.Router();

//GET
router.get('/', getAllUsers)


//POST
router.post('/', createUser)

//PUT
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)



module.exports = router;