const router = require('express').Router();
const brandHandler = require('../controllers/brandController');
///api/v1/brand
router
  .route('/')
  .get(brandHandler.getAllBrands)
  .post(brandHandler.createBrand);

///api/v1/brand/:id
router
  .route('/:id')
  .get(brandHandler.getBrand)
  .patch(brandHandler.updateBrand)
  .delete(brandHandler.deleteBrand);

module.exports = router;
