//is a global catch for async function middleware
module.exports = fn => {
  //returns an anonymous function
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      console.log(error);
      next(error);
    });
  };
};
