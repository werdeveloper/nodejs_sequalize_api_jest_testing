const app = require('./app');
const dotenv = require('dotenv');
const db = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to Uncaught Exception`);
   process.exit(1);
 });


/* DB_URI some database url wrong so it will produce an error */
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to Unhandled Promise Rejection`);
   server.close(() => {
     process.exit(1);
   });
 });

// config 
dotenv.config({path: "./config/config.env"});

const server = app.listen(process.env.PORT, async () => {
   let host = process.env.HOST;
   let port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
