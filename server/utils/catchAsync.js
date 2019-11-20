//is a global catch for async function middleware
module.exports = fn => {
  //returns an anonymous function
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      //go to next middleware(global error handler)
      next(error);
    });
  };
};
