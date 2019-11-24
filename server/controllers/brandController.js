const db = require('../Model');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

exports.getAllBrands = catchAsync(async function(req, res) {
  const brands = await db.Brand.find();
  res.status(200).json({
    status: 'success',
    results: brands.length,
    data: {
      brands
    }
  });
});

exports.getBrand = catchAsync(async function(req, res, next) {
  const brand = await db.Brand.findById(req.params.id);
  if (!brand) return next(new appError('No Brand found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: {
      brand
    }
  });
});
exports.createBrand = catchAsync(async function(req, res) {
  const brand = await db.Brand.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      brand
    }
  });
});

exports.updateBrand = catchAsync(async function(req, res, next) {
  const brand = await db.Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    status: 'success',
    data: {
      brand
    }
  });
});

exports.deleteBrand = catchAsync(async function(req, res, next) {
  const brand = await db.Brand.findByIdAndDelete(req.params.id);
  if (!brand) return new appError('No Brand found with that ID', 404);
  res.status(204).json({
    status: 'success',
    data: null
  });
});
