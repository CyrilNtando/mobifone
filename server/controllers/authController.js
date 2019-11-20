const db = require('../Model');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');
const jwt = require('jsonwebtoken');

/******************CreateToken*************************/
//sign in a token  and return a token
const signToken = userId =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
//call signToken and send created token  to user
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  //create cookie
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
  });
  //remove password from user document
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};
/******************End of CreateToken*************************/

//User signUp handler
exports.signUp = catchAsync(async function(req, res, next) {
  const newUser = await db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password2
  });

  createSendToken(newUser, 201, res);
});

exports.signIn = catchAsync(async function(req, res, next) {
  const { email, password } = req.body;
  //check if email and password exists
  if (!email || !password) return next(new appError('Please provide email and password', 400));
  //check if user exists and password is correct
  //@return user and add password field
  const user = await db.User.findOne({ email: email }).select('+password');
  //if user not not found and password is incorrect
  //@return next middleware with error
  if (!user || (await user.correctPassword(password, user.password))) {
    return next(new appError('Incorrect email or password', 401));
  }
  //if everything is ok send token to client
  createSendToken(user, 200, res);
});
