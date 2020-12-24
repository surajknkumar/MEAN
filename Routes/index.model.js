/** @format */

var mongoose = require('mongoose');

var mongoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {type: Date, required: true},
});

module.exports = mongoose.model('mongoSchema', mongoSchema);
