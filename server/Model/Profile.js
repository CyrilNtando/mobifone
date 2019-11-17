const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  handle: {
    type: String,
    required: ['true', 'Profile Must have a Handle']
  },
  address: [
    {
      address: {
        type: String,
        required: [true, 'type of address is required eg Business/residential']
      },
      street: {
        type: String,
        required: [true, 'An address must have a street name']
      },
      suburb: {
        type: String,
        required: [true, 'An address must have a suburb name']
      },
      town: {
        type: String,
        required: [true, 'An address must have a town/city']
      },
      postalCode: {
        type: String,
        required: [true, 'Postal code is required']
      },
      province: {
        type: String,
        required: [true, 'Province filed is required']
      }
    }
  ],
  phoneNumber: {
    type: Number,
    min: 7,
    max: 20,
    required: [true, 'A Profile must have a phone Number']
  }
});
//Adding validation to the embedded (Address)  property
profileSchema.path('address').validate(function(address) {
  if (!address) return false;
  else if (address.length === 0) return false;
  else return true;
}, 'Please provide you Address');
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
