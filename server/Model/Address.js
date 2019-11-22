const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, 'type of address is required eg Business/residential'],
    enum: {
      values: ['Residential', 'Business'],
      message: 'Address is either: Residential or Business'
    }
  },
  street: {
    type: String,
    maxlength: [100, 'A street name must have less or equal 100 characters'],
    required: [true, 'An address must have a street name']
  },
  suburb: {
    type: String,
    maxlength: [100, 'A suburb name must have less or equal 100 characters'],
    required: [true, 'An address must have a suburb name']
  },
  town: {
    type: String,
    maxlength: [100, 'A town name must have less or equal 100 characters'],
    required: [true, 'An address must have a town/city']
  },
  postalCode: {
    type: Number,
    maxlength: [6, 'A postal code must have less or equal 6 characters'],
    required: [true, 'Postal code is required']
  },
  province: {
    type: String,
    required: [true, 'Province filed is required']
  },
  phoneNumber: {
    type: Number,
    minlength: [9, 'A phone number must have more or equal than 9 characters'],
    maxlength: [15, 'A phone number must have less or equal 15 characters'],
    required: [true, 'A Profile must have a phone Number']
  }
});
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
