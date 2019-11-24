const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['Brand Name is Required'],
    unique: true,
    maxlength: [100, 'A Brand name must have less or equal 100 characters']
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
