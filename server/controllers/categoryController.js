const db = require('../Model');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

exports.createCategory = catchAsync(async function(req, res) {
  const category = await db.Category.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      category
    }
  });
});

exports.getAllCategories = catchAsync(async function(req, res) {
  const categories = await db.Category.find();
  res.status(200).json({
    status: 'success',
    results: categories.length,
    data: {
      categories
    }
  });
});

exports.getCategory = catchAsync(async function(req, res) {
  const category = await db.Category.findById(req.params.id);
  if (!category) return next(new appError('No category found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      category
    }
  });
});

exports.updateCategory = catchAsync(async function(req, res) {
  const category = await db.Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!category) return new appError('No category found with that ID', 404);
  res.status(200).json({
    status: 'success',
    data: {
      category
    }
  });
});

exports.deleteCategory = catchAsync(async function(req, res, next) {
  const category = await db.Category.findByIdAndDelete(req.params.id);
  if (!category) return next(appError('No category found with that ID', 404));
  res.status(204).json({
    status: 'success',
    data: null
  });
});
