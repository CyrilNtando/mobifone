const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Address = require('./Address');
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
  address: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Address'
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
userSchema.pre('save', async function(next) {
  //if password has not been modified move to next middleware
  if (!this.isModified('password')) return next();
  //encrypt password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //remove confirm password after validation
  this.passwordConfirm = undefined;
  next();
});
// before saving check if password has been changed
//then update changePasswordAt Property
userSchema.pre('save', function(next) {
  //if password is modified or document just created goto next middleware
  if (!this.isModified('password') || this.isNew) return next();
  //else if password has being changed set changedDate
  this.passwordChangedAt = Date.now() - 1000; //to make sure token is password has been changed
  next();
});
//adding an instance method to check if password is correct
//@return boolean
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
//adding instance method to check if password was changed  after token issued
userSchema.methods.changePasswordAfter = async function(jwtTimeStamp) {
  if (this.passwordChangedAt) {
    const changeTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return jwtTimeStamp < changeTimeStamp;
  }
  return false;
};
const User = mongoose.model('User', userSchema);
module.exports = User;
