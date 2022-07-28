const express = require('express');
const {getAllUsers, createUser} = require('../controllers/users.controller');
const router = express.Router();

//GET
router.get('/', getAllUsers)


//POST
router.post('/', createUser)


module.exports = router;