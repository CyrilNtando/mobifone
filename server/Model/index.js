const mongoose = require('mongoose');

//set debug
mongoose.set('debug', true);
//set mongoose to allow promises
mongoose.Promise = Promise;
//connect to database
mongoose.connect(process.env.DATABASE_LOCAL, {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false // find and modify is deprecated
});

module.exports.User = require('./User');
module.exports.Address = require('./Address');
module.exports.Category = require('./Category');
module.exports.Product = require('./Product');
// module.exports.Review = require('./Review');
// module.exports.Order = require('./Order');
