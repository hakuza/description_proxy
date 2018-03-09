const mongoose = require('mongoose');
const model = require('../index.js')
const findAll = function (callback) {
  model.find({},callback)
}


module.exports = findAll