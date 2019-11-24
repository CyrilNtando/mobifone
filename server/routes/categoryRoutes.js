const router = require('express').Router();
const categoryHandlers = require('../controllers/categoryController');

//api/v1/category/
router
  .route('/')
  .get(categoryHandlers.getAllCategories)
  .post(categoryHandlers.createCategory);
//api/v1/category/:id
router
  .route('/:id')
  .get(categoryHandlers.getCategory)
  .patch(categoryHandlers.updateCategory)
  .delete(categoryHandlers.deleteCategory);

module.exports = router;
