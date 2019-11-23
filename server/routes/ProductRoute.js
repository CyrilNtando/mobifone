const express = require('express');
const authHandler = require('../controllers/authController');
1;
const productHandler = require('../controllers/productController');
const router = express.Router();

///api/v1/product/
router
  .route('/')
  .get(productHandler.getAllProduct)
  .post(authHandler.protect, productHandler.createProduct);
///api/v1/product/:id
router
  .route('/:id')
  .get(productHandler.getProduct)
  .patch(productHandler.updateProduct)
  .delete(productHandler.deleteProduct);

module.exports = router;
