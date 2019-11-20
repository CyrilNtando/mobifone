const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const globalErrorHandler = require('./controllers/errorController');
const appError = require('./utils/appError');
const userRoute = require('./routes/UserRoutes');
/***********************************
 MIDDLEWARE
******************************* */
//Body Parser Reading Data from req.body
app.use(express.json({ limit: '3000kb' })); //parse data less than 3mb

//SECURITY:
// 1. Set Headers
app.use(helmet());
//2. Data sanitization (prevent noSQL injection)
app.use(mongoSanitize());
//3. Data sanitization (Against XSS)
app.use(xss());
//Prevent Parameter Pollution
// app.use(hpp({
//     whitelist[]
// }));

/*********************
MOUNTING ROUTES
******************** */
app.use('/api/v1/users', userRoute);
/*********************
GLOBAL HANDLERS 
******************** */
//Handles all invalid routes
app.all('*', (req, res, next) => {
  next(new appError(`cannot find ${req.originalUrl} on this server `, 404));
});
//All errors are handle in this globalErrorHandler function
app.use(globalErrorHandler);
module.exports = app;
