/** @format */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparse = require('body-parser');
var mongoose = require('mongoose');

var controller = require('./Routes/index.controller');

var app = express();
app.use(
  bodyparse.urlencoded({
    extended: true,
  })
);
app.use(bodyparse.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type: application/json'
  );
  next();
});
app.use('/', controller);

mongoose
  .connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB Connected...');
    app.listen(3000, () => {
      console.log('sever is connected localhost:3000');
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
