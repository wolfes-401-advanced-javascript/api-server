'use strict';

const express = require('express');
const router = express.Router();

const productSchema = require('../lib/models/products/products-schema');

const categorySchema = require('../lib/models/categories/categories-schema')

const Mongo = require('../lib/models/mongo.js');

function getModel(req, res, next) {
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

router.param('model', getModel);

router.post('/:model', postNew);
router.get('/:model', getAll);
router.get('/:model/:id', getById);
router.put('/:model/:id', updateById);
router.delete('/:model/:id', deleteById);

function postNew(req, res) {
  req.model.create(req.body)
    .then(results => res.send('Product saved!', results))
    .catch(err => res.send(err));
  
}

function getAll(req, res) {
  req.model.read()
    .then(results => res.send(results))
    .catch(err => res.send(err));
}

function getById(req, res) {
  req.model.read(req.params.id)
    .then(results => res.send(results)) 
    .catch(err => res.send(err));
}

function updateById(req, res) {
  req.model.update(req.params.id, req.body)
    .then(res.send(`Updated ${req.params.id}`))
    .catch(err => res.send(err));
}

function deleteById(req, res) {
  req.model.delete(req.params.id)
    .then(res.send(`Product ID: ${req.params.id} has been deleted`))
    .catch(err => res.send(err));
}



module.exports = router;