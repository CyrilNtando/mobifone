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
      required: [true, 'A product must have a brand']
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'A product must have Category']
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
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

productSchema.virtual('inStock').get(function() {
  return this.quantity > 0 ? true : false;
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
