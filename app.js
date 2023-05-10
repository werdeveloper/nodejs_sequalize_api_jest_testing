const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

// const cookieParser = require('cookie-parser');
// const errorhandler = require("./middleware/error");

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(cookieParser());

// create a write stream (in append mode)
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
// app.use(morgan('combined', { stream: accessLogStream }));    // setup the logger

app.use(morgan('dev')); // Log on terminal

// Import Routes 
const admin = require("./routes/adminRoute");
app.use("/api/v1", admin);

module.exports = app;
