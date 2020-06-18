'use strict';

const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema(
  {
    category: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true}
  }
)

module.exports = mongoose.model('products', productsSchema);
