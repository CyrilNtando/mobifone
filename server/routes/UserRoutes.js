const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
//user signUp route
router.post('/signUp', authController.signUp);
//user signIn route
router.post('/signIn', authController.signIn);

module.exports = router;
