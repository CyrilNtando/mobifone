const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', error => {
  console.log('UncaughtException Server is Shutting Down!!!!!');
  console.log(error.name, error.message);
  process.exit(1);
});
const app = require('./app');

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`PORT is running on PORT ${PORT}`);
});

process.on('unhandledRejection', error => {
  console.log('UncaughtException Server is Shutting Down!!!!!');
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});
