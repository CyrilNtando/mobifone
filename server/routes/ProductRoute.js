const express = require('express');
const authHandler = require('../controllers/authController');
1;
const productHandler = require('../controllers/productController');
const router = express.Router();

router
  .route('/')
  .get(productHandler.getAllProduct)
  .post(authHandler.protect, productHandler.createProduct);

router.route('/:id').get(productHandler.getProduct);

module.exports = router;
