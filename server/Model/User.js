const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
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
//before saving checked is password is being update
//@modified encrypt password else move to next middleware
userSchema.pre('save', async function() {
  //if password has not been modified move to next middleware
  if (!this.isModified('password')) return next();
  //encrypt password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //remove confirm password after validation
  this.passwordConfirm = undefined;
  return next();
});

//adding an instance method to check if password is correct
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
