const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address']
  },
  role: {
    type: String,
    enum: ['user', 'admin'], //only accept these inputs
    default: 'user'
  },
  photo: {
    type: String //profile image Url
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    maxlength: 8,
    select: false // does not send password to user
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide a password'],
    maxlength: 8,
    validate: {
      //check if confirm value matches with password value
      validator: function(value) {
        return value === this.password;
      },
      message: 'Passwords are not the same'
    }
  },
  cart: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product'
    }
  ],
  order: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Order'
    }
  ],
  active: {
    //disable and enable account
    type: Boolean,
    default: true,
    select: false // does not send active to user
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date
});

const User = mongoose.model('User', userSchema);
module.exports = User;
