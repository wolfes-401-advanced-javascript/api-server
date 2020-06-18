'use strict';

const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
  {
    name: {type: String, require: true},
    display_name: {type: String, require: true},
    description : {type: String, require: true}
  }
)

module.exports = mongoose.model('categories', categoriesSchema);