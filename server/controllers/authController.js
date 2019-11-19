const db = require('../Model');
const catchAsync = require('../utils/catchAsync');
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
  const user = await db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password2
  });

  createSendToken(user, 201, res);
});
