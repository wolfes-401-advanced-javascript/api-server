'use strict';

const productSchema = require('../lib/models/products/products-schema');

const categorySchema = require('../lib/models/categories/categories-schema')

const Mongo = require('../lib/models/mongo.js');


module.exports = function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case 'products':
      req.model = new Mongo(productSchema);
      next();
      break;
      case 'categories':
        req.model = new Mongo(categorySchema);
        next();
        break;
        default:
          next('Wrong Model, dude!');
          break;
  }
}