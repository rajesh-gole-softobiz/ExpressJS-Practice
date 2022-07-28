const express = require('express');
const getAllUsers = require('../controllers/users.controller');
const router = express.Router();

//GET
router.get('/', getAllUsers)

module.exports = router;