const mongoose = require('mongoose');

OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'An Order must belong to a user']
  },
  product: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    }
  ],
  paymentMethod: { type: String, required: [true, 'Method used for Payment'] },
  DatePlaced: {
    type: Date,
    default: Date.now()
  },
  DatePaid: {
    type: Date,
    default: Date.now()
  },
  orderStatus: {
    type: String,
    required: ''
  }
});
//Adding validation to the embedded (Product) property
profileSchema.path('address').validate(function(product) {
  if (!product) return false;
  else if (product.length === 0) return false;
  else return true;
}, 'An Order must have one or more Products ');
//define in schema that we want virtual properties in object / JSON
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });
//virtual property that return number of item bought
productSchema.virtual('Item').get(function() {
  return this.product.length;
});
//virtual property that return total price
productSchema.virtual('TotalPrice').get(function() {
  return null;
});

// Prevent DatePLaced and DatePaid from been updated
