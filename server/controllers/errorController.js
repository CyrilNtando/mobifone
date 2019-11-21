const appError = require('../utils/appError');
//ERROR MIDDLEWARE
module.exports = (err, req, res, next) => {
  //set Defaults
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  //clone error object
  let error = Object.assign({}, err, { message: err.message });
  if (error.name === 'castError') error = handleCastErrorDB(error);
  if (error.code === 11000) error = handleDuplicateFields(error);
  if (error.name === 'validationError') error = handleValidationErrorDB(error);
  if (error.name === 'JsonWebTokenError') error = handleJWTError(error);
  if (error.name === "'JsonExpiredError'") error = handleJWTExpiredError(error);
  sendError(error, res);
};

//ERROR HANDLERS
//handles invalid fields/ids
const handleCastErrorDB = error => {
  const message = `Invalid ${error.path}: ${error.value}`;
  return new appError(message, 400);
};
//handle duplicate fields
const handleDuplicateFields = error => {
  const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value ${value}. Please use another value`;
  return new appError(message, 400);
};
//handle validation error
const handleValidationErrorDB = error => {
  const errors = Object.values(error.errors).map(el => el.message);
  const message = `Invalid input data: ${errors.join('. ')}`;
  return new appError(message, 400);
};
//handles json web token error
const handleJWTError = error => new appError('Invalid Token. Please log in again', 401);
//handle json expired token error
const handleJWTExpiredError = error =>
  new AppError('Your token has expired! Please log in again', 401);
//SEND ERROR TO CLIENT
const sendError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    //Programing or other unknown error: don't leak error details
  } else {
    //generic error
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};
