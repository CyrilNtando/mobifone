const sendError = (err, res) => {
  console.log(error, err.stack);
  //Operational, trusted error: send message to client
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
/***error handling middleware*****/
module.exports = (err, req, res, next) => {
  //set Defaults
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  //clone error object
  let error = Object.create({}, err, { message: err.message });
  sendError(error, res);
};
