/** @format */

var express = require('express');
var routes = express.Router();
var service = require('./index.service');
routes.get('/getData', function (req, res) {
  service.getData().then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.send(data);
    }
  });
});
routes.post('/CreateNew', function (req, res) {
  service.create(req.body).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.send(data);
    }
  });
});

module.exports = routes;
