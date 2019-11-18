class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    //if statusCode start with 4 is a fail request else is an error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // Operational, trusted error: send message to client
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
