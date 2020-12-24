/** @format */

var Q = require('q');
var DBModel = require('./index.model');

var service = {};
service.getData = getData;
service.create = create;
function getData() {
  var deferred = Q.defer();
  DBModel.find({}, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}

function create(body) {
  var deferred = Q.defer();
  console.log(body);
  DBModel.create(body, function (err, doc) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(doc);
  });
  return deferred.promise;
}

module.exports = service;
