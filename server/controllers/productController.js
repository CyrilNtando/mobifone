const db = require('../Model');
const Features = require('../utils/APIFeatures');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

exports.getAllProduct = catchAsync(async function(req, res) {
  //CUSTOM FILTERING,SORTING,FIELDS&PAGINATION
  const features = new Features(db.Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  //EXECUTE QUERY
  const products = await features.query;
  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products
    }
  });
});

exports.getProduct = catchAsync(async function(req, res, next) {
  const product = await db.Product.findById(req.params.id);
  if (!product) return next(new appError('No product found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
});
exports.createProduct = catchAsync(async function(req, res) {
  const product = await db.Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product
    }
  });
});

exports.updateProduct = catchAsync(async function(req, res, next) {
  const product = await db.Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //return document after update
    runValidators: true //run all validations before update
  });
  if (!product) next(new appError('No product found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
});

exports.deleteProduct = catchAsync(async function(req, res, next) {
  const product = await db.Product.findByIdAndDelete(req.params.id);
  if (!product) return next(new appError('No product found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null
  });
});
