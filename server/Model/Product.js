const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [100, 'A product must have less or equal 100 characters'],
      required: [true, 'Product must have a name']
    },
    description: {
      type: String,
      maxlength: [1000, 'A product must have less or equal 1000 characters'],
      required: [true, 'Product must have description']
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price']
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: 'Brand',
      required: [true, 'A product must have a brand name']
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'A product must belong to a Category']
    },
    quantity: {
      type: Number,
      default: 0
    },
    images: {
      type: Array
    }
  },
  {
    timestamps: true
  }
);

//to Prevent duplicate Reviews
productSchema.index({ brand: 1, category: 1 }, { unique: true });
//define in schema that we want virtual properties in object / JSON
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });
//virtual properties checks if product is in stock and return a boolean
productSchema.virtual('inStock').get(function() {
  return this.quantity > 0 ? true : false;
});

//any query that start with find
productSchema.pre(/^find/, function() {
  this.populate({
    path: 'brand',
    select: 'name'
  }).populate({
    path: 'category',
    select: 'name'
  });
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
