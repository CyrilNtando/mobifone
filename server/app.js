const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
/*********************************************************************************** *
MIDDLEWARES
*********************************************************************************** */
//Body Parser Reading Data from req.body
app.use(express.json({ limit: '3000kb' })); //parse data less than 3mb

//SECURITY
//Set Headers
app.use(helmet());
//Data sanitization (prevent noSQL injection)
app.use(mongoSanitize());
//Data sanitization (Against XSS)
app.use(xss());
//Prevent Parameter Pollution
// app.use(hpp({
//     whitelist[]
// }));

/*********************************************************************************** *
MOUNTING ROUTES
*********************************************************************************** */

//global route
app.all('*', (req, res, next) => {
  next(`cannot find ${req.originalUrl} on this server `);
});
module.exports = app;
