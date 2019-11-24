const router = require('express').Router();
const authHandler = require('../controllers/authController');
const productHandler = require('../controllers/productController');

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
