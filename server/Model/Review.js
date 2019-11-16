const mongoose = require('mongoose');

reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'review cannot be empty']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Review must belong to a product']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
//to prevent duplicate reviews
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
